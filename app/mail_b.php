<?php

// $recepient = "realbeton@yandex.ru, sergsmith2008@yandex.ru";
$recepient = "realbeton@yandex.ru, sergsmith2008@yandex.ru";
$sitename = "РеалБетон";

$subject = "СРОЧНО!!! Заказ БЕТОНА с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Имя: $name \nТелефон: $phone";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");