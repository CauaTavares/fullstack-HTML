let arr = [
    "1º Imóvel",
    ["2º Imóvel", 2, "true"],
    [
        ["caua", 1, 2, "sim"]
    ]
]

let pessoa = {}

let opcao = ""


do {
    opcao = prompt(arr + pessoa + "\n" + "Escolha uma opção:" + "\n1) Salvar um imovel" + "\n2) Mostrar todos" + "\n3) Sair")


    if (opcao == 1) {
        pessoa.colegas = prompt("Nome do proprietario")
        pessoa.colegas = prompt("Quantidade de quartos")
        pessoa.colegas = prompt("Quantidade de banheiros")
        pessoa.colegas = prompt("Possui garagem")
    } else if (opcao == 2) {

    }

} while (opcao < 3)

alert("FECHOU..........")

