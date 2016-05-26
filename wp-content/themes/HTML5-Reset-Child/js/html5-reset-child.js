/* html5-reset-child.js */

$(document).ready(function () {
    // Hide or unhide menu when page loads based on window size
    if ($(window).width() >= 861) {
        $(".nav.nav-pills.hidden").removeClass("hidden");
        $('ul.children').removeClass("hidden");
    }
    else {
        $(".nav.nav-pills").addClass("hidden");
        $('ul.children').addClass("hidden");
    }

    // Hide or Unhide menu when the responsive toggle is clicked
    $(".responsive-toggle").click(function () {
        $("ul.nav.nav-pills").toggleClass("hidden");
    });

    // Add a toggle button to nested listStyleType
    $("#nav .page_item_has_children>a").before("<button type=\"button\" class=\"btn btn-default btn-sm nested-responsive-toggle pull-right\"><span class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span></button>");

    // Hide or Unhide menu when the nested toggle is clicked
    /* Notes: glyphicon must change when toggled as well (from up to down) */
    $('.nested-responsive-toggle').click(function () {
        $(this).siblings('ul.children').toggleClass("hidden");
        if ($(this).siblings('ul.children').hasClass("hidden")) {
            $('.glyphicon-up').switchClass('.glyphicon-up', 'glyphicon-down');
        }
    });

    // Hide or unhide menu when window is resized
    $(window).resize(function () {
        if ($(window).width() >= 768) {
            // remove the hidden class from the nav to unhide the nav
            $(".nav.nav-pills.hidden").removeClass("hidden");
            $('ul.children').removeClass("hidden");
        }
        else {
            // Add hidden class to nav if necessary to hide the menu
            if (!$(".nav.nav-pills").hasClass("hidden")) {
                $(".nav.nav-pills").addClass("hidden");
                $('ul.children').addClass("hidden");
            }

        }
    });
});

