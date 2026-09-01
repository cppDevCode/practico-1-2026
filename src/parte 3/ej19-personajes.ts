/**
 * EJERCICIO 19 - Sistema de personajes
 * ---------------------------------------------------------------------------
 * Cada personaje ataca distinto:
 *   - Guerrero: ataque físico -> hace daño = this.ataque
 *   - Mago:     ataque mágico -> hace daño = round(this.ataque * 1.5)
 *   - Arquero:  ataque a distancia -> hace daño = round(this.ataque * 0.8)
 *
 * La vida de quien recibe el ataque nunca debe bajar de 0.
 */
export abstract class Personaje {
    constructor(
        public nombre: string,
        public vida: number,
        public ataque: number
    ) {}

    public abstract atacar(objetivo: Personaje): void;
}

export class Guerrero extends Personaje {
    public override atacar(objetivo: Personaje): void {
        objetivo.vida = Math.max(0, objetivo.vida - this.ataque);
    }
}

export class Mago extends Personaje {
    public override atacar(objetivo: Personaje): void {
        const danio=Math.round(this.ataque * 1.5);
        objetivo.vida = Math.max(0, objetivo.vida - danio);
    }
}

export class Arquero extends Personaje {
    public override atacar(objetivo: Personaje): void {
        const danio=Math.round(this.ataque * 0.8);
        objetivo.vida = Math.max(0, objetivo.vida - danio);
    }
}
