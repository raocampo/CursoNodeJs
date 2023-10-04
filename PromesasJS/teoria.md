# Promesas en JavaScript

**Promesa**=> Objeto que representa el eventual resultado (o error) de una operación asíncrona.
_Promise_ = **Promesa**.

Siempre que se realiza una petición al servidor se trabaja con promesas, ya que al realizar la petición no sabemos el tiempo a devolver la respuesta de la petición solicitada, la misma puede ser aceptada o rechazada, es decir al realizar la promesa esta tiene un estado de pendiente y luego da el resultado de éxito o rechazo.
Ya que depende de muchos factores para el tiempo de respuesta y no lo sabemos, por eso se le llama promesa(promise).

## Estados de una promesa

_pendiente_ = **pending**

_cumplida_ = **fulfilled**

_rechazada_ = **rejected**

_"Una promesa es un objeto de JavaScript, el objeto promesa se asocia a una callback function."_

**Función callback (_callback function_)** => Es una función que se pasa a otra función como argumento y luego se ejecuta dentro de la función externa.

Las promesas tienen un método **_.then()_**, con el cual podemos decidir qué ocurre cuando se completa la promesa **(éxito o error)**.

**_.catch()_**=> Método de promesa que solo se ejecuta si la promesa es rechazada.

## Encadenar Promesas y Async Await


