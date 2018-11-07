var inputBox = document.getElementById("SearchBox");
inputBox.addEventListener("keyup", searchBoxEvent(event));

function searchBoxEvent(event){
	if(event.keyCode == 13){
		localStorage.setItem("search", inputBox.value);
		location.href = "search.html"
	}
}

function show(){
	var roryWords = ["robot", "machine", "terminator"];
	var bigBenWords = ["net", "web", "iot"];
	var littleBenWords = ["alexa", "siri", "ok google","assistant"];
	
	var searchedValue = localStorage.getItem("search");
	searchedValue = searchedValue.toLowerCase();
	
	var roryI;
	var roryShow = false;
	var bigBenI;
	var bigBenShow = false;
	var littleBenI;
	var littleBenShow = false;
	
	
	console.log(searchedValue);
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
	
	console.log(roryShow);
	console.log(bigBenShow);
	console.log(littleBenShow);
	
	if (roryShow){
		document.getElementById("roryLink").style.visibility = "visible";
	}
	else{
		document.getElementById("roryLink").style.visibility = "hidden";
	}
	if (bigBenShow){
		document.getElementById("bigBenLink").style.visibility = "visible";
	}
	else{
		document.getElementById("bigBenLink").style.visibility = "hidden";
	}
	if (littleBenShow){
		document.getElementById("littleBenLink").style.visibility = "visible";
	}
	else{
		document.getElementById("littleBenLink").style.visibility = "hidden";
	}
}