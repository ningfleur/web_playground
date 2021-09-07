//navbar scroll滑出以及合併
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;

//     //alert('prevScrollpos:',prevScrollpos,'currentScrollPos:',currentScrollPos)
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("scroll").style.top = "0";
//     } else if (currentScrollPos == '') {
//         document.getElementById("scroll").style.top = "0";
//     } else {
//         document.getElementById("scroll").style.top = "-70px";
//     }
//     prevScrollpos = currentScrollPos;
// }

//漢堡開關
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

//lightbox
$(".lightbox-target").hide();
function lightbox() {
	$(".btn-article .question").on("click", function () {
		$(".lightbox-target").fadeIn(300);
	});
}

//background開關
var width = $(document).width();
if (width <= 768) {
	$(".l-header__hbgmenu__nav").on("click", function () {
		$(".menu_icon").toggleClass("is-active");
		$(".l-header__hbgmenu").toggleClass("is-active");
	});
}

// 首頁 影片
$(document).ready(function() {
	if (width < 769) {
		$(".embed-responsive-item source").attr(
			"src",
			"https://v.cw1.tw/video/2019edu/OP_vedio_m_2.mp4"
		);
	}
	var iPhone =
		navigator.userAgent.match(/iPhone/i) != null ||
		navigator.userAgent.match(/iPod/i) != null;
	var android = navigator.userAgent.match(/android/i) != null;
	var iPad = navigator.userAgent.match(/iPad/i) != null;
	if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
		$("body").addClass("safari");
	}
	if (iPad) {
		iPhone = false;
		android = false;
		$("video.embed-responsive-item").load();
	}
	if (iPhone) {
		iPad = false;
		android = false;
		$("video.embed-responsive-item").load();
		$("video.embed-responsive-item source.mp4").attr(
			"src",
			"https://v.cw1.tw/video/2019edu/OP_vedio_m_2.mp4"
		);
	}
	if (android) {
		iPad = false;
		iPhone = false;
		var video = document.querySelector("video");
		$("video.embed-responsive-item").load();
		$("video.embed-responsive-item").attr(
			"poster",
			"https://web.cw.com.tw/static/anniversary2019/map/img/final-mb.jpg"
		);
		$("video.embed-responsive-item source.mp4").attr(
			"src",
			"https://v.cw1.tw/video/2019edu/OP_vedio_m_2.mp4"
		);
		window.addEventListener("touchstart", function videoStart() {
			video.play();
			this.removeEventListener("touchstart", videoStart);
		});
	}
});
$(document).on('click', '.bg, .lightbox-close', function() {
    $(".lightbox-target").fadeOut();
    return false;
});

//celebrity page 手機板新增slider
// //if ((width < 768)) {
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "block";
// }
// //}
//celebrity page 手機板新增slider end

// //celebrity page 影音報導點擊
// $(".video-card").click(function() {
//     //		player.playVideo();
//     $(".video-img, .video-body").hide();
// });
