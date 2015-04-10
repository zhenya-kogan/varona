var BooMusic = function() {
	this.htmlEl = document.createElement('audio');
	this.htmlEl.setAttribute("src", "audio/boo.mp3");
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

BooMusic.prototype.append = function() {
	$('body').append(this.jqEl);
};

BooMusic.prototype.init = function() {
	var self = this;
	this.append();
	this.htmlEl.addEventListener("playing", function() {
		self.startPlayingListener(self);
	});
	this.htmlEl.addEventListener("pause", function() {
		self.pausePlayingListener(self);
	});
	this.htmlEl.addEventListener("timeupdate", function() {
		console.log(this.currentTime);
		lyrics.showLyric(this.currentTime);
	});
};

BooMusic.prototype.startPlayingListener = function(self) {
	console.log('started playing');

	$("#instructions").show();
	_.each(letters, function(el) {
		el.start();
	});
};

BooMusic.prototype.pausePlayingListener = function(self) {
	console.log('paused playing');

	$("#instructions").hide();
	_.each(letters, function(el) {
		el.pause();
	});
};

