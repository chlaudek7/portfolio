jQuery(document).ready(function(){
        
    var menu=$('#gnbBottom>li');
    var li=$('#gnbBottom>li>a');
    var wrap=$('#menuBg');
	var menuHeight=menu.children('a').height();
	menu.on({
		mouseover:function(){
			var tg=$(this);
			menu.removeClass('on');
			tg.addClass('on');	
			wrap.show();
			tg.find(li).css('border-bottom','3px solid #fff');
		},
		mouseout:function(){
			var tg=$(this);
			tg.removeClass('on');
			wrap.hide();
			li.css('border-bottom','none')
		}
		
	})
	

























	
		
    });
