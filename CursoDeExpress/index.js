const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');


//Routers
const routerMatematica = require('./routers/matematica.js');
app.use("/api/cursos/matematica/", routerMatematica);
const routerProgramacion = require('./routers/programacion.js');
app.use("/api/cursos/programacion/", routerProgramacion);

//Routing en express

app.get('/', (req, res) => {
    res.send("Mi primer servidor con Express. Cursos ");
});

//Routing general

app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
