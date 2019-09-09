'use strict'

// FUNCIONES

// Las funciones hay que declararlas antes de utilizarlas

// Sin parámetros

function holaMundo() {
    return "Hola Mundo!";
}

console.log(holaMundo());

// Paso de parámetros

function sumar(a, b) {
    return a + b;
}

console.log(sumar(3, 5));

// Parámetros por defecto (opcionales)

function saludar(nombre, idioma = "es") {
    var mensaje = "";
    switch (idioma) {
        case "es":
            mensaje = "Hola " + nombre + "!";
            break;
        case "en":
            mensaje = "Hello " + nombre + "!";
            break;
        default:
            mensaje = "Idioma no disponible";
            break;
    }
    return mensaje;
}

document.write(saludar("Juan") + "<br>");
document.write(saludar("Peter", "en") + "<br>");
document.write(saludar("Michelle", "fr") + "<br>");



