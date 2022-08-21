<?php
	
	$servername = "127.0.0.1";
	$username = "root";
	$password = "0nlyY0u!";
	$dbname = "iccup";

	$connect = mysqli_connect($servername, $username, $password, $dbname);

	if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
    echo ' not connected';
}

?>