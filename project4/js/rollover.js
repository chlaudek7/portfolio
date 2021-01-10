$(function(){
	/*li 하위의 a.rollover 를 순환시키는 each*/
	$('.snsIcon').each(function(){
		/*변수  a에 사용자가 선택한 this 넣음*/
		var a=$(this);
		/*변수 img에 선택된 .rollover 하위 img 담음 */
		var img=a.find('img');
		/*변수 src_off 선택된 요소 하위 img의 src 속성을 담음*/
		var go=img.attr('src');
		/*변수 src_on 변수 src_off의 문자열중 _off, _on 으로 치환*/
		var sns=go.replace('go','sns')
		$('<img/>').attr('src',sns);//이미지 로딩시간이 있기 떄문에 on 이미지를 미리 불러와서 캐시에 저장
		a.hover(function(){
			img.attr('src',sns)
		},function(){
			img.attr('src',go);
		});
	})
	
});