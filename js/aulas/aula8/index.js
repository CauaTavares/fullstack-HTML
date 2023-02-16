let dinheiro = Number(prompt("quanto de dinheiro tu tenes?"))
let opcao = 0
let quantia = 0


do {
    opcao = prompt("tu tenes " + "R$" + dinheiro + " de dinheiro " + "gostaria de: " + "\n1) adicionar \n2) remover" + "\n3) sair")

    if (opcao == 1) {
        quantia = Number(prompt("Qual quantia gostaria de adicionar?"))
        dinheiro += quantia
        alert(dinheiro)
        console.log(dinheiro)
        console.log(quantia)
    } else if (opcao == 2) {
        quantia = prompt("Qual quantia gostaria de remover?")
        dinheiro -= quantia
        alert(dinheiro)
    }
} while (opcao < 3)

alert("Encerrando o programa..")