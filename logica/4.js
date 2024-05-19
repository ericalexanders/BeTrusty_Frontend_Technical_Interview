// Lee detallada mente la imagen "./code_example.png" y realiza un analisis de su funcionalidad, y como lo podrias mejorar
//Pista, el codigo presentado handlea dos diferentes tipos de tokens (api token, session token)

import image from './code_example.png'

// RESOLUCION EN CARPETA Ej4

// Para mejorar el código, se sugiere modularizar y reutilizar el código tanto como sea posible. Además,
// se pueden utilizar interceptores de axios para manejar el refresco de tokens de manera centralizada.

// INTERCEPTOR AXIOS
// Se utiliza axios.create() en el archivo api.js para crear una instancia de axios con interceptores que
// manejan automáticamente la adición de tokens y el refresco de los mismos cuando expiran.

// MODULARIZACION
// Las funciones relacionadas con la autenticación y la configuración de la moneda se separan en módulos
// distintos (authService.js y currencyService.js, dentro de la carpte "services") para mejorar la legibilidad
// y mantenibilidad del código.

// HOOKS Y EFECTOS
// Se mantienen los useEffect necesarios para manejar los efectos secundarios, asegurando que las llamadas 
// a la API y la actualización del estado se realicen de manera correcta y eficiente.