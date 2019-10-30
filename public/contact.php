<?php

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && is_string($_POST['name']) && is_string($_POST['email']) && is_string($_POST['message'])) {
    $to      = 'youcef.zahariou@gmail.com';
    $subject = 'Mail from ' . $_POST['name'];
    $email =  'Email : ' . $_POST['email'] . ' <br>';
    $message .=  'Message : ' . $_POST['message'];
    $headers = 'MIME-Version: 1.0' . "\r\n" .
        'Content-type: text/html; charset=iso-8859-1' . "\r\n" .
        'From: Web site contact <contact@ibsolutions-dz.com>' . "\r\n" .
        'Reply-To: ' . $_POST['email'] . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    header('Content-Type: application/json');
    echo json_encode(['status' => 'success', "to" => $to, "subject" => $subject, "email" => $email, "message" => $message]);
    // echo json_encode(['status' => 'success']);
} else {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['status' => 'error']);
}
