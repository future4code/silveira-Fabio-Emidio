//------Exercício de interpretação de código----------

//1.

// a) {nome: 'Amanda Rangel', apelido: 'Mandi'} 0 (3) [{…}, {…}, {…}]
// index.js:11 {nome: 'Laís Petra', apelido: 'Laura'} 1 (3) [{…}, {…}, {…}]
// index.js:11 {nome: 'Letícia Chijo', apelido: 'Chijo'} 2 (3) [{…}, {…}, {…}]


//2. 

// a)   'Amanda Rangel', 'Laís Petra', 'Letícia Chijo'

//3.

// a) (2) [{…}, {…}]0: {nome: 'Amanda Rangel', apelido: 'Mandi'}1: {nome: 'Laís Petra', apelido: 'Laura'}length: 2[[Prototype]]: Array(0)


//--------- Exercício de escrita de código----------

//1. 


const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a)

let novoNomesPets = []

const nomesPets = pets.filter((elemento) => {
    novoNomesPets.push(elemento.nome)
})

console.log(novoNomesPets);

// b)

let novoPetsSalsicha = []

let petsSalsicha = pets.filter((elemento) => {
    if (elemento.raca === "Salsicha") {
        novoPetsSalsicha.push(elemento)
    }
})

console.log(novoPetsSalsicha);

// c)

let novoCupomPoodles = []

let cupomPoodles = pets.filter((elemento) => {
    if (elemento.raca === 'Poodle') {
        novoCupomPoodles.push((`Você ganhou um cupom de desconto de 10% para tosar o/a ${elemento.nome}`));
    }
})

console.log(novoCupomPoodles);

//2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)

let novoNomeProdutos = []

let nomeProdutos = produtos.filter((elemento) => {
    novoNomeProdutos.push(elemento.nome)
})

// b)

let novoPrecoDesconto = []

let precoDesconto = produtos.filter((elemento) => {
    desconto = elemento.preco - (elemento.preco * 0.05); {
        novoPrecoDesconto.push(`Nome:${elemento.nome}, preço: ${desconto}`)
    }
})

console.log(novoPrecoDesconto);

// c)

let novoApenasBebidas = []

let apenasBebidas = produtos.filter((elemento) => {
    if (elemento.categoria === "Bebidas") {
        novoApenasBebidas.push(elemento)
    }
})

console.log(novoApenasBebidas);

// d)

let novoApenasYpe = []

let apenasYpe = produtos.filter((elemento) => {
    if (elemento.nome.includes("Ypê") === true) {
        novoApenasYpe.push(elemento)
    }
})

console.log(novoApenasYpe);

// e)

let novoCompreYpe = []

let compreYpe = produtos.filter((elemento) => {
    if (elemento.nome.includes("Ypê") === true) {
        novoCompreYpe.push((`Compre ${elemento.nome} por ${elemento.preco}`))
    }
})

console.log(novoCompreYpe)










 
