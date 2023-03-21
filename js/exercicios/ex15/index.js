let lista = ["bombeiro"]


function listarVagasDisponiveis() {
    let a = prompt(lista.forEach(listarVagasDisponiveis))
}

function criarUmaNovaVaga() {
    const nome = prompt("Informe o nome da vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const data = prompt("E a data limite:")

    const confirmacao = confirm(
        "Gostaria de salvar essa vaga?\n" +
        "\nNome: " + nome +
        "\nDescrição: " + descricao + 
        "\nData: " + data
    )

        let obj = {
            name: nome, descricao: descricao, data: data 
        }

    if (confirmacao) {
        lista.push(obj)
        alert("Imovel salvo com sucesso!")
    }
}

function visualizarVagas() {
    const indice = prompt("Informe o indice da vaga que gostaria de visualizar:")
}








function exibirMenu() {
    return prompt (
        "Vagas De Emprego\n" +
        "1. Listar vagas disponiveis\n" +
        "2. Criar uma nova vaga\n" + 
        "3. Visualizar uma vaga\n" +
        "4. inscrever um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair\n"
    ) 
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        if (opcao == 1) {
            resultado = listarVagasDisponiveis()

        } else if(opcao == 2) {
            resultado = criarUmaNovaVaga()
            
        } else if(opcao == 3) {
            resultado = visualizarUmaVaga()

        }
    } while (opcao !== "6")
} 

executar()