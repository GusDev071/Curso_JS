import  { sumar, restar, multiplicar, dividir } from "./funciones.js";

const resultado = sumar(5, 3);
const resultadoResta = restar(5, 3);
const resultadoMultiplicacion = multiplicar(5, 3);
const resultadoDivision = dividir(5, 3);    

console.log("Resultado de la suma: " + resultado);
console.log("Resultado de la resta: " + resultadoResta);
console.log("Resultado de la multiplicacion: " + resultadoMultiplicacion);
console.log("Resultado de la division: " + resultadoDivision);