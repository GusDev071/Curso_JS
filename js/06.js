// Destructuring de dos o mas objetos

const producto = {
    nombre : "Tablet",
    precio : 500,
    disponible : false
}

const cliente = {
    nombre : "Gustavo",
    premium : true,
    direccion : {
        calle : "Av siempre viva",
    }

}

//no se puede poner el mismo nombre a dos variables con los : se soluciona renombrando una de las variables

const { nombre } = producto;
const { nombre: nombreCliente } = cliente;

console.log(nombre);
console.log(nombreCliente);


//se accede al objeto dentro de otro objeto
const { direccion } = cliente;
console.log(direccion);


//se accede a una propiedad del objeto que esta dentro de otro objeto
const { direccion: { calle } } = cliente;
console.log(calle);