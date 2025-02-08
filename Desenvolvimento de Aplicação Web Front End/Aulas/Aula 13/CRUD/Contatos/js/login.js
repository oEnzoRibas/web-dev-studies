const btnLogin = document.querySelector('#btnLogin')
const fieldUser = document.querySelector('#user')
const fieldPassword = document.querySelector('#password')
const formLogin = document.querySelector("#form-login")


// Não usar em ambiente de produção
const user = {
    'login': 'admin',
    'password': '123'
}

function userIsAuthenticated() {
    return user.login === fieldUser.value &&
        user.password === fieldPassword.value
}

function resetFormLogin() {
    formLogin.reset()
}

function login() {

    if (userIsAuthenticated()) {
        localStorage.setItem('user', user.login)
        window.location.href = "pages/contatos.html"
    } else {
        localStorage.removeItem('user')
        alert('Usuário/Senha inválidos.')
    }
    resetFormLogin()
}

// Início da lógica de login
btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    login()
})