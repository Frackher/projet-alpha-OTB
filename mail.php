<?php
$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$msg = $_POST['msg'];


if (!empty($name) || !empty($email) || !empty($msg)) {
	$to = 'reciving.email@host.com';
	$headers = 'From:' . $email . "\r\n" . "Name: " . $name;
	mail($to, $subject, $msg, $headers);
}
