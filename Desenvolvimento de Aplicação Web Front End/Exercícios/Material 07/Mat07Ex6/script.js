// 6 - Faça um algoritmo que leia uma temperatura em graus Celsius e apresente-a convertida em graus Fahrenheit.
// A fórmula de conversão é: F = (9 * C + 160) / 5,
// na qual F é a temperatura em Fahrenheit e C é a temperatura em Celsius;

let tempC = Number(window.prompt("Informe a temperatura em graus Celsius: "))
var tempF = ( 9 * tempC +160) / 5;
alert(`Temperatura em Fahrenheit: ${tempF}`);