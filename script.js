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
        // validación de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === ''){
            mostrarError(errorEmail,emailInput, 'El correo es requerido');
        }else if (!emailPattern.test(emailInput.value.trim())){
            mostrarError(errorEmail,emailInput,'Ingrese un correo válido.');
            formValido = false
        }
        //Validación de contraseña
        if (passwordInput.value.trim() === ''){
            mostrarError(errorPassword,passwordInput,'La contraseña es requerida');
            formValido = false;
        }else if (passwordInput.value.trim().lenght <6){
            mostrarError(errorPassword,passwordInput,'La contraseña debe ser mayor a seis caracteres');
            formValido = false;
        }
        //validación de confirmación de contraseña
        if (confirmPasswordInput.value.trim() === ''){
            mostrarError(errorConfirmPassword,confirmPasswordInput, 'Debe de reingresar la contraseña');
            formValido = false;
        }else if (confirmPasswordInput.value !== passwordInput.value){
            mostrarError(errorConfirmPassword,confirmPasswordInput, 'Las contraseñas no coinciden');
            formValido = false;
        }
    
    //si el formulario es válido, mostrar el mensaje de éxito y resetar form

    if (formValido) {
        successMessage.style.display = 'block';
        registroForm.reset(); // limpia todos los campos del form
        console.log('Formulario enviado correctamente')
    }


    })


})