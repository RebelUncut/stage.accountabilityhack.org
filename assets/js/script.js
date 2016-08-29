$(document).ready(function() {
	$(".faq li p").hide();
	$(".faq li h2").click(function() {
		$(this).siblings("p").toggle();
		$(this).parent().toggleClass("dropped");
	});
});