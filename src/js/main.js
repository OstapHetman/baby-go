jQuery(function() {
    jQuery('.showSingle').click(function() {
        $(".active").removeClass("active");
        jQuery($(this).addClass("active"));
        jQuery('.target').slideUp();
        jQuery('.target').hide();
        jQuery('#div' + $(this).attr('target')).css("display", "flex")
    });
});