let opcao = ""

do {
    opcao = prompt(
        "Escolha uma das opções: " +
        "\n1) Listar vagas disponiveis:" +
        "\n2) Criar uma nova vaga:" +
        "\n3) Visualizar uma vaga:" + 
        "\n4) Inscrever um candidado em uma vaga:" +
        "\n5) Excluir uma vaga:" +
        "\n6) Sair"
    )

    if (opcao == 1) {
        function criarVaga() {

        }
        let nome = prompt("Insira o nome da vaga: ")
        let descricao = prompt("Insira uma breve descrição:")
        let data = prompt("E uma data limite:")
        confirm(
            "Gostaria de salvar essa vaga?" +
            "\n" + nome +
            "\n" + descricao +
            "\n" + data
        )
    }













}while (opcao !== "6")