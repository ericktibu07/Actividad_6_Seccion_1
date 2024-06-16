"use strict";
// interfaces.ts
function formatearUsuario(usuario) {
    return `Usuario: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}
// Ejemplo de uso
const usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@example.com",
    edad: 30
};
console.log(formatearUsuario(usuario));
