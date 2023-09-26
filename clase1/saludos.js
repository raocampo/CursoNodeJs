function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return "Hola, Mundo";
}
//console.log(module.exports);

/*module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo; */

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}
