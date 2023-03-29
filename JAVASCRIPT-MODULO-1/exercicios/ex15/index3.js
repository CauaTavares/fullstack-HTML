// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// let b = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

// let k = []


// a.forEach((value, index) => {
//     let valueK = value / b[index]
//     k.push(valueK)
//     console.log(`Posição ${index} (${value} / ${b[index]}) = ${valueK}`)
// }) 


let idade = prompt("Qual a idade do jogador?")

if (idade > 4 && idade <= 7) {
    console.log(`Idade: ${idade} - Categoria: Infantil A`);

}else if (idade > 7 && idade <= 11) {
    console.log(`Idade: ${idade} - Categoria: Infantil B`);

}else if (idade > 11 && idade <= 13) {
    console.log(`Idade: ${idade} - Categoria: Juvenil A`);

}else if (idade > 13 && idade <= 17) {
    console.log(`Idade: ${idade} - Categoria: Junevil B`);

}else if (idade > 17) {
    console.log(`Idade: ${idade} - Categoria: Adulto`);
}else{
    console.log("Idade insuficiente - categoria invalida");
}




