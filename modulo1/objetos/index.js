//1. Exercício de escrita

  //a) Matheus Nachtergaele;
  //   4
  // Canal Brasil 19h


//2. Exercício de escrita

  //a) cachorro
  //     nome:Juca
  //     idade:3
  //     raca: SRD

  //b) (spread) copia de um objeto (ou array)

  
//3. Exercício de escrita

  //a) false

  //b) 

//------------------------------------------------------


// Exercício de escrita

/*1. a)
 
        const pessoa = {
            nome:"Fabio",
            apelidos: ["Fabinho", "Binho", "Fabuloso"]
            
        }

        const objeto1 = pessoa.nome
        const objeto2 = pessoa.apelidos
        console.log(`Eu sou ${objeto1}, mas pode me chamar de: ${objeto2}`);

//  b) 

        const novoApelido ={
            ...pessoa,
            apelidos: [`Brother, Flash, Fabiluz`]
                   
        
        }
        console.log(novoApelido)*/



// 2.   
        
//  a)

     /* const pessoa1 = {
          nome1: "Lyandra",
          idade1: 29,
          profissao1: "Empreededora",
        

          }

          minhaFuncao:(pessoa1) => {
            console.log(`${nome1}, `)
          //((`${pessoa1}, ${nome1Caractere}, ${idade1}, ${profissao1}, ${profissao1Caractere}`))

      } 
          /*nome1Caractere = nome1.lenght 
          profissao1Caractere = profissao1.lenght

           function minhaFuncao(pessoa1)

          return */

        /*const novaPessoa1 = pessoa1.nome1.lenght
        const novaProfissao1 = pessoa1.profissao1.lenght*/
           

      /*const pessoa2 = {
          nome2: "Fabio",
          idade2: 34,
          profissao2: "Dev"

      }*/

       

      /*console.log(`1. ${pessoa1.nome1}`)
      console.log(`2. ${pessoa1.novaPessoa1}`)
      console.log(`3. ${pessoa1.idade1}`)
      console.log(`4. ${pessoa1.profissao1}`)
      console.log(`5. ${pessoa1.novaProfissao1.lenght}`)*/


 // 3.
 
    const carrinho = []
    const fruta1 ={
        nome: "Banana",
        disponibilidade: true
    }
    const fruta2 = {
        ...fruta1,
        nome: "Morango"
    }
    const fruta3 = {
        ...fruta1,
        nome: "Melão"
    }
    function funcaoCarrinho (objeto){

        Carrinho.push(objeto)
    }
    funcaoCarrinho(fruta1)
    funcaoCarrinho(fruta2)
    funcaoCarrinho(fruta3)


    
    
        

 

