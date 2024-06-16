// interfaces.ts

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

function formatearUsuario(usuario: Usuario): string {
    return `Usuario: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}

// Ejemplo de uso
const usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@example.com",
    edad: 30
};

console.log(formatearUsuario(usuario));
