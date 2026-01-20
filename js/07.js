//union de objetos

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

/* const carrito ={
    cantidad : 3,
    ...producto // esto sirve para separar los objetos y unirlos en uno solo : spread operator
}

console.log(carrito) */


const nuevoObjeto ={
    ...producto,
    ...cliente 
}

console.log(nuevoObjeto)


//object assign

const objetoAsignado = Object.assign(producto,cliente)

console.log(objetoAsignado)