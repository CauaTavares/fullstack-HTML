let opcao = ""


do {
    opcao = prompt("Escolha alguma opcao: \n1) Opcao \n2) opcao \n3) opcao \n4) opcao \n5) encerrar")
    if (opcao == 1) {
        alert("Você escolheu a opção numero 1")
    } else if (opcao == 2) {
        alert("Você escolheu a opçâo numero 2")
    } else if (opcao == 3) {
        alert ("Você escolheu a opção numero 3")
    } else if (opcao == 4) {
        alert ("Você escolheu a opção numero 4") 
    }
} while (opcao < 5)

alert("O programa está sendo encerrado")
