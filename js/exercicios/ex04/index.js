// const nomePoder = prompt("Insira o nome do poder")
const forca = prompt("Insira a força do poder")
// const nomePersonagem = prompt("Insira o nome do personagem")
// const vida = prompt("Pontos de vida")
const defesa = prompt("Insira o poder de defesa do oponente")
const escudo = confirm("O oponente tem vai ter escudo?")



if (forca > defesa) {
    alert("O dano aplicado sera de " + (forca - defesa))
} else if(forca > defesa && escudo) {
    alert("O dano aplicado é de " + ((forca - defesa) / escudo))
}


