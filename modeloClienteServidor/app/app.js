const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res) => {

    res.end("Este es un cambio en el servidor si detener e iniciar el servidor");

    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metdodo usado no puede ser usado por el servidor: ${method}`);
    }

});

function manejarSolicitudGET(req, res){
    const path = req.url;

    console.log(res.statusCode);

    if(path === '/'){
        /*res.statusCode = 200;*/
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end("Bienvenidos a Mi primer servidor y API creados por Node.js");
    }else if(path === '/cursos'){
        /*res.statusCode = 200;*/
        res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === '/cursos/matematica'){
        /*res.statusCode = 200;*/
        res.end(JSON.stringify(cursos.infoCursos.matematica));       
    }

    res.statusCode = 404;
    res.end("La direccion no existe...!");
}

function manejarSolicitudPOST(req, res){
    const path = req.url;

    if(path === '/cursos/programacion'){
        /*res.statusCode = 200;*/
        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', () => {
           console.log(cuerpo);
           console.log(typeof cuerpo);
           
           // Convertir a un objeto de JavaScript
           cuerpo = JSON.parse(cuerpo);

           console.log(typeof cuerpo);
           console.log(cuerpo.titulo);

           res.end("El servidor recibio una solicitud POST para /cursos/programacion");
        });


       // return res.end("El servidor recibio una solicitud POST para /cursos/programacion");
    }
}


const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${3000}...`);
});
