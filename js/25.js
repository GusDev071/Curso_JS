//fetch API con Promises

const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
.then((Response)=> {
    if(Response.ok){
        return Response.json();
    }
    throw new Error('No se pudo realizar la petición');
})
.then((data)=>{console.log(data);})
.catch((error)=>{console.log( error.message);})

