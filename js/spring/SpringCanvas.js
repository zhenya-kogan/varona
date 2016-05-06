var SpringCanvas = function() {

	this.brushes = [
		[ {x: 234, y: 233}, {x: 244, y: 234}, {x: 290, y: 233}, {x: 281, y: 236}, {x: 272, y: 237}, {x: 255, y: 237}, {x: 245, y: 238}, {x: 237, y: 237}, {x: 233, y: 237} ]
		[ {x: 470, y: 468}, {x: 568, y: 468}, {x: , y: }, {x: , y: }, {x: , y: }, {x: , y: }, {x: , y: }, {x: , y: }, {x: , y: }, {x: , y: } ]
	];
	
};

SpringCanvas.prototype.init = function() {

	var self = this;


	var svgNs = "http://www.w3.org/2000/svg";

	var path = document.createElementNS(svgNs,"path");

	var pathD = "";

	_.each(self.brushes, function(brush, index) {
		_.each(brush, function(point, index) {
			var action = index === 0 ? "M" : "L";
			pathD = "{0} {1} {2} {3}".format(
				pathD,
				action,
				point.x / 2,
				point.y / 2
			);
		});
	});

	path.setAttribute("d", pathD);
	path.style.fill = "#ffffff";

	var svg = document.getElementById("canvas");
	svg.appendChild(path);
};

