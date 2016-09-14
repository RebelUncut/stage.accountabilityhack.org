$(document).ready(function() {
	$(".faq li p").hide();
	$(".faq li h2").click(function() {
		$(this).siblings("p").toggle();
		$(this).parent().toggleClass("dropped");
	});


	var iframeLink = "https://www.youtube.com/embed/s2J4J4uJjk0";

	$(".modal-trigger").click(function() {
		$(".modal").removeClass("hidden");
		$(".modal iframe").attr("src", iframeLink);
	});

	function hideModal() {
		$(".modal").addClass("hidden");
		$(".modal iframe").attr("src", "");
	}

	$(".modal .page-wipe").click(function(){
		hideModal()
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			hideModal();
		}
	});
});