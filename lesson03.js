/*Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

const prompt = require('prompt-sync')()

let grade = parseFloat(prompt("Digite a nota do aluno (0 à 10): "));

if (grade >= 7 && grade <= 10) {
    console.log("O aluno está aprovado");   
} else if (grade >= 6 && grade < 7) {
    console.log("O aluno está em recuperação");   
} else if (grade < 6) {
    console.log("O aluno está reprovado");   
} else {
    console.log("Nota inválida");
}