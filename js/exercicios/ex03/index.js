const nome1 = prompt ("nome do primeiro veiculo")
const veiculo1 = prompt ("velocidade do primeiro veiculo")

const nome2 = prompt ("nome do segundo veiculo")
const veiculo2 = prompt ("velocidade do segundo veiculo")

if (veiculo1 > veiculo2) {
    alert("O " + nome1 + " esta mais rapido na velocidade " + veiculo1)
} else if(veiculo2 > veiculo1) {
    alert("O veiculo 2 esta mais rapido a " + veiculo2)
} else {
    alert("Os veiculos entâo na mesma velocidade")
}

