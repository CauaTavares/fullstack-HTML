// MÉTODOS

let pessoa = {
    nome: "caua",
    idade: 26,
    dizerOla() {
        console.log("Olá, mundo! Meu nome é " + this.nome);
    }
}
// console.log(pessoa);
// pessoa.dizerOla()

// FUNÇÕES RECURSIVAS

function dividir(num) {
    console.log(num);
    if (num % 2 === 0) {
        dividir(num / 2)
    }else {
        return num
    }
}

// dividir(256)

function dobrar(num) {
    console.log(num);
    dobrar(num * 2)
}

dobrar(9)


