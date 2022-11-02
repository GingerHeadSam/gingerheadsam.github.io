<?php

include 'connection.php';

$sql = "SELECT id FROM ringoffire ORDER BY id DESC LIMIT 1";

$result=mysqli_query($connect, $sql);

$gameID;

while ($row = $result->fetch_assoc()) {
		$gameID = $row['id'];
	}

header("Location: hostGame.php?".$gameID);

?>