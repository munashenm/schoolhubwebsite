<?php
/**
 * CLI checks for header safety, rate limiting and the captcha.
 * Run: php tests/form-handler.test.php
 */
require dirname(__DIR__) . '/public/form-lib.php';

$failed = 0;

function expect($cond, $message)
{
  global $failed;
  if ($cond) {
    echo "ok  $message\n";
    return;
  }
  $failed++;
  echo "FAIL $message\n";
}

$poison = "Ada\r\nBcc: victim@example.com";
$safe = sh_header_safe($poison, 80);
expect(strpbrk($safe, "\r\n") === false, 'header_safe strips CR and LF');
expect($safe === 'AdaBcc: victim@example.com', 'header injection collapses into one field value');

$injectedEmail = sh_prepare_mail(array(
  'name' => 'Ada Lovelace',
  'email' => "person@example.com\r\nBcc: evil@example.com",
));
expect(empty($injectedEmail['ok']), 'a newline inside the email is rejected');

$mail = sh_prepare_mail(array(
  'formType' => 'contact',
  'name' => $poison,
  'email' => 'person@example.com',
  'enquiryType' => "Sales\r\nCc: evil@example.com",
  'message' => "Hello\r\nthere",
));
expect(!empty($mail['ok']), 'a poisoned name still produces a single mail');
if (!empty($mail['ok'])) {
  expect(strpbrk($mail['subject'], "\r\n") === false, 'subject has no CR/LF');
  $headerLines = explode("\r\n", $mail['headers']);
  expect(count($headerLines) === 5, 'headers stay at the five expected lines');
  expect(strpos($mail['headers'], 'Bcc:') === false && strpos($mail['headers'], 'Cc:') === false, 'no extra Bcc or Cc header is introduced');
  expect(strpos($mail['headers'], 'Reply-To: person@example.com') !== false, 'Reply-To is the validated email only');
}

$badEmail = sh_prepare_mail(array(
  'name' => 'Ada Lovelace',
  'email' => 'not-an-email',
));
expect(empty($badEmail['ok']) && $badEmail['status'] === 422, 'invalid email is rejected');

$dir = sys_get_temp_dir() . '/schoolhub-test-' . bin2hex(random_bytes(4));
$now = 1_700_000_000;
expect(sh_rate_allow($dir, '203.0.113.8', 2, 3600, $now), 'first submission is allowed');
expect(sh_rate_allow($dir, '203.0.113.8', 2, 3600, $now + 1), 'second submission is allowed');
expect(!sh_rate_allow($dir, '203.0.113.8', 2, 3600, $now + 2), 'third submission inside the window is blocked');
expect(sh_rate_allow($dir, '203.0.113.9', 2, 3600, $now + 2), 'a different address is not blocked');
expect(sh_rate_allow($dir, '203.0.113.8', 2, 3600, $now + 3601), 'the same address is allowed after the window');

$captchaDir = $dir . '/captcha';
$issued = sh_captcha_issue($captchaDir, $now);
expect(preg_match('/^[a-f0-9]{32}$/', $issued['id']) === 1, 'captcha id is a hex token');
expect(preg_match('/^What is (\d+) \+ (\d+)\?$/', $issued['prompt'], $parts) === 1, 'captcha prompt is an addition question');
$answer = (string) ((int) $parts[1] + (int) $parts[2]);
expect(!sh_captcha_check($captchaDir, $issued['id'], $answer, $now + 1), 'captcha submitted too quickly is rejected');

$issued = sh_captcha_issue($captchaDir, $now);
preg_match('/^What is (\d+) \+ (\d+)\?$/', $issued['prompt'], $parts);
$answer = (string) ((int) $parts[1] + (int) $parts[2]);
expect(!sh_captcha_check($captchaDir, $issued['id'], '0', $now + 5), 'wrong captcha answer is rejected');
$issued = sh_captcha_issue($captchaDir, $now);
preg_match('/^What is (\d+) \+ (\d+)\?$/', $issued['prompt'], $parts);
$answer = (string) ((int) $parts[1] + (int) $parts[2]);
expect(sh_captcha_check($captchaDir, $issued['id'], $answer, $now + 5), 'correct captcha answer is accepted');
expect(!sh_captcha_check($captchaDir, $issued['id'], $answer, $now + 6), 'captcha token cannot be reused');
expect(!sh_captcha_check($captchaDir, '../etc/passwd', $answer, $now + 5), 'captcha id cannot be a path');

if ($failed > 0) {
  fwrite(STDERR, "$failed test(s) failed\n");
  exit(1);
}
echo "all form handler tests passed\n";
