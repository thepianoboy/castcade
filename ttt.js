
function TTT(stage, dimensions) {

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

	// Dimensions
	grid_width = 450;
	grid_height = 450;
	grid_padding = 100;


	// Class Member Declarations

	this.stage = stage;
	this.w = dimensions[0];
	this.h = dimensions[1];

	this.x = this.w / 2 - grid_width / 2 - grid_padding;
	this.y = this.h / 2 - grid_height / 2 - grid_padding;

	this.tl = new Box(this, this.x + 100, this.y + 100);
	this.tc = new Box(this, this.x + 250, this.y + 100);
	this.tr = new Box(this, this.x + 400, this.y + 100);
	this.cl = new Box(this, this.x + 100, this.y + 250);
	this.cc = new Box(this, this.x + 250, this.y + 250);
	this.cr = new Box(this, this.x + 400, this.y + 250);
	this.bl = new Box(this, this.x + 100, this.y + 400);
	this.bc = new Box(this, this.x + 250, this.y + 400);
	this.br = new Box(this, this.x + 400, this.y + 400);

	this.selector_index = 0;

	this.selectorUp = function() {
		if (this.selector_index - 3 < 0) {}
		else { this.selector_index -= 3; }
	};

	this.selectorDown = function() {
		if (this.selector_index + 3 > 8) {}
		else { this.selector_index += 3; }
	};

	this.selectorLeft = function() {
		
		if (selector_index == 0) {
			selector_index = 2;
		}

		else if (selector_index == 3) {
			selector_index = 5;
		}

		else if (selector_index == 6) {
			selector_index = 8;
		}

		else {
			selector_index--;
		}

	};

	this.selectorRight = function() {

		if (selector_index == 2) {
			selector_index = 0;
		}

		else if (selector_index == 5) {
			selector_index = 3;
		}

		else if (selector_index == 8) {
			selector_index = 6;
		}

		else {
			selector_index++;
		}
	};

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


	};

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

function Box(parent, x, y) {

	this.x = x;
	this.y = y;
	this.state = 0;

	this.parent = parent;
	this.isEmpty = function() {return this.state == 0; };
	this.isX = function() {return this.state == 1; };
	this.isO = function() {return this.state == 2; };

	this.addX = function() {
		parent.drawX(this.x, this.y);
		this.state = 1;
	};

	this.addO = function() {
		parent.drawO(this.x, this.y);
		this.state = 2;
	};

	this.clear = function() {
		this.state = 0;
	};
}
