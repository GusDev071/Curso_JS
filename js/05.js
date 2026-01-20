// manipulación de objetos

const producto = {
    nombre : "Tablet",
    precio : 500,
    disponible : false
}


Object.freeze(producto); //congela el objeto no permite modificaciones


//recibir un valor de una propiedad
producto.disponible = true; //modificar propiedad

//si no existe la propiedad la crea
producto.imagen = "imagen.jpg"; //agregar nueva propiedad

delete producto.precio; //eliminar propiedad




console.log(producto)

