function getQueryVariable(variable)
/*
This is not my code, I had copied this code from the URL https://css-tricks.com/snippets/javascript/get-url-variables/
It does what I need to do and I do not know / can not find a better way of doing
I'm a novice at JavaScript, I don't know how to write my own code
*/
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function show(){
	var roryWords = ["robot", "machine", "terminator"];
	var bigBenWords = ["net", "web", "iot"];
	var littleBenWords = ["alexa", "siri","assistant", "ok", "google", "assistants"];
	
	var searchedValue = getQueryVariable("searched").toLowerCase();
	
	var roryI;
	var roryShow = false;
	var bigBenI;
	var bigBenShow = false;
	var littleBenI;
	var littleBenShow = false;
	
	var count = 0;
	
	
	for (roryI=0; roryI<(roryWords.length-1); roryI++){
		if(searchedValue.includes(roryWords[roryI])){
			roryShow = true;
		}
	}
	for (bigBenI=0; bigBenI<(bigBenWords.length-1); bigBenI++){
		if (searchedValue.includes(bigBenWords[bigBenI])){
			bigBenShow = true;
		}
	}
	for (littleBenI=0; littleBenI<(bigBenWords.length-1); littleBenI++){
		if (searchedValue.includes(littleBenWords[littleBenI])){
			littleBenShow = true;
		}
	}

	
	if (roryShow){
		$("#roryLink").show();
		count++;
	}
	else{
		$("#roryLink").hide();
	}
	if (bigBenShow){
		$("#bigBenLink").show();
		count++
	}
	else{
		$("#bigBenLink").hide();
	}
	if (littleBenShow){
		$("#littleBenLink").show();
		count++
	}
	else{
		$("#littleBenLink").hide();
	}
	
	$("#results").html(count + " results found");
}

$(function(){
	show();
});