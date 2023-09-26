/*npm y Node.js*/

*npm* => Es el archivo de software maás grande del mundo que contiene paquetes que puedes instalar, usar con Node.js
*Tambien es una herramiento para la línea de comandos.*

Es muy importante!!!

Paquete=> Es un archivo o directorio descrtio por un archivo package.json.

Módulo=> Cualquier archivo o directoprio en el directorio *node_modules* que puede ser importado con require().
Para poder incluir un módulo con require(), debe ser, un archivo JS o una carpeta con un archivo package.json que contiene una propiedad "main".

node_modules=> Es una carpeta que se crea automaticamente cuando se trabaja con npm, dentro de la misma se encuentra todas las utilidades o módulos para trabajar.
Solo los módulos que tienen un arhivo package.json son paquetes.

Dependencia=> Esto se refiere a un paquete que otro paquete necesita para funcionar correctamente.

Para trabajar con npm el comando es *npm init*
luego nos indica los datos a llenar como la siguiente plantilla: 
    "name": "primernpm",
    "version": "1.0.0",
    "description": "Prácticando la creación de paquetes en node.js, es mi primer paquete",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "CorpSimtelec",
    "license": "ISC"
Estos datos se van llenando línea por línea, y al terminar crea el archivo package.json.

Otra forma de crear es con el comando *npm init --yes*, este comando creara el archivo package.json sin preguntarnos y se lo podrá editar luego si deseamos.

Introducción a JSON

JSON=> JavaScript Object Notation.
Es un formato de texto usado para almacenar y transportar información. Normalmente se usa para el desarrollo web cuando queremos transmitir información entre el cliente y el servidor.
*JSON está basado en la notación de objetos de JavaScript pero es solo texto.*
Nos permite almacenar objetos de JAvaScript como texto, es una de las funciones princpales de JSON.
Es independiente del lenguaje de programación con el cual estás trabajando.

Caracteristicas:
Los datos se representan como *pares clave-valor* lo que llamamos (propiedades).
    
    {
        "titulo": "Aprende Node.js",
        "numVisitas": 45642,
        "numLikes": 21123,
        "temas": [
            "JavaScript",
            "Node.js"
        ],
        "esPublico": true
    }
Si es un arreglo (array) JSON.
" "=> clave siempre debe ser cadena: "valor"=> esto puede ser cualquier tipo de dato.

Se puede convertir del formato *JSON* a un *objeto de JS*, y viceversa, poara hacer la conversión se utiliza la función pharse.js

Para instalar paquetes npm se escribe en la terminal npm install y el nombre del paquete que necesitamos por Ejm: 
npm install express y enter.
Para desinstalar se utiliza el comando npm uninstall y el nombre del paquete, por Ejm:
npm uninstall express y enter.
Para instalar una versión exclusiva de un paquete se utiliza la siguiente sintaxis:
*npm install nombreDelPaquete@la version*, por Ejm:
npm install express@15.0.0 y se da enter.

INSTALAR DEPENDENCIAS npm install.

