$(function(){


$("#SearchBox").keyup(function(event){
	if(event.keyCode == 13){
		console.log("enter has been pressed")
		var item = $("#SearchBox").val();
		
		item = encodeURIComponent(item);
		
		location.href = "search.html"+"?searched="+item;
	}
});
});