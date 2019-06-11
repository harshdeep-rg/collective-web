
$(document).ready(function () {
    setTimeout(function() {
        $(".line-one").removeClass("hidden-text-class");
        $(".line-two").removeClass("hidden-text-class");
        $(".line-three").removeClass("hidden-text-class");
    }, 600);

    setTimeout(function() {
        $(".background-image").removeClass("zoom-animation");
    }, 2200);

    $('.background-image').paroller();
    $('.hero-profile-cover-image').paroller();
    $('.featured-classes').paroller();

    var prevScrollpos = window.pageYOffset; // variables used for navbar up-down movement
    $(window).scroll( function(){
        //ROTATE SMALL MANDALA ON SCROLL
        var theta = $(window).scrollTop() / 200 % Math.PI;
        $('.small-mandala').css({ transform: 'rotate(' + theta + 'rad)' });
    
        // NAVBAR PRESENTATIONAL CSS ON SCROLL
        var scroll = $(window).scrollTop();
        if(scroll > 300){
            $(".navbar").css("background-color", "white");
            $(".navbar").css("border-bottom", "1px solid");
            $(".navbar").css("border-color", "rgba(237, 237, 237, 1)");
            $(".nav-anchor").css("color", "#020300");
            $(".user-avatar").css("border-color", "rgba(237, 237, 237, 1)");
            $(".roundglass-collective-logo").css("content", "");
        }
        else{
            $(".navbar").css("background-color", "");
            $(".navbar").css("border-bottom", "none");
            $(".navbar").css("border-color", "rgba(237, 237, 237, 0)");
            $(".nav-anchor").css("color", "white");
            $(".user-avatar").css("border-color", "white");
            $(".roundglass-collective-logo").css("content", "https://res.cloudinary.com/dvq2wjj33/image/upload/v1557835623/logo-white.png");
        }

        // HIDE NAVBAR ON SCROLL DOWN AND REVEAL ON SCROLL UP
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } 
        
        else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;

    });

    $('.collectives-carousel').slick({
        arrows:true,
        draggable:false,
        speed: 2000,
        fade:true,

    });  

 });

 
 