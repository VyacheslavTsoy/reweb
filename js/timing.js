$(window).mousewheel(function(event, delta) {
    var discr = 30,
        $timingpage = $('#timing_page'),
        $stripe = $('#timing_stripe_inner'),
        widthstep = 110,
        step = 0,
        discrstripe = 10,
        minwidth = 20,
        maxwidth = 919;
    highlite_menu();
    if (delta < 0){
        if($(window).scrollTop() >= ($timingpage.offset().top - 60) && (!($timingpage.hasClass('step-8')))){
            $timingpage.addClass('locked');
            //console.log ('sum');
            step  = Math.floor(($stripe.width() - minwidth) / widthstep);
           // $timingpage.removeClass('step-' + (step+1)).removeClass('step-' + (step-1)).addClass('step-' + step);
            $timingpage.addClass('step-' + step);
            $stripe.css('width',  $stripe.width() + discrstripe + 'px');
            return false;
        }

        else {
            $timingpage.removeClass('locked');
            $(window).scrollTop($(window).scrollTop() - delta * discr);
        }
    } else {

        if($(window).scrollTop() >= ($timingpage.offset().top - 60) && $(window).scrollTop() < ($timingpage.offset().top -20 ) && (!($timingpage.hasClass('step-0') && ($stripe.width() <= minwidth) )) ){
            $timingpage.addClass('locked');
            //console.log ('sub');
            step  = Math.floor(($stripe.width() - minwidth) / widthstep);
            $timingpage.removeClass('step-' + (step+1)).addClass('step-' + step);
            //$timingpage.removeClass('step-' + (step+1)).removeClass('step-' + (step-1)).addClass('step-' + step);
            $stripe.css('width',  $stripe.width() - discrstripe + 'px');
            return false;
        } else {
            $timingpage.removeClass('locked');
            $(window).scrollTop($(window).scrollTop() - delta * discr);
        }

    }

    event.preventDefault();
});

var highlite_menu = function(){

    $('section').each(function(){
        if ($(window).scrollTop() >= ( $(this).offset().top - 160 ) && $(window).scrollTop() < ( $(this).offset().top + 260 )){
            var id = $(this)[0].id,
                $menulia = $('.sf-menu>li>a');
            $('.sf-menu>li').removeClass('current');
            $('.sf-menu>li>a[href="#' + id + '"]').parent().addClass('current');
        }
    })

}