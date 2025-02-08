// 2  -  A  nota  de  um  estudante  é  calculada  a  partir  de  3  notas  atribuídas  respectivamente  a 
// um trabalho de laboratório, uma avaliação semestral e um exame final. Cada uma dessas 
// notas  possui  pesos  diferentes  para  o  cálculo  da  média  final  do  aluno.  Assim,  faça  um 
// algoritmo  que  receba  as  3  notas,  os  pesos  das  mesmas  e  a  média  necessária  para 
// aprovação do  aluno.  O  algoritmo deve  calcular  e  exibir  a  média ponderada  para  o  aluno. 
// Além  disso,  mostre  a  situação  "Aprovado"  (média  maior  ou  igual  que  media  aprovação), 
// "exame especial" (média entre 4 e a média de aprovação) ou "Reprovado" (média menor 
// que 4).

const n = Number(window.prompt("Informe quantidade de notas que serão utilizadas: "));
const min = Number(window.prompt("Informe a nota mínima para aprovação: "));

console.log(n);
console.log(min);

function mediaPon(i){
    somatotal = 0;
    num = 0;
    for (x = 0; x < i; x++){
        peso = Number(window.prompt(`Informe o valor do Peso ${x+1}: `));
        nota = Number(window.prompt(`Informe o valor da Nota ${x+1}: `));
        somatotal += peso;
        num += peso*nota;
    }
    return num/somatotal;
}

mP = mediaPon(n);
res = "Aprovado";

console.log(mP);
console.log(res);

if (mP < min){
    res = "Reprovado"
}

alert(`Média obtida: ${mP} \nSituação do Aluno: ${res}`);