$(window).on("load", function(){
    // Home Section Slide Show
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex)
        .addClass("active");
        if(slideIndex === slideLen-1){
            slideIndex = 0;
        }
        else {
            slideIndex++;
        }
        setTimeout(slideShow,5000);
    }
    slideShow();
})

$(document).ready(function(){
    // Fixed Header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else {
            $(".header").removeClass("fixed");
        }
    })
    // Scrollit function
        $.scrollIt();
})
