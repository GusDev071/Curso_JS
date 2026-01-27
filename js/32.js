//Eventos del DOM - Submit

const form = document.querySelector('#formulario');
form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 'font-bold', 'p-2', 'mb-5');

    //prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta');
    /* if (alertaPrevia) {
        alertaPrevia.remove();
    } */

    alertaPrevia?.remove();


    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('bg-red-500');
    } else {
        alerta.textContent = 'Datos enviados correctamente';
        alerta.classList.add('bg-green-500');
    }

    console.log("los datos enviados son " + nombre + " y " + password);
    console.log(alerta)
    console.log('Enviando formulario');

    form.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
})