function register(ev) {
    console.log(ev);
    const username = ev.currentTarget.children.username.value
    const password = ev.currentTarget.children.password.value
    const passwordConfirmation = ev.currentTarget.children.passwordConfirmation.value
}



const button = document.getElementById('register-button')

button.addEventListener('click', register)