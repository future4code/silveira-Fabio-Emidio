// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
  // implemente sua lógica aqui
//  return num1 + num2
//}

// EXERCÍCIO 0B
//function imprimeMensagem() {
  // implemente sua lógica aqui
  //const mensagem = prompt('Digite uma mensagem!')

  //console.log(mensagem)
//}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
/*function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let altura = Number(prompt("Digite a altura:"))
  let largura = Number(prompt("Digite a largura:"))
  let medidas = altura * largura

  console.log(medidas)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = prompt("Em que ano estamos:")
  let anoNascimeno = prompt("Em que ano você nasceu:")
  let idade = anoAtual - anoNascimeno

  console.log(idade)

}*/

// EXERCÍCIO 03
/*function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso/(altura * altura)

  return imc;

}*/


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Digite seu nome: ")
  const idade = prompt("Digite sua idade: ")
  const email = prompt("Digite seu email: ")

   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt('Digite 1 cor favorita: ')
  const cor2 = prompt('Digite 2 cor favorita: ')
  const cor3 = prompt('Digite 3 cor favorita: ') 
  const coresConcat = [cor1, cor2, cor3]

  console.log(coresConcat)
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const frasemaiuscula = string.toUpperCase()

  return frasemaiuscula


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

 
 const totalDeIngressos = custo / valorIngresso

 return totalDeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  resultado = string1.length === string2.length 

  return resultado

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

 //return; 

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}