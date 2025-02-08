/* 
1. Faça um programa que preencha uma lista com as notas de uma turma de 10 alunos,
calcule a média da turma e conte quantos alunos obtiveram nota acima da média. Ao final
devem ser apresentados a média e o resultado da contagem.
*/
let notas = [];
let somatotal = 0; // Inicializando a variável com 0
let qntAcima = 0;

for (let i = 0; i < 10; i++) {
    let nota = Number(window.prompt("Informe sua nota: ")); // Convertendo entrada para número
    notas.push(nota);
    somatotal += nota; // Somando nota à soma total
}

let media = somatotal / 10; // Calcula a média após o loop

function acimaDaMedia(element) {
    return element > media;
}

notas.forEach(element => {
    if (acimaDaMedia(element)){
        qntAcima++;
    };
});

let acima = notas.filter(acimaDaMedia); // Filtra notas acima da média
alert(`Média: ${media}\nNotas acima da média: ${acima}\nQuantidade de Alunos acima da média: ${qntAcima}`);