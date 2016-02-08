
function targetSize(padding) {
	
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;

	w -= Math.floor(padding / 2);
	h -= Math.floor(padding / 2);

	//document.getElementById(canvasID).style.height = (h - (padding / 2)).toString();
	//document.getElementById(canvasID).style.width = (w - (padding / 2)).toString();

	$("#castcadeCanvas").attr("width", Math.floor(w - (padding / 2)));
	$("#castcadeCanvas").attr("height", Math.floor(h - (padding / 2)));

	return [w, h];

}


function drawText(x, y, message, color = '#000000', font = '32px Helvetica') {
	var text = new createjs.Text();

	text.text = message;
	text.color = color;
	text.font = font;

	text.x = x;
	text.y = y;

	return text;
	
}

