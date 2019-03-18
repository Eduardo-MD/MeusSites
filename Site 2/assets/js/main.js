// This is what changes body from hidden
(function($) {

  $(".container").fadeIn(1200).css({
      "display": "inline-block",
			"position": "absolute",
			"top": 0,
			"width": "100%",
			"background": "rgba(255, 250, 250, 0.9)",
			"margin": "0 auto",
			"left": 0,
			"right": 0,
   });
   var height = $(".container").height()
   var height2 = $(".container").outerHeight()
   console.log(height)
   console.log(height2)
   $("#main-iframe").css("height", height2 + "px" ).attr("src", "//asdf.us/pepper/shaders/raytrace1/")
})(jQuery);
$(document).ready(function() {
   
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });

});
