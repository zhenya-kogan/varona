var currentSetName = "varona";
var currentCharIndex = 0;
var cells = [];
setInterval(function() {
	var sets = Constants.sets;
	var setNames = _.keys(sets);
	currentSetName = setNames[getRandomInt(0, setNames.length - 1)]
}, 4000);

$(function() {

	for (var i = 0; i < 600 ; i++) {
		var cell = new BooCell({index: i});
		cell.init();
		cells[i] = cell;
	}
	_.each(cells, function(el) {
		el.start();
	});
	
	// disable typing functionality for now
	window.onkeyup = function(event) {
		event = event || window.event; //IE does not pass the event object
		
		if (event.keyCode === 8) { // backspace -- erase last typed character

			event.preventDefault();

			if (currentCharIndex > 0) {
				currentCharIndex--;
			}
			cells[currentCharIndex].resetChar();
			return;

		} else if (event.keyCode === 27) { // escape -- erase all typed characters

			event.preventDefault();

			_.each(cells, function(el) {
				el.resetChar();
			});

			currentCharIndex = 0;
			return;

		} else if (event.keyCode === 32) { // whitespace -- skip a character

			event.preventDefault();

			if (currentCharIndex < cells.length) {
				currentCharIndex++;
			}

		} else if (event.keyCode === 13) { // enter -- go to next line

			event.preventDefault();

			if (currentCharIndex < cells.length - 28) {
				currentCharIndex = currentCharIndex + 28 - (currentCharIndex % 10);
			}

		} else if ((typeof event.which === "undefined") || ((typeof event.which === "number" && event.which > 0) && (!event.ctrlKey && !event.metaKey && !event.altKey && event.which != 8))) {

				if (currentCharIndex < cells.length) {
					cells[currentCharIndex].hardcodeCharValue(String.fromCharCode(event.keyCode));
					currentCharIndex++;
				}
					
			}
    }
	
});
