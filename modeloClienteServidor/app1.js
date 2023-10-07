const http = require('http');
 /*Esto solo son solicitudes
const servidor = http.createServer((req, res) =>{
    console.log("====> req (solicitud)");
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);

    res.end("Soy el servidor de Corp Simtelec");
});*/

/*Esto es un codigo de respuesta */
const servidor = http.createServer((req, res) =>{
    console.log("====> res (respuesta)");
    //console.log(res.statusCode);
    res.statusCode = 404;
    //console.log(res.statusCode);
    res.setHeader("content-type", "aplication/json");
    console.log(res.getHeaders());

    res.end("Soy el servidor de Corp Simtelec");
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});