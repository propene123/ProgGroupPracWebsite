var raceBegun = false;

// Called when the page loads in.
$(function(){

	// Called when the race begins.
	$("#race-begin").click(function(){
		if (!raceBegun)
		{
			raceBegun = true;
		}
	});

});