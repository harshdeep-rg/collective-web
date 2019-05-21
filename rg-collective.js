
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
    
        /* Check the location of each desired element */
        $('.block-hide-overflow h3').each( function(i){
            
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            $(this).addClass("hidden-text-class");
        
            if( bottom_of_window - bottom_of_object >0 ){
                console.log($(this).html());
                $(this).addClass("h3-reveal-animation");
                $(this).removeClass("hidden-text-class"); 
            }
            
        }); 

        $('.small-mandala').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window - bottom_of_object >0 ){
                console.log($(this).html());
                $(this).addClass("spin-animation");
                
            }
        }); 
    
    });


 });

 