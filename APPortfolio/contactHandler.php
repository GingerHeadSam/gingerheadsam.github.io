<?php

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];


if(!empty($message) ) {


	$to      = 'arthur.parisi@gmail.com';
	$subject = '(website)From: '.$name;
	$message = $message;
	$headers = 'From:'.$email . "\r\n" .
	'Reply-To:'.$email . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	header('Location: index.html?success');
}else {
	echo "Error: Message Empty. Please try again."; 
	echo "This page will redirect you back to the website";
	header( "refresh:5;url=index.html" );
}	

?>