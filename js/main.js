String.prototype.ft = function() {
    var pattern = /\{\d+\}/g;
    var args = arguments;
    return this.replace(pattern,function(capture){return args[capture.match(/\d+/)];});
}

$(function () { 
    $('.toggleLink').click(function () {
        if (!($(this).is('.active'))) {
            var contentToToggle = $(this).attr('linkto');
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            $('.toggleContent[id="{0}"]'.ft(contentToToggle)).siblings('.active').removeClass('active');
            $('.toggleContent[id="{0}"]'.ft(contentToToggle)).addClass('active');
        }
    });
});
