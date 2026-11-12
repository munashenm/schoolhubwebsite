<?php
/**
 * SchoolHub SA contact / demo form handler for cPanel static hosting.
 * Posts JSON or form-urlencoded fields and emails sales.
 */
require __DIR__ . '/form-lib.php';

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
  echo json_encode(array('ok' => false, 'error' => 'Method not allowed'));
  exit;
}

$raw = file_get_contents('php://input');
$data = array();
$contentType = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '';

if (stripos($contentType, 'application/json') !== false) {
  $decoded = json_decode($raw, true);
  if (is_array($decoded)) {
    $data = $decoded;
  }
} else {
  $data = $_POST;
}

if (!empty($data['website'])) {
  http_response_code(200);
  echo json_encode(array('ok' => true));
  exit;
}

$now = time();
$ip = sh_client_ip();
$rateDir = sys_get_temp_dir() . '/schoolhub-rate';
if (!sh_rate_allow($rateDir, $ip !== '' ? $ip : 'unknown', 5, 3600, $now)) {
  http_response_code(429);
  echo json_encode(array(
    'ok' => false,
    'error' => 'Too many submissions from this network. Please email sales@cyberdevelopers.co.za or try again later.',
  ));
  exit;
}

$captchaDir = sys_get_temp_dir() . '/schoolhub-captcha';
$captchaId = isset($data['captchaId']) ? (string) $data['captchaId'] : '';
$captchaAnswer = isset($data['captchaAnswer']) ? (string) $data['captchaAnswer'] : '';
if (!sh_captcha_check($captchaDir, $captchaId, $captchaAnswer, $now)) {
  http_response_code(422);
  echo json_encode(array(
    'ok' => false,
    'error' => 'The check answer was not accepted. Please request a new question and try again.',
  ));
  exit;
}

$prepared = sh_prepare_mail($data);
if (empty($prepared['ok'])) {
  http_response_code(isset($prepared['status']) ? (int) $prepared['status'] : 422);
  echo json_encode(array('ok' => false, 'error' => $prepared['error']));
  exit;
}

$body = $prepared['body'] . "\n\nSubmitted: " . gmdate('Y-m-d H:i:s') . " UTC\nIP: " . ($ip !== '' ? $ip : 'unknown');
$sent = @mail(
  'sales@cyberdevelopers.co.za',
  '=?UTF-8?B?' . base64_encode($prepared['subject']) . '?=',
  $body,
  $prepared['headers']
);

if (!$sent) {
  http_response_code(500);
  echo json_encode(array(
    'ok' => false,
    'error' => 'Unable to send your message right now. Please email sales@cyberdevelopers.co.za or call 087 550 1813.',
  ));
  exit;
}

http_response_code(200);
echo json_encode(array('ok' => true));
