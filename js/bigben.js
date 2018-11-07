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


// Called when the page loads in.
$(function(){

	// Called when the race begins.
	$("#race-begin").click(function(){

		// A "lock" to make sure the user doesn't press the button twice.
		if (!raceBegun)
		{
			raceBegun = true;

			var checkboxes = $(".ui.radio.checkbox");

			// Figure out which contender the user bet for!
			checkboxes.each(function(index){
				var checked = checkboxes.eq(index).checkbox("is checked");

				if (checked)
					return false; // break out of the loop.

				userBet++;
			});

			// Take the intro content and animate it away!
			$("#bb-content-1-intro").animate({
				height: "hide"
			}, 1000);

			// Scroll the page so the map and header is in focus.
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#header-above-map").offset().top
			}, 1000);
		}
	});

});