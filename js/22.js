//optinal changing (?)
const alumno = {
    nombre: "Gustavo",
    clase: "Programacion",
    aprobado: true,
    examen: {
        examen1: 9
    }
}


console.log(alumno.examen?.examen1)
console.log("Despues de alumno")




//nullish coalescing operator (??) obtiene el primer valor que no sea null o undefined 

const pagina = null ?? 1
console.log(pagina)

