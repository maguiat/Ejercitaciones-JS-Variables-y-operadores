// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.
// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.


// Ejercicio 7.1: Declara una variable usando 'let' dentro de un bloque de código ('{}') y muestra que no está disponible fuera del bloque.

{
    let saludo = 'Hola'
    console.log(saludo) // Efectivamente muestra el saludo
}

// console.log(saludo) // Da error en la consola porque 'saludo' no está definido fuera del bloque


// Ejercicio 7.2: Declara una constante 'PI' y asígnale el valor '3.14159'. Intenta reasignar otro valor a 'PI' y observa lo que ocurre.
const PI = 3.14159
// PI = 3.14 // Da error en la consola porque no se puede reasignar un valor a una constante

// Ejercicio 7.3: Declara una variable 'mensaje' usando 'var' y asígnale el valor "Hola Mundo". Declara la misma variable 'mensaje' dentro de una función y asígnale un valor diferente. Muestra ambos valores en la consola para ver cómo 'var' afecta el alcance de las variables.
var mensaje = 'Hola Mundo'

const funcionMensaje = function() {
    var mensaje = 'Adiós Mundo'
    console.log(mensaje) // Muestra "Adiós Mundo"
}
funcionMensaje()
console.log(mensaje) // Muestra "Hola Mundo" porque la variable 'mensaje' dentro de la función es diferente a la variable 'mensaje' fuera de la función

