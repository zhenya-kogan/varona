var currentSetName = "varona";
var currentCharIndex = 0;
var letters = [];
var music = new BooMusic();

setInterval(function() {
	var sets = Constants.sets;
	var setNames = _.keys(sets);
	currentSetName = setNames[getRandomInt(0, setNames.length - 1)]
}, 4000);

$(function() {

	$('#letters').css({
		"width": "1000px",
		"height": "600px",
		"position": "absolute",
		"top": "50%",
		"left": "50%",
		"margin-left": "-500px",
		"margin-top": "-300px"
	});

	$('#instructions').css({
		"display": "none",
		"font-family": "Courier New",
		"font-size": "20px",
		"line-height": "1.5em",
		"margin-top": "20px",
		"text-align": "center"
	});
	
	for (var i = 0; i < 60 ; i++) {
		var l = new BooLetter();
		if (i > 11 && i < 18) {
			l.hardcode(Constants.bandName[i-12]);	
		}
		if (i > 45 && i < 49) {
			l.hardcode(Constants.songName[i-46]);	
		}
		l.init();
		letters[i] = l;
	}
	music.init();
	
	window.onkeydown = function(event) {
		event = event || window.event; //IE does not pass the event object
		
		if (event.keyCode === 8) { // backspace -- erase last typed character

			event.preventDefault();

			if (currentCharIndex > 0) {
				currentCharIndex--;
			}
			letters[currentCharIndex].reset();
			return;

		} else if (event.keyCode === 27) { // escape -- erase all typed characters

			event.preventDefault();

			_.each(letters, function(el) {
				el.reset();
			});

			currentCharIndex = 0;
			return;

		} else if (event.keyCode === 32) { // whitespace -- skip a character

			event.preventDefault();

			if (currentCharIndex < letters.length) {
				currentCharIndex++;
			}

		} else if (event.keyCode === 13) { // enter -- go to next line

			event.preventDefault();

			if (currentCharIndex < letters.length - 10) {
				currentCharIndex = currentCharIndex + 10 - (currentCharIndex % 10);
			}

		} else if ((typeof event.which === "undefined") || ((typeof event.which === "number" && event.which > 0) && (!event.ctrlKey && !event.metaKey && !event.altKey && event.which != 8))) {

			if (currentCharIndex < letters.length) {
				letters[currentCharIndex].hardcode(String.fromCharCode(event.keyCode));
				currentCharIndex++;
			}
				
		}
    }
	
});
