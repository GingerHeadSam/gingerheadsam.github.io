<?php
	include 'connection.php';
	
	$runs = $_GET['runs'];
	$balls = $_GET['balls'];
	$sixCounter = $_GET['sixCounter'];
	$fourCounter = $_GET['fourCounter'];
	$oneCounter = $_GET['oneCounter'];
	$missCounter = $_GET['missCounter'];
	$wideCounter = $_GET['wideCounter'];
	$playerOut = $_GET['playerOut'];
	$currentPlayer = "'" . $_GET['currentPlayer'] . "'";
	$innings = $_GET['innings'];
	$gameID = $_GET['gameID'];
	
	echo $currentPlayer;

	$sql = "INSERT INTO scorecard (game, innings, player, six, four, one, miss, wide, playerOut, runs, balls) VALUES ($gameID, $innings, $currentPlayer, $sixCounter, $fourCounter, $oneCounter, $missCounter, $wideCounter, $playerOut, $runs, $balls)";

	echo $sql;

	$result=mysqli_query($connect, $sql);

?>