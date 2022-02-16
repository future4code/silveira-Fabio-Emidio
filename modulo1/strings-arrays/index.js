// Exercícios Stings e Arryas

/* let array
console.log('a. ', array)  // a. undefined

array = null
console.log('b. ', array)  // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //c. 11

let i = 0
console.log('d. ', array[i]) //d. 3

array[i+1] = 19
console.log('e. ', array) // e.(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) */ //f. 9 




//Exercicio 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBIR NUM ÔNIBUS EM MIRROCOS 27;


//--------------------------------------------------------------------------------------------------------------



/* 1. 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

   const nomeDoUsuario = prompt("Informe seu nome: ")
   const emailDoUsuario = prompt("Informe seu e-mail: ")

   console.log("O e-mail "  + emailDoUsuario +  " foi cadastrado com SUCESSO. seja bem-vinda(a) ",  nomeDoUsuario  )




// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    const comidasPref = ["Pizza" ,"Lasanha" ,"Morango" ,"strogonoff" ,"Feijoada" ]
    
    //a) Imprima no console o array completo

    console.log(comidasPref)
    
    //b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    console.log("Essas são as minhas comidas preferidas: ", comidasPref[0])
    console.log(comidasPref[1])
    console.log(comidasPref[2])
    console.log(comidasPref[3])
    console.log(comidasPref[4])

    //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.
    
    const comidaPrefUsuario = prompt("Digite sua comida preferida: ", ) 

    const comidaPrefNova = comidaPrefUsuario
    

    console.log(comidasPref[2] = comidaPrefUsuario);


   //------------------------------------------------------------------------------------------

   // 3. 

   const listaDeTarefas = []

   let tarefa1 = prompt("Digite a 1 tarefa que você precise realizar hoje: ")
   let tarefa2 = prompt("Digite a 2 tarefa que você precise realizar hoje: ")
   let tarefa3 = prompt("Digite a 3 tarefa que você precise realizar hoje: ")

   listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
   console.log( listaDeTarefas) 

   const tarefaRealizada = Number(prompt(" Digite um número da tarefa que você já realizou: "))
   listaDeTarefas.splice(tarefaRealizada,1)

   console.log(listaDeTarefas) 