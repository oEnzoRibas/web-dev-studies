/* 
9 – Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número
inteiro entre 1 a 9. O usuário deve informar de qual numero ele deseja ver a tabuada. A
saída deve ser conforme o exemplo a seguir:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 9 = 45
*/

let n = window.prompt("Informe o que você quer ver a tabuada: ");

let res = [`Tabuada do ${n}`];
let result;

for (i = 0; i <= 10; i++) {
    m = n * i;
    res.push(`\n${n} X ${i} = ${m}`);
    result = res.join(""); // junta todas os itens de um vetor, separando-os pela string colocada no constructor
}
alert(result)
