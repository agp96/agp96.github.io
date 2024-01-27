
jQuery(document).ready(function() {

	$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
    var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d');
	  
	  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight/2;

    // Redraw everything after resizing the window
    //drawStuff(); 
  }
});

});


