var value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
var suits = ["C","D","H","S"];
var playingCards = {"AC":"Waterfall","AD":"Waterfall","AH":"Waterfall","AS":"Waterfall","2C":"You","2D":"You","2H":"You","2S":"You","3C":"Me","3D":"Me","3H":"Me","3S":"Me","4C":"Thumb Master","4D":"Thumb Master","4H":"Thumb Master","4S":"Thumb Master","5C":"Guys","5D":"Guys","5H":"Guys","5S":"Guys","6C":"Chicks","6D":"Chicks","6H":"Chicks","6S":"Chicks","7C":"Heaven","7D":"Heaven","7H":"Heaven","7S":"Heaven","8C":"Mate","8D":"Mate","8H":"Mate","8S":"Mate","9C":"Rhyme","9D":"Rhyme","9H":"Rhyme","9S":"Rhyme","10C":"Categories","10D":"Categories","10H":"Categories","10S":"Categories","JC":"Rule","JD":"Rule","JH":"Rule","JS":"Rule","KC":"Pour/Never Have I Ever","KD":"Pour/Never Have I Ever","KH":"Pour/Never Have I Ever","KS":"Pour/Never Have I Ever","QC":"Question Master","QD":"Question Master","QH":"Question Master","QS":"Question Master"};
var valueMax = 51;
var valueMin = 0;
var chosen = [];
var deckSize = 52;
var currentCard = "";

function chooseCard(){
	var cardRand = Math.floor(Math.random() * (valueMax - valueMin + 1) ) + valueMin;	
	currentCard = Object.keys(playingCards)[cardRand]; 
	valueMax = valueMax - 1;
	return currentCard;	
}

function deckCheck(){
	if(chosen.length == deckSize){
		return true;
	}else{
		return false;
	}
}

$("#card").click(function(){
	if($("#ruleBox").css("display") != "block"){
		console.log($("#ruleBox").css("display"))
		if (deckCheck() == true){
			alert("Deck Empty. Game Over");
		}else{
			var card = chooseCard();
			$("#card").attr("src", "images/PNG/"+ card + ".png");
			$("#meaning").empty();
			$("#meaning").append("<p>"+playingCards[card]+"</p>");
			chosen.push(card);
			$("#chosenDisplay").empty();
			for(i = 0; i < chosen.length; i++){
				$("#chosenDisplay").prepend("<img style='width: 9%; height: 21%;' src='images/PNG/"+chosen[i]+".png'>");
			}
			console.log(currentCard);
			if(currentCard.includes("J")){
				$("#ruleBox").css("display", "block");
			}
			delete playingCards[currentCard];
		
		}
	}
	
	
});

$("#inputRule").click(function(){
	var text = $("#ruleText").val();
	if(text.trim()){
		$("#rules").prepend("<p>" + text + "</p>");
		$("#ruleText").val("");
		$("#ruleBox").css("display", "none");
	}
	
});
