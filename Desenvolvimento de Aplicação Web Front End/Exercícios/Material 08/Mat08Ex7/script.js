/* 
7 - Faça um algoritmo que imprima a série de Fibonacci até o valor N fornecido pelo
usuário. A série de Fibonacci é mostrada abaixo.
1,1,2,3,5,8,13,21,...,N
*/
let n = window.prompt("Informe o valor n: ");
let seq = [1,1];

for (let i = 2; i < n; i++) {
    let next = seq[i - 1] + seq[i - 2]; // Próximo número da série de Fibonacci

    if (next > n) {
        alert("Esse número não faz parte da sequência de Fibonacci")
        break; // Interrompe o loop se o próximo número ultrapassar 'n'
    }

    seq.push(next);

    if (seq[seq.length - 1] == n) {
        break; // Interrompe o loop se o último número for exatamente igual a 'n'
    }
}

console.log(`Série de Fibonacci = ${seq}`);
alert(`Série de Fibonacci = ${seq}`);