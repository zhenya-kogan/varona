var Constants = {};

Constants.imageFolder = "images/boo/";

Constants.sets = {
	circles: {
		values: [
			"°",	// Degree symbol
			"·",	// Middle dot
			"˙",	// Dot Above
			"˚",	// Ring Above
			"˳"		// Modifier Letter Low Ring
		],
		maxSize: 500
	},
	parenthesis: {
		values: [ "(", ")", "[", "]", "{", "}" ]
	},
	slashes: {
		values: [ "/", "\\" ]
	},
	dashes: {
		values: [ "-", "–", "—" ]
	},
	plusMinus: {
		values: [ "+", "-" ]
	},
	moreLess: {
		values: [ ">", "<" ]
	},
	questionExclamation: {
		values: [ "?", "!", "¡", "¿" ]
	},
	commaDot: {
		values: [ ".", ",", ";", ":" ]
	},
	zeroOne: {
		values: [ "0", "1" ]
	},
	varona: {
		values: [ "V", "a", "r", "o", "n", "a", "v", "A", "R", "O", "N", "A" ]
	},
	varonaRu: {
		values: [ "в", "а", "р", "о", "н", "а", "В", "А", "Р", "О", "Н", "А"]
	}
};

Constants.bandName = "Varona";
Constants.songName = "Boo";

var populatePhotoSequence = function(folder, from, to, ext) {
	folder = folder ? folder + "/" : "";
	var zeros;
	var sequence = [];
	var i = from;
	while (i !== to) {
		if (i < 10) {
			zeros = "000";
		} else if (i < 100) {
			zeros = "00";
		} else if (i < 1000) {
			zeros = "0";
		} else {
			zeros = "";
		}
		sequence.push(
			"{0}IMG_{1}{2}.{3}".format(folder, zeros, i, ext)
		);
		if (from < to) {
			i++;
		} else {
			i--;
		}
	};
	return sequence;
};

Constants.photoSequences = {};
Constants.photoSequences.none = ["none"];
Constants.photoSequences.zhenya = populatePhotoSequence("zhenya", 52, 65, "gif");
Constants.photoSequences.zhenyaReverse = populatePhotoSequence("zhenya", 64, 51, "gif");
Constants.photoSequences.wires = populatePhotoSequence("wires", 114, 166, "gif");
Constants.photoSequences.bricks = populatePhotoSequence("bricks", 519, 575, "gif");
Constants.photoSequences.street = populatePhotoSequence("street", 314, 275, "gif");
Constants.photoSequences.sidewalk = populatePhotoSequence("sidewalk", 166, 202, "jpg");
Constants.photoSequences.bus = populatePhotoSequence("bus", 334, 389, "gif");
Constants.photoSequences.intersection = populatePhotoSequence("intersection", 389, 442, "gif");
Constants.photoSequences.trees = populatePhotoSequence("trees", 202, 235, "gif");

Constants.lyrics = [
	{
		word: "",
		fileName: Constants.photoSequences.zhenya.concat(Constants.photoSequences.wires, Constants.photoSequences.trees, Constants.photoSequences.none),
		//time: 18.736192
		time: 9.5
	},
	{
		word: "Booooo",
		time: 28.060233
	},
	{
		word: "Booooo",
		firstCharIndex: 23,
		time: 30.382133
	},
	{
		word: "Booo",
		firstCharIndex: 31,
		time: 32.564722
	},
	{
		word: "Boooo",
		firstCharIndex: 44,
		time: 34.979501
	},
	{
		word: "In a small town     where it's never    hot nor      cold",
		time: 37.62647
	},
	{
		word: "in a clay house     lived       a girl",
		time: 40.654928
	},
	{
		word: "named Boo",
		firstCharIndex: 50,
		time: 43.510874
	},
	{
		word: "every day  she was   wondering  the      streets",
		time: 46.517864
	},
	{
		word: "  telling    people",
		time: 48.8048
	},
	{
		word: "  satan's tales of      love",
		firstCharIndex: 30,
		time: 51.254558
	},
	{
		word: "",
		fileName : Constants.photoSequences.bricks.concat(Constants.photoSequences.street, Constants.photoSequences.sidewalk, Constants.photoSequences.bus, Constants.photoSequences.intersection, Constants.photoSequences.none),
		time: 56.525277
	},
	{
		word: " one day             she came                 home",
		time: 101.39622
	},
	{
		word: "she walkedinto her     bedroom           looked at the wall",
		time: 102.85902
	},
	{
		word: "            but the   mirror      wasn't   there",
		time: 105.343456
	},
	{
		word: "          the       reflectionwas on the  floor",
		time: 110.637391
	},
	{
		word: "             broken             into                 many",
		time: 112.193067
	},
	{
		word: "many many  many many",
		time: 114.723941
	},
	{
		word: "                     many manymany many",
		time: 116.723941
	},
	{
		word: "                                        many many  many many",
		time: 118.723941
	},
	{
		word: "many many many many",
		time: 121.78252
	},
	{
		word: "                     many many many many",
		time: 123.78252
	},
	{
		word: "                                        many many  many many",
		time: 125.78252
	},
	{
		word: "                                 pieces",
		time: 128.667295
	},
	{
		word: "",
		backgroundColor: "bw",
		time: 134.250994
	},
	{
		word: "",
		backgroundColor: "red",
		time: 142.111481
	},
	{
		word: "",
		backgroundColor: "random",
		time: 160
	},
	{
		word: "Booooo",
		firstCharIndex: 3,
		time: 192.460756
	},
	{
		word: "Booooo",
		firstCharIndex: 20,
		time: 194.736221
	},
	{
		word: "Boooo",
		firstCharIndex: 31,
		time: 197.011686
	},
	{
		word: "Booo",
		firstCharIndex: 54,
		time: 199.426465
	},
	{
		word: "Booooo",
		time: 201.516178
	},
	{
		word: "Booooo",
		firstCharIndex: 33,
		time: 203.977395
	},
	{
		word: "Booo",
		firstCharIndex: 41,
		time: 206.25286
	},
	{
		word: "Boooo",
		firstCharIndex: 54,
		time: 208.528325
	},
	{
		word: "",
		time: 210.826979
	}
];

Constants.fontFamilies = [
	"Arial",
	"Times New Roman",
	"Verdana",
	"Tahoma",
	"Helvetica",
	"Gill Sans",
	"Georgia",
	"Palatino",
	"Courier New",
	"Copperplate"
];
