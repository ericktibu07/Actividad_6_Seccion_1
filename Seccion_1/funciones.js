"use strict";
// funciones.ts
// Función con tipos de retorno explícitos y parámetros tipados
function suma(a, b) {
    return a + b;
}
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
// Función genérica
function identidad(valor) {
    return valor;
}
// Ejemplos de uso
console.log(suma(5, 3));
console.log(saludar("Juan"));
console.log(identidad(10));
console.log(identidad("Hola"));
