jQuery(document).ready(function(){
	popOpen=true; 
	$('.pop li.pop_menu').click(function(){
		if(popOpen){
		$('.pop').stop().animate({marginTop:'-90'},200,function(){popOpen=false});
		}
	});
	
	/*팝업*/

		$('.popWrap').show();
		$('.popWrap').css('cursor','move').draggable();
		$('.popUpBottom').on('click',function(){			
			$('.popWrap').hide();
		});
		
	
	setInterval(function(){
		$('.slideIcon').animate({top:'-=10'},1000).animate({top:'+=10'},1000)
	});
	
	/*poster*/
	
	var menu=$('.posteBoxWrap .posterBox');
	menu.find('.hover').hide();
	menu.hover(function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		ti.fadeIn(300);
	},function(){
		var tg=$(this);
		var ti=tg.find('.hover');
		ti.fadeOut(300);
		
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 });
