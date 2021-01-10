 jQuery(document).ready(function(){
	 var option={
		 'speed':500,
		 'initTop':250,
		 'alwayTop':false,
		 'default_x':'#wrap',
		 
	 }
	$('#floatdiv').Floater(option);
        $('#btn01').click(function(){
			$('html,body').animate({scrollTop:$('#main').offset().top},800)
		})
        $('#btn02').click(function(){
			$('html,body').animate({scrollTop:$('#profile').offset().top},800)
		})
        $('#btn03_1').click(function(){
			$('html,body').animate({scrollTop:$('#con1').offset().top},1000)
		})
        $('#btn03').click(function(){
			$('html,body').animate({scrollTop:$('#con1').offset().top},1000)
		})
        $('#btn04').click(function(){
			$('html,body').animate({scrollTop:$('#con2').offset().top},800)
		})
        $('#btn05').click(function(){
			$('html,body').animate({scrollTop:$('#con2_1').offset().top},800)
		})
        $('#btn06').click(function(){
			$('html,body').animate({scrollTop:$('#con3').offset().top},800)
		})
        $('#btn07').click(function(){
			$('html,body').animate({scrollTop:$('#con4').offset().top},800)
		})
        $('#btn08').click(function(){
			$('html,body').animate({scrollTop:$('#con5').offset().top},800)
		})
        $('#btn09').click(function(){
			$('html,body').animate({scrollTop:$('#lastCon').offset().top},800)
			
		});
		
		var menu=$('#menuWrap>ul>li');
		var contents=$('#contents>div');
		var btn=$('#floatdiv ul li');
			
		menu.click(function(e){
			e.preventDefault();
			var tg=$(this);
			var i=tg.index();
			var section = contents.eq(i);
			var tt=section.offset().top;
			$('html,body').stop().animate({scrollTop:tt});
			
		})
		
		$(window).scroll(function(){
			var sct=$(window).scrollTop();
			contents.each(function(){
				var tg=$(this);
				var i=tg.index();
				if(tg.offset().top<=sct){
					menu.removeClass('on');
					menu.eq(i).addClass('on');
					btn.removeClass('active');
					btn.eq(i).addClass('active');
				}
			})
		})
    });
