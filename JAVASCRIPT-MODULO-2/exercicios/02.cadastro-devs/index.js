function createlabel(text, htmlFor) {
    const  label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id 
    input.value = value
    input.name = name 
    input.type = type
    input.placeholder = placeholder
    return input 
}

const addTechBtn = document.getElementById('addtTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev) {
    const stackInput = document.getElementById('StackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    
})


