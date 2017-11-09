if ($(window).width() <= 828) {
        $('#content').addClass('content_mobile');
        $('#content').removeClass('content_desktop');
        $('#contact').hide();
        $('#contact_mobile').show();

    } else {
        $('#content').removeClass('content_mobile');
        $('#content').addClass('content_desktop');
        $('#contact_mobile').hide();
        $('#contact').show();
    }
});

$(window).resize(function () {
    if ($(window).width() <= 828) {
        $('#content').addClass('content_mobile');
        $('#content').removeClass('content_desktop');
        $('#contact').hide();
        $('#contact_mobile').show();

    } else {
        $('#content').removeClass('content_mobile');
        $('#content').addClass('content_desktop');
        $('#contact_mobile').hide();
        $('#contact').show();
    }
});
