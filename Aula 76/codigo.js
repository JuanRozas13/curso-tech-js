// var palavra = document.getElementById("titulo");


// aplicando estilo pelo javascript
// palavra.style.backgroundColor = "black";
// palavra.style.color = "white";
// palavra.style.border = "3px solid blue";
// palavra.style.cursor = "pointer";
// palavra.style.padding = "30px 90px 30px 90px";
// palavra.style.fontWeight = "normal";
// palavra.style.margin = "0px";

// reescrevendo o texto na pagina
// palavra.textContent = "Aprendi coisa nova vai vascoou";


// acessando o input
// var nome = document.getElementById("dado");

// reescrevendo o que ta dentro do input
// nome.value = "testando";

// guardando a variavel com o valor
// var guardar_nome = nome.value;

// mostrando no console
// console.log(guardar_nome);


// var nome = document.getElementById("dado");

// nome.value = "12345678";

// var guardar_nome = nome.value;

// console.log(guardar_nome);

var formulario = document.getElementById("preencher");
var mensagem = document.getElementById("titulo");

mensagem.style.fontWeight = "normal";

formulario.value = "juan";
mensagem.textContent = "Olá " + formulario.value;

