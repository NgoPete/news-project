$(document).ready(function() {
    $(".fa-bars").click(function() {
        $("#sub-menu").slideToggle();
    });
    $(window).resize(function() {
        $("#sub-menu").slideUp();
    });
    $(window).scroll(function() {
        $("#sub-menu").slideUp();
    });
});