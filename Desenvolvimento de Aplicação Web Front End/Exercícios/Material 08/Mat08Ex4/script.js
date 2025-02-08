/* 4 - Faça um algoritmo para calcular e mostrar os valores das funções ℎ(𝑥), 𝑓(𝑥) e 𝑔(𝑥)
 abaixo no ponto 𝑥 fornecido pelo usuário.
 ℎ(𝑥) = 𝑥^2 - 16

 𝑓(𝑥) = { h(x), se h(x) >= 0;
            1, se h(x) < 0;}

g(x) = { x^2 + 16, se x > 5;
            -x/2, se x <= 5;}
*/
const p = Number(window.prompt("Informe o ponto X: "));

function h(x){
    return Math.pow(x,2) - 16;
}

function f(x){
    return h(x) >= 0 ? (h(x)):(1);
}

function g(x){
    return x >= 5 ? (Math.pow(x,2)):(-x/2);
}

const hResult = h(p);
const fResult = f(p);
const gResult = g(p);


console.log(`Function h = ${hResult}\nFunction f = ${fResult}\nFunction g = ${gResult}\n`);
alert(`Function h = ${hResult}\nFunction f = ${fResult}\nFunction g = ${gResult}\n`);