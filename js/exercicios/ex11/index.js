let arr = ["valente", "nathalia", "tavares"]
let opcao = ""


do {
    opcao = prompt(arr + "\n" + "Escolha uma das opções: \n1) Novo paciente \n2) Consultar paciente \n3) Sair")
    if (opcao == 1) {
        let nome = prompt("Informe o nome do paciente que gostaria de adicionar:")
        nome = arr.push(nome)
    } else if (opcao == 2) {
        let ultimoElemento = arr.shift()
        alert("Você removeu o paciente: " + ultimoElemento)
    }

} while (opcao < 3)

alert("Programa encerrado CARALHO")


