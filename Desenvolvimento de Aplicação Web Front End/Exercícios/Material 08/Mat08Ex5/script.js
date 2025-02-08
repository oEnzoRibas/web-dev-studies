/* 
5 – Crie um programa para ler uma quantidade de números até que o usuário digite -1. Ao
final apresente quantos números foram digitados, quantos são pares e quantos são
ímpares.
*/

let qntN = 0;
let numbers = [];
let qntO = 0;
let qntE = 0;

do{
    let n = Number(window.prompt("Informe um número (ou -1 para sair): "));
    if (n === -1){
        break;
    }else{
        n % 2 == 0 ? (qntE++):(qntO++);
        qntN++;
        numbers.push(n);
    }
}while(true);

console.log(`Quantidade total de números: ${qntN}\nQuantidade de números ímpares: ${qntO}\nNúmeros inseridos: ${numbers.join(", ")}`);
alert(`Quantidade total de números: ${qntN}\nQuantidade de números pares: ${qntE}\nQuantidade de números ímpares: ${qntO}\nNúmeros inseridos: ${numbers.join(", ")}`);