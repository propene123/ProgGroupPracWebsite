$(function(){

	function onPageInfoGotten(data) {
		var pagesHTML = "";
		$.each(data, function(key, page) {
			pagesHTML += "<a class=\"ui card\" href=\"" + page.url + "\">";
			pagesHTML += "<div class=\"image\"><img src=\"" + page.picture + "\"></div>";
			pagesHTML += "<div class=\"content\"><div class=\"header\">" + page.title + "</div><div class=\"meta\">" + page.author + "</div>";
			pagesHTML += "<div class=\"description\">" + page.description + "</div>";
			pagesHTML += "</div></a>";
		});
		$("#pages").html(pagesHTML);
		$("#loader").hide();
	}

	// Get the page info asynchronously.
	getPageInfo(onPageInfoGotten);

});