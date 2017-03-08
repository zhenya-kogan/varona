var BooLyrics = function() {
	this.remainingLyrics = Constants.lyrics.slice(0);
};

BooLyrics.prototype.init = function() {
};

BooLyrics.prototype.showLyric = function(currentTime) {
	
	var self = this;
	self.currentTime = currentTime;

	self.remainingLyrics.every(function(lyric, index) {
		if (lyric.time <= self.currentTime) {
			// found object to display
			if (typeof lyric.word === "string") {
				// it's a lyric
				var charIndex = lyric.firstCharIndex || 0;
				if (charIndex < 10 || lyric.fileName) {
					_.each(cells, function(el) {
						if (charIndex < 10) {
							el.resetChar();
						}
						if (lyric.fileName) {
							el.setBackgroundImage(lyric.fileName);
						}
						if (lyric.resetBackgroundColor) {
							el.setBackgroundColor(null);
						}
						if (lyric.backgroundColor) {
							el.setBackgroundColor(lyric.backgroundColor);
						}
						if (lyric.colorChars) {
							self.colorChars = true;
						} else if (lyric.blackChars) {
							self.colorChars = false;
						}
					});
				}
				for (var i = charIndex; i < charIndex + lyric.word.length; i++) {
					cells[i].hardcodeCharValue(lyric.word[i - charIndex]);
				}
			}
			self.remainingLyrics = self.remainingLyrics.slice(index + 1);
		}
		//console.log(lyric.time, self.currentTime);
		return lyric.time <= self.currentTime;
	});

};
