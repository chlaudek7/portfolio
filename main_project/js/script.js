jQuery(document).ready(function(){
	
	
	
	
	/*메뉴*/
    var menu=$('.lnb>li');
    var li=$('.lnb>li>a');
	var header=$('.headerCon');
	var menuHeight=menu.children('a').height();
	menu.on({
		mouseover:function(){
			var tg=$(this);
			menu.removeClass('on');
			tg.addClass('on');	
		},
		mouseout:function(){
			var tg=$(this);
			tg.removeClass('on');
		}
		
	})
	header.on({
		mouseover:function(){
			var tg=$(this);
			$('.headerCon').css('background-color','rgba(0,0,0,.6)');
		},
		mouseout:function(){
			var tg=$(this);
			$('.headerCon').css('background-color','transparent');
		}
		
	})
	

		

/*스티키 헤더*/

 	var $window=$(window),
	$header=$('.stickyHeader'),
	$headerClone=$header.contents().clone(),
	$headerCloneContainer=$('<div class="stickyHeader-clone"></div>'),
	$threshold=$header.offset().top+$header.outerHeight();
	
	$headerCloneContainer.append($headerClone);
	$headerCloneContainer.appendTo('body');
	$window.scroll(function(){
		if($(this).scrollTop()>=$threshold){
			$headerCloneContainer.addClass('visible');
			$('.stickyInner').css('background-color','rgba(0,0,0,.6)');
		}else{
			$headerCloneContainer.removeClass('visible');
		}
		
	})
	


/*질문 아코디언*/
		$('.answer').hide();
		$('div.question').click(function(e){
			e.preventDefault;
			if($(this).next().css('display')=='none'){$('.answer').slideUp('fast');}
			$(this).next().slideDown('fast');
			
		})


/*con2 슬라이드*/
 	 var current=0;
	var banner=$('.bannerImgSlideWrap img');
	setInterval(function(){
		var prev=banner.eq(current);
		move(prev,0,'-100%')
		current++ //1
		if(current==banner.size()) current=0;
		var next=banner.eq(current)//1
		move(next,'100%','0%')
	},5000) 
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:900,ease:'easeOutCubic'})
		
		}
 

/*후기 슬라이더*/
	 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay:6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


/*메인 배너 스프링*/
		$('.com').DB_springMove({
			key:'e24102',
			dir:'y',	 
			mirror:1,	 
			radius:10,	
			motionSpeed:0.08 
		})
		$('.daiary').DB_springMove({
			key:'e24102',
			dir:'y',	 
			mirror:1,	 
			radius:10,	
			motionSpeed:0.08	
		})
		$('.mouse').DB_springMove({
			key:'e24102',
			dir:'y',	 
			mirror:1,	 
			radius:10,	 
			motionSpeed:0.08	 
		})
		$('.yellow').DB_springMove({
			key:'e24102',
			dir:'y',	 
			mirror:1,	 
			radius:10,	 
			motionSpeed:0.08
		})
		$('.orenge').DB_springMove({
			key:'e24102',
			dir:'y',	 
			mirror:1,	 
			radius:10,	 
			motionSpeed:0.08
		})
		$('.airplain').DB_springMove({
			key:'e24102',
			dir:'y',	 
			mirror:1,	 
			radius:10,	 
			motionSpeed:0.08 
		})
		$('.music').DB_springMove({
			key:'e24102',
			dir:'y',	 
			mirror:1,	 
			radius:10,	 
			motionSpeed:0.08	 
		})

/*제주 이곳저곳 호버*/

	var photo=$('.photoWrap .photoBox');
	photo.find('.Dhover').hide();
	photo.hover(function(){
		var tg=$(this);
		var ti=tg.find('.Dhover');
		ti.fadeIn(300);
	},function(){
		var tg=$(this);
		var ti=tg.find('.Dhover');
		ti.fadeOut(300);
		
})
	







    
    });
