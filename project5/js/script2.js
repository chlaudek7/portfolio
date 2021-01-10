jQuery(document).ready(function(){
 */
	bb=true;
	$('.pop li.pop_menu').click(function(){
		if(bb){
		$('.pop').stop().animate({marginTop:0},200,function(){bb=false});
		$(this).find('img').attr('src','images/pop_close.png');
		}else{
		$('.pop').stop().animate({marginTop:-253},200,function(){bb=true});
		$(this).find('img').attr('src','images/pop_open.png');					
		}
	});
	
/*팝업*/
	if($.cookie("pop")!="no")
		$('.pop_wrap').show();
		$('.pop_wrap').css('cursor','move').draggable();
		$('.pop_wrap area:eq(0)').on('click',function(){
			$('.pop_wrap') .fadeOut('fast');
		});
		$('.pop_wrap area:eq(1)').on('click',function(){
			$.cookie("pop",'no',{expires:1}); //쿠키명,쿠키값,만료일
			$('.pop_wrap').fadeOut('fast');
		});
	
		
	
    $('.tabSet').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.tabs a');
		var panelDivs=topDiv.find('div.panel');
		var lastAnchor;
		var lastPanel;
		anchors.show();
		lastAnchor=anchors.filter('.on');
		lastPanel=$(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(event){
			event.preventDefault();
			var currentAnchor=$(this);
			var currentPanel=$(currentAnchor.attr('href'));
			lastAnchor.removeClass('on')
			currentAnchor.addClass('on')
			lastPanel.hide();
			currentPanel.show();
			lastAnchor=currentAnchor;
			lastPanel=currentPanel;
		});
	});
	
/*메인슬라이드*/	
	var visual=$('#brandVisual>ul>li') ;
	var button=$('.buttonList>li');
	var leftBtn=$('.btnImg .prev');
	var rightBtn=$('.btnImg .next');
	var current=0;
	var setIntervalId1;
	 timer();
	function timer(){
		setIntervalId1=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev,0,'-100%');
			pn.removeClass('on');
			current++;
			if(current==visual.size()){current=0}
			var next=visual.eq(current)
			var pnn=button.eq(current)
			move(next,'100%','0%')
			pnn.addClass('on');
		},3000)
	}
	function move(tg,start,end){
		tg.css('left',start).stop().animate({left:end},{duration:500, ease:'easeOutCubic'});		
	}

//버튼을 클릭했을때
	button.on({click:function(){
		var tg=$(this);
		var i=tg.index();
		console.log(i)
		button.removeClass('on');
		tg.addClass('on');
		move1(i)
		return false;
	}})
	
	function move1(i){
		if(current==i) return 
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'},500) 
		nextEl.css({left:'100%'}).stop().animate({left:0},500)
		current=i;
	}
	$('#banner').on({
		mouseover:function(){
			clearInterval(setIntervalId1);
		} 
		,mouseout:function(){
			timer();
		}
	});
	
/*화살표클릭*/
	rightBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move(prev,0,'-100%');
		pn.removeClass('on');
		current++;
		if(current==visual.size())currnet=0;
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move(next,'100%',0);
		pnn.addClass('on');
		return false; 
	})
	leftBtn.click(function(){
		var prev=visual.eq(current);
		var pn=button.eq(current);
		move(prev,0,'-100%');
		pn.removeClass('on');
		current--;
		if(current==-visual.size())currnet=0;
		var next=visual.eq(current);
		var pnn=button.eq(current);
		move(next,'-100%',0);
		pnn.addClass('on');
		return false;
	})
	

/*content1 슬라이드*/
	var slide=$('.slide01 ul');
	var slideList=$('.slide01 ul li');
	var slideListWidth=slideList.width();
	var setIntervalId;
	function left01(){
		$('.slide01 ul>li:last').insertBefore('.slide01 ul>li:first');
		slide.css({left:-slideListWidth}).stop().animate({left:0},500)
	}
	function right01(){
		slide.stop().animate({left:-slideListWidth},500,function(){
			$('.slide01 ul>li:first').insertAfter('.slide01 ul>li:last');
			slide.css({left:0});
		})
	}
	
	$('.content1 .left').click(function(){
		left01();
		return false;
	})
	$('.content1 .right').click(function(){
		right01(); 
		return false;
	})
	mainSlide();
	function mainSlide(){
		setIntervalId=setInterval(function(){
			slide.stop().animate({left:-slideListWidth},500,function(){$('.slide01 ul>li:first').insertAfter('.slide01 ul>li:last');
			slide.css({left:0});
			})
		},500);
	}
	$('.content1 .left, .content1 .right, .content1 .slide01').hover(
	function(){
		clearInterval(setIntervalId);
	},function(){
		mainSlide();
	})
	
	
/*content5 슬라이드*/
	var slide1=$('.partner ul');
	var slideList1=$('.partner ul li');
	var slideListWidth1=slideList1.width();
	var setIntervalId2;
	function left02(){
		$('.partner ul>li:last').insertBefore('.partner ul>li:first');
		slide1.css({left:-slideListWidth1}).stop().animate({left:0},500)
	}
	function right02(){
		slide1.stop().animate({left:-slideListWidth1},500,function(){
			$('.partner ul>li:first').insertAfter('.partner ul>li:last');
			slide1.css({left:0});
		})
	}
	
	$('.content5 .left1').click(function(){
		left02();
		return false;
	})
	$('.content5 .right1').click(function(){
		right02(); 
		return false;
	})
	mainSlide1();
	function mainSlide1(){
		setIntervalId2=setInterval(function(){
			slide1.stop().animate({left:-slideListWidth1},500,function(){$('.partner ul>li:first').insertAfter('.partner ul>li:last');
			slide1.css({left:0});
			})
		},500);
	}
	$('.content5 .left1, .content5 .right1, .content5 .partner').hover(
	function(){
		clearInterval(setIntervalId2);
	},function(){
		mainSlide1();
	})
	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


});