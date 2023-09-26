/*Módulo fs(file system)
Este módulo contiene funcionalida muy útil para
para trabajar con el sistema de archivos 
Se puede llamar a sus archivos, funciones, metodos.
Las operaciones útiles son:
    - Leer
    - Modificar(editar)
    - Copias
    - Eliminar
    - Cambiar nombre
Todos los métodos de este módulo son asíncronos por defecto.
Pero se puede escoger versiones síncronas de estos métodos agregado Sync a sus nombres.
Métodos principales a utilizar:
    - fs.rename()
    - fs.renameSync()
*/

/*Ejemplo fs de leer un archivo */

const fs = require("fs");

console.log("Antes de leer el archivo")

fs.readFile("inde.html", "utf-8", (err, contenido) => {
    if (err){
        console.log(err);
    }else{
        console.log(contenido);
    }
 });
 /*Con throw se detiene la ejecución, si es un error nos indica el error sucitado. */

 /**Ejemplo con throw */

fs.readFile("inde.html", "utf-8", (err, contenido) => {
    if (err){
        throw err;
    }else{
        console.log(contenido);
    }
    console.log("Mensaje...");
 });

 console.log("Después de leer el archivo")

 /*Ejemplo fs de modificar(editar) nombre de un archivo */


fs.rename("index.html", "main.html", (err) => {
    if (err){
        throw err;
    }else{/*El else no necesariamente se lo puede utilizar*/
       // console.log("Nombre cambiado exitosamente!!!");
    }
 });

 console.log("Después de modificar el archivo")

/*Ejemplo para agregar contenido al final del archivo  método appendfile*/

 fs.appendFile("index.html", "<p>Hola</p>", (err) => {
    if (err){
        throw err;
    }else{/*El else no necesariamente se lo puede utilizar*/
        console.log("Archivo Actualizado!!!");
    }
 });

 console.log("Después de agregar contenido al final del archivo")

 /*Reemplazar todo el contenido del archivo, método writeFile */

 fs.writeFile("index.html", "Contenido Nuevo", (err) => {
    if(err){
        throw err;
    }
    console.log("Contenido reemplazado exitosamente!!!")
 });

 console.log("Después de agregar contenido del archivo")

 /*Método para eliminar archivo => unlink*/

 fs.unlink("main.html", (err) => {
    if(err){
        throw err;
    }
    console.log("archivo eliminado!!!");
 })

 console.log("Después de borrar el archivo")