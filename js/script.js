var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		window.alert('Well done, you found the next breadcrumb! Our VeggieMates has a question for you! Scroll down and find in the left bottom corner the TikTok icon. No, we are not on TikTok xD. Click on it find the answer to the question, the answer will be the hidden word from LEAFTOKEN.');
	}

};
		

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
