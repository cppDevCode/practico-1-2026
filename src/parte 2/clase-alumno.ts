/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */

// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------
//TODO cambiar a type
export type Materia = {
    codigo: number;
    nombre: string;
    horas: number;
}

export class Alumno {
    private legajo: number;
    private nombre: string;
    private apellido: string;
    private email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad.
    private edad: number;

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        // TODO (Ejercicio 8): asignar los atributos recibidos.
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
    //getters y setters
    public getLegajo(): number {
        return this.legajo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    public getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    public esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        if (edad < 0) {
            throw new Error("La edad debe ser un nùmero mayor o igual a 0");
        }
        if (edad > 120) {
            throw new Error("La edad debe ser un nùmero menor o igual a 120");
        }
        this.edad = edad;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    public agregarMateria(materia: Materia): void {
        this.materias.push(materia);
    }

    public quitarMateria(codigo: number): Materia | undefined {
        let materiaEncontrada: Materia | undefined = this.materias.find(m => m.codigo === codigo);
        if (!materiaEncontrada) {
            return undefined;
        }
        this.materias = this.materias.filter(m => m.codigo !== codigo);
        return materiaEncontrada;
    }

    public estaInscripto(codigo: number): boolean {
        return this.materias.some(m => m.codigo === codigo);
    }

    public cantidadMaterias(): number {
        return this.materias.length;
    }

    public getMaterias(): Materia[] {
        return [...this.materias];
    }
}
