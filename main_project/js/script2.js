jQuery(document).ready(function(){
	  /*변수선언*/
	   var header=$('#header');
       var sec1=$ ('#banner');
       var sec2=$ ('#con1'); 
       var sec3=$ ('#con3');
	   var secTop;
	   var secBottom;
	   var sct;
	   var sectionIsMoving=false;
	 	var sec3Ready=$('#con2');
		var sec3Obj=$('#con3 .pic');
		var sec3OffsetTop;
		var sec3Percent;
		var sec3Speed=1000;
		var sec3ThisTop;
		var sec3Start=200;
		var sec3Move;
  
	   /*스크롤시 변할 값 세팅함수*/
	   function setProperty(){
		   sct=$(window).scrollTop();
		   secTop=sec1.offset().top;
		   secBottom=secTop+sec1.height();
			sec3OffsetTop=sec3Ready.offset().top;
			sec3ThisTop=sct-sec3OffsetTop;
			sec3Percent=sec3ThisTop/sec3Speed*100
		   sec3Move=Math.max(sec3Start-sec3Start,Math.min(sec3Start,sec3Start-(sec3Start*(sec3Percent/100))))
	   }

	   /*사진나오는 함수*/
	   function motionSec3(){
		if(sec3Percent>70){
			$('#con3').addClass('active');			
		}else{
			$('#con3').removeClass('active');
		}
		sec3Obj.eq(0).css({transform:'translate(0px,'+sec3Move*1.2+'px)'})
		sec3Obj.eq(1).css({transform:'translate(0px,'+sec3Move*2+'px)'})
		sec3Obj.eq(2).css({transform:'translate(0px,'+sec3Move*3+'px)'})
		sec3Obj.eq(3).css({transform:'translate(0px,'+sec3Move*4+'px)'})
	}
	   /*스크롤할때 호출할 함수*/
	   function moveSection(){
		   setProperty();
		   motionSec3();
		   if(sct>secTop&&sct<secBottom){
			   if(!sectionIsMoving){
				   sectionIsMoving=true;
				   moveStartRender();
			   }
		   }
		   if(sct>=secBottom){
			   activeCheck();
			   
		   }
	   }
	   /*페이지가 아래에서 시작하고 새로고침을 할때 액티브 되야할 요소 처리*/
	   function activeCheck(){
		   sec1.addClass('active');
		   sec2.addClass('active');
	   }
		/*섹션 이동을 처리*/	
		function moveStartRender(){
			if(!header.hasClass('active')){
				header.addClass('active');
				sec1.addClass('active');
				sec2.addClass('active');
				$('html').stop().animate({scrollTop:secBottom+1},500,function(){
					sectionIsMoving=false
				})
				
			}else{
				header.removeClass('active');
				sec1.removeClass('active');
				sec2.removeClass('active');
				$('html').stop().animate({scrollTop:secTop},500,function(){
					sectionIsMoving=false
					})
				
			}
		}
	   $(window).scroll(function(){
		   moveSection();
	   })
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
    });
