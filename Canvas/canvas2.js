function run(){
	var element=document.getElementById("canvas");
	var canvas=element.getContext("2d");
	canvas.beginPath();
	canvas.moveTo(100,400);
	canvas.lineTo(400,400);
	canvas.lineTo(400,100);
	canvas.lineTo(100,100);
	canvas.lineTo(100,400);
	canvas.clip();

	canvas.beginPath();

	for(i=0;i<250;i+=5)
	{
		canvas.moveTo(0,i);
		canvas.lineTo(500,i)
	}
	
	//canvas.closePath();
	//canvas.fill();
	canvas.stroke();
	
}

window.addEventListener("load",run, false);