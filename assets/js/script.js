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

    // Navbar Toggle
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    });

    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    });

    // Hide navbar when clicking outside
    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.header').length) { // Jika target di luar area .header
            $(".header .nav").slideUp(); // Sembunyikan navbar
        }
    });

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
        $.scrollIt({
            topOffset: -50
        });
})
