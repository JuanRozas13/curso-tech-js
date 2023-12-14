//                  EXERCICIO 1
// var ano = Number(prompt("Digite sua idade:"));
// var geracao = 2023 - ano;

// if (geracao >= 1940 && geracao <= 1960)
// {
//     console.log("Você é da geração: baby boomers");
//     console.log(geracao);
// }

// if (geracao > 1960 && geracao <= 1980)
// {
//     console.log("Você é da geração: geração X");
//     console.log(geracao);
// }

// if (geracao > 1980 && geracao <= 1995)
// {
//     console.log("Você é da geração: geração Y");
//     console.log(geracao);
// }

// if (geracao > 1995 && geracao <= 2010)
// {
//     console.log("Você é da geração: geração Z")
//     console.log(geracao);
// }

// if (geracao > 2010)
// {
//     console.log("Você é da geração: geração alpha");
//     console.log(geracao);
// }

//                      EXERCICIO 2

// var peso = Number(prompt("Digite o seu peso:"));
// var altura = Number(prompt("Digite a sua altura:"));

// var resultado = peso / (altura * altura);

// if ( resultado < 18.5)
// {
//     console.log("seu IMC é de: ", resultado);
//     console.log("abaixo do peso");
// }

// if ( resultado > 18.6 && resultado <= 24.9)
// {
//     console.log("seu IMC é de: ", resultado);
//     console.log("peso ideal (parabéns)"); 
// }

// if ( resultado > 25.0 && resultado <= 29.9)
// {
//     console.log("seu IMC é de: ", resultado);
//     console.log("levemente acima do peso"); 
// }

// if ( resultado > 30.0 && resultado <= 34.9)
// {
//     console.log("seu IMC é de: ", resultado);
//     console.log("obesidade grau I"); 
// }

// if ( resultado > 35.0 && resultado <= 39.9)
// {
//     console.log("seu IMC é de: ", resultado);
//     console.log("obesidade grau II (severa)"); 
// }

// if ( resultado > 40)
// {
//     console.log("seu IMC é de: ", resultado);
//     console.log("obesidade grau III (mórbida)"); 
// }

//                      EXERCICIO 3

var nome = Number(prompt("Digite seu nome:"))
var Quantidades = Number(prompt("Quantidades de maçãs compradas:"));
var macas = 3.20;
var valor = macas * Quantidades;
var reais = 20;
var total = reais - valor;

if (valor > 20)
{
    console.log("valor da", macas);
    console.log("voce tem", reais)
    console.log("Passou do limite");
    console.log("você deve", total, "reais");
}

else
{
    console.log("valor da", macas);
    console.log("voce tem", reais)
    console.log("consegue pagar");
    console.log("restou para você", total, "reais");
    

}
