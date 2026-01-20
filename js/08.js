// Tempalete Strings y concatencacion

const producto = "Tablet de 20 pulgadas";
const precio = 300;
const marca = "Samsung";

//se utiliza para hacer concatenaciones sencillas
console.log("El producto es: ", producto);

//Este se utiliza para concatenar multiples valores
console.log(producto +  " $" +  precio + " Dolares, marca " +  marca);

//Template Strings o plantillas de texto con backticks ``
console.log(`${producto} $${precio} Dolares, marca ${marca}`);