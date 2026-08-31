# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Interface permite declarar la misma interface dos veces en el mismo scope y TS lo fusiona en una sola. Con type esto serìa un error de identificador duplicado. 

## ¿Qué permite hacer `type` que `interface` no?

Type permite hacer uniones, donde un valor puede ser de más de un tipo, ejemplo: string | number.  

Permite tmbién definir tuplas, es decir, arreglos donde podemos indicar el tipo de dato en cada posiciòn. Por ejemplo: [string, number].  

 Además, con type podemos crear alias para tipos primitivos, por ejemplo type ID = string, para darle un nombre más específico a un tipo que vamos a utilizar.

Por último, type permite trabajar con estructuras más complejas, como los mapped types, que permiten crear nuevos tipos a partir de otros tipos existentes modificando o recorriendo sus propiedades.

Por estas características, type resulta más flexible cuando necesitamos representar tipos que no son solamente objetos con propiedades.

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Sí, ambas se pueden extender aunque su sintaxis es distinta:

En el caso de interface se utiliza `extends`, utilizando el ejemplo de Alumno:

```
interface Persona {
    nombre:string,
    apellido: string
}

interface Alumno extends Persona {
    legajo: number,
}
```
En cambio, para type se utiliza `&`:

```
type Persona = {
    nombre:string,
    apellido: string
}

type Alumno = Persona & {
    legajo: number
}
 ```


## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Si bien ambas funcionarìan bien, elegirìa `interface` porque esta pensada para definir la estructura de un objeto y sus propiedades.  
Si necesitara agregar, por ejemplo, un estado con valores predefinidos, podria crear un `type`separado y utilizarlo dentro de la `interface`. Por ejemplo, para tener un EstadoAlumno que indique su status ("activo", "inactivo", "egresado").
