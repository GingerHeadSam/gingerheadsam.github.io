<?php

include 'connection.php';

$host = $_GET['username'];
$started = 1;
$ended = 0;

$sql = "INSERT INTO ringoffire (host, started, ended) VALUES ('$host', '$started', '$ended')";

echo $sql;

$result=mysqli_query($connect, $sql);

header("Location: idSearch.php");
?>