/* 
2. Faça um programa que preencha 2 arrays X e Y com 10 números inteiros de 0 a 10 em
cada um. A seguir gere um novo array com os elementos desses 2 arrays intercalados de tal
forma que nas posições ímpares do novo array estejam os elementos do primeiro array e
nas posições pares os elementos do segundo array. 
*/

let array1 = [];
let array2 = [];

// preenchimento dos arrays
for (let aux = 0 ; aux < 10 ; aux++){
    array1.push(Math.round(Math.random()*10));
    array2.push(Math.round(Math.random()*10));
}

let intercalatedArray = [];

// intercalando os elementos dos arrays
for (let i = 0; i < 10; i++) {
    intercalatedArray.push(array1[i]);
    intercalatedArray.push(array2[i]);
}

console.log(array1);
console.log(array2);
console.log("Intercalated Array:", intercalatedArray);
