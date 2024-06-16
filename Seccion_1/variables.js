"use strict";
// variables.ts
// String
let nombre = "Juan";
// Number
let edad = 30;
// Boolean
let esEstudiante = true;
// Array
let notas = [80, 90, 85];
// Tuple
let persona = ["Juan", 30];
// Enum
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
let colorFavorito = Color.Verde;
// Operaciones básicas
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`¿Es estudiante?: ${esEstudiante}`);
console.log(`Notas: ${notas.join(", ")}`);
console.log(`Persona: ${persona[0]}, ${persona[1]}`);
console.log(`Color favorito: ${Color[colorFavorito]}`);
