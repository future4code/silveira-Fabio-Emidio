// Exercício de interpretação de códigos

/* 1° const bool1 = true
      const bool2 = false
      const bool3 = !bool2

      let resultado = bool1 && bool2
      console.log("a. ", resultado)    // false;

      resultado = bool1 && bool2 && bool3 
      console.log("b. ", resultado)    // false;

      resultado = !resultado && (bool1 || bool2) 
      console.log("c. ", resultado)    //  true;

      console.log("d. ", typeof resultado)  //boolean;

   2°  

let primeiroNumero =  Number (prompt("Digite um numero!"))  // Tem que colocar o Number antes do prompt para reconhcer o numero de entrada;
let segundoNumero =   Number (prompt("Digite outro numero!")) // Tem que colocar o Number antes do prompt para reconhcer o numero de entrada;

const resultadoDaSoma = primeiroNumero + segundoNumero

console.log(resultadoDaSoma) // Sem a mudança irá aparecer os numeros pedidos em sequência, e não a soma dos mesmos; 


3° // Apenas colocar o comando Number antes de cada prompt; */

// 1. Exercício de escrita de códigos

// a) Pergunte a idade do usuário

    let idade = (prompt("Digite sua idade"))

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    let idadeAmig = (prompt("Digite a idade do seu melhor amigo(a)"))

//c) Imprima na console a seguinte mensagem: "sua idade é maopr do que a do seu amigo?", Seguido pela resposta (true ou false)

    console.log("Sua idade é maior do que a do seu amigo? ", idade > idadeAmig)

//d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

    console.log("A diferença de idade entre vocês é de: ", idade - idadeAmig)

// 2° Faça um programa que:

//a) Peça ao usuário que insira um número par

    let numero = (Number(prompt("Digite um número PAR: ")));

//b) Imprima na console o resto da divisão desse número por 2

    let restoDaDivisao = numero % 2;
    console.log("O resto de número dividido por 2 é: " ,(Number (restoDaDivisao/2)));

//c)  Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    //Sempre que o número for par o resto da divisão será 0;
      
//d)  O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

      // O resto da divisão será fracionado.

//3° Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
     
    let idadeUsuario = (Number(prompt("Digite sua idade: ")))

//a) A idade do usuário em meses

    console.log("A idade do usuário em meses é de: ", idadeUsuario*12)  

//b)  A idade do usuário em dias

    console.log("A idade do usuário em dias é de: ", idadeUsuario*365)

//c) A idade do usuário em horas

    console.log("A idade do usuário em dias é de ", (365*24)*idadeUsuario)

//4° Faça um programa que pergunte ao usuário dois números. 
//Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:   
 
    let num1 = (Number(prompt("Digite um número: ")));
    let num2 = (Number(prompt("Digite outro número: ")));

    console.log("O primeiro número é maior que o segundo? ", num1 > num2);
    console.log("O primeiro numero é igual ao segundo? ", num1 === num2);

    let restoDivisao = num1 % num2
    console.log("O primeiro numero é divisível pelo segundo? ", (restoDivisao === 0));
        
    let restoDaDivi = num2 & num1
    console.log("O segundo numero é divisível pelo primeiro? ", (restoDaDivi === 0));

<<<<<<< HEAD
    //Fim
=======
>>>>>>> ac394db438ce66a780437c909d42459b4a46b3af




