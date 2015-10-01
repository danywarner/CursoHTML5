var name, lname;

function run(){alert("run");
	name=document.getElementById("name");alert(name.value);
	lname=document.getElementById("lname");alert("two");
	name.addEventListener("input",validate, false);alert("three");
	lname.addEventListener("input",validate, false);alert("four");	
	validate();
} 
function validate(){
	alert("el nommbre que me llega es "+name.value)
	if(name.value=="" && lname.value==""){alert("a");
		name.setCustomValidity("Input either a name or last name");
		name.style.background="#FFDDDD";
		lname.style.background="#FFDDDD";
	}

	else{alert(name.value);
		name.setCustomValidity("");
		name.style.background="#FFFFFF";
		lname.style.background="#FFFFFF";
		alert("c");
	}
}


window.addEventListener("load", run, false);
