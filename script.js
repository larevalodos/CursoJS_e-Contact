// Lista de usuarios válidos
const users = [
    { username: 'Pepe@mail.com', password: 'Pepe1234', name: 'Pepe' },
    { username: 'Ramon@2mail.com', password: 'Ramon1234', name: 'Ramon' },
    { username: 'Amatista@mail.com', password: 'Amatista1234', name: 'Amatista' },
    { username: 'Cristian@2mail.com', password: 'Cristian1234', name: 'Cristian' },
    { username: 'Lucho@mail.com', password: 'Lucho1234', name: 'Lucho' },
    { username: 'MariaF@mail.com', password: 'MariaF1234', name: 'Maria F' }
]

// Variables para los elementos del DOM
const form = document.getElementById('loginForm')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')
const resultDiv = document.getElementById('result')

// Función para validar el formulario
function validateForm(event) {
    event.preventDefault() // Evita el envío del formulario por defecto

    // Reiniciar estilos y mensajes de error
    resetForm()

    // Obtener valores de los inputs
    const usernameValue = usernameInput.value.toLowerCase().trim() // he considerado que los correos electronicos no son "case sensitive"
    const passwordValue = passwordInput.value

    // Validacion de que los campos no estén vacíos
    if (usernameValue === '') {
        showError(usernameInput, usernameError, 'Debe ingresar un usuario.')
    } else if (passwordValue === '') {
        showError(passwordInput, passwordError, 'Debe ingresar una contraseña.')
    } else {
        // Validacion de credenciales
        const validUser = users.find(user => user.username.toLowerCase() === usernameValue && user.password === passwordValue)

        if (validUser) {
            showResult(`Sesión iniciada para ${validUser.name}.`,'green')
        } else {
            showResult('Credenciales incorrectas.','red')
        }
    }
}

// Función para mostrar mensaje de error
function showError(input, errorElement, message) {
    input.style.borderColor = 'red'
    errorElement.textContent = message
}

// Función para mostrar resultado
/*function showResult(message, color) {
    resultDiv.textContent = message
    resultDiv.style.color = color
}*/

// Función para mostrar resultado@flecha
const showResult=(message, color) => {
    resultDiv.textContent = message
    resultDiv.style.color = color
}

// Función para resetear el formulario
function resetForm() {
    usernameInput.style.borderColor = ''
    passwordInput.style.borderColor = ''
    usernameError.textContent = ''
    passwordError.textContent = ''
    resultDiv.textContent = ''
}

// Listener de evento para enviar formulario
form.addEventListener('submit', validateForm)

// Listener de evento para limpiar formulario
document.getElementById('clearBtn').addEventListener('click', function() {
    form.reset()
    resetForm()
})

// Listener de evento para observar cambios en input username y limpiar estilos
usernameInput.addEventListener('change',resetForm)
// Listener de evento para observar cambios en input password y limpiar estilos
passwordInput.addEventListener('change',resetForm)
