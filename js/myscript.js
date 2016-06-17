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


    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    // function openNav(){
    //   $("#mySidenav").css().width("250px");
    //   $("#mySidenav").css().marginLeft("250px");
    // }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
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
