function calcular(a, b, operacao) {
    console.log(("Realizando uma operação."));
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizar uma soma.");
    return x + y
}

calcular(calcular(3, 5, somar))

console.log(calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração.");
    return x - y
}));

function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    });
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    });
})


// HIGH-ORDER FUNCTIONS E ARRAY 

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]


// MAP

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

const nomes = personagens.map(function (personagens) {
    return personagens.nome
})
console.log(nomes);


// FILTER

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].raca === "Orc") {
//         orcs.push(personagens[i])
//     }
// }

const orcs = personagens.filter(function (personagens) {
    return personagens.raca === "Orc"
})
console.log(orcs);


// REDUCE 

const nivelTotal = perosnagens.reduce(function (valorAcumulado, personagens) {
    return valorAcumulado + personagens.nivel
}, 0)

console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagens) {
    if (valorAcumulado[personagens.raca]) {
        valorAcumulado[personagens.raca].push(personagem)
    } else {
        valorAcumulado[personagens.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas);


// SORT

const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel
})

console.log(personagens);
console.log(personagensOrdenados);





let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let b = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

let k = []


a.forEach((value, index) => {
    let valueK = value / b[index]
    k.push(valueK)

}) 














