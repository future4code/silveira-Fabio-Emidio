// 1. Exercício de interpretacao de código

   // a) Testa se o número digitado pelo usuario com o resto de 2 é igual a 0;

   // b) Números PAR

   // c) Números IMPAR 

//2. 

   // a) para saber o preço de cada fruta

   //b) O preço da fruta  maça  é  R$  5

   //c) O preço da fruta  pera  é  R$  5


//3.
    //a) solicitando ao usuário para digitar o primeiro número. (do tipo Number)

    //b) 1. "Esse número passou no teste";
    //   2. "mensagem não definida"

    /*c) Esse número passou no teste
    index.js:116 Uncaught ReferenceError: mensagem is not defined
    at index.js:116:13
    (anônimo) @ index.js:116*/



//-----------------------------------------------------------------------------------------


// 1. Exercício de escrita de código

const idade = Number (prompt("Informe sua idade: "))

if (idade >= 18){

    console.log(`Você tem ${idade} e está apto a Dirigir!`);


}

else {
    console.log(`Você não está apto a dirigir.`);


}


// 2. a)

const turno = prompt("Digite seu turno: M (Matutino) ou V (vespertino) ou N (Noturno)")



if(turno == "M"){
    console.log("Bom dia!!")


}

else if(turno == "V"){
    
    
}

else if (turno == "N"){
    console.log("Boa noite!!")

}

//b)

let turno2 = prompt("Digite seu turno: M (Matutino) ou V (vespertino) ou N (Noturno)")
switch (turno2){


case `M`:
    console.log("Bom dia!!")
    break
case `V`:
    console.log("Boa tarde!!")
    break
case `N`:
    console.log("Boa noite!!")
    break
default:
    console.log("Resposta não encontrada!")
    break        

}

//4. 

let generoFilme = prompt(`Qual é o gênero do Filme:`)
let precoIngresso = prompt(`Quanto ta o ingresso:`)



if (generoFilme === `fantasia`){
    precoIngresso <= 15
    console.log("Bom filme!!")


}
else {
    console.log("Escolha outro filme: ")

}




