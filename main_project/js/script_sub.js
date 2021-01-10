jQuery(document).ready(function(){
	
	
	
	
	/*메뉴*/
    var menu=$('.lnb>li');
    var li=$('.lnb>li>a');
	var menuHeight=menu.children('a').height();
	menu.on({
		mouseover:function(){
			var tg=$(this);
			menu.removeClass('on');
			tg.addClass('on');	
			tg.css('background-color','rgba(0,0,0,.6)');
		},
		mouseout:function(){
			var tg=$(this);
			tg.removeClass('on');
			tg.css('background-color','transparent');
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
		}else{
			$headerCloneContainer.removeClass('visible');
		}
		
	})
	






    
    });
