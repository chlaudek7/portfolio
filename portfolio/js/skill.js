jQuery(document).ready(function(){
	
	
       /*ai*/
		var perNum1 = 85;
		$('.container>div.ai').circleProgress({
		value: perNum1/100,
		startAngle:300,
		size:100,
		fill:{
		gradient:["#ff8000","#ffd24c"],
		gradientAngle: Math.PI / 2
		},
		animation:{
		duration:2200,
		easing:"swing"
		},
		lineCap : "butt",
		reverse:true
		
		}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(perNum1 * progress) + '<i>%</i>');
		});
		
       /*photo*/
		var perNum2 = 95;
		$('.container>div.photo').circleProgress({
		value: perNum2/100,
		startAngle:300,
		size:100,
		fill:{
		gradient:["#ff8000","#ffd24c"],
		gradientAngle: Math.PI / 2
		},
		animation:{
		duration:2200,
		easing:"swing"
		},
		lineCap : "butt",
		reverse:true
		
		}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(perNum2 * progress) + '<i>%</i>');
		});
		
       /*html*/
		var perNum3 = 92;
		$('.container>div.html').circleProgress({
		value: perNum3/100,
		startAngle:300,
		size:100,
		fill:{
		gradient:["#ff8000","#ffd24c"],
		gradientAngle: Math.PI / 2
		},
		animation:{
		duration:2200,
		easing:"swing"
		},
		lineCap : "butt",
		reverse:true
		
		}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(perNum3 * progress) + '<i>%</i>');
		});
		
       /*css*/
		var perNum4 = 89;
		$('.container>div.css').circleProgress({
		value: perNum4/100,
		startAngle:300,
		size:100,
		fill:{
		gradient:["#ff8000","#ffd24c"],
		gradientAngle: Math.PI / 2
		},
		animation:{
		duration:2200,
		easing:"swing"
		},
		lineCap : "butt",
		reverse:true
		
		}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(perNum4 * progress) + '<i>%</i>');
		});
		
       /*jq*/
		var perNum5 = 72;
		$('.container>div.jq').circleProgress({
		value: perNum5/100,
		startAngle:300,
		size:100,
		fill:{
		gradient:["#ff8000","#ffd24c"],
		gradientAngle: Math.PI / 2
		},
		animation:{
		duration:2200,
		easing:"swing"
		},
		lineCap : "butt",
		reverse:true
		
		}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(perNum5 * progress) + '<i>%</i>');
		});
			
 

    });