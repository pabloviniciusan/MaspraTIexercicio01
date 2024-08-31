/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')()

let amount = parseInt(prompt("Digite quantas maçãs comprou: "));

let unitPrice;

if (amount < 12) {
    unitPrice = 0.30;
} else {
    unitPrice = 0.25;
}

let total = amount * unitPrice;

console.log("O valor total da compra é de: " + total.toFixed(2));