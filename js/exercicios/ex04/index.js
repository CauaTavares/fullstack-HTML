const name1 = prompt("Insira o nome do Herói")
const forca = prompt("Insira a força do poder")

const name2 = prompt("Insira o nome do vilão")
const defesa = prompt("Insira o poder de defesa do oponente")
const escudo = confirm("O oponente tem vai ter escudo?")
let vida = prompt("Pontos de vida")

let dano = 0


if (forca > defesa && escudo == false) {
    dano = forca - defesa
    alert("O dano aplicado sera de " + dano)
} else if(forca > defesa && escudo == true) {
    dano = ((forca - defesa) / 2)
    alert("O dano aplicado é de " + dano)
} else if(forca < defesa) {
    alert("O dano causado foi de: 00")
}

vida = vida - dano

alert(name1 + "\nFORÇA: " + forca + "\n\n" + name2 + "\nVida: " + vida + "\nDefesa: " + defesa)