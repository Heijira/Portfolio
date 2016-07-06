    //
    //
    // $(document).ready(function() {
    //   $("#tronche").scroll(function(event) {
    //     var page = $(this).attr('href'); // Page cible
    //     var speed = 1000; // Durée de l'animation (en ms)
    //     $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
    //     event.preventDefault(); // Go
    //   });
    // });

    /* Open the sidenav */
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    /* Close/hide the sidenav */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }


  $(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1000; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});


  $(document).ready(function ($) {
      $(window).stellar();
  });
