
var elem_origen;
var elem_destino;

function start(){
	elem_origen=document.getElementById("imagen");
	elem_origen.addEventListener("dragstart",dragbegin,false);
	elem_destino=document.getElementById("zonadestino");
	elem_destino.addEventListener("dragenter",function(e){
		e.preventDefault();},false);
	elem_destino.addEventListener("dragover",function(e){
		e.preventDefault();},false);
	elem_destino.addEventListener("drop",dropped,false);
	elem_origen.addEventListener("dragend", terminado, false);
}

function dragbegin(e){
	var codigo="<img src='"+ elem_origen.getAttribute("src")+"'>";
	e.dataTransfer.setData("Text", codigo);
}

function dropped(e){
	e.preventDefault();
	elem_destino.innerHTML=e.dataTransfer.getData("Text");
}

function terminado(e){
	var elemento=e.target;
	elemento.style.visibility="hidden"
}







window.addEventListener("load", start, false);