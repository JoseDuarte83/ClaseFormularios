document.addEventListener('DOMContentLoaded',()=>{
    //1. seleccionar los elementos del DOM
    const registroForm = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('correo');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword')

    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorCorreo');
    const errorPassword = document.getElementById('errorPassword');
    const errorConfirmPassword = document.getElementById('errorConfirmPassword');
    const successMessage = document.getElementById('successMessage');

    //función para mostrar un mensaje de error

    function mostrarError(elementoError, inputElement, mensaje){
        elementoError.textContent = mensaje;
        elementoError.style.display = 'block';
        inputElement.classList.add('invalid');

    }
    //función para ocultar un mensaje de error

    function ocultarError(elementoError, inputElement){
        elementoError.style.display = 'none';
        inputElement.classList.remove('invalid');
    }

    //validacion en tiempo real - conforme se va escribiendo se ve despues
    //manejar el evento del submit del formulario
    registroForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        successMessage.style.display = 'none';

        ocultarError(errorNombre,nombreInput);
        ocultarError(errorEmail,emailInput);
        ocultarError(errorPassword,passwordInput);
        ocultarError(errorConfirmPassword,confirmPasswordInput);

        //validar los espacios al enviar

        let formValido = true;

        if (nombreInput.value.trim() === ''){
            mostrarError(errorNombre,nombreInput, 'El nombre es requerido');
            formValido = false;
        }


    })


})