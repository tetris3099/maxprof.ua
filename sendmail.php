<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ua' 'phpmailer/language/');
$mail->IsHTML(true);

// От кого письмо
$mail->setFrom('tetris.3.0.99@gmail.com', 'MAXPROF');
// Кому отправить
$mail->addAddres('tankist.pahuist3@gmail.com');
// Тема письма
$mail->Subject = 'По темі ремонту';

// Тело письма
$body.='<p><strong>Тип ремонту:</strong> '.$_POST['typeRepair']'</p>';
$body.= '<p><strong>Тип нерухомості:</strong> '.$POST['realEstate']'</p>';
$body.= '<p><strong>Кількість кімнат:</strong> '.$POST['numberOfRooms']'</p>';
$body.= '<p><strong>Площа:</strong> '.$POST['slider']'</p>';
$body.= '<p><strong>Телефон:</strong> '.$POST['tel']'</p>';

$mail->Body = $body;

// Отправляем
if (!$mail->send()) {
  $message = 'error';
} else {
  $message = 'ok';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>