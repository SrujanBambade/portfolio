// preloader
$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function() {

    // ------- WOW ANIMATED ------ //
    wow = new WOW({
        mobile: false
    });
    wow.init();

    // ------- JQUERY PARALLAX ---- //
    function initParallax() {
        $('#home').parallax("100%", 0.1);
        $('#skills').parallax("100%", 0.3);
        $('#work').parallax("100%", 0.2);
        $('#menu').parallax("100%", 0.3);
        $('#contact').parallax("100%", 0.1);

    }
    initParallax();

    // HIDE MOBILE MENU AFTER CLIKING ON A LINK
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    // NIVO LIGHTBOX
    $('#work a').nivoLightbox({
        effect: 'fadeScale',
    });

});
//FORM VALIDATION
function validateContactForm() {
    var valid = true;

    $(".info").html("");
    $(".form-control").css('color', 'red');
    var userName = $("#name").val();
    var userEmail = $("#email").val();
    var usermessage = $("#message").val();

    if (userName == "") {
        $("#userName-info").html("Required.");
        $("#userName-info").css('color', 'red');
        valid = false;
        alert("Please Enter Name");
    }
    if (userEmail == "") {
        $("#userEmail-info").html("Required.");
        $("#userEmail-info").css('color', 'red ');
        valid = false;
        alert("Please Enter Email");
    }
    if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/)) {
        $("#userEmail-info").html("Invalid Email Address.");
        $("#uuserEmail-info").css('color', 'red ');
        valid = false;
    }
    if (usermessage == "") {
        $("#userMessage-info").html("Required.");
        $("#userMessage-info").css('color', 'red ');
        valid = false;
        alert("Please Write some message!!!");
    }
    return valid;
}

// PROGRESSBAR ANIMATION
(function($) {

    $.fn.ProgressBar = function() {
        var targetParent = $(this);
        targetParent.each(function() {

            //required variables
            var target = $(this).children();
            var offsetTop = $(this).offset().top;
            var winHeight = $(window).height();
            var data_width = target.attr("data-percent") + "%";
            var data_color = target.attr("data-color");

            //animation starts
            if (winHeight > offsetTop) {
                target.css({
                    backgroundColor: data_color,
                });
                target.animate({
                    width: data_width,
                }, 1000);
            }

            //animation with scroll 
            $(window).scroll(function() {
                var scrollBar = $(this).scrollTop();
                var animateStart = offsetTop - winHeight;
                if (scrollBar > animateStart) {
                    target.css({
                        backgroundColor: data_color,
                    });
                    target.animate({
                        width: data_width,
                    }, 1000);
                }
            });
        });

        return this;
    }
})(jQuery)
