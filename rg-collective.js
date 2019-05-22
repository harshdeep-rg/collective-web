
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

    $(window).scroll( function(){
    
        // SLIDE UP SECTION HEADER
        /*
        $('.block-hide-overflow h3').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            $(this).addClass("hidden-text-class");
        
            if( bottom_of_window - bottom_of_object >0 ){
                console.log($(this).html());
                $(this).addClass("h3-reveal-animation");
                $(this).removeClass("hidden-text-class"); 
            } 
        }); */

        //ROTATE SMALL MANDALA ON SCROLL
        var theta = $(window).scrollTop() / 200 % Math.PI;
        $('.small-mandala').css({ transform: 'rotate(' + theta + 'rad)' });
    
    });
 });

 