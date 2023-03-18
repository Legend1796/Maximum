<?php
// header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail = isSMTP();
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;    
$mail->Username = 'manukhovigor@gmail.com';
$mail->Password = 'ongqdqjfvqirbehj';
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
$mail->setFrom('manukhovigor@gmail.com');
$mail->addAddress('manukhovigor@gmail.com');
$mail->isHTML(true);
$mail->Subject = 'Заявка на перевозку';
$mail->Body = 'Text body';


$mail->send();

if($mail->send()) {
    echo "Message has been sent!";
}else {
    echo "Message couldn't be sent. Error!!!";
}
// $mail->send();



// $name = isset($_GET['name']) ? $_GET['name'] : null;
// $phone = isset($_GET['phone']) ? $_GET['phone'] : null;
// $email = isset($_GET['email']) ? $_GET['email'] : null;

// $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>phone:</b> '
//         . $phone;

// require 'vendor/autoload.php';

// extract the data from $_POST
// $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;

// if($name && $message && $email){
        // SMTP server configuration
        // $mail->isSMTP();    
        // $mail->CharSet = "UTF-8";                                  // Send using SMTP
        // $mail->setLanguage('ru', 'phpmailer/language/phpmailer.lang-ru.php');
        // $mail->setFrom('manukhovigor@gmail.com', 'React Contact form');
        // $mail->setFrom('mitrodigitalsmtp@gmail.com', 'React Contact form');
            // Адрес, на который отправим письмо
        // $mail->addReplyTo('mitrodigitalsmtp@gmail.com', 'Information');
?>