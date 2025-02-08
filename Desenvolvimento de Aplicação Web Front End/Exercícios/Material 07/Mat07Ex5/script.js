// 5 - Faça um algoritmo que:
// a) Obtenha o valor para a variável HT (horas trabalhadas no mês);
// b) Obtenha o valor para a variável VH (valor hora trabalhada):
// c) Obtenha o valor para a variável PD (percentual de desconto);
// d) Calcule o salário bruto => SB = HT * VH;
// e) Calcule o total de desconto => TD = (PD/100)*SB;
// f) Calcule o salário líquido => SL = SB – TD;
// g) Apresente os valores de: Horas trabalhadas, Salário Bruto,
// Desconto, Salário Liquido.

var ht = Number(window.prompt("Informe as quantidade de horas trabalhadas no mês: "));
var vh = Number(window.prompt("Informe o valor / hora: "));
var pd = Number(window.prompt("Informeo percentual de desconto: "));
var sb = ht * vh;
var td = (pd/100)*58;
var sl = sb - td;

alert(`Horas trabalhadas: ${ht}\nSalário Bruto: ${sb}\nTotal de desconto: ${td}\nSalário Líquido: ${sl}\n`);