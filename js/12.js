//Recorriendo array con for

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']


//siempre que sepamos el tamaño del array, cuando sepamos adaptar el ciclo

/* for(let i = 0; i < 5; i++){
    console.log(tecnologias[i])
} */

//foreach

/* tecnologias.forEach(function (a){ //a es el valor actual del array y puede tener cualquier nombre
    console.log(a)
}) */

//map 

const arrayMap = tecnologias.map(function(tech){
    return tech
})

//for ... of

for(let tech of tecnologias){
    console.log(tech)
}


/* console.log(arrayMap) */