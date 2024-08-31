/*Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for. */

const prompt = require('prompt-sync')()

let sum = 0;

for (let i = 1; i <= 5; i++) {
    let number = parseInt(prompt(`Digite o ${i}º número: `));
    sum += number;
}

console.log("A soma total é:", sum);