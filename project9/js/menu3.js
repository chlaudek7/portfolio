jQuery(document).ready(function(){
        
    var menu=$('.lnb>li');
    var li=$('.lnb>li>a');
    var wrap=$('.bg');
	var hc=$('.backNo')
	var tit=$('.lnb>li>a.mainTit')
	var menuHeight=menu.children('a').height();
	menu.on({
		mouseover:function(){
			var tg=$(this);
			menu.removeClass('on');
			tg.addClass('on');	
			wrap.show();
			tg.find(li).css('border-bottom','3px solid #f6a3b3');
			tit.css('color','#000;');
			/* hc.addClass('on');	 */
		},
		mouseout:function(){
			var tg=$(this);
			tg.removeClass('on');
			wrap.hide();
			li.css('border-bottom','none')
			/* hc.removeClass('on');	 */
		}
		
	})
	
	
	
    var pop=$('.gnbIcon>.my');
    var aa=$('.gnbIcon>div>a');
    var up=$('.myPop');
	var popHeight=pop.children('a').height();
	pop.on({
		mouseover:function(){
			var tg=$(this);
			up.show();
			tg.find(aa).css('border-bottom','3px solid #f6a3b3');
			/* hc.addClass('on');	 */
		},
		mouseout:function(){
			var tg=$(this);
			up.hide();
			aa.css('border-bottom','none')
			/* hc.removeClass('on');	 */
		}
		
	})
	
	
	
    var pop2=$('.gnbIcon>.shop');
    var aa2=$('.gnbIcon>div>a');
    var up2=$('.shopPop');
	var pop2Height=pop2.children('a').height();
	pop2.on({
		mouseover:function(){
			var tg=$(this);
			up2.show();
			tg.find(aa2).css('border-bottom','3px solid #f6a3b3');
			/* hc.addClass('on');	 */
		},
		mouseout:function(){
			var tg=$(this);
			up2.hide();
			aa2.css('border-bottom','none')
			/* hc.removeClass('on');	 */
		}
		
	})

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
		}else{
			$headerCloneContainer.removeClass('visible');
		}
		
	})
	
	
	


    });