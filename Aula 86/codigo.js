//                      EXEMPLO 1
// function Trocar()
// {
//     let texto = document.getElementById("texto");
    
//     let paragrafo = document.getElementById("paragrafo");
    
//     texto.classList.add("verde")
    
//     paragrafo.classList.add("verde")
// }

//                      EXERCICIO 2
// function Mostrar()
// {
//     let minha_div = document.getElementById("container");
//     minha_div.classList.add("aparece");
//     minha_div.classList.remove("desaparecer")
    
// }

// function Desaparecer()
// {
//     let sumir = document.getElementById("container");
//     sumir.classList.remove("aparece");
//     sumir.classList.add("desaparecer");
    
// }


function Messi()
{
    let messi = document.getElementById("lendas");
    messi.classList.add("messi");
    messi.classList.remove("penaldo")
    messi.classList.remove("neymar")
}

function Penaldo()
{
    let penaldo = document.getElementById("lendas");
    penaldo.classList.add("penaldo");
    penaldo.classList.remove("messi");
    penaldo.classList.remove("neymar");
}

function Neymar()
{
    let neymar = document.getElementById("lendas");
    neymar.classList.add("neymar");
    neymar.classList.remove("penaldo")
    neymar.classList.remove("messi")
}