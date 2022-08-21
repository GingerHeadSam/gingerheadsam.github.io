<?php
	
	include 'connection.php';

	$sql = "SELECT game FROM scorecard ORDER BY id DESC LIMIT 1";

	$result=mysqli_query($connect, $sql);

	$gameID;

	while ($row = $result->fetch_assoc()) {
		$gameID = $row['game'] + 1;
	}

	echo json_encode($gameID);
?>