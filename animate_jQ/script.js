$(function(){
$('div')
	//.hide(2000)
	//.show(1000);
	//.slideUp(1000)
	//.slideDown(1000);
	//.fadeOut(1000)
	//.fadeIn(1000)
	//.fadeTo(1000, 0.34);
	.animate({"width":700, "height":200},1000,'easeInElastic',
	function(){
	alert('animation complete');
	});



});