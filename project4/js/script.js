 jQuery(document).ready(function(){
	 
	/*팝업*/

		$('.popWrap').show();
		$('.popWrap').css('cursor','move').draggable();
		$('.popBottom').on('click',function(){			
			$('.popWrap').hide();
		});
 
 
	var intarval=5000; 
	$('.bannerImg').each(function(){
		var container=$(this);
		function switchImg(){
			var imgs=container.find('img'); 
			var first=imgs.eq(0); 
			var second=imgs.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn(); 
			
		}
		setInterval(switchImg,intarval)
	});
	
$('.newsBoard').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.newsTap a'); 
		var panelDivs=topDiv.find('.newsTabList');
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
$('.contentBox_conNew2').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.tabs a');
		var panelDivs=topDiv.find('div.innBoxConNew2_01');
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
$('.contentBox_con2').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul.sliderBox_con2 a');
		var panelDivs=topDiv.find('div.thumbWrap');
		var lastAnchor;
		var lastPanel;
		anchors.show();
		lastAnchor=anchors.filter('.on');
		lastPanel=$(lastAnchor.attr('href'));
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
	
/*메인슬라이드	*/
	var visual=$('.popVisual>ul.populImg>li') ;
	var button=$('.newsDotWrap>li');
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
		},2000)
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
	$('.newsPop').on({
		mouseover:function(){
			clearInterval(setIntervalId1);
		} 
		,mouseout:function(){
			timer();
		}
	});
	
	
	
	
	
	$('.sliderWrap').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	
	$('.gallertWrap').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	

	});
