// 3  -  Faça  um  programa  que  receba  a  idade  do  nadador  e  mostre  sua  categoria  usando  as 
// regras a seguir. Faça os testes necessários em relação à idade inválida,  considerando que 
// estão aptos apenas pessoas com 5 ou mais anos.

const idade = Number(window.prompt("Informe a idade do nadador: "));
const min = 5;
const faixaEtaria = Math.floor(idade/10);

let categoria = 
    idade < min ? "Idade inválida!" :
    (idade <= 7) ? "Infantil" :
    (idade <= 10) ? "Juvenil" :
    (idade <= 15) ? "Adolescente" :
    (idade <= 30) ? "Adulto" : "Sênior";

console.log(categoria);
alert(categoria);