const express = require('express');

const {matematica} = require('../datos/cursos.js').infoCursos;

const routerMatematica = express.Router();

//Routing para matematica

routerMatematica.get('/', (req, res) => {
    res.send(JSON.stringify(matematica));
});

//Routing en matematica con parametro mas especifico

routerMatematica.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = matematica.filter(curso => curso.tema === tema);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}.`);
    }

    res.send(JSON.stringify(resultados));
});

//Routing con dos parámetros

routerMatematica.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = matematica.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron los datos de ${tema} ${nivel}.`);
    }

    res.send(JSON.stringify(resultados));

});

module.exports = routerMatematica;