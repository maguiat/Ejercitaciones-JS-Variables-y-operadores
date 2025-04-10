// Ejercicio 5.1: Declara una variable 'cadenaNumero' y asígnale el valor "123". Convierte esta cadena a un número y almacénalo en una nueva variable 'numeroConvertido'. Muestra ambos valores en la consola.
// Ejercicio 5.2: Declara una variable 'booleano' y asígnale el valor 'true'. Convierte este valor a una cadena y almacénalo en una nueva variable 'cadenaBooleano'. Muestra ambos valores en la consola.


// Ejercicio 5.1: Declara una variable 'cadenaNumero' y asígnale el valor "123". Convierte esta cadena a un número y almacénalo en una nueva variable 'numeroConvertido'. Muestra ambos valores en la consola.
const cadenaNumero = '123'

// Para convertir una cadena a un número, se puede usar el operador '+' delante de la cadena
// también puede usarse Number(cadenaNumero) o parseInt(cadenaNumero) o parseFloat(cadenaNumero)
const numeroConvertido = +cadenaNumero
console.log({cadenaNumero, numeroConvertido})


// Ejercicio 5.2: Declara una variable 'booleano' y asígnale el valor 'true'. Convierte este valor a una cadena y almacénalo en una nueva variable 'cadenaBooleano'. Muestra ambos valores en la consola.
const booleano = true

// Para convertir un booleano a una cadena se le puede concatenar una cadena vacía ""
// Tambien se puede usar String(booleano)
const cadenaBooleano = booleano + ""
console.log({booleano, cadenaBooleano})

// Podemos usar typeof para verificar el tipo de dato de una variable
console.log('cadenaNumero es de tipo: ' + typeof cadenaNumero)
console.log('numeroConvertido es de tipo: ' + typeof numeroConvertido)
console.log('booleano es de tipo: ' + typeof booleano)
console.log('cadenaBooleano es de tipo: ' + typeof cadenaBooleano)


