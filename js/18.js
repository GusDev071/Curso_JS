//Condicionales

const disponible = 4000;
const retirar = 5000;


const auth = true;

if (!auth){
    //Se cumple la condicion si el usuario no esta autenticado
    console.log("Usuario no autenticado");
    throw new Error("Usuario no autenticado");
}else{
    //No se cumple la condicion si el usuario esta autenticado
    console.log("Usuario autenticado");
}

if (disponible < retirar){
    console.log("No hay fondos suficientes");
}else{
    console.log("Retirando dinero...");
    console.log(`Retiraste: ${retirar}`);
    console.log(`Dinero disponible: ${disponible - retirar}`);
}


/* 
*  >  Mayor que
*  <  Menor que
*  >= Mayor o igual que
*  <= Menor o igual que
*  == Igualdad (valor)
*  === Igualdad estricta (valor y tipo)
*  != Diferente (valor)
*  !== Diferente estricto (valor y tipo)
*/