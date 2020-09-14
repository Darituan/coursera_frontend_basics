var lastScrollTop = 0;
$(window).scroll(function(e) {
    let scrollTop = $(window).scrollTop();
    $('.navbar')[scrollTop < lastScrollTop ? 'removeClass' : 'addClass']('display-none');
    lastScrollTop = scrollTop;
});