let palavra = prompt("Informe uma palavra:")
let palavraInversa = ""


for (
    let index = (palavra.length - 1);
    index >= 0;
    index--
) {
    palavraInversa += palavra[index]
}

if(palavraInversa == palavra) {
    alert("Isso é um palindromo: " + palavra)
} else {
    alert("A Palavra não é um palindromo: " + "\n" + palavra + "\n" + palavraInversa)
}
