

/**
  * Hide menu when Esc is pressed.
*/

(function ($) {
  Drupal.behaviors.acme_glue = {
    attach: function (context, settings) {
      // Code to be run on page load, and
      // on ajax load added here

      jQuery(document).keyup(function(e) {
		    if (e.which == 27) {
		        jQuery(".main-menu").hide(); 
		    }
		});

    }
  };


}(jQuery));