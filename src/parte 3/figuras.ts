/**
 * EJERCICIO 12 - Clase abstracta Figura
 * ---------------------------------------------------------------------------
 * `Figura` no se puede instanciar directamente: cada subclase debe
 * implementar calcularArea() y calcularPerimetro() a su manera.
 * Ahí aparece el polimorfismo: un mismo arreglo `Figura[]` puede contener
 * círculos, rectángulos y cuadrados, y a cada uno se le puede pedir su área
 * sin saber de qué tipo concreto es.
 */
export abstract class Figura {
    public abstract calcularArea(): number;
    public abstract calcularPerimetro(): number;
}

export class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    //getters y setters
    public getRadio(): number {
        return this.radio;
    }
    public setRadio(radio: number): void {
        this.radio = radio;
    }
    
    public calcularArea(): number {
        // TODO: área = π * radio²
        return Math.PI * this.radio * this.radio;
    }

    public calcularPerimetro(): number {
        // TODO: perímetro (circunferencia) = 2 * π * radio
        return 2 * Math.PI * this.radio;
    }
}

export class Rectangulo extends Figura {
    constructor(
        private base: number,
        private altura: number
    ) {
        super();
    }
    //getters y setters
    public getBase(): number {
        return this.base;
    }

    public getAltura(): number {
        return this.altura;
    }   

    public setBase(base: number): void {
        this.base = base;
    }
    public setAltura(altura: number): void {
        this.altura = altura;
    }

    public calcularArea(): number {
        // TODO: área = base * altura
        return this.base * this.altura;
    }

    public calcularPerimetro(): number {
        // TODO: perímetro = 2 * (base + altura)
        return 2 * (this.base + this.altura);
    }
}

export class Cuadrado extends Figura {
    constructor(private lado: number) {
        super();
    }

    public getLado(): number {
        return this.lado;
    }

    public setLado(lado: number): void {
        this.lado = lado;
    }

    public calcularArea(): number {
        // TODO: área = lado²
        return this.lado * this.lado;
    }

    public calcularPerimetro(): number {
        // TODO: perímetro = 4 * lado
        return 4 * this.lado;
    }
}
