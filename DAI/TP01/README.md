 # TP01
## Introduccion a Node.JS

- EJ01: Desarrollar una aplicación que podamos utilizar es el `console.log()` haciendo pruebas con dos strings, concatenarlos e interpolárlos.
- EJ02: Crear un módulo matemática `/src/modules/matematica.js` que tenga 4 funciones (dos de ellas arrow functions) y una constante (PI). Exportarlas y utilizarlas en el programa principal.
- EJ03: Crear una clase Alumno en `/src/models/alumno.js` que tenga dos propiedades (`username`, `DNI`). Instanciar en un programa principal dos objetos y mostrarlos en la consola.
- EJ04: Desarrollar una aplicación que utilizando el módulo interno `fs` (FileSystem) haga un programa que lea un archivo y lo escriba con otro nombre. Desarrollarlo en forma de función.
Por ejemplo:
    ```js
    copiar("./entrada.txt", "./salida.txt") 
    ```
- EJ05: Desarrollar una aplicación que utilizando el módulo interno `url`, invoque a una función que debemos creer que se llama `parsearUrl(url)` que dada una url retorna un objeto con las siguientes propiedades. `host`, `pathname` y `params`
Ejemplo: 
    ```js
    let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
    console.log(objeto);
    ```
    Output: 
    ```json
    {
        "host": "http://www.ort.edu.ar:8080",
        "pathname": "/alumnos/index.htm",
        "params" : {"curso" : "2022", "mes" : "mayo" }
    }
    ```
- EJ06: Modificar el ejercicio anterior para que en caso de que dentro de la función `parsearUrl(url)` se produzca una `excepción` (por ejemplo un nombre de archivo erróneo), muestre la excepción en la consola.
- EJ07: Realizar un programa que utilizando una biblioteca existente (buscarla) podamos hacer una función en la que le enviamos un nombre de un pais y nos retorne el nombre de la moneda que utiliza el mismo.
Ejemplo
    ```js
    let moneda = obtenerMoneda("argentina"); 
    console.log(moneda); // Output: "Peso Argentino"
    ```
