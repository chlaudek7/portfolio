/**
*  Jquery floater 레이어를 항상 화면에 떠있거나 따라 다니도록 처리
*
* options
*
*  allwaysTop : true ,  항상 위 false 따라다니도록
*  speed  : 1000  따라다니는 속도
*  bottom : false 항상 하단에
*  default_x : 중앙정렬일때 엘리먼트 옆에 퀵메뉴 붙히기
* 
* @since 2009-10-30
* @author jsyang <yakuyaku@gmail.com>
* @version 1
*
*/
(function($) {

	$.extend($.fn, {
		Floater : function(setting)
		{
			var options = $.extend($.fn.Floater.defaults, setting);
			var box   = this;
			var initTop = options.initTop;
			
			if(options.bottom) {
				bottom_pos = $(window).height() - $(box).height() - initTop;
				$(box).css('top' , bottom_pos);
				initTop = bottom_pos;
			}

			if(options.default_x) {
				box.css('left' , getX($(options.default_x)) );
				if(box.css('display')=='none') box.css('display','block');
				
				$(window).bind('resize', function() {
					box.css('left' , getX($(options.default_x)));
				});

			}

			var prevTop = initTop;

			$(window).bind('scroll', function(e){adjustTop();});

			function getX(el)
			{
				return el.get(0).offsetLeft + el.width();
			};

			function adjustTop()
			{
				var newTop = computeTop();
				if (newTop <= initTop) newTop = initTop;
				if (prevTop != newTop) {
					layerMove(newTop);
					prevTop = newTop;
				}
			};

			function layerMove(dest) 
			{
				if(options.alwaysTop) {
					//var posx=$(window).scrollLeft() + $(window).width() - $(box).width();
					$(box).css({'top': dest});
				}else{
					$(box).stop();
					$(box).animate({'top': dest},{'duration':options.speed});
				}
			};

			function computeTop() 
			{
				return $(window).scrollTop() + initTop;
			};
		}

	});

	$.fn.Floater.defaults = {
		'alwaysTop' : false ,
		'bottom'    : false ,
		'default_x' : false ,
		'initTop'   : 50 , 
		'speed' : 30
	};

})(jQuery);