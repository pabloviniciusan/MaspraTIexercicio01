/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero. 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

const prompt = require('prompt-sync')()

console.log("Vamos calcular e ver o tipo de triângulo");

let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));

if (A < B + C && B < A + C && C < A + B) {

    if (A === B && B === C) {
        console.log("O triângulo é do tipo Equilatero");
    } else if (A === B || A === C || B === C) {
        console.log("O triângulo é do tipo Isósceles");
    } else {
        console.log("O triângulo é do tipo Escaleno");
    }
} else {
    console.log("Esses valores não formam um triângulo");
}