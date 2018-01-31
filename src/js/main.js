jQuery(function() {
    jQuery('.showSingle').click(function() {
        $(".activeted").removeClass("activeted");
        jQuery($(this).addClass("activeted"));
        jQuery('.target').slideUp();
        jQuery('.target').hide();
        jQuery('#div' + $(this).attr('target')).css("display", "flex")
    });
    jQuery('.showSingle1').click(function() {
        $(".activeted1").removeClass("activeted1");
        jQuery($(this).addClass("activeted1"));
        jQuery('.target1').slideUp();
        jQuery('.target1').hide();
        jQuery('#div' + $(this).attr('target')).css("display", "flex")
    });
    jQuery('.showSingle4').click(function() {
        $(".activeted4").removeClass("activeted4");
        jQuery($(this).addClass("activeted4"));
        jQuery('.target4').slideUp();
        jQuery('.target4').hide();
        jQuery('#div' + $(this).attr('target')).css("display", "flex")
    });
});

// $(document).ready(function() {
//     $('head').append('<link rel="stylesheet" href="css/index.css" type="text/css">');
// });

// ЗАКАЗАТЬ
window.onload = function() {
    var element = document.getElementsByClassName('get'),
        input = document.getElementById('hidden-input');

    for (var i = 0, len = element.length; i < len; i++) {
        element[i].onclick = function() {
            var a = this.getAttribute('data-value');
            input.value = a;
        }
    }



    // ВИДЕО ОКНА

    var videoBtn = document.getElementsByClassName('youtube-block'),
        videoFrame = document.getElementById('video-frame');

    for (var i = 0, len = videoBtn.length; i < len; i++) {
        videoBtn[i].onclick = function() {
            var b = this.getAttribute('data-value');
            videoFrame.src = b;
            console.log('Inserted');
        }
    }
};