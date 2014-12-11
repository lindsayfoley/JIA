	var Overlay = {
		showOverlay: function (elementName) {
			
			var element = document.getElementById(elementName);
			document.getElementById(elementName).style.display='block';
			document.getElementById(elementName).style.left=((document.body.clientWidth - element.offsetWidth) / 2);
			document.getElementById('black_overlay').style.display='block'
		},
		
		hideOverlay: function (elementName) {
		
			document.getElementById(elementName).style.display='none';
			document.getElementById('black_overlay').style.display='none'
		}
	};