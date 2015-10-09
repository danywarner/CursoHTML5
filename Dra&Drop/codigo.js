
function start(){
	var elem_origen=document.getElementById("imagen");
	elem_origen.addEventListener("dragstart",function(){
		alert("comenzó a moverse!");
	},false);
}









window.addEventListener("load", start, false);