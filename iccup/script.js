//global Variables
var runs = 0;
var balls = 0;
var sixCounter = 0;
var fourCounter = 0;
var oneCounter = 0;
var missCounter = 0;
var wideCounter = 0;
var playerOut = 0;
var p1;
var p2;
var p1TotalRuns = 0;
var p2TotalRuns = 0;
var p1TotalBalls = 0;
var p2TotalBalls = 0;
var currentPlayer;
var gameID;
var innings = 0;

//gameContainer functions
$("#six").click(function(){
	runs = runs + 6;
	balls = balls + 1;
	sixCounter++;
	$("#scoreboardElementBalls").text((balls/6).toFixed(1));
	$("#scoreboardElementRun").text(runs);
	
});

$("#four").click(function(){
	runs = runs + 4;
	balls = balls + 1;
	fourCounter++;
	$("#scoreboardElementRun").text(runs);
	$("#scoreboardElementBalls").text((balls/6).toFixed(1));
});

$("#one").click(function(){
	runs = runs + 1;
	balls = balls + 1;
	oneCounter++;
	$("#scoreboardElementRun").text(runs);
	$("#scoreboardElementBalls").text((balls/6).toFixed(1));
});

$("#miss").click(function(){
	balls = balls + 1;
	missCounter++;
	$("#scoreboardElementBalls").text((balls/6).toFixed(1));
});

$("#wide").click(function(){
	runs = runs + 1;
	balls = balls + 1;
	wideCounter++;
	$("#scoreboardElementRun").text(runs);
	$("#scoreboardElementBalls").text((balls/6).toFixed(1));
});

$("#out").click(function(){

	$("#playerName").text(currentPlayer + ", You're Out!");
	$("#six,#four,#one,#wide,#miss,#out").css("display", "none");
	$("#nextContainer").css('display', 'block');

	if(currentPlayer === p2){
		$("#nextPlayer").text("Next Innings");
	}else{
		$("#nextPlayer").text("Next Player");
	}

	playerOut = 1;
	balls = balls + 1;
	$("#scoreboardElementBalls").text((balls/6).toFixed(1));

	if(currentPlayer === p1){
		p1TotalRuns += runs;
		p1TotalBalls += balls;

		$("#scoreboardElementRun").text(p1TotalRuns);
		$("#scoreboardElementBalls").text((p1TotalBalls/6).toFixed(1));

		innings ++;
		$("#opponentName").text(p2);
		$("#scoreboardOpponentRuns").text(p2TotalRuns);
		if(p2TotalBalls > 0){
			$("#scoreboardOpponentBalls").text((p2TotalBalls/6).toFixed(1));
		}else {
			$("#scoreboardOpponentBalls").text('0');
		}
	}else {
		p2TotalRuns += runs;
		p2TotalBalls += balls;
		$("#scoreboardElementRun").text(p2TotalRuns);
		$("#scoreboardElementBalls").text((p2TotalBalls/6).toFixed(1));
		$("#opponentName").text(p1);
		$("#scoreboardOpponentRuns").text(p1TotalRuns);
		if(p1TotalBalls > 0){
			$("#scoreboardOpponentBalls").text((p1TotalBalls/6).toFixed(1));
		}else {
			$("#scoreboardOpponentBalls").text('0');
		}
		
	}

	$.ajax({
	  url: 'insert.php', //the url that you are sending data to
      type: 'GET', //the method you want to use can change to 'GET'
      dataType: 'text',
      data: {gameID : gameID, innings: innings,runs: runs, balls: balls, sixCounter: sixCounter,
      fourCounter: fourCounter, oneCounter: oneCounter, missCounter: missCounter,
      wideCounter: wideCounter, playerOut: playerOut, currentPlayer: currentPlayer}, //the data you want to send as an object , to receive in on the PHP end you would use $_POST['data']
      //your PHP can send back data using 'echo' can be HTML, JSON, or TEXT
	});
	

});
//start screen functions
$("#startGame").click(function(){
	$("#welcome").css('display', 'none');
	$("#playerSelection").css('display', 'block');
	generateGameId();
})

//playerSelection functions
$("#continueButton").click(function(){


	p1 = $('#player1').html('input:text').val();
	p2 = $('#player2').html('input:text').val();

	if(p1 === '' || p2 === ''){
		$("#playerNameError").css('display', 'block');
	}else{
		$("#gameContainer").css('display', 'block');
		$("#playerSelection").css('display', 'none');
		currentPlayer = p1;
		$("#playerName").text(currentPlayer);
	}
})

//nextContainer functions

$("#nextPlayer").click(function(){ 

	setCurrentPlayer();
	resetGame();
		$("#nextContainer").css('display', 'none');
		$("#six,#four,#one,#wide,#miss,#out").css('display', 'block');
})

$("#endGame").click(function(){ 
	endGame();
})

function resetGame(){
		$("#scoreboardElementRun").text('0');
		$("#scoreboardElementBalls").text('0');
		runs = 0;
		balls = 0;
		sixCounter = 0;
		fourCounter = 0;
		oneCounter = 0;
		wideCounter = 0;
		missCounter = 0;
		playerOut = 0;
}

function setCurrentPlayer(){
	if(currentPlayer === p1){
		currentPlayer = p2;
		$("#playerName").text(currentPlayer);
	}else {
		currentPlayer = p1;
		$("#playerName").text(currentPlayer);
	}
}

function endGame() {
	// $("#scoreboardElementRun").text('0');
	// $("#scoreboardElementBalls").text('0');
	// runs = 0;
	// balls = 0;
	// sixCounter = 0;
	// fourCounter = 0;
	// oneCounter = 0;
	// wideCounter = 0;
	// missCounter = 0;
	// playerOut = 0;
	// gameID = 0;

	// $("#nextContainer").css('display', 'none');
	// $("#six,#four,#one,#wide,#miss,#out").css('display', 'none');
	// $("#scoreboard").css('display','none');
	// $("#welcome").css('display', 'inline');

	location.reload(true);
}

function generateGameId() {

	$.ajax({
	  url: 'checkGameId.php', 
      type: 'GET', 
      dataType: 'text',
      data: {},
      success: function(data) {

      	console.log(data);

      	gameID = data;

      	console.log(gameID);
      }
	});
}