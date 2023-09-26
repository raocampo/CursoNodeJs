/*Este módulo es llamado tambien temporizador, contiene funciones que ejecutan código luego de un cierto periodo de tiempo.
Estas funciones son globales, no se necestia importar ningún tipo de archivo, librearia, para ser utilizadas.
Las tres funciones utiles son:
    - setTimeout()=> Ejecuta código luego de un número específico de milisegundos 1seg (s) = 1000 millisegundos (ms).
    sintaxis para llamar=> setTimeout(function, retraso, argumento):
    - setImmediate()=>
    - setInterval()
*/

/*Ejemplo de setTimeout */

function mostrarTema(tema){
    console.log(`Estoy aprendiendo, ${tema}`);
}

setTimeout(mostrarTema, 5000, "JS" );

/* setImmediate() => SE usa para ejecutar código asíncrono en la próxima iteración del ciclo de eventos (lo mas pronto posible) 
Sintaxis => setImmediate(function, argumento1, argumento2, argumento n);
Se ejecuta después del código síncrono, ("Se ejecuta lo más rápido posible de forma asíncrona")*/

/*Ejemplo setImmediate */

function mostrarTema(tema){
    console.log(`Estoy aprendiendo, ${tema}`);
}

console.log("Antes de setImmediate()");

setImmediate(mostrarTema, "Node.js" );

console.log("Después de setImmediate()");


/*setInterval()=> Para ejecutar código un número infinito de veces con un retraso específico de milisegundos.
Sintaxis => setInterval(function, intervalo, arg1, arg2, argn); */

/*Ejemplo de setInterval() */

function mostrarTema(tema){
    console.log(`Estoy aprendiendo, ${tema}`);
}

setInterval(mostrarTema, 1000, "Node JS");