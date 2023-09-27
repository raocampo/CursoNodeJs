const EventEmitter = require("events");

/*console.log(EventEmitter);*/

const emisorProductos = new EventEmitter();

emisorProductos.on("compra", (numProductos, total ) => {
    console.log(`Cantidad de Productos solicitados ${numProductos}.`);
    console.log(`El total de la compra es de $${total}.`);
});

emisorProductos.emit("compra", 10, 1200);