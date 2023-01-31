//document.write("olá mundo!");
//document.write(Date());
//document.write(document.title);
//document.write(document.characterSet);

var corpo = document.body;
corpo.style.background = "Gray";
document.title = "Novo título";

// getElementById
var h1_brasil = document.getElementById("pais_brasil");
h1_brasil.style.background = "yellow";
document.write("<p> innerText: " + h1_brasil.innerText);
document.write("<p> innerHTML: " + h1_brasil.innerHTML);
//alert(h1_brasil.innerHTML);

// getElementsByTagName
var array_h2 = document.getElementsByTagName("h2");
var h2_es = array_h2[0];
var h2_mg = array_h2[1];
h2_es.style.color = "Pink";
h2_mg.style.color = "DarkRed";

// getElementsByName
var array_cidade = document.getElementsByName("cidade");
var cidade_0 = array_cidade[0];
cidade_0.style.borderLeftColor = "Yellow";


// getElementsByClassName
var array_cidade_mg = document.getElementsByClassName("cidade-mg");
array_cidade_mg_1 = array_cidade_mg[1];
array_cidade_mg_1.style.borderLeftColor = "Yellow";

// querySelector //Elementos id
var pais = document.querySelector("#pais_brasil");
pais.style.border = "2px solid Green";
pais.style.textAlign = "center";

//Elementos class
var cidade_es_0 = document.querySelector(".cidade-es");
cidade_es_0.style.color = "blue";