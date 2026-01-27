//eventos del DOM Clicks

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

/* heading.addEventListener('dblclick', () => {
    heading.textContent = 'Nuevo Heading al hacer Click';
}) */

enlaces.forEach(enlaces => {
    enlaces.addEventListener('click', (e) => {
        e.preventDefault(); //previene el salto a otra pagina
        e.target.textContent = 'Nuevo Texto del enlace';
    })
})