/*ASYNC AWAYT*/

function ordenaProducto(producto){
    return new Promise((resolve, reject) => {
        console.log(`Odenando: ${producto} de Corp Simtelec`);
        setTimeout(() => {
            if(producto === "memoria"){
                resolve("Ordenando memoria");
            }else{
                reject("Este producto no en inventario");
            }
        }, 3000);
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve => {
        console.log("Procesando respuesta...");
        console.log(`La respuesta es: "${respuesta}"`);
        setTimeout(() => {
            resolve("Gracias por la compra!!!");
        }, 4000);
    });
}

/* ESTO ES ENCADENAR PROMESAS LO CUAL ES MUY ENGORROSO */
/*ordenaProducto("monitor")
    .then(respuesta => {
        console.log("Respuesta recibida");
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(error => {
        console.log(error);
    });
*/

/* REALIZAR  EL ENCADENAMIENTO DE PROMESAS CON ASYNC Y AWAIT ES DE LA MEJOR FORMA */

async function realizarPedido(producto){
    try{
        const respuesta = await ordenaProducto(producto);
        console.log("Respuesta recibida");
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }catch (error){
        console.log(error);
    }
}

realizarPedido("monitor");
