const distancia = prompt("Escolha a medida: \n1) mm \n2) cm \n3) dm \n4) dam \n5) hm \n6) km")
const valor = prompt("qual valor para converter? ")


switch (distancia) {
    case "1":
        alert("O valor é de " +  valor * 1000)
        break
    case "2":
        alert("O valor é de " + valor * 100)
        break
    case "3":
        alert("O valor é de " + valor * 10)
        break
    case "4":
        alert("O valor é de " + valor / 10)
        break
    case "5":
        alert("O valor é de " + valor / 100)
        break
    case "6":
        alert("O valor é de " + valor / 1000)
        break
    default:
        alert("Opção invalida... \nuse somente numeros")
}






