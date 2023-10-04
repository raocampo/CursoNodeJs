<<<<<<< HEAD
/*const demo = require("./ejemplo.json");

console.log(demo.temas);*/

/*CONVERTIR EL ARCHIVO A FORMATO JSON*/

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};
/*Objeto -> Cadena de Caracteres */
/*CAdena de caracteres en formato JSON */
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

/*Cadena de Caracteres -> Objeto */
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

=======
/*const demo = require("./ejemplo.json");

console.log(demo.temas);*/

/*CONVERTIR EL ARCHIVO A FORMATO JSON*/

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};
/*Objeto -> Cadena de Caracteres */
/*CAdena de caracteres en formato JSON */
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

/*Cadena de Caracteres -> Objeto */
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

>>>>>>> 2c85a2e (Inicializando el curso para subir a git)
console.log(infoCursoObjeto.titulo);