// MÉTODOS

let pessoa = {
    nome: "caua",
    idade: 26,
    dizerOla() {
        console.log("Olá, mundo! Meu nome é " + this.nome);
    }
}
console.log(pessoa);
pessoa.dizerOla()


// FUNÇÕES RECURSIVAS

function dividir(num) {
    console.log(num);
    if (num % 2 === 0) {
        dividir(num / 2)
    }else {
        return num
    }
}
dividir(256)


function dobrar(num) {
    console.log(num);
    dobrar(num * 2)
}
dobrar(9)


function fatorial(num) {
    console.log("Numero: " + num);
    if (num === 0) {
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1) );
        return num * fatorial(num - 1)
    }
}
console.log(fatorial(5));


// FUNÇÕES ANÔNIMAS

function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(4, 5));

operacao = subtrair = function (a, b) {
    return a - b
}

console.log(subtrair(36, 13));
