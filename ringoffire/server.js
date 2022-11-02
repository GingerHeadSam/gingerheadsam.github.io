'use strict';

let http = require('http');
let express = require('express');
let app = express();

let server = http.createServer(app);
let socketio = require('socket.io')
let io = socketio(server);

let waitingPlayer = [];

var playingCards = {"AC":"Waterfall","AD":"Waterfall","AH":"Waterfall","AS":"Waterfall","2C":"You","2D":"You","2H":"You","2S":"You","3C":"Me","3D":"Me","3H":"Me","3S":"Me","4C":"Thumb Master","4D":"Thumb Master","4H":"Thumb Master","4S":"Thumb Master","5C":"Guys","5D":"Guys","5H":"Guys","5S":"Guys","6C":"Chicks","6D":"Chicks","6H":"Chicks","6S":"Chicks","7C":"Heaven","7D":"Heaven","7H":"Heaven","7S":"Heaven","8C":"Mate","8D":"Mate","8H":"Mate","8S":"Mate","9C":"Rhyme","9D":"Rhyme","9H":"Rhyme","9S":"Rhyme","10C":"Categories","10D":"Categories","10H":"Categories","10S":"Categories","JC":"Rule","JD":"Rule","JH":"Rule","JS":"Rule","KC":"Pour/Never Have I Ever","KD":"Waterfall","KH":"Pour/Never Have I Ever","KS":"Pour/Never Have I Ever","QC":"Question Master","QD":"Question Master","QH":"Question Master","QS":"Question Master"};
var valueMax = 51;
var valueMin = 0;
var chosen = [];
var deckSize = 52;
var currentCard = "";

io.on('connection', onConnection);

app.use(express.static(__dirname));

server.listen(8080, () => console.log('ready to work'));

function onConnection(sock) {

	if(waitingPlayer.length == 3) {
		//match starts
		notifyMatchStarts(waitingPlayer[0], waitingPlayer[1], waitingPlayer[2], sock);
		waitingPlayer = [];
	}else {
		waitingPlayer.push(sock);
	}
}

function notifyMatchStarts(sockA, sockB, sockC, sockD){
	[sockA, sockB, sockC, sockD].forEach((sock) => sock.emit('cmd', 'match starts'));
}

