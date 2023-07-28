
let form = document.querySelector("#form")
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const confirmarContaseña = document.getElementById("confirmarContraseña")
const campoError = document.getElementById("mensaje")


// submit logica
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (nombre.value.trim() === "") {
        Validacion("nombre")
        nombre.classList.add("validacionExitosa")
    } else if (correo.value.trim() === "") {
        Validacion("correo")
    } else if (contraseña.value.trim() === "") {
        Validacion("contraseña")
    } else if (confirmarContaseña.value.trim() === "") {
        Validacion("confirmarContraseña")
    } else if (contraseña.value !== confirmarContaseña.value) {
        campoError.innerHTML = `las contraseñas no coinciden`;
        campoError.style.color = "red"
    }
    else {
       
        LoginExitoso()
    }
})

const LoginExitoso = () => {
    const lista = [nombre,correo, contraseña, confirmarContaseña]
    const listaFiltrada = lista.filter(elem => elem.classList.contains("validacionErronea"))
    listaFiltrada.map(elem => elem.classList.remove("validacionErronea"))
    lista.map(elem => elem.classList.add("validacionExitosa"))
    campoError.style.color = "#14ff14"
    campoError.innerHTML = "Validacion Exitosa";
}

// funcion para validar que los campos no esten vacios
const Validacion = (texto) => {
    const campo = document.getElementById(texto)
    campo.focus(); // Coloca el foco en el campo que no pasa la validacion
    campoError.innerHTML = `verifique que el campo ${texto} no este vacio`;
    campo.classList.add("validacionErronea")
    campoError.style.color = "red"
}
// funcion para poder ver la contraseña
const VerContraseña = () => {
    if (contraseña.type === "password") {
        contraseña.type = "text"
    }
    else {
        contraseña.type = "password"
    }
}
const VerSegundaContraseña = () => {
    if (confirmarContaseña.type === "password") {
        confirmarContaseña.type = "text"
    }
    else {
        confirmarContaseña.type = "password"
    }
}
