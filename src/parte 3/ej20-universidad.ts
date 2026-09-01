/**
 * EJERCICIO 20 (INTEGRADOR) - Sistema de gestión de una universidad
 * ---------------------------------------------------------------------------
 * Persona
 *   ├── Alumno
 *   └── Docente
 *
 * `Persona` es abstracta. `Alumno` y `Docente` implementan
 * `obtenerInformacion()` cada uno a su manera (polimorfismo).
 *
 * La relación con `Materia` es de ida y vuelta:
 *   - `alumno.inscribirse(materia)` debe dejar constancia tanto en el
 *     alumno (su lista de materias) como en la materia (su lista de
 *     alumnos inscriptos).
 *   - `docente.asignarMateria(materia)` es análogo, del lado docente.
 *
 * Los métodos de `Materia` (`inscribirAlumno`, `asignarDocente`) son el
 * mecanismo que usan `Alumno`/`Docente` para avisarle a la materia. No hace
 * falta (ni corresponde) llamarlos "a mano" salvo que quieras inscribir
 * solamente del lado de la materia.
 */

export abstract class Persona {
    constructor(
        public legajo: number,
        public nombre: string,
        public apellido: string,
        public email: string
    ) {}

    public abstract obtenerInformacion(): string;
}

export class Materia {
    private alumnosInscriptos: Alumno[] = [];
    private docentesAsignados: Docente[] = [];

    constructor(
        public codigo: number,
        public nombre: string,
        public horas: number
    ) {}

    public inscribirAlumno(alumno: Alumno): void {
        const yaInscripto = this.alumnosInscriptos.some((a) => a.legajo === alumno.legajo);
        if (!yaInscripto) {
            this.alumnosInscriptos.push(alumno);
        }
    }

    public quitarAlumno(alumno: Alumno): void {
        this.alumnosInscriptos = this.alumnosInscriptos.filter((a) => a.legajo !== alumno.legajo);
    }

    public asignarDocente(docente: Docente): void {
        const yaAsignado = this.docentesAsignados.some((d) => d.legajo === docente.legajo);
        if (!yaAsignado) {
            this.docentesAsignados.push(docente);
        }
    }

    public getAlumnosInscriptos(): Alumno[] {
        return [...this.alumnosInscriptos];
    }

    public getDocentesAsignados(): Docente[] {
        return [...this.docentesAsignados];
    }
}

export class Alumno extends Persona {
    private materias: Materia[] = [];

    constructor(legajo: number, nombre: string, apellido: string, email: string) {
        super(legajo, nombre, apellido, email);
    }

    inscribirse(materia: Materia): void {
        const yaInscripto = this.materias.some((m) => m.codigo === materia.codigo);
        if (!yaInscripto) {
            this.materias.push(materia);
        }
        materia.inscribirAlumno(this);
    }

    public quitarMateria(materia: Materia): void {
        this.materias = this.materias.filter((m) => m.codigo !== materia.codigo);
        materia.quitarAlumno(this);
    }

    public getMaterias(): Materia[] {
        return [...this.materias];
    }

    public override obtenerInformacion(): string {
        return `Alumno: ${this.nombre} ${this.apellido}, Legajo: ${this.legajo} - ${this.materias.length} materias inscriptas`;
    }
}

export class Docente extends Persona {
    private materiasAsignadas: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        public especialidad: string
    ) {
        super(legajo, nombre, apellido, email);
    }

    public asignarMateria(materia: Materia): void {
        const yaAsignada = this.materiasAsignadas.some((m) => m.codigo === materia.codigo);
        if (!yaAsignada) {
            this.materiasAsignadas.push(materia);
        }
        materia.asignarDocente(this);
    }

    public getMateriasAsignadas(): Materia[] {
        return [...this.materiasAsignadas];
    }

    public override obtenerInformacion(): string {
        return `Docente: ${this.nombre} ${this.apellido}, Legajo: ${this.legajo}, Especialidad: ${this.especialidad} - ${this.materiasAsignadas.length} materias asignadas`;
    }
}
