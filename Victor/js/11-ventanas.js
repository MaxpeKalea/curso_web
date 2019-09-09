'use strict'

// Vamos a ver:
//  - Alertas o ventanas emergentes
//  - Ventanas de confirmación (Se puede cornfirmar o denegar algo)
//  - Popup de ingreso de datos


// ALERTAS (alert)
// -------

// Muestra algo en un popup

alert("Esta es mi alerta");


// CONFIRMACIÓN (confirm)
// ------------

var acepta = confirm("Estás seguro de que quieres continuar?");
console.log(acepta);

// Si el usuario responde Aceptar, devuelve true
// Si el usuario responde Cancelar, devuelve false


// INGRESO DE DATOS (prompt)
// ----------------

// prompt recibe 2 parámetros, el primero es la cadena que muestra y el segundo el valor por defecto

var edad = prompt("¿Qué edad tienes?", 18);
console.log("Edad: " + edad);

// El resultado siempre va a ser de tipo string
// si necesito un tipo numérico, puedo utilizar: parseInt, parseFloat o Number
