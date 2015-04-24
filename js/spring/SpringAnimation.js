var SpringAnimation = function() {
};

SpringAnimation.prototype.init = function() {

	this.imagesHtmlEl = $("#images")
		.css({
			"width": "400px",
			"margin": "auto",
			"position": "relative"
		});

	this.fileNames = Constants.brushesFileNames;
};

SpringAnimation.prototype.animate = function(self) {
	self = self || this;
	if (!self.fileNames || self.fileNames.length === 0) {
		var outline = $("<div>")
			.css({
				"background-image": "url({0}outline.jpg)".format(Constants.imageFolder),
				"background-size": "400px 600px",
				"display": "none",
				"height": "600px",
				"position": "absolute",
				"width": "400px",
				"z-index": 10
			})
		self.imagesHtmlEl.prepend(outline);
		$("#flower").attr({
			"src": Constants.imageFolder + "broken_flower.png"
		});
		outline.fadeIn(2000);
		return;
	}
	var index = getRandomInt(0, self.fileNames.length - 1);
	var image = $("<div>")
		.addClass("brush")
		.css({
			"background-image": "url({0})".format(self.fileNames[index]),
			"background-size": "400px 600px",
			"height": "600px",
			"position": "absolute",
			"width": "400px",
			"z-index": 100
		});
	self.imagesHtmlEl.append(image);
	self.fileNames.splice(index, 1);
	setTimeout(function() { self.animate(self); }, 500);
};
