/* 
8 – Faça um algoritmo que leia um número N e mostre na tela o fatorial desse valor. O
fatorial de um número N é dado por
N!=1⋅2⋅3⋅…⋅(N-1)⋅N
*/

let n = window.prompt("Informe o valor n: ");
// let res = n;
// for (let i = n-1; i > 1; i--) {
//     console.log("res "+ res);
//     console.log(i);
//     res = res*i;
// }
res = 1;
for (let i = 1; i <= n; i++) {
    
    res = res*i;
    console.log("res "+ res);
    console.log(i);
}


console.log(`Resultado= ${res}`);
alert(`Resultado= ${res}`);