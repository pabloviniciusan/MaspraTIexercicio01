//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite um número inteiro: "));

if (n1 % 2 === 0) {
    console.log(`O número ${n1} é par.`);
} else {
    console.log(`O número ${n1} é impar`);
}