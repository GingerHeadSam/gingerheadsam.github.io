<?php

echo "hello world";
include 'connection.php';

$id = $_GET['sessionid'];

$sql = "SELECT * FROM ringoffire WHERE id=3";

echo $sql;

$result=mysqli_query($sql);
echo $result;
echo "done";

//header("Location: gamePage.php?id=".$id."");
?>