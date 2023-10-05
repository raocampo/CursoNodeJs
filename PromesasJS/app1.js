const estatusPedido = () => {
    /*const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;*/
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if(estatusPedido()){
            resolve("Pedido exitoso! La pizza esta en ruta.");
        }else{
            reject("Ocurrio un error. Intenta Nuevamente");
        }
    }, 3000);
});

/* FORMA UNO DE PRESENTAR LA PROMESA */
const manejaPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
};

const rechazaPedido = (mensajeError) => {
    console.log(mensajeError);
};

miPedidoDePizza.then(manejaPedido, rechazaPedido);
/* FIN DE LA FORMA UNO */

/* OTRA FORMA DE REALIZAR LO ANTERIOR MAS CONOCIDO COMO method chaining */

miPedidoDePizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .catch((mensajeError) => {
        console.log(mensajeError);
    });

/* OTRA ALTERNATIVA VÁLIDA*/
const manejarPedido = (mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
};
    
const rechazarPedido = (mensajeError) => {
        console.log(mensajeError);
};

miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);