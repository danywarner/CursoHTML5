var imagen = new Array(3);


function tipoFlor(){
	alert("es una orquidea chibi");
}

function manejaFlor(){

	for(var i =0;i<4;i++){
		imagen[i]=document.getElementsByTagName("img")[i];
	}

	imagen[0].addEventListener("mouseover",function(){imagen[0].width=225;imagen[0].height=225;}, false);
	imagen[0].addEventListener("mouseout",function(){imagen[0].width=200;imagen[0].height=200;},false);
	imagen[0].addEventListener("click",tipoFlor,false);

	imagen[1].addEventListener("mouseover",function(){imagen[1].width=225;imagen[1].height=225;}, false);
	imagen[1].addEventListener("mouseout",function(){imagen[1].width=200;imagen[1].height=200;},false);
	imagen[1].addEventListener("click",tipoFlor,false);

	imagen[2].addEventListener("mouseover",function(){imagen[2].width=225;imagen[2].height=225;}, false);
	imagen[2].addEventListener("mouseout",function(){imagen[2].width=200;imagen[2].height=200;},false);
	imagen[2].addEventListener("click",tipoFlor,false);

	imagen[3].addEventListener("mouseover",function(){imagen[3].width=225;imagen[3].height=225;}, false);
	imagen[3].addEventListener("mouseout",function(){imagen[3].width=200;imagen[3].height=200;},false);
	imagen[3].addEventListener("click",tipoFlor,false);
}

function pe(){
	alert("hola soy el pe");
}

function crecer(){
	imagen.width=225;
	imagen.height=225;
}


function menguar(){
	imagen.width=200;
	imagen.height=200;
}


function run(){

	for(var i=0;i<1;i++) {
	document.getElementsByTagName("p")[i].onclick=saludo;
	}

	var b=document.getElementsByClassName("tercero")[0].onclick=bye;
	document.getElementById("segundo").onclick=saludo;
	var elementos=document.querySelectorAll("#principal p");
	document.querySelector("#principal p:last-child").onclick=saludo2;

}


function saludo(){
	alert("saludo");
}

function saludo2(){
	alert("hey dude!");
}

function bye(){
	alert("bye");
}

function xxx(){

   //$.blockUI({ message: 'Cargando tweets...'});
    $.get("http://yoreporto.herokuapp.com/twitter/tweets/", {"count": 20}, "json").
        done(function (data) {alert("kks")
          //  $.unblockUI();
            var lista = document.getElementById("tweets");
            for (x in data.tweets) {
                var trino = data.tweets[x].text;
                var image = data.tweets[x].profile_image_url;
                var el = document.createElement("il");
                var pe = document.createElement("p");
                pe.innerHTML = trino;
                var img = document.createElement("img");
                img.src = image;
                //el.textContent = trino;
                el.appendChild(img);
                el.appendChild(pe);
                //el.list-style-image = url(image);
                lista.appendChild(el);
            }
        }).fail(function (data) {
            alert('Fail :( => '+data);
            $.unblockUI();
        });

    $.get("http://yoreporto.herokuapp.com/twitter/banner/").
        done(function (data) {
            var lista = document.getElementById("sizes");
            var banner = data.sizes.web.url;
            var bannerTwitter = document.getElementById("twitterheader");
            bannerTwitter.src = banner;
        });
}


window.addEventListener("load",xxx,false);

