<?php
	include 'connection.php';

	$idCheck = 0;

	$sql = "SELECT * FROM scorecard ORDER BY game ASC" ;

	$result=mysqli_query($connect, $sql);

	while ($row = mysqli_fetch_assoc($result)) {
		$idCheck = $row['game'];
	}

	$idCheck ++;
	echo json_encode($idCheck);
?>