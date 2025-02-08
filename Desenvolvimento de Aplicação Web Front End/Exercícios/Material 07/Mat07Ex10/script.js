// 10 - Faça um algoritmo que leia dois valores para as variáveis A e B e efetue a troca dos valores 
// de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir 
// o valor da variável A. Apresente os valores trocados.

var a = (window.prompt("Informe um valor para A: "));
var b = (window.prompt("Informe um valor para B: "));
var temp;
var temp = a;
var a = b;
var b = temp;
alert(`Estado final: A = ${a} e B = ${b}`);
