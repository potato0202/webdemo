$(document).ready(function () {
    //側邊選單tree
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
    //手機版 漢堡選單
    $(".m-hamburger").click(function () {
		$(this).toggleClass("active");
		$(".m-nav").fadeToggle(300);
	});

    //回頂部   

    // hide #back-top first
	$("#gotop").hide();
	
	// fade in #gotop
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#gotop').fadeIn();
			} else {
				$('#gotop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#gotop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 100);
			return false;
		});
	});


});

// 監聽視窗大小變化  大於1199時，區塊消失
function changeHeight(){
    if (screen.width >= 1199){
    	  //平板手機 選單區塊
          //document.getElementById("menu-mobile").style.display = "none";
          $('.m-hamburger.active').removeClass('active');          
          //平板手機 搜尋區塊
          document.getElementById("m-nav").style.display = "none";
    }
}
window.onload = function(){
    changeHeight();
};
//調整瀏覽器大小時
window.onresize = function(){
    changeHeight();
};