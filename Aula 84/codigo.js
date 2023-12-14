// function Mudou ()
// {
//     let digitado = document.getElementById("digitado");

//     if (digitado.value == "ca")
//     {
//         console.log("camiseta");
//     }
// }

//                      EXERCICIO 1
// function Senha ()
// {
//     let digitado = document.getElementById("digitado");

//     if (digitado.value.length > 5 )
//     {
//         console.log("senha forte");
//     }

//     else
//     {
//         console.log("senha fraca")
//     }
// }

//                      EXERCICIO 2
// function Passou ()
// {
//     let palavra = document.getElementById("palavra");
//     palavra.textContent = " foi ";
// }

// function Tirou ()
// {
//     let palavra = document.getElementById("palavra");
//     palavra.textContent = " não foi ";
// }

// function Clicou ()
// {
//     let palavra = document.getElementById("palavra");
//     palavra.textContent = "  ganhou ";
// }


//                      EXERCICIO 3
// function Selecionou ()
// {
//     let text = document.getElementById("text");
//     text.textContent = "foi";
// }

function Login ()
{
    let email = document.getElementById("email");
    let valido = document.getElementById("valido");

    valido.textContent = "Digite um email valido";

    if ( email.value == "rod@gmail.com")
    {
        valido.textContent = "ja existe";
    }

    
}