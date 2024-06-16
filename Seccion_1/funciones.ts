// funciones.ts

// Función con tipos de retorno explícitos y parámetros tipados
function suma(a: number, b: number): number {
    return a + b;
}

function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

// Función genérica
function identidad<T>(valor: T): T {
    return valor;
}

// Ejemplos de uso
console.log(suma(5, 3));
console.log(saludar("Juan"));
console.log(identidad<number>(10));
console.log(identidad<string>("Hola"));
