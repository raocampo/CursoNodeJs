/*ASYNC AWAYT*/

function ordenaProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Odenando: ${producto} de Corp Simtelec`);
        setTimeout(() => {
            if(producto === "memoria"){
                resolve("Ordenando Memeoria");
            }else{
                reject("Este producto no en inventario");
            }
        }, 3000);
    });
}

