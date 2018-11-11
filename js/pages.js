// Get the JSON data from pages.json and convert it into an array of JS objects.
// Output is sent as the 1st argument to the function "out".
function getPageInfo(out)
{
	$.getJSON("js/pages.json", function(data){
		out(data.pages);
	});
}