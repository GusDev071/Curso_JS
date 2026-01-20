//Manipular elementos con JS
const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

heading.textContent = 'Nuevo Heading desde JS';
heading.id = 'nuevo-id';

heading.removeAttribute('id');

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Juan Perez';

console.log(inputNombre.classList)

/* enlaces[0].textContent = 'Nuevo Enlace desde JS'; */ //Primer enlace

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace desde JS'); //Todos los enlaces