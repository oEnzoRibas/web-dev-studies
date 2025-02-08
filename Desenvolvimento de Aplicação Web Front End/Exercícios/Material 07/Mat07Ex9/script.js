// 9 - Faça um algoritmo que calcule a quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel 
// que faz 12Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto na viagem e a velocidade média durante ela. 
// Desta forma, será possível obter a distância percorrida com a fórmula:
// DISTANCIA = TEMPO * VELOCIDADE.
// Tendo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula:
// LITROS_USADOS = DISTANCIA / 12.
// O programa deve apresentar os valores da velocidade média, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.

let kmLts = 12;
var time = Number(window.prompt("Inbforme o tempo gasto na viagem: "));
var vm = Number(window.prompt("Inbforme a velocidade média durante a viagem: "));
var dist = (time * vm);
var gasUsed = (dist / kmLts);

alert(`Velocidade média: ${vm}\nTempo gasto na viagem: ${time}\nDistância percorrida: ${dist}\nQuantidade de litros de combustível utilizados: ${gasUsed}`);