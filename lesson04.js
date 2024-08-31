/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')()

console.log("Escolha sua comida favorita");
console.log("1. Hamburguer");
console.log("2. Pizza");
console.log("3. Coxinha");

let choice = prompt("Digite sua opção: ");

switch (choice) {
    case '1':
        console.log("Você escolheu hamburguer");
        break;
        case '2':
        console.log("Você escolheu pizza");
        break;
        case '3':
        console.log("Você escolheu coxinha");
        break;
        default:
            console.log("Digite uma opção válida!");               
}