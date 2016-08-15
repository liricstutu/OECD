$(function () {
    $(".navbar-nav li").click(function () {
        $(".navbar-nav li").removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(".lang").click(function () {
        $(".lang").removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('#navbar').on('hidden.bs.collapse', function () {
        $('#button-collapse-id').removeClass("opened");
        $('#closed-menu').removeClass("hide");
        $('#opened-menu').addClass("hide");
    });
    $('#navbar').on('shown.bs.collapse', function () {
        $('#button-collapse-id').addClass("opened");
        $('#closed-menu').addClass("hide");
        $('#opened-menu').removeClass("hide");
    });
});