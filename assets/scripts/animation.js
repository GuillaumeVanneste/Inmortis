jQuery(function($) {

    var $animatables = $('.animatable');

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height();


        // Unbind scroll handler if we have no animatables
        /*if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }*/

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top - $animatable.height() + 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            } else if (($animatable.offset().top - $animatable.height() + 20) > offset) {
                $animatable.removeClass('animated').addClass('animatable');
            }
        });
        console.log(offset)
    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);

});