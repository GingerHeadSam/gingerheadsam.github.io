var url = "";
var windowWidth = $(window).width();


//Nav clicks
$("#nameNav").click(function(){
	if (windowWidth > 1000) {
		$("#aboutSection").css('display', 'none');
		$("#resumeSection").css('display', 'none');
		$("#projectSection").css('display', 'none');
		$("#contactSection").css('display', 'none');
		$("#siteIntroSection").css('display', 'block');
		$("#meImage").css('display', 'block');
		$("body").css("overflow-y", "hidden");
		window.location.hash = "Home"
	}
});

$("#homeNav").click(function(){
	$("#aboutSection").css('display', 'none');
	$("#resumeSection").css('display', 'none');
	$("#projectSection").css('display', 'none');
	$("#contactSection").css('display', 'none');
	$("#siteIntroSection").css('display', 'block');
	$("#meImage").css('display', 'block');
	$("body").css("overflow-y", "hidden");
	window.location.hash = "Home"
});

$("#aboutNav").click(function(){
	$("#siteIntroSection").css('display', 'none');
	$("#resumeSection").css('display', 'none');
	$("#projectSection").css('display', 'none');
	$("#contactSection").css('display', 'none');
	$("#meImage").css('display', 'none');
	$("#aboutSection").css('display', 'block');
	$("body").css("overflow-y", "visible");
	window.location.hash = "AboutMe"
});

$("#resumeNav").click(function(){
	$("#siteIntroSection").css('display', 'none');
	$("#aboutSection").css('display', 'none');
	$("#projectSection").css('display', 'none');
	$("#contactSection").css('display', 'none');
	$("#meImage").css('display', 'none');
	$("#resumeSection").css('display', 'block');
	$("body").css("overflow-y", "visible");
	window.location.hash = "Resume"
});

$("#projectsNav").click(function(){
	$("#siteIntroSection").css('display', 'none');
	$("#aboutSection").css('display', 'none');
	$("#resumeSection").css('display', 'none');
	$("#contactSection").css('display', 'none');
	$("#meImage").css('display', 'none');
	$("#projectSection").css('display', 'block');
	$("body").css("overflow-y", "visible");
	window.location.hash = "Projects"
});

$("#contactNav").click(function(){
	$("#siteIntroSection").css('display', 'none');
	$("#aboutSection").css('display', 'none');
	$("#resumeSection").css('display', 'none');
	$("#projectSection").css('display', 'none');
	$("#meImage").css('display', 'none');
	$("#contactSection").css('display', 'block');
	$("body").css("overflow-y", "visible");
	window.location.hash = "Contact&Social"
});

//projects functions
var dissCounter = 0;
$("#diss").click(function(){
	if(dissCounter == 0){
		$("#diss p").css('display', 'block');
		$("#diss").css('border-bottom', '0.1em solid #383946');
		$("#diss span").html("&#x25B2;")
		dissCounter = 1;
	}else {
		$("#diss p").css('display', 'none');
		$("#diss").css('border-bottom', 'none');
		$("#diss span").html("&#x25BC;");
		dissCounter = 0;
	}
});

var iccupCounter = 0;
$("#iccup").click(function(){
	if(iccupCounter == 0){
		$("#iccup p").css('display', 'block');
		$("#iccupOpenButton").css('display', 'block');
		$("#iccup").css('border-bottom', '0.1em solid #383946');
		$("#iccup span").html("&#x25B2;");
		iccupCounter = 1;
	}else {
		$("#iccup p").css('display', 'none');
		$("#iccupOpenButton").css('display', 'none');
		$("#iccup").css('border-bottom', 'none');
		$("#iccup span").html("&#x25BC;");
		iccupCounter = 0;
	}
});

var APCounter = 0;
$("#APPortfolio").click(function(){
	if(APCounter == 0){
		$("#APPortfolio p").css('display', 'block');
		$("#APOpenButton").css('display', 'block');
		$("#APPortfolio").css('border-bottom', '0.1em solid #383946');
		$("#APPortfolio span").html("&#x25B2;");
		APCounter = 1;
	}else {
		$("#APPortfolio p").css('display', 'none');
		$("#APOpenButton").css('display', 'none');
		$("#APPortfolio").css('border-bottom', 'none');
		$("#APPortfolio span").html("&#x25BC;");
		APCounter = 0;
	}
});

var ROFCounter = 0;
$("#ROF").click(function(){
	if(ROFCounter == 0){
		$("#ROF p").css('display', 'block');
		$("#ROFOpenButton").css('display', 'block');
		$("#ROF").css('border-bottom', '0.1em solid #383946');
		$("#ROF span").html("&#x25B2;");
		// if(windowWidth > 1000){
		// 	$("#ROFImage").css('display', 'block');
		// }
		ROFCounter = 1;
	}else {
		$("#ROF p").css('display', 'none');
		$("#ROFOpenButton").css('display', 'none');
		$("#ROF").css('border-bottom', 'none');
		$("#ROF span").html("&#x25BC;");
		// $("#ROFImage").css('display', 'none');
		ROFCounter = 0;
	}
});


$("#iccupOpenButton").click(function(){
	var win = window.open('/iccup/index.html', '_blank');
	if (win) {
    	win.focus();
	} else {
    	alert('Please allow popups for this website');
	}
});

$("#APOpenButton").click(function(){
	var win = window.open('/APPortfolio/index.html', '_blank');
	if (win) {
    	win.focus();
	} else {
    	alert('Please allow popups for this website');
	}
});

$("#ROFOpenButton").click(function(){
	var win = window.open('/ringoffire/index.html', '_blank');
	if (win) {
    	win.focus();
	} else {
    	alert('Please allow popups for this website');
	}
});

$(".projectBox").css("height", $(".projectBox").width());