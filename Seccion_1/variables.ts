// variables.ts

// String
let nombre: string = "Juan";

// Number
let edad: number = 30;

// Boolean
let esEstudiante: boolean = true;

// Array
let notas: number[] = [80, 90, 85];

// Tuple
let persona: [string, number] = ["Juan", 30];

// Enum
enum Color {
    Rojo,
    Verde,
    Azul
}
let colorFavorito: Color = Color.Verde;

// Operaciones básicas
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`¿Es estudiante?: ${esEstudiante}`);
console.log(`Notas: ${notas.join(", ")}`);
console.log(`Persona: ${persona[0]}, ${persona[1]}`);
console.log(`Color favorito: ${Color[colorFavorito]}`);
