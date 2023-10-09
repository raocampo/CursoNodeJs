const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res) => {
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        default:
            console.log(`El metdodo usado no puede ser usado por el servidor: ${method}`);
    }

});

function manejarSolicitudGET(req, res){
    const path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        res.end("Bienvenidos a Mi primer servidor y API creados por Node.js");
    }else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === '/cursos/matematica'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.matematica));       
    }

    res.statusCode = 404;
    res.end("La direccion no existe...!");
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${3000}...`);
});
