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

const manejaPedido = (mensajeConfirmacion) => {
    console.log(mensajeConfirmacion);
};

const rechazaPedido = (mensajeError) => {
    console.log(mensajeError);
};

miPedidoDePizza.then(manejaPedido, rechazaPedido);

/* OTRA FORMA */
miPedidoDePizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .catch((mensajeError) => {
        console.log(mensajeError);
    });