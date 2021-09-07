let menuOpen = false;
$(".ham").click(function () {
	// toggle menu
	menuOpen = !menuOpen;
	if (menuOpen) {
		$(".ham").addClass("active");
		$(".fullscreen").addClass("open");
	} else {
		$(".ham").removeClass("active");
		$(".fullscreen").removeClass("open");
	}
});