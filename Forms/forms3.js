var age;

function run(){
	age=document.getElementById("age");
	age.addEventListener("change",changeR, false);
	document.data_user.addEventListener("invalid",validate,true);
	document.getElementById("send").addEventListener("click",send,false);
	document.data_user.addEventListener("input",validateField, false);
}
function changeR(){
	var output=document.getElementById("rango");
	var calculation=age.value-30;
	if(calculation<30){
		calculation=0;
		age.value=30;
	}
	output.innerHTML=calculation+" to "+age.value;
}
function validate(e){
	var element=e.target;
	element.style.background="#FFDDDD";
}
function send(){
	var user_field=document.getElementById("user");
	var correct=document.data_user.checkValidity();
	if(correct==true){
		document.data_user.submit();
	}
	else if(user_field.validity.valueMissing==true){
		alert("user can't be empty");
	}
	else if(user_field.validity.patternMismatch==true){
		alert("solo tres letras en el campo usuario");
	}
}
function validateField(e){
	var element=e.target;
	if(element.validity.valid==true){
		element.style.background="#FFFFFF";
	}
	else{
		element.style.background="#FFDDDD";	
	}
}

window.addEventListener("load",run, false);