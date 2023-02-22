let arr = []
let opcao = ""


 do {
    opcao = prompt("Imoveis cadastrados: " + arr.length + "\n" + "Escolha uma opção:" + "\n1) Salvar um imovel" + "\n2) Mostrar todos" + "\n3) Sair")

    if (arr.length > 0) {
        opcao
    }

    if (opcao == 1) {
        let pessoa = {}
        let nome = prompt("Nome do proprietario:")
        let quartos = prompt("Quantidade de quarto/s:")
        let banheiro = prompt("Quantidade de banheiro/s:")
        let garagem = prompt("Quantidade de garagem/ns:")

        pessoa.nome = nome
        pessoa.quartos = quartos
        pessoa.banheiro = banheiro
        pessoa.garagem = garagem
        arr.push(pessoa)
        alert("Você adicionou o imovel: " + "\nNOME: " + nome + "\nQUARTOS: " + quartos + "\nBANHEIROS: " + banheiro + "\nGARAGEM: "+ garagem)

    } else if (opcao == 2) {
        
    }

} while (opcao !== "3")


alert("FECHOU..........")

