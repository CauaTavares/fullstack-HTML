// FUNÇÃO

function ola() {
    console.log("Olá, mundo!");
}
ola()


// PARÂMETROS DE UMA FUNÇÃO

function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}
dobro(5)


function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}
dizerOla("caua")
dizerOla()


function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}
soma(7, 6)


function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome,  // no JS nome: nome se pode abreviar somente com "nome"
        email,
        senha,
        tipo
    }
    console.log(usuario);
}


function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    //  .........
}
muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")


function objetosComoParametro(usuario) {
    // .......
    usuario.nome
    usuario.telefone
}
const dadosDoUsuario = {
    nome: "",
    telfone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}
objetosComoParametro(dadosDoUsuario)


//  RETORNO DE UM FUNÇÃO 

function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}
const resultado = calcularMedia(7, 2)
console.log(resultado);


function criarProduto(nome, preco) {
    const produto = {
        nome,  // um unico valor é porque é nome = nome
        preco,
        estoque: 1 
    }
    return produto
}
console.log(criarProduto("Notebook Intel Core i3 8GB", 2500));


function areaRetangular(base, altura) {
    return base * altura
}


function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaRetangular(3, 5));
console.log(areaQuadrado(9));


function ola() {
    let texto = "..."
    return texto
    texto = "Olá, mundo"
    console.log(texto);
}
console.log(ola());


function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(29));
