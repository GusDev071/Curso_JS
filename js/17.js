const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

//filter 
/* 
const nuevoArray = tecnologias.filter(function(tech) {
    console.log(tech)
}) */


/* const nuevoArray =  tecnologias.filter(ejemploFilter);

function ejemploFilter(tech) {
    console.log(tech)
} */

/* const tecnologias2 = tecnologias.filter(function(tech){
    if(tech !== 'HTML'){
        return tech;
    }
}) */


/* const nuevoArray = tecnologias.filter(tech=> tech !== 'HTML');

const resultado = numeros.filter(num => num >15); */

//some - devuelve true o false si al menos un elemento cumple la condicion

/* const resultado = numeros.some(num => num >25); */

//Find - devuelve el primer elemento que cumple la condicion

/* const resultado = numeros.find(num => num >15); */

//every - devuelve true o false si todos los elementos cumplen la condicion

/* const resultado = numeros.every(num => num >5); */

//reduce - reduce el array a un unico valor

const resultado = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(resultado)

/* console.log(tecnologias2) */

/* console.log(nuevoArray); */