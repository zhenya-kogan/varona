$(document).ready(function () {
    var tlPosition = $(window).width();
    tlPosition = tlPosition * 2;
    $('.tagline').css({'left': tlPosition});
    $('.start').click(function() {
        
        $('.start').fadeOut('fast', function() {
            rotate69();    
        });

    });

    $('.reset').click(function() {
        angle = 0;
        $('.logo').unwrap();
        $('.reset,.browsers').hide();
        $('.tagline').css({'left': tlPosition});
        $('.logoIE9').hide();
        $('.logoRightBlack').hide();
        $('.logoRight').css({
            '-webkit-transform': 'rotate(0)',
            '-moz-transform': 'rotate(0)',
            '-o-transform': 'rotate(0)',
            'left': '0',
            'top': '0'
        });
        $('.start').show();

    });

});

var t69;
var t96;
var angle = 0;

function rotate69() {
    if (angle == -185) {
        $('.logoRight').animate({left: '1px', top: '17px'}, 'fast', function() {
            $('.logoRightBlack').fadeIn('slow', function() {
                $('.logoIE9').fadeIn('slow', function() {
                    $('.tagline').animate({left: '0'}, '1000', function() {
                    
                        $('.reset,.browsers').fadeIn('slow', function() {
                        });
                        $('.logo').wrap('<a class="ie9link" href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home"></a>');
                    });
                });
            });
        });
        clearTimeout(t69);
        return;
    }
    $('.logoRight').css({
        '-webkit-transform': 'rotate('+angle+'deg)',
        '-moz-transform': 'rotate('+angle+'deg)',
        '-o-transform': 'rotate('+angle+'deg)'
    });
    angle = angle-5;
    t69=setTimeout("rotate69()",10);
}

