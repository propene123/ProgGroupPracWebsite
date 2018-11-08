var raceBegun = false;
var userBet = 0;

// Race constants.
const distanceInKilometers = 5512.63;
const contenderTimesInHours = [1680.0, 168.0, 0.000000024]; // 10 Weeks (avg 6-12), 1 week, 35MB/s -> 42,000,000 Letters/Hour -> Hour/Letter
const contenderSpeedsInKilometersPerHour = [
	distanceInKilometers/contenderTimesInHours[0],
	distanceInKilometers/contenderTimesInHours[1],
	distanceInKilometers/contenderTimesInHours[2]
];

var currentDistances = [0.0, 0.0, 0.0];
var contenderDone = [false, false, false];
var contenderProgress = [0.0, 0.0, 0.0];

// Where does the race start, and what is the relative vector to the end position?
var startPos = {left: 0, top: 0};
var dPos = {left: 0, top: 0};

// Advance the distance by one second.
function advanceDistance() {
	for (var i = 0; i < currentDistances.length; i++) {
		if (!contenderDone[i]) {
			currentDistances[i] = currentDistances[i] + contenderSpeedsInKilometersPerHour[i] / 3600;
		
			if (currentDistances[i] > distanceInKilometers) {
				contenderDone[i] = true;
				contenderProgress[i] = 1.0;
			}
			else {
				contenderProgress[i] = currentDistances[i] / distanceInKilometers;
			}
		}
	}
}

// Advance the race by one second.
function advanceRace() {
	
	advanceDistance();

	// Calculate the positions for each contender.
	for (var i = 0; i < contenderProgress.length; i++) {
		$(".contender").eq(i).css("left", startPos.left + contenderProgress[i] * dPos.left);
		$(".contender").eq(i).css("top", startPos.top + contenderProgress[i] * dPos.top);
	}
}

// Called when the page loads in.
$(function(){

	$("#bb-countdown").hide();
	$(".contender").hide();

	// Called when the race begins.
	$("#race-begin").click(function(){

		// A "lock" to make sure the user doesn't press the button twice.
		if (!raceBegun) {
			raceBegun = true;

			var checkboxes = $(".ui.radio.checkbox");

			// Figure out which contender the user bet for!
			checkboxes.each(function(index){
				var checked = checkboxes.eq(index).checkbox("is checked");

				if (checked)
					return false; // break out of the loop.

				userBet++;
			});

			// Setup the bb-countdown element to be in the middle of the map.
			var mapPosition = $("#bb-map").position();
			var mapWidth = $("#bb-map").width();
			var mapHeight = $("#bb-map").height();
			var countdownWidth = $("#bb-countdown").width();
			var countdownHeight = $("#bb-countdown").height();

			// Set the race starting position and relative vector.
			startPos.left = mapPosition.left + mapWidth * 0.67;
			startPos.top = mapPosition.top + mapHeight * 0.22;

			var endPos = {left: 0, top: 0};

			endPos.left = mapPosition.left + mapWidth * 0.15;
			endPos.top = mapPosition.top + mapHeight * 0.29;

			dPos.left = endPos.left - startPos.left;
			dPos.top = endPos.top - startPos.top;

			$(".contender").css("left", startPos.left).show();
			$(".contender").css("top", startPos.top).show();

			$("#bb-countdown").css("left", mapPosition.left + (mapWidth - countdownWidth) / 2);
			$("#bb-countdown").css("top", mapPosition.top + (mapHeight - countdownHeight) / 2);

			$("#header-above-map").html("The race is starting!");

			// Take the intro content and animate it away!
			$("#bb-content-1-intro").animate({
				height: "hide"
			}, 1000);

			// Scroll the page so the map and header is in focus.
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#header-above-map").offset().top
			}, 1000);

			// Animate the countdown.
			$("#bb-countdown").delay(1000).fadeIn(900).delay(1000).fadeOut(100).queue(function(){
				$(this).html("2...");
				$(this).dequeue();
			}).fadeIn(900).delay(1000).fadeOut(100).queue(function(){
				$(this).html("1...");
				$(this).dequeue();
			}).fadeIn(900).delay(1000).fadeOut(100).queue(function(){
				$(this).html("Go!");
				$(this).dequeue();
			}).fadeIn(500).fadeOut(500, function(){

				// Called when the countdown animation is complete.
				$("#header-above-map").html("And we're off! Wait... the cable's already finished???");

				// Start the race immediately, and then advance the race every second.
				advanceRace();
				setInterval(advanceRace, 1000);
			});
		}
	});

});
