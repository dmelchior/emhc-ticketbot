$(document).ready(function(){
	w = 0, h = 0, canvas = null, ctx = null, flag = false,
		prevX = 0,
		currX = 0,
		prevY = 0,
		currY = 0,
	 	x = "#000",
		y = 2;
		
	init();
	
	$("#clear").click(function(){
		ctx.clearRect(0, 0, w, h);
	});

	var date = new Date();
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$("#sub-container-date").html(months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
});

function init(){
	canvas = $("#myCanvas")[0];
	ctx = canvas.getContext("2d");
	w = canvas.width;
	h = canvas.height;
	
	$("#myCanvas").on("mousemove", function(e){
		//console.log("move");
		findxy('move', e);
	});
	$("#myCanvas").on("mousedown", function(e){
		//console.log("down");
		findxy('down', e);
	});
	$("#myCanvas").on("mouseup", function(e){
		//console.log("up");
		findxy('up', e);
	});
	$("#myCanvas").on("mouseout", function(e){
		//console.log("out");
		findxy('out', e);
	});
}

function findxy(res, e){
	if(res == 'down'){
		prevX = currX;
		prevY = currY;
		currX = e.clientX - $("#myCanvas").offset().left;
		currY = e.clientY - $("#myCanvas").offset().top;
		
		flag = true;
	}
	if(res == 'up' || res == 'out'){
		flag = false;
	}
	if(res == 'move'){
		if(flag){
			prevX = currX;
			prevY = currY;
			currX = e.clientX - $("#myCanvas").offset().left;
			currY = e.clientY - $("#myCanvas").offset().top;
			draw();
		}
	}
}

function draw(){
	ctx.beginPath();
	ctx.moveTo(prevX, prevY);
	ctx.lineTo(currX, currY);
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();
}



function save(){
	var download = $("#save");
	var image = $("#myCanvas")[0].toDataURL("image/png").replace("image/png", "image/octet-stream");
	$("#save").attr("href",image);	
	
}