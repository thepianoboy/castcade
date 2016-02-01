
function TTT(stage) {

	// Constant Declarations
	// Cheap approximation of the square root of 2 (for square diagonal calculation)
	sqrt2 = 1.414;

	// Colors
	red = "#D04343";
	blue = "#6090FF";
	darkgrey = "#3D3C3A";
	lightgrey = "#666362";
	gold = "#FFCC00";
	goldenrod = "#C9960C";


	// Class Member Declarations

	this.stage = stage;

	this.tl = {x:100, y:100};
	this.tc = {x:250, y:100};
	this.tr = {x:400, y:100};
	this.cl = {x:100, y:250};
	this.cc = {x:250, y:250};
	this.cr = {x:400, y:250};
	this.bl = {x:100, y:400};
	this.bc = {x:250, y:400};
	this.br = {x:400, y:400};

	this.children = [];

	// Class Methods

	this.demoCircle = function() {
		var circle = new createjs.Shape();
		circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;
		this.children.push(circle);
		this.stage.addChild(circle);
	};

	this.drawX = function(x, y) {
		var X = new createjs.Shape();
		barWidth = 20;
		X.graphics.beginFill(red).drawRect(0 - 50 * sqrt2 + 50, 50 - barWidth / 2, 100 * sqrt2, barWidth);
		X.graphics.beginFill(red).drawRect(50 - barWidth / 2, 0 - 50 * sqrt2 + 50, barWidth, 100 * sqrt2);
		
		X.x = x + 50;
		X.y = y + 50;

		X.regX = 50;
		X.regY = 50;
		X.rotation = 45;

		this.children.push(X);
		this.stage.addChild(X);


	}

	this.drawO = function(x, y) {
		var O = new createjs.Shape();
		O.graphics.beginFill(blue).drawCircle(0, 0, 50);
		O.x = x + 50;
		O.y = y + 50;
		this.children.push(O);
		this.stage.addChild(O);
	};

	this.createGrid = function() {
		var grid = new createjs.Shape();

		// Top Row
		grid.graphics.beginFill(darkgrey).drawRect(this.tl.x - 25, this.tl.y - 25, 150, 150);
		grid.graphics.beginFill(lightgrey).drawRect(this.tc.x - 25, this.tc.y - 25, 150, 150);
		grid.graphics.beginFill(darkgrey).drawRect(this.tr.x - 25, this.tr.y - 25, 150, 150);

		// Center Row
		grid.graphics.beginFill(lightgrey).drawRect(this.cl.x - 25, this.cl.y - 25, 150, 150);
		grid.graphics.beginFill(darkgrey).drawRect(this.cc.x - 25, this.cc.y - 25, 150, 150);
		grid.graphics.beginFill(lightgrey).drawRect(this.cr.x - 25, this.cr.y - 25, 150, 150);

		// Bottom Row
		grid.graphics.beginFill(darkgrey).drawRect(this.bl.x - 25, this.bl.y - 25, 150, 150);
		grid.graphics.beginFill(lightgrey).drawRect(this.bc.x - 25, this.bc.y - 25, 150, 150);
		grid.graphics.beginFill(darkgrey).drawRect(this.br.x - 25, this.br.y - 25, 150, 150);

		this.grid = grid;
		this.stage.addChild(grid);

	};

	this.createSelector = function() {
		var selector = new createjs.Shape();

		selector.graphics.beginFill("goldenrod").drawRect(-25, -25, 25, 10).drawRect(-25, -25, 10, 25);
		selector.graphics.beginFill("gold").drawRect(-23, -23, 21, 8).drawRect(-23, -23, 8, 21);

		selector.graphics.beginFill("goldenrod").drawRect(125, -25, -25, 10).drawRect(125, -25, -10, 25);
		selector.graphics.beginFill("gold").drawRect(123, -23, -21, 8).drawRect(123, -23, -8, 21);

		selector.graphics.beginFill("goldenrod").drawRect(125, 125, -25, -10).drawRect(125, 125, -10, -25);
		selector.graphics.beginFill("gold").drawRect(123, 123, -21, -8).drawRect(123, 123, -8, -21);

		selector.graphics.beginFill("goldenrod").drawRect(-25, 125, 25, -10).drawRect(-25, 125, 10, -25);
		selector.graphics.beginFill("gold").drawRect(-23, 123, 21, -8).drawRect(-23, 123, 8, -21);

		selector.x = this.tl.x;
		selector.y = this.tl.y;

		this.selector = selector;
		this.stage.addChild(selector);
	};

	this.moveSelector = function(x, y) {
		this.selector.x = x;
		this.selector.y = y;
	}

	this.getCurrentSelectorPos = function () {
		out = {x:0, y:0};
		out.x = this.selector.x;
		out.y = this.selector.y;
		return out;

	}

	this.update = function() {
		this.stage.update();
	};

	this.cleanup = function() {

		for (i = 0; i < this.children.length; i++) {
			this.stage.removeChild(this.children[i]);
		}

		this.update();
	};

	this.destroy = function() {

		this.cleanup();
		this.stage.removeChild(this.grid);
		this.update();

	};

}


