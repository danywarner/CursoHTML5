var myaudio, play, barra, progreso,maximo;

maximo=600;

function start(){

	myaudio=document.getElementById("myaudio");
	play=document.getElementById("play");
	barra=document.getElementById("barra");
	progreso=document.getElementById("progreso");

	play.addEventListener("click", clicking, false);
	barra.addEventListener("click", adelantar, false);
}

function clicking(){

	if(myaudio.paused===false && myaudio.ended===false){
		myaudio.pause();
		play.innerHTML="Play";
	}
	else{
		myaudio.play();
		play.innerHTML="Pause";

		bucle=setInterval(estado,1);
	}
}

function estado(){
	if(myaudio.ended===false){
		var total=parseInt(myaudio.currentTime*maximo/myaudio.duration);
		progreso.style.width=total+"px";
	}
}

function adelantar(posicion){
	if(myaudio.paused===false && myaudio.ended==false){
		var ratonX=posicion.pageX-barra.offsetLeft;
		var nuevoTiempo=ratonX*myaudio.duration/maximo;
		myaudio.currentTime=nuevoTiempo;
		progreso.style.width=ratonX+"px";
	}
}
window.addEventListener("load",start,false);
