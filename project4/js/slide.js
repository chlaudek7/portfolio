$(function(){
	$('.galleryButtonGroups li a ').click(function(){
		var strName=($(this).parent().attr('id')); 
		slideTarget(strName.substr(3,1));
		return false;
	})
	function slideTarget(n){
		var pos=Number(n)*-1091; 
		$('.gallertWrap').animate({left:pos},500,'easeInOutQuart');
	
	
	
	}
	
});