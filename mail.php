<?php
$regexName = '#^\w{6,12}$#';
$regexMail = '#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#';

if ((preg_match($regexName, $_POST['name']) && preg_match($regexMail, $_POST['email'])) && isset($_POST['message'])) {
	$to      = 'corentin.rr.czarnecki@gmail.com';
	$subject = 'Projet Alpha';
	$message = $_POST['message'];
	$headers = 'From: ' . $_POST['name'] . "\r\n" .
		'Reply-To: ' . $_POST['email'] . "\r\n";

	mail($to, $subject, $message, $headers);

	header('Location: index.html');
}
