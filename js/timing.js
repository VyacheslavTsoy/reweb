
$(window).mousewheel(function(event, delta) {
    var discr = 30,
        $timingpage = $('#timing_page'),
        $stripe = $('#timing_stripe_inner'),
        widthstep = 110,
        step = 0,
        discrstripe = 10,
        minwidth = 20,
        maxwidth = 914;

    if (delta < 0){
        if($(window).scrollTop() >= ($timingpage.offset().top - 60) && (!($timingpage.hasClass('step-8')))){
            $timingpage.addClass('locked');
            console.log ('sum');
            step  = Math.floor(($stripe.width() - minwidth) / widthstep);
            $timingpage.removeClass('step-' + (step+1)).removeClass('step-' + (step-1)).addClass('step-' + step);
            console.log (Math.floor(step));

            $stripe.css('width',  $stripe.width() + discrstripe + 'px');
            return false;
        }

        else {
            $timingpage.removeClass('locked');
            $(window).scrollTop($(window).scrollTop() - delta * discr);
        }
    } else {

        if($(window).scrollTop() >= ($timingpage.offset().top - 60) && $(window).scrollTop() < ($timingpage.offset().top -20 ) && (!($timingpage.hasClass('step-0') && ($stripe.width() <= minwidth) )) ){
            console.log ('sub');
            step  = Math.floor(($stripe.width() - minwidth) / widthstep);
            console.log (Math.floor(step));
            $timingpage.removeClass('step-' + (step+1)).removeClass('step-' + (step-1)).addClass('step-' + step);
            $stripe.css('width',  $stripe.width() - discrstripe + 'px');
            return false;
        } else {
            $(window).scrollTop($(window).scrollTop() - delta * discr);
        }
       // $(window).scrollTop($(window).scrollTop() - delta * discr);
    }



    event.preventDefault();
});



function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}
function wheel(e,a, b) {
    console.log(2, e);
    preventDefault(e);
}

function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}
function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}