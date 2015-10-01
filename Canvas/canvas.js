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

	var element2=document.getElementById("canvas2");
	var canvas2=element2.getContext("2d");
	var gradient=canvas2.createLinearGradient(0,150,500,150);
	gradient.addColorStop(0,"#6067D2");
	gradient.addColorStop(0.8,"#da90cb");
	canvas2.fillStyle=gradient;
	canvas2.fillRect(0,0,500,300);

	var element3=document.getElementById("canvas3");
	var canvas3=element3.getContext("2d");
	var gradient2=canvas3.createLinearGradient(0,0,500,300);
	gradient2.addColorStop(0.6,"#6067D2");
	gradient2.addColorStop(1,"#da90cb");
	canvas3.fillStyle=gradient2;
	canvas3.fillRect(0,0,500,300);

	var element4=document.getElementById("canvas4");
	var canvas4=element4.getContext("2d");
	var gradient3=canvas4.createRadialGradient(250,150,50,250,150,300);
	gradient3.addColorStop(0,"#6067D2");
	gradient3.addColorStop(1,"#da90cb");
	canvas4.fillStyle=gradient3;
	canvas4.fillRect(0,0,500,300);
}

window.addEventListener("load",run, false);