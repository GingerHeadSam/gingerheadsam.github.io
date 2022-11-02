<?php
	
	$servername = "localhost";
	$username = "btyhlzqg_iccup";
	$password = "P1a2s3o4!";
	$dbname = "btyhlzqg_iccup";

	$connect = mysqli_connect($servername, $username, $password, $dbname);

	if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
    echo ' not connected';
}

?>