$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('header-white');
    } else {
        $('header').removeClass('header-white');
    }
});

$(document).ready(function () {
    $('.nav-toggler').click(function () {
        $('.main-nav').toggleClass('nav-active');
    })
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.main-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.main-nav li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}


$(function () {
    var element = $(".line");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animate");
        }

    });
});
