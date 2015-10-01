function run(){
	var element=document.getElementById("canvas");
	var canvas=element.getContext("2d");
	canvas.fillStyle="#6067D2";	
	canvas.strokeStyle="#da90cb";
	canvas.globalAlpha=0.8;
	canvas.strokeRect(100,100,120,120);
	canvas.fillRect(110,110,100,100);
	canvas.clearRect(120,120,80,80);
	//canvas.clearRect(130,130,60,60);

}

window.addEventListener("load",run, false);