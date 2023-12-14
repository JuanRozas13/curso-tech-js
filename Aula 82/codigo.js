//              EXEMPLO

// function Cadastrar ()
// {
//     let digitado = document.getElementById("digitado");
//     let nome = document.getElementById("nome");
//     nome.textContent = "ola " + digitado.value;
// }

//             EXERCICO 1
// function Dados ()
// {
//     let nome = document.getElementById("nome");
//     let idade = document.getElementById("idade");
//     let cpf = document.getElementById("cpf");


//     console.log("Nome: " + nome.value); 
//     console.log("Idade: " + idade.value);
//     console.log("Cpf: " + cpf.value);
// }

var tentativas = 0;

function Acessar_Sistema ()
{
    let senha = document.getElementById("senha");
    let correta = document.getElementById("correta")
    if (senha.value == "brazino")
    {
        console.log("correto");
        correta.textContent = "correta";
    }

    else
    {
        console.log("incorreta");
        tentativas = tentativas + 1;    
        correta.textContent = "senha errada, tentativa " + tentativas;
    }

}