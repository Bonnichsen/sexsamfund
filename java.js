$(window).ready(function () {
    setTimeout(function () {
        $("#scene_earth").fadeIn(1500);
        $("#next_btn").fadeIn(1500);
    }, 1000);
    $(".container_drop").click(function () {
        $(".container_drop").toggleClass("change");
        $(".dropdown").slideToggle();
    });

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
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
