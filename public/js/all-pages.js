// Desktop - show news assets in lightboxes when clicked
var OverlayManager = {
	
	launch: function(clickedElement) {
		$(clickedElement).click(function(e) {
			e.preventDefault();
			
			var asset = "div." + $(this).attr('class');
			$('#black_overlay').show();
			$(asset).show();
		});		
	},
	
	exit: function() {
		$('#black_overlay').click(function() {
			$('#black_overlay, #black_overlay > div').hide();
		});
	}
};


var indicateCurrentPage = function() {
	
	var currentPage = window.location.pathname;	
	
	$('nav a').each(function() {
		
		if(currentPage.indexOf($(this).attr("href")) != -1) {
			// So it doesn't hightlight the home page
			if($(this).attr('href').length >= 2) {
				$(this).attr('id', 'current_page');
			} 
		} 
	});
	
};

$(document).ready(function() {
	// News page destop assets to launch in a lightbox
	if($(window).width() >= 669) {
		OverlayManager.launch('.rows a');
	};
	
	OverlayManager.launch('#sprites a');
	OverlayManager.exit();
	indicateCurrentPage();
});

