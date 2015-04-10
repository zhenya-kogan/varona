var BooLyrics = function() {
	this.remainingLyrics = Constants.lyrics.slice(0);
};

BooLyrics.prototype.init = function() {
};

BooLyrics.prototype.showLyric = function(currentTime) {
	
	var self = this;
	
	//console.log('currentTime is ' + currentTime);
	_.each(self.remainingLyrics, function(lyric, index) {
		if (lyric.time <= currentTime) {
			//found
			if (lyric.firstLetterIndex < 10) {
				_.each(letters, function(el) {
					el.reset();
				});
			}
			for (var i = lyric.firstLetterIndex; i < lyric.firstLetterIndex + lyric.word.length; i++) {
				letters[i].hardcode(lyric.word[i - lyric.firstLetterIndex]);
			}
			self.remainingLyrics = self.remainingLyrics.slice(index + 1);
			//console.log(lyric.word);
			//console.log(self.remainingLyrics[0]);
		}
	});

};
