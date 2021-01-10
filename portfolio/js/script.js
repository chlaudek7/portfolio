$(document).ready(function(){
	/*colorbox 플러그인*/
	$('a.gallery').colorbox();
	var option={
		'speed':500, 
		'iniTop':250, 
		'alwayTop':false, 
		'default_x':'#wrap', 
		
	};
	


	/*profile*/
		$(window).scroll(function(){
			var sct=$(window).scrollTop();
			var webstd=$('#profile').offset();
			if(sct>webstd.top-150){ 
				$('.profileContents .Box01').stop().animate({left:'10px'},1000);
				$('.profileContents .Box02').stop().animate({right:'10px'},1000);
			}else{
				$('.profileContents .Box01').stop().animate({left:'-1000px'},1000);
				$('.profileContents .Box02').stop().animate({right:'-1000px'},1000);
				
			}
		});
	
	/*con1New*/
		$(window).scroll(function(){
			var sct=$(window).scrollTop();
			var webstd=$('#con1New').offset();
			if(sct>webstd.top-300){ 
				$('.con1NewWrap .con1NewLeft').stop().animate({left:'10px'},1000);
				$('.con1NewWrap .con1NewCenter').stop().animate({right:'10px'},1000);
			}else{
				$('.con1NewWrap .con1NewLeft').stop().animate({left:'-1000px'},1000);
				$('.con1NewWrap .con1NewCenter').stop().animate({right:'-1000px'},1000);
				
			}
		});
		
	/*con1*/
		$(window).scroll(function(){
			var sct=$(window).scrollTop();
			var webstd=$('#con1').offset();
			if(sct>webstd.top-300){ 
				$('.cons1 .con1Left').stop().animate({left:'10px'},1000);
				$('.cons1 .con1Right').stop().animate({right:'10px'},1000);
			}else{
				$('.cons1 .con1Left').stop().animate({left:'-1000px'},1000);
				$('.cons1 .con1Right').stop().animate({right:'-1000px'},1000);
				
			}
		});

		
		$('.hidden').hover(
		function(){
			var ah=$(this).innerHeight(); 
			var img=$(this).find('img'); 
			var imgh=img.innerHeight(); 
			
			img.stop().animate({top:ah-imgh},6000); 
		}, function(){
			var img=$(this).find('img');
			img.stop().animate({top:0},6000)
		});	
			
	/*con2*/
		$(window).scroll(function(){
			var sct=$(window).scrollTop();
			var webstd=$('#con2').offset();
			if(sct>webstd.top-300){ 
				$('.cons .con2Left').stop().animate({left:'10px'},1000);
				$('.cons .con2Right').stop().animate({right:'10px'},1000);
			}else{
				$('.cons .con2Left').stop().animate({left:'-1000px'},1000);
				$('.cons .con2Right').stop().animate({right:'-1000px'},1000);
				
			}
		});
		
		$('.hidden02').hover(
		function(){
			var ah=$(this).innerHeight(); 
			var img=$(this).find('img'); 
			var imgh=img.innerHeight(); 
			
			img.stop().animate({top:ah-imgh},6000); //500px - 1000px :-500px;
		}, function(){
			var img=$(this).find('img');
			img.stop().animate({top:0},6000)
			
			

	});

		/*con2_1*/
		$(window).scroll(function(){
			var sct=$(window).scrollTop();
			var respon=$('#con2_1').offset();
			if(sct>respon.top-300){ 
				$('.con2_1Con .con2_1Left').stop().animate({left:'10px'},1000);
				$('.con2_1Con .con2_1Right').stop().animate({right:'10px'},1000);
			}else{
				$('.con2_1Con .con2_1Left').stop().animate({left:'-1000px'},1000);
				$('.con2_1Con .con2_1Right').stop().animate({right:'-1000px'},1000);
				
			}
			
		});

		/*con3*/
		$(window).scroll(function(){
			var sct=$(window).scrollTop();
			var webstd=$('#con3').offset();
			if(sct>webstd.top-300){ 
				$('.cons .con3Left').stop().animate({left:'10px'},1000);
				$('.cons .con3Right').stop().animate({right:'10px'},1000);
			}else{
				$('.cons .con3Left').stop().animate({left:'-1000px'},1000);
				$('.cons .con3Right').stop().animate({right:'-1000px'},1000);
				
			}
			
		});
		
		
		$('.hidden03').hover(
		function(){
			var ah=$(this).innerHeight(); 
			var img=$(this).find('img'); 
			var imgh=img.innerHeight(); 
			
			img.stop().animate({top:ah-imgh},6000); 
		}, function(){
			var img=$(this).find('img');
			img.stop().animate({top:0},6000)
			
			

	});
		$('.hidden04').hover(
		function(){
			var ah=$(this).innerHeight(); 
			var img=$(this).find('img'); 
			var imgh=img.innerHeight(); 
			
			img.stop().animate({top:ah-imgh},6000); 
		}, function(){
			var img=$(this).find('img');
			img.stop().animate({top:0},6000)
			
			

	});
		$('.hidden05').hover(
		function(){
			var ah=$(this).innerHeight(); 
			var img=$(this).find('img'); 
			var imgh=img.innerHeight(); 
			
			img.stop().animate({top:ah-imgh},6000);
		}, function(){
			var img=$(this).find('img');
			img.stop().animate({top:0},6000)
			
			

	});

		

	/*con4*/
		
	var menu=$('.designs>.designBox');
	menu.find('.Dhover').hide();
	menu.hover(function(){
		var tg=$(this);
		var ti=tg.find('.Dhover');
		ti.fadeIn(300);
	},function(){
		var tg=$(this);
		var ti=tg.find('.Dhover');
		ti.fadeOut(300);
		
	
	});
	
	/*gallery*/

	$('.Dhover a').lightBox();
	
	
        var path=$('.mainLineTop').find('line');
		path.each(function(i,path){
			var total_length=path.getTotalLength();
			path.style.strokeDasharray=total_length+' '+total_length;
			path.style.strokeDashoffset=total_length;
			$(path).animate({'strokeDashoffset':0},2500)
		});
	
	
	/*pofile text*/
	$('.profileSubTit').typed({
	strings:['"막강한 야구팀들의 공통점을 아시나요?"'],
	typeSpeed:80, 
	backDelay:3000, 
	loop:true 
	 });

	$('.scroll').DB_springMove({
	key:'e24102',
	dir:'y',	 
	mirror:1,	 
	radius:7,	 
	motionSpeed:0.1	 
});
$('.scroll').css('position','fixed').css('top','850px');
	
	
	
	
	/*hobbies slide*/
	
	var current1=0;
	var banner1=$('.img01>div');
	setInterval(function(){
		var prev1=banner1.eq(current1);
		move(prev1,0,'-100%')
		current1++ //1
		if(current1==banner1.size()) current1=0;
		var next1=banner1.eq(current1)//1
		move(next1,'100%','0%')
	},3000) 
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
		
	};
	
	
	var current=0;
	var banner=$('.img02>div');
	setInterval(function(){
		var prev=banner.eq(current);
		move(prev,0,'-100%')
		current++ 
		if(current==banner.size()) current=0;
		var next=banner.eq(current)
		move(next,'100%','0%')
	},3000) 
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
		
	};
	
	
	
		
	  $('.lastTxt').typed({
	strings:['THANK YOU FOR VISITING MY WEBSITE!'],
	typeSpeed:80, 
	backDelay:3000, 
	loop:true 
	 });

	 /*finally*/
	
	$('.one').DB_springMove({
	key:'e24102',
	dir:'y',	 
	mirror:1.2,	 
	radius:7,	 
	motionSpeed:0.1	 
});
	$('.two').DB_springMove({
	key:'e24102',
	dir:'y',	 
	mirror:0.5,	 
	radius:7,	 
	motionSpeed:0.1	 
});
	$('.three').DB_springMove({
	key:'e24102',
	dir:'y',	 
	mirror:1.3,	 
	radius:7,	 
	motionSpeed:0.1	 
});
	$('.four').DB_springMove({
	key:'e24102',
	dir:'y',	 
	mirror:1,	 
	radius:7,	 
	motionSpeed:0.1	 
});

	var box=$('#con5 .con5Content .container2 .storiesBody .contents');
	var col1=0,col2=1,col3=2,col4=3;
	var timer;
	
	timer=setInterval(rolling,3000)
	function rolling(){
		box.eq(col1).css({transform:'scale('+0.9+')','zIndex':0}).stop().animate({left:'10%',top:50,opacity:.5,marginLeft:0},1000)
		box.eq(col2).css({transform:'scale('+0.8+')','zIndex':0}).stop().animate({left:'50%',top:0,opacity:.2,marginLeft:'-11%'},1000)
		box.eq(col3).css({transform:'scale('+0.9+')','zIndex':0}).stop().animate({left:'68%',top:50,opacity:.5,marginLeft:0},1000)
		box.eq(col4).css({transform:'scale('+1+')','zIndex':1}).stop().animate({left:'50%',top:100,opacity:1,marginLeft:'-11%'},1000)
		col1--;
		col2--;
		col3--;
		col4--;
		if(col1<0){col1=3}
		if(col2<0){col2=3}
		if(col3<0){col3=3}
		if(col4<0){col4=3}
	}

		box.hover(function(){
		clearInterval(timer);
		$(this).css('background','rgba(255,255,234,0.3');
	},function(){
		timer=setInterval(rolling,3000);
		$(this).css('background','#fff');
	})

	
	var prev=$('.prev');
	var next=$('.next');

	prev.hover(function(){
		clearInterval(timer);
		$(this).css('background','#efffbf');
	},function(){
		timer=setInterval(rolling,3500);
		$(this).css('background','#fff');
	})
	
	next.hover(function(){
		clearInterval(timer);
		$(this).css('background','#efffbf');
	},function(){
		timer=setInterval(rolling,3500);
		$(this).css('background','#fff');
	})


	next.click(function(){
		box.eq(col1).css({transform:'scale('+0.9+')','zIndex':0}).stop().animate({left:'10%',top:50,opacity:.5,marginLeft:0},1000)
		box.eq(col2).css({transform:'scale('+0.8+')','zIndex':0}).stop().animate({left:'50%',top:0,opacity:.2,marginLeft:'-11%'},1000)
		box.eq(col3).css({transform:'scale('+0.9+')','zIndex':0}).stop().animate({left:'68%',top:50,opacity:.5,marginLeft:0},1000)
		box.eq(col4).css({transform:'scale('+1+')','zIndex':1}).stop().animate({left:'50%',top:100,opacity:1,marginLeft:'-11%'},1000)
		col1--;
		col2--;
		col3--;
		col4--;
		if(col1<0){col1=3}
		if(col2<0){col2=3}
		if(col3<0){col3=3}
		if(col4<0){col4=3}
		return false;
	})


	prev.click(function(){
		box.eq(col3).css({transform:'scale('+0.9+')','zIndex':0}).stop().animate({left:'10%',top:50,opacity:.5,marginLeft:0},1000)
		box.eq(col4).css({transform:'scale('+0.8+')','zIndex':0}).stop().animate({left:'50%',top:0,opacity:.2,marginLeft:'-11%'},1000)
		box.eq(col1).css({transform:'scale('+0.9+')','zIndex':0}).stop().animate({left:'68%',top:50,opacity:.5,marginLeft:0},1000)
		box.eq(col2).css({transform:'scale('+1+')','zIndex':1}).stop().animate({left:'50%',top:100,opacity:1,marginLeft:'-11%'},1000)
		col1++;
		col2++;
		col3++;
		col4++;
		if(col1>3){col1=0}
		if(col2>3){col2=0}
		if(col3>3){col3=0}
		if(col4>3){col4=0}
		return false;
	})

	
			

	
	
	
	
	
	
});


