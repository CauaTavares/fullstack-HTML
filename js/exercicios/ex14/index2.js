function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo")
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")
    return base * altura
}

function calcularAreaQuadrado() {
    const area = prompt("Informe a area do quadrado:")
    return area * area
}

function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const altura = prompt("Infome a altura do trapézio:")
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do círculo:")
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt (
        "Calculadora Geométrica\n" + 
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" + 
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        if (opcao == 1) {
            resultado = calcularAreaTriangulo()

        } else if (opcao == 2) {
            resultado = calcularAreaRetangulo()

        } else if (opcao == 3) {
            resultado = calcularAreaQuadrado()

        } else if (opcao == 4) {
            resultado = calcularAreaTrapezio()

        } else if (opcao == 5) {
            resultado = calcularAreaCirculo()

        }

        if (resultado) {
            alert("resultado: " + resultado)
        }
    } while (opcao !== "6")
}

executar()
