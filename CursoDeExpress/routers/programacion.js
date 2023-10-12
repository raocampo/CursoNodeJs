const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

/*Middleware => Estas funciones se ejecutan:
  Después de recibir una solicitud.
  Antes de enviar una respuesta.
  Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una función que se llama para ejecutar el próximo middleware*/

routerProgramacion.use(express.json());


//Routing para programacion

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

//Routing en programacion con valor más especifico

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
    }

    if(req.query.ordenar === 'vistas'){
        res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

//Routing con dos parámetros

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0){
        return res.status(404).send(`No se encuentran los datos solicitados ${lenguaje}, ${nivel}`);
    }

    res.send(JSON.stringify(resultados));
});

// Método POST con express
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});

//Método PUT con express
routerProgramacion.put('/:id', (req, res) => { 
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(programacion));

});

//Método patch

routerProgramacion.patch('/:id', (req, res) => {
    const actualizar = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        const cursoActualizar = programacion[indice];

        Object.assign(cursoActualizar, actualizar);
    }

    res.send(JSON.stringify(programacion));
});

//Método delete

routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion.splice(indice, 1);
    }
    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;