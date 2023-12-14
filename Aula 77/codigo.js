//      APRENDENDO A COLOCAR FUNÇÃO
// function Mostrar ()
// {
//     console.log("testando"); 
// }


// function aprendendo ()
// {
//     console.log("estou aprendendo");
    
// }

// Mostrar ();

// aprendendo ();

// var numero = 0;

// function Aumentar ()
// {
//     numero = numero + 1;
//     console.log(numero);
// }

// Aumentar();
// Aumentar();
// Aumentar();
// Aumentar();
// Aumentar();


// function Diminuir ()
// {
//     numero = numero - 1;
//     console.log(numero)
// }

// Diminuir();
// Diminuir();
// Diminuir();
// Diminuir();
// Diminuir();

// var nome = document.getElementById("titulo");


// function Red ()
// {
//     nome.style.color = "red";   
// }

// function Blue ()
// {
//     nome.style.color = "blue";
// }

// function Green ()
// {
//     nome.style.color = "green";
// }

// Red ();

// Blue ();

// Green ();

// var nota = Number(prompt("digite a sua nota:"));

// var texto = document.getElementById("titulo");

// function Aprovado ()
// {
//     texto.textContent = "Aprovado";
//     texto.style.color = "green";
// }

// function Reprovado ()
// {
//     texto.textContent = "Reprovado";
//     texto.style.color = "red";
// }


// if (nota < 6)
// {
//     Reprovado();
// }

// else
// {
//     Aprovado();
// }


var pin = prompt(" Digite a senha");
var password = document.getElementById("titulo");
var senha = "Bravinha";

function Correta ()
{
    password.textContent = "Senha correta";
    password.style.color = "green";
    password.style.border = "1px solid green";
}

function Errada ()
{
    password.textContent = "Senha errada";
    password.style.color = "red";
    password.style.border = "1px solid red"
}

if (pin == senha)
{
    Correta();
}

else
{
    Errada();
}
