var Constants = {};
Constants.imageFolder = "images/spring/";
Constants.brushesImageFolder = "images/spring/brushes800w/";
var populateBrushesArray = function(folder, from, to, ext) {
	folder = folder ? folder + "/" : Constants.brushesImageFolder;
	var zeros;
	var sequence = [];
	var i = from;
	while (i !== to) {
		if (i < 10) {
			zeros = "00";
		} else if (i < 100) {
			zeros = "0";
		} else {
			zeros = "";
		}
		sequence.push(
			"{0}brush_{1}{2}.{3}".format(folder, zeros, i, ext)
		);
		if (from < to) {
			i++;
		} else {
			i--;
		}
	};
	return sequence;
};

//Constants.brushesFileNames = populateBrushesArray(null, 1, 127, "png");
Constants.brushesFileNames = populateBrushesArray(null, 1, 127, "png");

var music = new SpringMusic();
var animation = new SpringAnimation();

$(function() {

	animation.init();
	music.init();

});
