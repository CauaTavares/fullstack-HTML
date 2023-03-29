let arr = ["valente", "nathalia", "tavares"]
let opcao = ""

do {
    let mensagem = ""
    for(let i = 0; i < arr.length; i++) {
        mensagem += (i+1) + "º - " + arr[i] + "\n"
    }

    opcao = prompt(
        mensagem + "\n" + 
        "Escolha uma das opções: \n1) Novo paciente \n2) Consultar paciente \n3) Sair")
    if (opcao == 1) {
        let nome = prompt("Informe o nome do paciente que gostaria de adicionar:")
        nome = arr.push(nome)
    } else if (opcao == 2) {
        let removerPaciente = arr.shift()
        alert("Você removeu o paciente: " + removerPaciente)
    }

} while (opcao < 3)

alert("Programa encerrado.")
