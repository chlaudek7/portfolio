 jQuery(document).ready(function(){


 $('.con1Content').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('.con1Tabs>ul.tabs>li>a');
		var panelDivs=topDiv.find('.tapCon1');
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
 $('.con2Content').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('.con2Tabs>ul.tabs>li>a');
		var panelDivs=topDiv.find('.tapCon2');
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
	
	$('.con2_1Con').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('.con2_1Tabs>ul.tabs>li>a');
		var panelDivs=topDiv.find('.tapCon2_1');
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
	$('.con3Content').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('.con3Tabs>ul.tabs>li>a');
		var panelDivs=topDiv.find('.tapCon3');
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



































 
 });
