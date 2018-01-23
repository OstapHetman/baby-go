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
    jQuery('.showSingle2').click(function() {
        $(".activeted2").removeClass("activeted2");
        jQuery($(this).addClass("activeted2"));
        jQuery('.target2').slideUp();
        jQuery('.target2').hide();
        jQuery('#div' + $(this).attr('target')).css("display", "flex")
    });
    jQuery('.showSingle3').click(function() {
        $(".activeted3").removeClass("activeted3");
        jQuery($(this).addClass("activeted3"));
        jQuery('.target3').slideUp();
        jQuery('.target3').hide();
        jQuery('#div' + $(this).attr('target')).css("display", "flex")
    });
});