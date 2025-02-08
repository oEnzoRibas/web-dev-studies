/* 
10 – Dado um país A, com 5 milhões de habitantes e uma taxa de natalidade de 3% ao
ano, e um país B com 7 milhões de habitantes e uma taxa de natalidade de 2% ao ano,
fazer um programa que calcule e imprima o tempo necessário para que a população do
país A ultrapasse a população do país B e os respectivos totais das populações finais após
o período, dos países A e B.
*/

let popA = 5000000;
let popB = 7000000;
let taxaA = 0.03;
let taxaB = 0.02;
let yrs = 0;
while (popB > popA){
    popB += popB * (taxaB);
    popA += popA * (taxaA);
    yrs++;
}

alert(`População A = ${popA}\nPopulação B = ${popB}\nAnos = ${yrs}`)
