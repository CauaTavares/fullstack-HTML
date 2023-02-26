let opcao = ""

do {
    opcao = prompt("Escolha uma das opções: " +
    "\n1) área do triângulo:" +
    "\n2) área do retângulo:" +
    "\n3) área do quadrado:" +
    "\n4) área do trapézio:" +
    "\n5) área do círculo:" +
    "\n6) Sair"
    )

    if (opcao == 1) {
        function triangulo(base, altura) {
            let area = (base * altura) / 2
            return area
        }
        let base = prompt("qual tamanho da base?")
        let altura = prompt("qual tamanho da altura?")
        let resultado = triangulo(base, altura)
        alert("A área de um triangulo é somada " + base + " * " + altura + " / " + 2 + " Que da: " + resultado)

    } else if (opcao == 2) {
        function retangulo(base, altura) {
            let area = (base * altura)
            return area
        }
        let base = prompt("Qual tamanho da base?")
        let altura = prompt("Qual tamanho da altura?")
        let resultado = retangulo(base, altura)
        alert("A área do retângulo é: " + base + " * " + altura + " Que da: " + resultado)

    } else if (opcao == 3) {
        function quadrado(a) {
            let area = (a * a)
            return area
        }
        let a = prompt("Qual tamanho do lado?")
        let resultado = quadrado(a)
        alert("A área do retangulo é: " + a + " * " + a + " Que da: " + resultado)

    } else if (opcao == 4) {
        function trapezio(baseMaior, baseMenor, altura) {
            let area = ((baseMaior + baseMenor) * altura / 2)
            return area
        } 
        let baseMaior = parseFloat(prompt("Qual tamanho da base maior?"))
        let baseMenor = parseFloat(prompt("Qual tamanho da base menor?"))
        let altura = prompt("Qual tamanho da altura?")
        let resultado = trapezio(baseMaior, baseMenor, altura)
        alert("A área do trapézio é: " + resultado)

    } else if (opcao == 5) {
        function circulo(raio) {
            let area = ((raio * raio) * 3.14)
            return area
        }
        let raio = prompt("Qual o tamanho do raio?")
        let resultado = circulo(raio)
        alert("A área do circulo é: " + resultado)
    }

} while (opcao !== "6")
