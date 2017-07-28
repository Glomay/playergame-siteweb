function redimensionnement(){

    var $image = $('img.superbg');
    var image_width = $image.width();
    var image_height = $image.height();

    var over = image_width / image_height;
    var under = image_height / image_width;

    var body_width = $(window).width();
    var body_height = $(window).height();

    if (body_width / body_height >= over) {
        $image.css({
            'width': body_width + 'px',
            'height': Math.ceil(under * body_width) + 'px',
            'left': '0px',
            'top': Math.abs((under * body_width) - body_height) / -2 + 'px'
        });
    }

    else {
        $image.css({
            'width': Math.ceil(over * body_height) + 'px',
            'height': body_height + 'px',
            'top': '0px',
            'left': Math.abs((over * body_height) - body_width) / -2 + 'px'
        });
    }
}

$(document).ready(function(){

    // Au chargement initial   
    redimensionnement();

    // En cas de redimensionnement de la fenêtre
    $(window).resize(function(){
        redimensionnement();
    });

});


/*Scroll on top*/

jQuery(function() {
    jQuery('a.anchor[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/********************************

 back to top button

 ********************************/
var btt = jQuery('.btt');
btt.on('click', function () {
    jQuery('html, body').animate({
        scrollTop:0
    },800, function () {
        btt.fadeOut();
    });
})
jQuery(window).on('scroll', function () {
    var self = jQuery(this),
        height = self.height(),
        top = self.scrollTop();

    if(top > height){
        if(!btt.is(':visible')){
            btt.fadeIn();
        }
    }
})

/*isotope grid*/
$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

/*owl-carouse*/

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})