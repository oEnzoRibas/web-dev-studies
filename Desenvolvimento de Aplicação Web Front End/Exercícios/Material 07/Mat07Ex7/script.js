// 7 - Faça um algoritmo que leia uma temperatura em Fahrenheit e a apresente convertida em graus Celsius.
// A fórmula de conversão é C = (F – 32) * ( 5 / 9),
// na qual F é a temperatura em Fahrenheit e C é a temperatura em Celsius.

let tempF = Number(window.prompt("Informe a temperatura em graus Fahrenheit: "))
var tempC = (tempF - 32) * 5/9;
alert(`Temperatura em Celsius: ${tempC}`);