// clases.ts

class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }

    public obtenerEdad(): number {
        return this.edad;
    }
}

class Empleado extends Persona {
    private puesto: string;

    constructor(nombre: string, edad: number, puesto: string) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    public obtenerPuesto(): string {
        return this.puesto;
    }
}

// Ejemplo de uso
const empleado: Empleado = new Empleado("Juan", 30, "Desarrollador");
console.log(`Nombre: ${empleado.obtenerNombre()}`);
console.log(`Edad: ${empleado.obtenerEdad()}`);
console.log(`Puesto: ${empleado.obtenerPuesto()}`);
