<?php

// $frm_name  = "sergsmith2008@yandex.ru";
// $recepient = "realbeton@yandex.ru, sergsmith2008@yandex.ru";
$recepient = "realbeton@yandex.ru, sergsmith2008@yandex.ru";
$sitename = "РеалБетон";

$subject   = "СРОЧНО!!! ПОЛУЧИ СКИДКУ НА БЕТОН с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);


$message = "Имя: $name <br>
Телефон: $phone <br>
";

mail($recepient, $subject, $message, "From: $recepient <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");



// mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");


// mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");