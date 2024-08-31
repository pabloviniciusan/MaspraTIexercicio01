/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números. */

const prompt = require('prompt-sync')()

let sum = 0;
let count = 0;
let number;

do {
    number = parseFloat(prompt("Digite um número decimal (quando quiser encerrar digite 0): "));

    if (number !== 0) {
        sum += number
        count ++;
    }
} while (number !== 0);

if (count > 0) {
    let average = sum / count;
    console.log("A média aritmética é: ", average); 
} else {
    console.log("Insira um número válido!");
}