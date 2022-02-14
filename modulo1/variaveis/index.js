// Exercício 14/02/2022

//Exercício 1

const nome = undefined; //Questão A)
let idade = undefined; //Questão B)

console.log(typeof nome); //Foi atribuido o tipo Strings porque é do tipo nome; Questão C)
console.log(typeof idade); // Foi atibuido o tipo Namber porque é do tipo número; Questão C)

const nome2 = prompt("Qual o seu nome?"); // Questão E)
const idade2 = prompt("Qual a sua idade?"); // Questão E)
const idadeNumero = Number(idade2); // Questão E)

console.log(typeof nome2); //Agora foi pedido para informar o seu nome. por isso a diferença.; Questão F)
console.log(typeof idadeNumero) //tb foi pedido para informar sua idade, po isso houve diferença do anterior.; Questão F)

console.log("Olá",nome2 , "você tem" ,idade2 , "anos"); // Questão G)

// Exercício 2

let azul = prompt("Você está usando azul hoje?"); true
let chovendo = prompt("Está chovendo na sua cidade?");true
let hoje = prompt("hoje é segunda feira?");true

console.log(azul);
console.log(chovendo);
console.log(hoje);

// Exercício 3

let a = 10 // Aqui faremos uma lógica para trocar os valores
let b = 25

a = 25 // Depois de trocados, teremos o seguinte resultado:
b = 10

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10 

let a = prompt("Digite o valor de A: ");
let b = prompt("Digite o valor de B: ");

console.log(a);
console.log(b);

a > b;
b > a;
a = b;
b = a; 





