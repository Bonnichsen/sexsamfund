$(document).ready(function () {
    $(".container_drop").click(function () {
        $(".container_drop").toggleClass("change");
        $(".dropdown").slideToggle();
    });
});

$(window).resize(function () {
    if ($(window).width() <= 828) {
        $('#content').addClass('content_mobile');
        $('#content').removeClass('content_desktop');
        $('#contact_mobile').show();
    } else {
        $('#content').addClass('content_desktop');
        $('#content').removeClass('content_mobile');
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
