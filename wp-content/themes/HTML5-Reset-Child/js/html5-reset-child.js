/* html5-reset-child.js */

$(document).ready(function() {
    // Hide or Unhide menu when the responsive toggle is clicked
	$( ".responsive-toggle" ).click(function() {
		$( "ul.nav.nav-pills" ).toggleClass("hidden");
	});
	// Add a toggle button to nested listStyleType
	$("#nav .page_item_has_children>a").append("<button type=\"button\" class=\"btn btn-default btn-sm responsive-toggle pull-right\"><span class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span></button>");
	$( window ).resize(function() {
		if ( $( window ).width() >= 768 ) {
			// remove the hidden class from the nav to unhide the nav
			$( ".nav.nav-pills.hidden" ).removeClass("hidden");
		}
		else {
			// Add hidden class to nav if necessary to hide the menu
			if ( ! $(".nav.nav-pills").hasClass("hidden") ) {
				$(".nav.nav-pills").addClass("hidden")
			}
			
		}
	});
});

