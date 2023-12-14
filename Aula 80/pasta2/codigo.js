var quantidade = 0;
var soma = 1
var subtracao = 1

function Diminuir ()
{
    let tirar = document.getElementById("volume");
    quantidade = quantidade - subtracao
    tirar.textContent = quantidade;
}

function Aumentar ()
{
    let acrescentar = document.getElementById("volume");
    quantidade = quantidade + soma;
    acrescentar.textContent = quantidade;
}