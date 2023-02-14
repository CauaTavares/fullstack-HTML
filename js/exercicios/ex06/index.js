const name = prompt("Qual seu nome?")
let viagem = prompt("Já visitou alguma cidade?")
let cidades = ""
let contagem = 0


while (viagem === "sim") {
    let cidade = prompt("Informe o nome da cidade:")
    cidades += " \n " + cidade
    viagem = prompt("visitou outra???")
    contagem++
}

alert(name + "\n" + "Você visitou: " + "\n" + contagem + " cidades" + "\n" + cidades)


