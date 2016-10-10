$(function() {
    $('.click').on('click', function() {
        $('.navigation').delay(0).show(0);
        setTimeout(function() {
            $('.navigation').addClass('show-menu');
            $('.navigation-overlay').addClass('show-overlay');
        }, 10);
        return false;
    });

    $('.navigation-overlay, .close-menu').on('click', function() {
        $('.navigation').removeClass('show-menu');
        $('.navigation-overlay').removeClass('show-overlay');
        $('.navigation').delay(350).hide(0);
    });

    if ($('.open-submenu').hasClass('active-submenu')) {
        $('.menu-item').addClass('hide-menu-item');
        $('.active-submenu').parent().find('.submenu').addClass('show-submenu');
    }

    $('.open-submenu').on('click', function() {
        $('.menu-item').addClass('hide-menu-item');
        $(this).parent().find('.submenu').addClass('show-submenu');
    });
    $('.close-submenu').on('click', function() {
        $('.menu-item').removeClass('hide-menu-item');
        $(this).parent().parent().parent().find('.submenu').removeClass('show-submenu');
    });
});