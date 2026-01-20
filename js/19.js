const numero1 = 20;
const numero2 = "20";


/* 
    == Igualdad no estricta ==
    === Igualdad estricta ===

*/


// Igualdad no estricta pasa porque no compara tipos de datos
if( numero1 == numero2 ) {
    console.log("Si son iguales");
} else {
    console.log("No son iguales");
}


// Igualdad estricta no pasa porque compara tipos de datos
if( numero1 === numero2 ) {
    console.log("Si son iguales");
} else {
    console.log("No son iguales");
}