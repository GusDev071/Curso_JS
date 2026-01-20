//fetch API con Promises

const url = 'https://jsonplaceholder.typicode.com/comments';

/* fetch(url)
.then((Response)=> {
    if(Response.ok){
        return Response.json();
    }
    throw new Error('No se pudo realizar la petición');
})
.then((data)=>{console.log(data);})
.catch((error)=>{console.log( error.message);}) */


const consultarAPI = async() => {
   try{
     const response = await fetch(url);
    if(!response.ok){
        throw new Error('No se pudo realizar la petición'); 
    }
     const data = await response.json();
    console.log(data);
   }catch(error){
    console.log(error.message);
   }

}

consultarAPI();
