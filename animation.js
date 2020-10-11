// document ready (done)
// scss set banner opacity to 0 (done)
// get current scroll value with .scrollTop() (done)
// get current window height when scroll detected (done)
// check scroll value agaisnt window height (done)
// if window height == scroll value => set banner opacity 100, set top nav slideIn (position sticky) (done)
// if window height < scroll value => set everthing back, i.e. banner opacity 0, top nav slideOut (done)
$(document).ready(function(){
    $("#content").scroll(function(){
        let windowHeight = $(window).height() - 20;
        let windowWidth = $(window).width();
        let scrollBarHeight = $("#content").scrollTop();
        if(scrollBarHeight >= windowHeight){
            $("#resumeBanner").css("width","50px");
            if(windowWidth < 450){
                $("#resumeBanner").css("width","35px");
            }
        }
        else{
            $("#resumeBanner").css("width","0px");
        }

        if(scrollBarHeight >= windowHeight - 100){
            $("#resume-navBar").slideDown();
        }
        else{
            $("#resume-navBar").slideUp();
        }
    });
});