var BooCell = function(params) {

	params = params || {};

	this.index		= params.index;
	this.coord		= {};
	this.coord.x	= Math.floor(this.index / 10);
	this.coord.y	= this.index % 10;
	this.height		= 100;
	this.width		= 100;
	this.htmlEl		= $('<div/>');
};

BooCell.prototype.setCharValue = function(val) {

	if (this.charValue) { return; }

	var sets = Constants.sets;
	var index = getRandomInt(0, sets[val]["values"].length - 1);
	val = sets[val]["values"][index];

	this.htmlEl.text(val);
};

BooCell.prototype.hardcodeCharValue = function(val) {
	if (val && val !== " ") {
		this.charValue = val;
		this.htmlEl.text(val);
		this.setCharColor("rgba(255, 0, 0, 1)");
	}
};

BooCell.prototype.resetChar = function() {
	this.charValue = null;
	this.setCharColor();
};

BooCell.prototype.getCharValue = function() {
	return this.charValue;
};

BooCell.prototype.setCharStyle = function(params) {

	this.htmlEl.css({
		"line-height": this.height + "px",
		"height": this.height + "px",
		"width": this.width + "px",
		"text-align": "center",
		"float": "left",
		"font-family":	params.family,
		"font-size":	params.size + "px" ,
		//"opacity": params.opacity
	});
	if (!this.charValue) {
		this.setCharColor(params.color);
	}
};

BooCell.prototype.setCharColor = function(color) {
	if (!color) {
		var colorRGB = getRandomInt(0, 255);
		color = "rgba({0}, {0}, {0}, 1)".format(colorRGB);
	}
	this.htmlEl.css({
		"color": color
	});
};

BooCell.prototype.append = function() {
	$('#cells').append(this.htmlEl);
};

BooCell.prototype.setChar = function(self) {
	self = self || this;

	self.setCharValue(currentSetName);
	
	var maxSize;
	if (this.charValue) {
		maxSize = 200;
	} else {
		maxSize = Constants.sets[currentSetName]["maxSize"] || 200;
	}

	self.setCharStyle({
		"family": Constants.fontFamilies[
			getRandomInt(0, Constants.fontFamilies.length - 1)],
		"size": this.charValue ? 
			getRandomInt(100, 120) :
			getRandomInt(48, maxSize)
		//"opacity": getRandomInt(this.charValue ? 1 : 0, 10) / 10
	});

	self.setBackgroundPosition();
	//self.setBackgroundImage("IMG_0058.gif");

};

BooCell.prototype.setBackgroundPosition = function(fileName) {
	
	this.htmlEl.css({
		"background-position": "{0}px {1}px".format(
			- this.width * this.coord.y,
			- this.height * this.coord.x
		),
		"background-size": "{0}px auto".format(
			getRandomInt(990, 1010)
		)
	});
	
};

BooCell.prototype.setBackgroundImage = function(fileNames, self) {

	var self = self || this;
	
	if (!Array.isArray(fileNames)) {
		fileNames = [fileNames];
	}

	self.htmlEl.css({
		"background-image": fileNames[0] === "none" ?
			"none" :
			"url({0})".format(
				Constants.imageFolder + fileNames[0]
			)
	});

	if (fileNames.length > 1) {
		self.imageTimeout = window.setTimeout(function() { self.setBackgroundImage(fileNames.slice(1), self) }, getRandomInt(80,90));
	}
	
};

BooCell.prototype.init = function(repeat) {
	this.append();
	if (repeat) {
		this.start();
	} else {
		this.setChar();
	}
};

BooCell.prototype.start = function() {
	var self = this;
	self.interval = window.setInterval(function() { self.setChar(self) }, getRandomInt(100, 1000));

};

BooCell.prototype.stop = function() {
	var self = this;
	window.clearInterval(self.interval);
};
