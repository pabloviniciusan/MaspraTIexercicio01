/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while. */

const prompt = require('prompt-sync')()

let number = parseInt(prompt("Digite um número para calcular o fatorial: "));

let fatorial = 1;

if (number >= 0) {
    for (let i = 1; i <= number; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${number} é ${fatorial}`);
} else {
    console.log("Não inserir número negativo!");
}