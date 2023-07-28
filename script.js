
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
        confirmarContaseña.classList.add("validacionErronea")
    }
    else {
       
        LoginExitoso()
    }
})

const LoginExitoso = () => {
    //lista de inputs
    const lista = [nombre,correo, contraseña, confirmarContaseña]
    //inputs que tiene la clase validacionErronea por si ya intentaron ingresar y no pusieron bien las credenciales
    const listaFiltrada = lista.filter(elem => elem.classList.contains("validacionErronea"))
    // mapeo que saca la clase validacionErronea de los inputs que antes estaban errones
    listaFiltrada.map(elem => elem.classList.remove("validacionErronea"))
    // mapeo que agrega a todos los input la clase validacionExitosa
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
