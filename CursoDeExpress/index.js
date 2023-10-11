const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');

//Routing en express

app.get('/', (req, res) => {
    res.send("Mi primer servidor con Express. Cursos ");
});

//Routing general

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

//Routing para matematica

app.get('/api/cursos/matematica', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematica));
});

//Routing en matematica con valor mas especifico

app.get('/api/cursos/matematica/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematica.filter(curso => curso.tema === tema);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}.`);
    }

    res.send(JSON.stringify(resultados));
});

//Routing para programacion

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

//Routing en programacion con valor más especifico

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
    }

    res.send(JSON.stringify(resultados));
});

//Routing con dos parámetros

app.get('/api/cursos/matematica/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;

    const resultados = infoCursos.matematica.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron los datos de ${tema} ${nivel}.`);
    }

    res.send(JSON.stringify(resultados));

});


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
