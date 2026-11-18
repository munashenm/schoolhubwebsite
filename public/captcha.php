<?php
/**
 * Issues a short-lived arithmetic challenge for the marketing forms.
 * The answer is stored on the server and checked by form-handler.php.
 */
require __DIR__ . '/form-lib.php';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('Access-Control-Allow-Methods: GET, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode(array('ok' => false, 'error' => 'Method not allowed'));
  exit;
}

$dir = sys_get_temp_dir() . '/schoolhub-captcha';
$issued = sh_captcha_issue($dir, time());
echo json_encode(array(
  'ok' => true,
  'id' => $issued['id'],
  'prompt' => $issued['prompt'],
));
