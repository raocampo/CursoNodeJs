# Modelo Cliente-Servidor

Modelo que usamos para acceder a internet y obtener recursos e información.

Este modelo se simplifica en que el cliente envia peticiones a un servidor y este contesta.

_**Cliente**_=> El navegador o lugar del computador desde el cual se realizan solicitudes a un servidor.

_**Servidor**_=> Programa que se ejecuta en un equipo físico(conocido como servidor valga la redundancia) para ofrecer un servicio al cliente. _Envia información_.

Para que estos se comuniquen necesitan un formato para poder comunicarse. 

El servidor _**conoce el formato**_ esperado del mensaje que envía el cliente.

El cliente _**conoce el formato**_ esperado del mensaje que recibe del servidor.

## Protocolo HTTP

El **protocolo HTTP** define el formato de los mensajes.

_**Protocolo**_ Es un conjunto de **reglas** que permiten transmitir información entre dispositivo de una red.

HTTP=> **H**yper**t**ext
       **T**ransfer
       **P**rotocol

Traducido=> _Protocolo de transferencia de hipertexto_

## Solicitudes HTTP

Cuando un cliente le pide información al servidor esta realizando un **request** = _solicitud_

### Elementos de un request

* Métodos HTTP
* Camino(direccion - path)
* Version de HTTP
* Cabeceras (headers)
* Cuerpo (body)

**Headers(cabeceras)**=> Proveen información adicional sobre la solicitud.

**Body(cuerpo)**=> Contiene la información que debe ser enviada al servidor para procesar la solicitud. _No se incluyen en todas las solicitudes_. Solo en aquellas que requieran enviar información. Por Ejm: **método POST**, **método PUT**.

Tenemos también el HTTPS, es decir que le aumenta una capa de seguridad mayor.

## Métodos HTTP

Es un _verbo_ o _sustantivo_ en ingles que indica la intención de la solicitud.

"_Aunque también pueden ser sustantivos, frecuentemente se les denomina como **Verbos HTTP**_".

Los métodos mas cómunes o usados son:

* GET
* POST
* PUT
* DELETE, 
etc.

**GET**=> _Verbo para **solicitar** un recurso específico_. Por ejm: Un archivo HTML, CSSS o una imagen.

**POST**=> _Verbo para **crear** un recurso específico_. Por ejm: Agregar un usuario nuevo a una base de datos (BD).

**PUT**=> _Verbo para **modificar** un recurso específico_. Por ejm: Realizar un cambio en la base de datos.

**DELETE**+> _Verbo para **eliminar** un recurso específico_. Por ejm: Eliminar un usuario de la base de datos.

## Respuestas HTTP

El servidor luego de procesar el request(solicitud) realizada por el cliente realiza un **response** = _respuesta_.

## Elementos de un response

* Código de estado
* Texto de estado
* Versión de HTTP
* Cabeceras (headers)
* Cuerpo (body)

**Códigos de estado**=> Son muy importantes en el response, ya que es donde nos indica que paso o sucede con la solicitud realizada por el cliente(navegador), **aprovada**, **rechazada**.

Es un número que indica si se ha completado exitosamente o no la solicitud HTTP, estos son:

* Respuestas informativas **(100 - 199)**.
* Respuestas satisfactorias **(200 - 299)**.
* Redirecciones **(300 - 399)**.
* Errores de los clientes **(400 - 499)**.
* Errores de los servidores **(500 - 599)**.

Con _Node.js y Express_ se puede especificar el código de estado de la respuesta HTTP en el servidor.

Los códigos más comunes son:

- 200 **OK** - La respuesta fue exitosa.
- 400 **Bad Request** => El servidor no pudo interpretar la solicitud.
- 404 **Not found** => El servidor no pudo encontrar el recurso solicitado.
- 500 **Internal Server Error** => El servidor encontró una situación que no sabe como manejar.

## Módulo HTTP en Node.js

Este módulo le permite a Node.js transmitit información con el protcolo HTTP.

El módulo http nos permite crear un servidor que escuche las solicitudes para luego enviarnos una respuesta.

Para utilizar el módulo se utiliza el **require('http');** el mismo que se guarda en una variable **const** por ejemplo `const http = require('http');`, con esto se importa el módulo, el mismo se lo realiza al principio de las lineas de nuestro programa.

**Código para crear el servidor en node.js**

```js
//Importamos el módulo http
const http = require('http'); 

/*Creamos el servidor
1. Creamos una variable constante const = servidor. 
2. Nos referimos a la variable que contiene el módulo http(http).
3. Llamamos al método para crear un servidor createServer(.createServer).
4. luego con una función flecha o arrow function (() =>) con el parámetro que contiene la solicitud = request(req) HTTP; y la respuesta = respuesta(res) HTTP; ((req, res) => {});.
5. Y dentro de las llaves ({}); realizaremos los procesos en este caso con el método .end se envia la respuesta al cliente(navegador).*/

const servidor = http.createServer((req, res) => {
    res.end("Hola, mundo");
});

```
Para que el servidor escuche esta petición se necesita de un puerto.

## Puerto

Es la ubicación virtual del sistema operativo en la cual se puede acceder a una aplicación o a un proceso específico que se esté ejecutando en ese puerto.

Ejemplo: 
[Creando un servidor](/modeloClienteServidor/app.js)

## Estructura de una URL

Una _URL_ es una _**dirección**_ de un recurso en la web.

**URL**=> **U**niform **R**esource **L**ocator  (Localizador Uniforme de Recursos).

Básicamente la URL nos permite indicar la dirección de la página web a donde deseamos ingresar, la misma esta conformada de la siguiente forma:

> **https://www.freecodecamp.org/espanol/**=> **URL**

La URL es el inicio de las partes importantes para enviar la solicitud al servidor.

## Partes de la URL

_https_ => Protocolo (La s al final agrega una capa de seguridad).

_www_ => Subdominio (Información adicional agregada al inicio del dominio de ua página web. Permite a los sitios web organizar y separar la información para distintos propósitos).

freecodecamp => Dominio (Se conoce como el nombre de la página; Referencia única a un sitio web en internet).

.org => Dominio de nivel superior mas conocido en IT como TLD(Top-Level Domain).
Otros dominios de nivel superior:
* .com
* .net
* .int
* .edu
* .gov

/espanol => Camino (Path) => Archivo o directorio en el servidor web; Puede tener parámetros para personalizarlo, estos parámetros son parte de la URL.

Todas las partes descritas anteriormente representan la raiz de nuestro sitio web.

> _https://www.freecodecamp.org_ => Raíz

Lo que viene luego de la barra **/** será el camino en donde van nuestros archivos, carpetas a las que apunta la URL, también se conoce como parámetro de ruta.
Ejm:

**Parámetros ruta**
> _https://www.misitioejemplo.org_**/usuarios/10**

**Parametros query(busqueda/consulta)**
> _https://www.google.com/search_**?q=cursos+de+node**

_Parámetros query(**query strings**) =>_ Son parametros usados para obtener _contenido dinámico_ y siempre están luego de el signo de interrogación de cierre, luego del signo se tiene la categoria y luego el valor. Por Ejm, filtrar una lista de recursos.

Para utilizar varios parámetros query se utiliza el simbolo **&**(ambersand), luego de cada clave y valor .

> _https://www.google.com/search_**?q=cursos+de+node**_&_**sourceid=chrome**_&_**ie=UTF-8**

Usamos parámetrso query para _filtrar_ solicitudes GET (para obtener recursos específicos).

## Módulo URL en node.js



## Routing en Node.js

Es manejar las solicitudes del cliente en base a ciertos criterios, hay dos criterios principales que son método y camino.

_**Route**_ = Ruta

### Criterios

**Criterio 1** _**El método de la solicitud HTTP**_ => De esta forma el servidor sabe qué tipo de operación se realizará

**Criterio 2** _**El path (camino) de la solicitud HTTP**_ => De esta forma el servidor sabe el recurso específico que se usará.

En pocas palabras la ruta se trabaja de la siguiente forma: 
> * Método + Path + Cómo manejarlo
> * Qué + donde + como

