const name = prompt("Qual seu nome?")
let cidades = ""
let contagem = 0

let viagem = prompt("Já visitou alguma cidade?")

while (viagem === "sim") {
    let cidade = prompt("Informe o nome da cidade:")
    cidades += " \n " + cidade
    contagem++
    viagem = prompt("visitou outra???")
}

alert(name + "\n" + "Você visitou: " + "\n" + contagem + " cidades" + "\n" + cidades)


