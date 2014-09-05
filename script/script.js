new WOW({
    animateClass: 'animated',
    offset: 200
}).init();

$(function() {
    $('.navbar-right').bind('click', 'ul li a', function(event) {
        event.preventDefault();
        $.scrollTo(event.target.hash, 250);
    });
});

$('.nav a').on('click', function() {
    $(".navbar-toggle").click();
});

function modal() {
    $('#myModal').modal();
}