//              EXEMPLO 1
// var idioma = prompt("qual idioma:")



// function Olhar_Idioma ()
// {
//     let paragrafo = document.getElementById ("paragrafo");

//     if (idioma == "latim")
//     {
//         paragrafo.textContent = "texto em latim";
//     }

//     if (idioma == "portugues")
//     {
//         paragrafo.textContent = "texto em portugues";
//     }

// }

// Olhar_Idioma ();

//                 EXEMPLO 2
// var juliette = false;

// function verificar_ridiculo ()
// {
//     if (juliette == true)
//     {
//         console.log("é ridiculo");
//     }
//     else
//     {
//         console.log("não é ridiculo");
//     }
// }

// verificar_ridiculo();


//                  LOGICA DA BARRA LATERAL DO SITE
// var barra_lateral = false;

// function Motrar_Barra ()
// {
//     // COMEÇA COMO FALSA
//     if (barra_lateral == false)
//     {
//         // QUANDO ACIONADA É VERDADEIRA APARECENDO A BARRA LATERAL
//         barra_lateral = true;
//         console.log(barra_lateral);
//     }

//     else
//     {
//         //  QUANDO CLICAR FORA DA BARRA ELA DESAPARECE ACIONANDO A FALSA
//         barra_lateral = false;
//         console.log(barra_lateral);
//     }

    
// }

// Motrar_Barra();

// Motrar_Barra(); 


var acesso = prompt("É sua primeira vez acessando?");
var quantidade = quantidade;
function Reconhecer ()
{
    let titulo = document.getElementById("titulo");
    if (acesso == "sim")
    {
        titulo.textContent = "Seja Bem vindo";
    }

    else
    {
        titulo.textContent = "Ola usuario";
    }

}

Reconhecer();









function Comprar ()
{
    let texto_quantidade = document.getElementById("qunatidade");

    let texto_valor = document.getElementById("valor");

    quantidade = quantidade + 1;

    texto_quantidade.textContent = "Quantidade: " + quantidade;

    texto_valor.textContent = "Total: " + quantidade * 25;
}

Comprar();