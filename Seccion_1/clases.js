"use strict";
// clases.ts
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerEdad() {
        return this.edad;
    }
}
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }
    obtenerPuesto() {
        return this.puesto;
    }
}
// Ejemplo de uso
const empleado = new Empleado("Juan", 30, "Desarrollador");
console.log(`Nombre: ${empleado.obtenerNombre()}`);
console.log(`Edad: ${empleado.obtenerEdad()}`);
console.log(`Puesto: ${empleado.obtenerPuesto()}`);
