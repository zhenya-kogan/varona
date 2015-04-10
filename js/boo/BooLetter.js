var BooLetter = function() {
	this.htmlEl = $('<div/>');
};

BooLetter.prototype.setValue = function(val) {

	if (this.value) { return; }

	var sets = Constants.sets;
	var index = getRandomInt(0, sets[val]["values"].length - 1);
	val = sets[val]["values"][index];

	this.htmlEl.text(val);
};

BooLetter.prototype.hardcode = function(val) {
	if (val && val !== " ") {
		this.value = val;
		this.htmlEl.text(val);
		this.setColor("#ff0000");
	}
};

BooLetter.prototype.reset = function() {
	this.value = null;
	this.setColor("#000000");
};

BooLetter.prototype.getValue = function() {
	return this.value;
};

BooLetter.prototype.setStyle = function(params) {

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

BooLetter.prototype.setColor = function(color) {
	this.htmlEl.css({
		"color": color
	});
};

BooLetter.prototype.append = function() {
	$('#letters').append(this.htmlEl);
};

BooLetter.prototype.set = function(self) {
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
		"size": this.value ? 
			getRandomInt(100, 120) :
			getRandomInt(48, maxSize),
		"opacity": getRandomInt(this.value ? 1 : 0, 10) / 10
	});

};

BooLetter.prototype.init = function(repeat) {
	this.append();
	if (repeat) {
		this.start();
	} else {
		this.set();
	}
};

BooLetter.prototype.start = function() {
	var self = this;
	self.interval = window.setInterval(function() { self.set(self) }, getRandomInt(100, 1000));

};

BooLetter.prototype.pause = function() {
	var self = this;
	window.clearInterval(self.interval);
};
