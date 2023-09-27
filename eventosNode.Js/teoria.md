Teoria sobre eventos en node.js

Asícrono: Cuando una app se esta ejecutango y ocurre un evento asícrono este se ejecuta sin que la app se bloquee es decir la app sigue ejecutandose, es decir ambos procesos se ejecutan en paralelo sin afectarse.

Sincrono: A diferencia del concepto anterior este evento si para o bloquea la ejecución de la app, mientras no termine de realizar el proceso el evento sincrono, la app no podrá seguir su ejecución.

Evento: Es una acción que se realiza en la app(aplicación)

node.js => esta basado en eventos asícronos, es decir el servidor siempre esta a la espera del pedido que realiza la aplicación.
También se puede definir eventos que se desencadenen y ejecuten internamente en el servidor.

En node se tiene un concepto muy importante que se utiliza bastante el cual es EMITTERS(emisores).

Emitters => Son objetos que emiten eventos nombrados y llaman a funciones específicas cuando ocurren, los emitters son instancias de la clase EventEmitter, esos objetos tienen un método .on() para asociar una función al evento, la función se ejecuta cuando ocurre el evento y esa función se denomina "Event Handler"(maneja el evento) o también "Event Listener".

Módulo events=> Este módulo nos permite:

    - Definir
    - Emitir
    - Escuchar