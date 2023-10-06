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

Es un número que indica si se ha completado exitosamente o no la solicitud HTTP, esto son:

* Respuestas informativas (100 - 199).
* Respuestas satisfactorias (200 - 299).
* Redirecciones (300 - 399).
* Errores de los clientes (400 - 499).
* Errores de los servidores (500 - 599).

