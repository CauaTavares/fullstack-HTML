const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle() {
 const playerInput = document.getElementById(turnPlayer)
 document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
    updateTitle()
    boardRegions.forEach(function (element) {
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handleBoardClick)
    })
}

function handleBoardClick(ev) {
    const span = ev.currentTarget
    const region = span.dataset.region // N.N
    const rowColumnPair = region // ["N", "N"]
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        vBoard[row][column] = 'X'
    }else {
        span.innerText =  'O'
        vBoard[row][column] = 'O'
    }
    console.clear()
    console.table(vBoard)
}


document.getElementById('start').addEventListener('click', initializeGame)