
var sock = io().connect('http://localhost');

sock.on('cmd', gameStart)

function gameStart() {
	$("body").css("background-color", "lightgray");
}


