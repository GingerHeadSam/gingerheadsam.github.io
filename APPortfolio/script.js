var viewportWidth;
var viewportHeight;
var marginLeft;

//Gets screen size for setting video widths
function viewportCheck() {
	viewportWidth  = document.documentElement.clientWidth;
	viewportHeight = document.documentElement.clientHeight;
}

//sets element sizes for different screen sizes. Mainly used for orbit on home page.
function setSize() {

	if(viewportWidth < 512){
		$(".video").attr("width", "320");
		$(".video").attr("height", "208");
		marginLeft = (viewportWidth-320)/2;
		$("#videoOrbitContainer").css("margin-left", ""+marginLeft+"px");
		$("#videoOrbit").css("width", "320x");
		$("#videoOrbitContainer").css("width", "320px");
		$("#videoOrbit").css("width", "320px");
		// setting bioContainer margin-top
		$(".bioContainer").css("margin-top", "1rem");
		//setting thumbnailContainer margin-top
		$(".thumbnailContainer").css("margin-top", "1rem");

	}

	if(viewportWidth > 512 && viewportWidth < 880){
		$(".video").attr("width", "512");
		$(".video").attr("height", "289");
		marginLeft = (viewportWidth-512)/2;
		$("#videoOrbitContainer").css("margin-left", ""+marginLeft+"px");
		$("#videoOrbit").css("width", "512px");
		$("#videoOrbitContainer").css("width", "512px");
		$("#videoOrbit").css("width", "512px");
		$(".orbit-previous").css("top", "10%");
		$(".orbit-next").css("top", "10%");

	}

	if(viewportWidth > 880 && viewportWidth < 1600){
		$(".video").attr("width", "720");
		$(".video").attr("height", "406");
		marginLeft = (viewportWidth-720)/2;
		$("#videoOrbitContainer").css("margin-left", ""+marginLeft+"px");
		$("#videoOrbit").css("width", "720px");
		$("#videoOrbitContainer").css("width", "720px");
		$("#videoOrbit").css("width", "720px");
		$(".orbit-previous").css("top", "15%");
		$(".orbit-next").css("top", "15%");

	}

	if(viewportWidth > 1600){
		$(".video").attr("width", "1280");
		$(".video").attr("height", "722");
		marginLeft = (viewportWidth-1280)/2;
		$("#videoOrbitContainer").css("margin-left", ""+marginLeft+"px");
		$("#videoOrbitContainer").css("width", "1280px");
		$("#videoOrbit").css("width", "1280px");
		$(".orbit-previous").css("top", "25%");
		$(".orbit-next").css("top", "25%");
	}

}


//checks made when page loads. 
// Mainly setting backgrounds, video sizes.
$( document ).ready(function() {
	$("#homePage").css("background-image", "url('images/HomePageBackground1.jpg')");
	$("#videosPage").css("background-image", "url('images/DELIVERYstill003.jpg')");
	$("#bioPage").css("background-image", "url('images/BioBackground.jpg')");
	$("#showreelsPage").css("background-image", "url('images/showreel.jpg')");
	$("#contactPage").css("background-image", "url('images/ContactBackground.jpg')");
	viewportCheck();
	setSize();

	// Used when contact form is successful. Displays pop up on home page.
	var x = location.search;
	if(x == "?success"){
		$('.successModal').css("display", "inline-block");
	}

});

// If window is resized (for instance one screen to another), element sizes checked and altered.
$(function() {
	$(window).on('resize', function(e) {
		viewportCheck();
		setSize();
	})
});

//returns background url for script on home page.
function slideNumber() {
	var totalItems = $('li.orbit-slide').length;
	var currentItem = $('li.orbit-slide.is-active').index() + 1;
	var currentSlideBackground;
	switch(currentItem){
		// Dont know why it starts at 3... silly orbit
		case 3: $("body").css("background-image", "url('images/HomePageBackground1.jpg')");
		currentSlideBackground = "images/HomePageBackground1.jpg"
		break;
		case 4: $("body").css("background-image", "url('images/GETMINE1.png')");
			currentSlideBackground = "images/GETMINE1.png"
		break;
		case 5: $("body").css("background-image", "url('images/HomePageBackground5.jpg')");
			currentSlideBackground = "images/GET HomePageBackground5.jpg"
		break;

	}
	return currentSlideBackground;
};

//When video orbit is used on home page, function runs slideNumber()
(function() {
	document.addEventListener("DOMContentLoaded", function() {
		$('[data-orbit]').on('slidechange.zf.orbit', slideNumber);
	});
})();

//sets src of pop out video player on videos page
function popOut(link) {
	var videoLink = $(link).attr('value');
	$(".video").attr('src', videoLink)
};

//if contact form is successful, pop up displayed on home page has a red x. Below is the function behind the button.
$(".successClose").on("click", function() {
	$(".successModal").css("display", "none");
	window.location.replace("index.html");
});

$(".APContactSubmit").on("click", function() {
	alert("I am an alert box!");
});