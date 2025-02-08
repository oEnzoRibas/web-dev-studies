// 1 – Faça um programa que mostre o menu de opções a seguir, receba a opção do usuário e os dados necessários para executar cada operação.
// Menu de opções:
// 1. Somar dois números.
// 2. Raiz quadrada de um número.
// Digite a opção desejada:

function somar2(){
    const a = window.prompt("Informe o primeiro número: ");
    const b = window.prompt("Informe o segundo número: ");
    return (a+b);
}

function sqrt(){
    const x = window.prompt("Informe o número: ");
    return (Math.sqrt(x));
}

document.getElementById("menu").addEventListener("click", function () {
    var selection;
    do {
    selection = Number(window.prompt("Menu:\n 1. Somar dois números \n 2. Raiz quadrada de um número."));
    
    switch (selection){
        case 1: alert(somar2());
        case 2: alert(sqrt());
        default: alert("INFORME UM NÚMERO VÁLIDO");
    }
}while(selection !== 1 && selection !== 2);
    
});
