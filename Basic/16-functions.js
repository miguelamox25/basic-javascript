/////////// FUNCIONES ///////////

// Una funcion es un bloque de codigo que se puede invocar

/////////// SIMPLE /////////////
function myFunc(){ // Así se declara una funcion simple
    console.log('Hola querido')
    console.log('amigo')
}

myFunc() // Así se invoca una funcion simple

//////// CON PARAMETROS ///////////////
// Los parametros funcionan como variables
function myFuncParameters(nombre, apellido){ // asi se declara
    console.log('Saludos amigo')
    console.log(`Tu nombre es ${nombre}`) // Aqui estamos empleando el parametro
    console.log(`Y tu apellido es ${apellido}`)
}

myFuncParameters('Miguel','Amox') // Aqui invocamos la func. con parametros, y le pasamos el valor


//////// ANONIMAS ///////////////
// Estas funciones no se le asigna un valor, pero se deben de asignar en una variable
const funcAnonima = function (nombre, apellido){ // asi se declara
    console.log('Saludos de nuevo')
    console.log(`Tu nombre es ${nombre}`) // Aqui estamos empleando el parametro
    console.log(`Y tu apellido es ${apellido}`)
}

funcAnonima('Juan','Odonojú')

///////// ARROW FUNCTION ////////////////
// Las funciones flecha son un modo de funcion abreviada
const funcion1 = (nombre, apellido) => {
    console.log(`Hola ${nombre} de apellido ${apellido}`)
}
funcion1('Fermin','Vela')

// Se emplea mejor cuando se presenta en una sola linea
const funcion2 = (nombre, apellido) => console.log(`Hola ${nombre} de apellido ${apellido}`)
funcion2('Pedro','Ipablo')
