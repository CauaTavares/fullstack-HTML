const arr = ["valete", " reis", " ouro", " dama", " paus", " copas", " espadas"]
let opcao = ""


do {
    opcao = prompt(arr + "\n" + "Escolha uma opção: \n1) Adicionar uma carta \n2) Puxar uma carta \n3) Sair")

    if (opcao == 1) {
        let nome = prompt("Infome o nome da carta que gostaria de adicionar:")
        nome = arr.unshift(nome)
    } else if (opcao == 2) {
        let removerCarta = arr.shift()
        alert("Você removeu a carta: " + removerCarta)
    }

} while (opcao < 3)

alert("Encerrando o programa.")
