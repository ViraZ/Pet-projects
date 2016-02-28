$(function(){
	$('span').hover(
			function(){
			var bgColorList=['green','red','yellow','blue','bleack','white'];
		$(this).stop().animate({'padding-left': '300px'
		}, 'normal');
		$('body').css({'background-color':bgColorList[Math.floor(Math.random()*bgColorList.length)]});
	}, function(){
		$(this).stop().animate({
        'padding-left': '200px'
		}, "normal");
		});
	
});