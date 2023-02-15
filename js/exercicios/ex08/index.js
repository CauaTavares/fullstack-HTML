let dinheiro = prompt("quanto de dinheiro tu tenes?")
let opcao = 0
let quantia = 0

const x = parseFloat(dinheiro)
const y = parseFloat(quantia)


do {
    opcao = prompt("tu tenes " + "R$" + soma + " de dinheiro " + "gostaria de: " + "\n1) adicionar \n2) remover" + "\n3) sair")
    if (opcao == 1) {
        quantia = prompt("Qual quantia gostaria de adicionar?")
        // let x = parseFloat(dinheiro)
        // let y = parseFloat(quantia)
        let soma = x += y 
        alert(soma)
    } else if (opcao == 2) {
        quantia = prompt("Qual quantia gostaria de remover?")
        alert(dinheiro -= quantia)
    }
} while (opcao < 3)

alert("Encerrando o programa..")
