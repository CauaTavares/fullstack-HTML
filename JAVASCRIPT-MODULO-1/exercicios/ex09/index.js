let indice = 1
let resultado = 0


for (
    let numero = prompt("Informe um numero:"); 
    indice <= 20; 
    indice++
) {
    resultado = numero * indice
    alert(numero + " * " + indice + " = " + resultado)
}
