<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X- 
Request-With');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

require 'vendor/autoload.php';

// extract the data from $_POST
$name = isset($_GET['name']) ? $_GET['name'] : null;
$phone = isset($_GET['phone']) ? $_GET['phone'] : null;
$email = isset($_GET['email']) ? $_GET['email'] : null;
// $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;

if($name && $message && $email){

    //Load composer's autoloader

    $mail = new PHPMailer(true);
    try{
        // SMTP server configuration
        $mail->isSMTP();    
        $mail->CharSet = "UTF-8";                                  // Send using SMTP
        $mail->setLanguage('ru', 'phpmailer/language/phpmailer.lang-ru.php');
        $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                             // Enable SMTP authentication
        $mail->Username   = 'manukhovigor@gmail.com';         // SMTP username
        $mail->Password   = 'Yamaha123.';                        // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('manukhovigor@gmail.com', 'React Contact form');
        // $mail->setFrom('mitrodigitalsmtp@gmail.com', 'React Contact form');
        $mail->addAddress('m_igor97@mail.ru');     // Адрес, на который отправим письмо
        $mail->addReplyTo('mitrodigitalsmtp@gmail.com', 'Information');

        // Content
        $mail->isHTML(true);      // Set email format to HTML
        $mail->Subject = 'Заявка на перевозку';
        $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>phone:</b> '
        . $phone;

        if($mail->send())
            echo "Message has been sent!";
    }catch (Exception $e){
        echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
    }
}else{
    echo "All the fileds are required!";
}
?>