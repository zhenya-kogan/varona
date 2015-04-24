var SpringMusic = function() {
	this.htmlEl = document.createElement('audio');
	this.htmlEl.setAttribute("src", "audio/Spring.mp3");
	this.htmlEl.setAttribute("preload", "auto");
	this.htmlEl.setAttribute("controls", "");
	
	this.jqEl = $(this.htmlEl);
	this.jqEl.css({
		"position": "absolute",
		"width": "300px",
		"height": "30px",
		"bottom": "10px",
		"left": "50%",
		"margin-left": "-150px",
		"z-index": 1000
	});
};

SpringMusic.prototype.append = function() {
	$('body').append(this.jqEl);
};

SpringMusic.prototype.init = function() {
	var self = this;
	this.append();
	this.htmlEl.addEventListener("playing", function() {
		self.startPlayingListener(self);
	});
	this.htmlEl.addEventListener("pause", function() {
		self.pausePlayingListener(self);
	});
};

SpringMusic.prototype.startPlayingListener = function(self) {
	console.log('started playing');

	if (!self.started) {
		self.started = true;
		animation.animate();
	}
};

SpringMusic.prototype.pausePlayingListener = function(self) {
	console.log('paused playing');
};

