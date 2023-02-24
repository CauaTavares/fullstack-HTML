let arrs = []
let opcao = ""

 do {
    opcao = prompt("Imoveis cadastrados: " + arrs.length + 
    "\n" + "Escolha uma opção:" + 
    "\n1) Salvar um imovel" + 
    "\n2) Mostrar todos" + 
    "\n3) Sair"
    )

    if (opcao == 1) {
        let arr = {}
        arr.proprietario = prompt("Nome do proprietario:")
        arr.quartos = prompt("Quantidade de quarto(s):")
        arr.banheiro = prompt("Quantidade de banheiro(s):")
        arr.garagem = prompt("Quantidade de garagem(ns):")

        const confirmacao = confirm("Gostaria de salvar o imovel? " + 
        "\nNOME: " + arr.proprietario + 
        "\nQUARTOS: " + arr.quartos + 
        "\nBANHEIROS: " + arr.banheiro + 
        "\nGARAGEM: "+ arr.garagem
        )

        if (confirmacao) {
            arrs.push(arr)
            alert("Imóvel salvo com sucesso!")
        }

    } else if (opcao == 2) {
        for(let i = 0; i < arrs.length; i++) {
            alert(
                "Imóvel " + (i + 1) +
                "\nProprietário: " + arrs[i].proprietario +
                "\nQuartos: " + arrs[i].quartos +
                "\nBanheiros: " + arrs[i].banheiro + 
                "\nGaragem: " + arrs[i].garagem
            )
        }
    }

} while (opcao !== "3")

alert("PROGRAMA ENCERRADO.")

