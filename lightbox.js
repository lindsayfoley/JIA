// Desktop - show news assets in lightboxes when clicked
var OverlayManager = {
	
	launch: function(clickedElement) {
		$(clickedElement).click(function(e) {
			e.preventDefault();
			
			var asset = "." + $(this).attr('class');
			$('#black_overlay').show().find(asset).show();
		});		
	},
	
	exit: function() {
		$('#black_overlay').click(function() {
			$('#black_overlay > div').hide();
			$('#black_overlay').hide();			
		});
	}
};

$(document).ready(function() {
	// News page destop assets to launch in a lightbox
	if($(window).width() >= 669) {
		OverlayManager.launch('.rows a');
	};
	
	OverlayManager.launch('#sprites a');
	OverlayManager.exit();
});

