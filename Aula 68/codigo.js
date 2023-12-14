//                      CONDIÇÕES OU CONSICIONAIS

// var numero = 5;

//  se (numero for maior que 10)
// if(numero > 10)
// {
//     console.log("é maior");
// }

// var numero = 5;

// // se (numero for menor que 10)
// if (numero < 10)
// {
//     console.log("é menor");
//     document.write("é menor");
// }

/*Faça um programa que peça para a pessoa digitar a idade dela e o 
programa vair falar se ela é maior ou menor de idade*/

// var idade = prompt("digite sua idade");

//  para que o numero 18 apareça como maior de idade é preciso do (=) ao lado do >
// if (idade >= 18)
// {
//     console.log("Maior de idade");
// }

// if (idade < 18)
// {
//     console.log("menor de idade");
// }

//                          EXERCICIO 1
// var faltas = Number(prompt("Digite aqui quantas faltas você tem!"));

// if ( faltas > 15)
// {
//     console.log("Você esta fora do Programa :(");
//     document.write("Você esta fora do Programa :(");
// }

// if ( faltas <= 15)
// {
//     console.log("Você ainda esta no programa tome cuidado com as faltas :)");
//     document.write("Você ainda esta no programa tome cuidado com as faltas :)");
// }

//                          EXERCICIO 2

// var altura = Number(prompt("Qual a sua altura?"));

// if ( altura >= 1.50)
// {
//     console.log("Você não é anã");
//     console.log("sua altura é:", altura);
// }

// if ( altura < 1.50)
// {
//     console.log("kskskssk VOCÊ É ANÃ KSKSKSKSKSKSSSKSKS");
//     console.log("sua altura é:", altura);
// }

//                          EXERCICIO 3
// var primeiro_numero = Number(prompt("digite um numero"));
// var segundo_numero= Number(prompt("digite segundo numero"));

// if (primeiro_numero > segundo_numero)
// {
//     console.log("ordem dos numeros:",segundo_numero,",",primeiro_numero);
// }

//                          EXERCICIO 4

// var senha = prompt("Digite sua senha:");

// if (senha.length > 3)
// {
//     console.log("Senha forte", "caracteries:",senha.length);
// }

// if (senha.length <= 3)
// {
//     console.log("Senha fraca", "caracteries:",senha.length);
// }

//                          EXERCICIO 5
var primeiro_numero = Number(prompt("Digite um numero"));
var segundo_numero = Number(prompt("Digite mais um numero"));

if (primeiro_numero > segundo_numero)
{
    console.log("o maior numero é:", primeiro_numero);
}

if (segundo_numero > primeiro_numero)
{
    console.log("o maior numero é:", segundo_numero);
}

