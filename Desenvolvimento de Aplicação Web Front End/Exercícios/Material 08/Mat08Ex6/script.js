/* 
6 – Crie um programa para ler uma quantidade de números inteiros definida pelo usuário
e ao final imprima qual foi o maior e o menor número informado.
*/

maior = 0;
menor = 0;
do{
    let n = (window.prompt("Informe um número (ou '?' para sair): "));
    if (n == '?'){
        break;
    }else{
        if (n > maior){
            maior = n;
        }  
        if (n < menor){
            menor = n;
        }
    }
}while(true);

console.log(`Maior = ${maior} ;Menor = ${menor}`);
alert(`Maior = ${maior} ;Menor = ${menor}`);