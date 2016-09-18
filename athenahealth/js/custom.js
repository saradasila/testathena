$(document).ready(function(){
$('.standard').hover(
		function(){
			$(this).find('.caption').show();
		},
		function(){
			$(this).find('.caption').hide();
		}
	);
	$('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250);
		}
	);
	$('.slide').hover(
		function(){
			$(this).find('.caption').slideDown(250);
		},
		function(){
			$(this).find('.caption').slideUp(250);
		}
	);
	
	 $('.carousel').carousel({
      interval: 2000
    });



$("#aboutid").click(function(event){
 event.stopPropagation();
$(".rowss").toggle();

});
});
$(document).on("click", function () {
    $(".rowss").hide();
});