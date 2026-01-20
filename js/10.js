//Modificación de arreglos


const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

/* tecnologias[4] = 'Express.js'; //Modificar un elemento
tecnologias[5] = 'TypeScript'; //Agregar un elemento al final
tecnologias.push('GraphQL'); //Agregar un elemento al final
tecnologias[10] = 'TypeScript'; //Agregar un elemento en una posición específica sin agregar los intermedios

const nuevoArreglo = [...tecnologias, 'GraphQL']; //Hace lo mismo que el push pero crea un nuevo arreglo y no muta el original



console.table(tecnologias);

console.table(nuevoArreglo) */


//Eliminar elementos de un arreglo


//Este filter te permite visualizar los elementos que cumplan con una condición o eliminar los que no la cumplan y sin mutar el arreglo original
/* const tecnologias2 = tecnologias.filter(function(tech){
    if(tech !== 'React'){
        return tech;
    }
})

console.log(tecnologias2)

tecnologias.shift(); //Elimina el primer elemento y muta el arreglo original
tecnologias.pop(); //Elimina el último elemento y muta el arreglo original

console.table(tecnologias) */


//Modificar un arreglo sin mutar el original

const tecnologias2 = tecnologias.map(function(tech){ // map solo itera y crea un nuevo arreglo
    if (tech === 'React'){
        return 'Next.js';
    }else{
        return tech;
    }
})

console.log(tecnologias2)