<?php
/**
 * SchoolHub SA contact / demo form handler for cPanel static hosting.
 * Posts JSON or form-urlencoded fields and emails sales.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = [];
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (stripos($contentType, 'application/json') !== false) {
  $decoded = json_decode($raw, true);
  if (is_array($decoded)) {
    $data = $decoded;
  }
} else {
  $data = $_POST;
}

// Honeypot — bots fill this; humans leave it empty
if (!empty($data['website'])) {
  http_response_code(200);
  echo json_encode(['ok' => true]);
  exit;
}

function clean($value, $max = 2000) {
  $value = trim((string) $value);
  $value = strip_tags($value);
  if (strlen($value) > $max) {
    $value = substr($value, 0, $max);
  }
  return $value;
}

$formType = clean($data['formType'] ?? 'contact', 40);
$name = clean($data['name'] ?? (($data['firstName'] ?? '') . ' ' . ($data['lastName'] ?? '')), 120);
$email = clean($data['email'] ?? '', 160);
$phone = clean($data['phone'] ?? '', 60);
$institution = clean($data['institution'] ?? ($data['institutionName'] ?? ''), 160);
$institutionType = clean($data['institutionType'] ?? '', 80);
$country = clean($data['country'] ?? '', 80);
$learners = clean($data['learners'] ?? '', 40);
$enquiryType = clean($data['enquiryType'] ?? '', 80);
$message = clean($data['message'] ?? '', 4000);

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'A valid email address is required.']);
  exit;
}

if ($name === '' || strlen($name) < 2) {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Please provide your name.']);
  exit;
}

$to = 'sales@cyberdevelopers.co.za';
$isDemo = strtolower($formType) === 'demo';
$subject = $isDemo
  ? 'SchoolHub demo request — ' . ($institution !== '' ? $institution : $name)
  : 'SchoolHub contact — ' . ($enquiryType !== '' ? $enquiryType : $name);

$lines = [
  'Form: ' . ($isDemo ? 'Request a Demo' : 'Contact'),
  'Name: ' . $name,
  'Email: ' . $email,
  'Phone: ' . ($phone !== '' ? $phone : '—'),
  'Institution: ' . ($institution !== '' ? $institution : '—'),
];

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
$lines[] = '';
$lines[] = 'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC';
$lines[] = 'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown');

$body = implode("\n", $lines);

$headers = [
  'From: SchoolHub Website <noreply@schoolhubsa.co.za>',
  'Reply-To: ' . $name . ' <' . $email . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'X-Mailer: SchoolHub-Form-Handler',
];

$sent = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode([
    'ok' => false,
    'error' => 'Unable to send your message right now. Please email sales@cyberdevelopers.co.za or call 087 550 1813.',
  ]);
  exit;
}

http_response_code(200);
echo json_encode(['ok' => true]);
