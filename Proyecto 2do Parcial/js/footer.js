$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#footerFix').fadeIn();
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#footerFixDoc').fadeIn();
        }else {
            $('#footerFixDoc').fadeOut();
        }
    });
});