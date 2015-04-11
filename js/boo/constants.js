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

Constants.lyrics = [
	{
		word: "",
		fileName: [ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", /*repeat */ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", /*repeat */ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", /*repeat */ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", /* repeat */ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", /*repeat */ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", /*repeat */ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", /*repeat */ "IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif", "IMG_0057.gif", "IMG_0058.gif", "IMG_0059.gif", "IMG_0060.gif", "IMG_0061.gif", "IMG_0062.gif", "IMG_0063.gif", "IMG_0064.gif", /* reverse */ "IMG_0064.gif", "IMG_0063.gif", "IMG_0062.gif", "IMG_0061.gif", "IMG_0060.gif", "IMG_0059.gif", "IMG_0058.gif", "IMG_0057.gif", "IMG_0056.gif", "IMG_0055.gif", "IMG_0054.gif", "IMG_0053.gif", "IMG_0052.gif", "none"],
		//time: 18.736192
		time: 9.5
	},
	{
		time: 10

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
		time: 134.250994
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
