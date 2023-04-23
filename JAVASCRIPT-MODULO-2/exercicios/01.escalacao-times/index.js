function addplayer() {
    const teamList = document.getElementById('team-list')

    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const jogador = document.createElement("li")
    jogador.id = "number-" + number
    const spanName = document.createElement("span")
    const spanPosition = document.createElement("span")
    const spanNumber = document.createElement("span")

    spanName.innerText = "Nome: " + name + "\n"
    spanPosition.innerText = "Posição: " + position + "\n"
    spanNumber.innerText = "Número: " + number

    jogador.append(spanPosition, spanName, spanNumber)

    document.getElementById('team-list').appendChild(jogador)

    const confirmacao = confirm("Escalar " + name + " como " + position + "?")

    if (confirmacao) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + "(" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }

}

function removePlayer() {
    const lista = document.getElementById('team-list')

    const number = document.getElementById('numberToRemove').value

    const playerToRemove = document.getElementById('number-' + number)

    lista.removeChild(playerToRemove)
    
    const confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + '?')


    if (confirmation) {
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ''
    }
}

