var Letter = function() {
	this.htmlEl = $('<div/>');
};

Letter.prototype.setValue = function(val) {

	if (this.value) { return; }

	var sets = Constants.sets;
	var index = getRandomInt(0, sets[val]["values"].length - 1);
	val = sets[val]["values"][index];

	this.htmlEl.text(val);
};

Letter.prototype.hardcode = function(val) {
	this.value = val;
	this.htmlEl.text(val);
	this.setColor("#ff0000");
};

Letter.prototype.reset = function() {
	this.value = null;
	this.setColor("#000000");
};

Letter.prototype.getValue = function() {
	return this.value;
};

Letter.prototype.setStyle = function(params) {

	this.htmlEl.css({
		"line-height": "100px",
		"height": "100px",
		"width": "100px",
		"text-align": "center",
		"float": "left",
		"font-family":	params.family,
		"font-size":	params.size + "px" ,
		"opacity": params.opacity
	});
};

Letter.prototype.setColor = function(color) {
	this.htmlEl.css({
		"color": color
	});
};

Letter.prototype.append = function() {
	$('#letters').append(this.htmlEl);
};

Letter.prototype.set = function(self) {
	self = self || this;

	self.setValue(currentSetName);
	
	var maxSize;
	if (this.value) {
		maxSize = 200;
	} else {
		maxSize = Constants.sets[currentSetName]["maxSize"] || 200;
	}

	self.setStyle({
		"family": Constants.fontFamilies[
			getRandomInt(0, Constants.fontFamilies.length - 1)],
		"size": getRandomInt(48, maxSize),
		"opacity": getRandomInt(0, 10) / 10
	});

};

Letter.prototype.init = function() {
	var self = this;
	this.append();
	window.setInterval(function() { self.set(self) }, getRandomInt(100, 1000));
	//self.set();
};

var currentSetName = "varona";
var currentCharIndex = 0;
var letters = [];

setInterval(function() {
	var sets = Constants.sets;
	var setNames = _.keys(sets);
	currentSetName = setNames[getRandomInt(0, setNames.length - 1)]
}, 4000);

$(function() {

	$('#letters').css({
		"width": "800px",
		"height": "600px",
		"position": "absolute",
		"top": "50%",
		"left": "50%",
		"margin-left": "-400px",
		"margin-top": "-300px"
	});

	$('#instructions').css({
		"font-family": "Courier New",
		"font-size": "20px",
		"line-height": "1.5em",
		"margin-top": "20px",
		"text-align": "center"
	});
	
	for (var i = 0; i < 48 ; i++) {
		letters[i] = new Letter();
		letters[i].init();
	}
	
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

			for (var i = 0; i < 48 ; i++) {
				letters[i].reset();
			}
			currentCharIndex = 0;
			return;

		} else if (event.keyCode === 32) { // whitespace -- skip a character

			event.preventDefault();

			if (currentCharIndex < letters.length) {
				currentCharIndex++;
			}

		} else if (event.keyCode === 13) { // enter -- go to next line

			event.preventDefault();

			if (currentCharIndex < letters.length - 8) {
				currentCharIndex = currentCharIndex + 8 - (currentCharIndex % 8);
			}

		} else if ((typeof event.which === "undefined") || ((typeof event.which === "number" && event.which > 0) && (!event.ctrlKey && !event.metaKey && !event.altKey && event.which != 8))) {

			if (currentCharIndex < letters.length) {
				letters[currentCharIndex].hardcode(String.fromCharCode(event.keyCode));
				currentCharIndex++;
			}
				
		}
    }
	
});
