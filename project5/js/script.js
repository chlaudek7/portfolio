$(function(){
	var interval=1000; 
	$('.slideshow').each(function(){ 
		var container=$(this); 
		function switchImg(){
			var imgs=container.find('img'); 
			var first=imgs.eq(0); 
			var second=imgs.eq(1); 
			first.fadeOut().appendTo(container);
			second.fadeIn(); 
		}
		setInterval(switchImg,interval) 
	});
});