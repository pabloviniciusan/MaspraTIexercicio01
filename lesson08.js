/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')()

let value1 = parseFloat(prompt("Digite o 1 algoritimo: "));
let value2 = parseFloat(prompt("Digite o 2 algoritimo: "));

if (value1 === value2) {
    console.log("Os valores não podem ser iguais");
} else if (value1 < value2) {
    console.log("Valores em ordem crescente: " + value1 + ", " + value2);
} else {
    console.log("Valores em ordem crescente: " + value2 + ", " + value1);
}