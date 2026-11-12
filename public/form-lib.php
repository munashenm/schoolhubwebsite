<?php
/**
 * Shared helpers for the SchoolHub marketing form.
 * Included by the public PHP endpoints and by CLI tests. No output on include.
 */

function sh_header_safe($value, $max = 200)
{
  $value = (string) $value;
  $value = str_replace(array("\r", "\n", "\0"), '', $value);
  $value = preg_replace('/%0[ad]/i', '', $value);
  $value = trim(strip_tags($value));
  if (strlen($value) > $max) {
    $value = substr($value, 0, $max);
  }
  return $value;
}

function sh_client_ip()
{
  $ip = isset($_SERVER['REMOTE_ADDR']) ? (string) $_SERVER['REMOTE_ADDR'] : '';
  return sh_header_safe($ip, 64);
}

function sh_ensure_dir($dir)
{
  if (!is_dir($dir)) {
    mkdir($dir, 0700, true);
  }
}

function sh_rate_allow($dir, $key, $limit, $window, $now)
{
  sh_ensure_dir($dir);
  $file = $dir . '/' . hash('sha256', (string) $key) . '.json';
  $hits = array();
  if (is_file($file)) {
    $decoded = json_decode((string) file_get_contents($file), true);
    if (is_array($decoded)) {
      $hits = $decoded;
    }
  }
  $fresh = array();
  foreach ($hits as $hit) {
    if (is_int($hit) && $hit > $now - $window) {
      $fresh[] = $hit;
    }
  }
  if (count($fresh) >= $limit) {
    file_put_contents($file, json_encode($fresh), LOCK_EX);
    return false;
  }
  $fresh[] = (int) $now;
  file_put_contents($file, json_encode($fresh), LOCK_EX);
  return true;
}

function sh_captcha_issue($dir, $now)
{
  sh_ensure_dir($dir);
  $a = random_int(2, 9);
  $b = random_int(2, 9);
  $id = bin2hex(random_bytes(16));
  $record = array(
    'hash' => hash('sha256', (string) ($a + $b)),
    'issued' => (int) $now,
    'exp' => (int) $now + 1800,
  );
  file_put_contents($dir . '/' . $id . '.json', json_encode($record), LOCK_EX);
  return array(
    'id' => $id,
    'prompt' => 'What is ' . $a . ' + ' . $b . '?',
  );
}

function sh_captcha_check($dir, $id, $answer, $now, $minAge = 3)
{
  if (!is_string($id) || !preg_match('/^[a-f0-9]{32}$/', $id)) {
    return false;
  }
  $file = $dir . '/' . $id . '.json';
  if (!is_file($file)) {
    return false;
  }
  $record = json_decode((string) file_get_contents($file), true);
  @unlink($file);
  if (!is_array($record) || empty($record['hash']) || empty($record['issued']) || empty($record['exp'])) {
    return false;
  }
  if ($now < (int) $record['issued'] + $minAge || $now > (int) $record['exp']) {
    return false;
  }
  $given = trim((string) $answer);
  if ($given === '' || !preg_match('/^-?\d+$/', $given)) {
    return false;
  }
  return hash_equals((string) $record['hash'], hash('sha256', (string) (int) $given));
}

/**
 * @return array{ok:true,subject:string,body:string,headers:string}|array{ok:false,error:string,status:int}
 */
function sh_prepare_mail(array $data)
{
  $formType = sh_header_safe(isset($data['formType']) ? $data['formType'] : 'contact', 40);
  $name = sh_header_safe(
    isset($data['name']) ? $data['name'] : trim((isset($data['firstName']) ? $data['firstName'] : '') . ' ' . (isset($data['lastName']) ? $data['lastName'] : '')),
    120
  );
  $email = sh_header_safe(isset($data['email']) ? $data['email'] : '', 160);
  $phone = sh_header_safe(isset($data['phone']) ? $data['phone'] : '', 60);
  $institution = sh_header_safe(
    isset($data['institution']) ? $data['institution'] : (isset($data['institutionName']) ? $data['institutionName'] : ''),
    160
  );
  $institutionType = sh_header_safe(isset($data['institutionType']) ? $data['institutionType'] : '', 80);
  $country = sh_header_safe(isset($data['country']) ? $data['country'] : '', 80);
  $learners = sh_header_safe(isset($data['learners']) ? $data['learners'] : '', 40);
  $enquiryType = sh_header_safe(isset($data['enquiryType']) ? $data['enquiryType'] : '', 80);
  $message = sh_header_safe(isset($data['message']) ? $data['message'] : '', 4000);

  if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    return array('ok' => false, 'status' => 422, 'error' => 'A valid email address is required.');
  }
  if ($name === '' || strlen($name) < 2) {
    return array('ok' => false, 'status' => 422, 'error' => 'Please provide your name.');
  }

  $isDemo = strtolower($formType) === 'demo';
  $subjectSource = $isDemo
    ? ($institution !== '' ? $institution : $name)
    : ($enquiryType !== '' ? $enquiryType : $name);
  $subject = ($isDemo ? 'SchoolHub demo request — ' : 'SchoolHub contact — ') . $subjectSource;

  $lines = array(
    'Form: ' . ($isDemo ? 'Request a Demo' : 'Contact'),
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : '—'),
    'Institution: ' . ($institution !== '' ? $institution : '—'),
  );
  if ($institutionType !== '') {
    $lines[] = 'Institution type: ' . $institutionType;
  }
  if ($country !== '') {
    $lines[] = 'Country: ' . $country;
  }
  if ($learners !== '') {
    $lines[] = 'Learners: ' . $learners;
  }
  if ($enquiryType !== '') {
    $lines[] = 'Enquiry type: ' . $enquiryType;
  }
  $lines[] = '';
  $lines[] = 'Message:';
  $lines[] = $message !== '' ? $message : '—';

  $headers = array(
    'From: SchoolHub Website <noreply@schoolhubsa.co.za>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: SchoolHub-Form-Handler',
  );
  foreach ($headers as $header) {
    if (strpbrk($header, "\r\n") !== false) {
      return array('ok' => false, 'status' => 400, 'error' => 'That submission could not be accepted.');
    }
  }
  if (strpbrk($subject, "\r\n") !== false) {
    return array('ok' => false, 'status' => 400, 'error' => 'That submission could not be accepted.');
  }

  return array(
    'ok' => true,
    'subject' => $subject,
    'body' => implode("\n", $lines),
    'headers' => implode("\r\n", $headers),
    'email' => $email,
  );
}
