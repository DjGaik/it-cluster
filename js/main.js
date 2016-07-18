/* ========================================================================= */
/*	Preloader
/* ========================================================================= */
jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});

/* ========================================================================= */
/*	Hamburger
/* ========================================================================= */
  (function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  })();

/* ========================================================================= */
/*	
/* ========================================================================= */


/* ========================================================================= */
/*	modal window
/* ========================================================================= */
  (function() {
    "use strict";
    $('[data-modal]').on('click', function (e) {
    	e.preventDefault();
    	var modalSelector = $(this).data('modal');

    	$( modalSelector ).toggleClass('opened')

    });
  })();

/* ========================================================================= */
/*	
/* ========================================================================= */


/* ========================================================================= */
/*	WOW Effects
/* ========================================================================= */
var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();