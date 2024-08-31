/*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require('prompt-sync')()

let weight = parseFloat (prompt("Digite seu peso em kg: "));
let height = parseFloat (prompt("Digite sua altura em metros: "));

let imc = weight / (height * height);

let category;

if (imc < 18.5){
    category = "Baixo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    category = "Peso normal"
} else if (imc >= 25.0 && imc < 29.9) {
    category = "Sobrrepeso"
} else if (imc >= 30.0 && imc < 39.9) {
    category = "Obeso"
}

console.log("Seu IMC é: " + imc.toFixed(2));
console.log("Categoria de peso: " + category);

 