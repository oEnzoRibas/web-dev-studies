// 8 - Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo,
// utilizando a fórmula VOLUME = 3,14159 * RAIO^2*ALTURA.

var pi = 3.14159;
var raio = Number(window.prompt("Informe o valor do raio: "));
var altura = Number(window.prompt("Informe o valor da altura: "));

var OilCanVol = (pi * Math.pow(raio,2) * altura);