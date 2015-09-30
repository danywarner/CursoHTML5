var actualvideo, play, barra, progreso,maximo;

maximo=600;

function start(){

	actualvideo=document.getElementById("actualvideo");
	play=document.getElementById("play");
	barra=document.getElementById("barra");
	progreso=document.getElementById("progreso");

	play.addEventListener("click", clicking, false);
	barra.addEventListener("click", adelantar, false);
}

function clicking(){

	if(actualvideo.paused===false && actualvideo.ended===false){
		actualvideo.pause();
		play.innerHTML="Play";
	}
	else{
		actualvideo.play();
		play.innerHTML="Pause";

		bucle=setInterval(estado,1);
	}
}

function estado(){
	if(actualvideo.ended===false){
		var total=parseInt(actualvideo.currentTime*maximo/actualvideo.duration);
		progreso.style.width=total+"px";
	}
}

function adelantar(posicion){
	if(actualvideo.paused===false && actualvideo.ended==false){
		var ratonX=posicion.pageX-barra.offsetLeft;
		var nuevoTiempo=ratonX*actualvideo.duration/maximo;
		actualvideo.currentTime=nuevoTiempo;
		progreso.style.width=ratonX+"px";
	}
}













window.addEventListener("load",start,false);
