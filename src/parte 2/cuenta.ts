/**
 * EJERCICIO 11 - Clase Cuenta
 * ---------------------------------------------------------------------------
 * El saldo no debe poder modificarse directamente desde afuera de la clase:
 * por eso es `private`. Solo se modifica a través de depositar/retirar.
 */
export class Cuenta {
    public numero: number;
    public titular: string;
    private saldo: number;

    constructor(numero: number, titular: string, saldoInicial: number = 0) {
        if (saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo");
        }
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser un nùmero mayor a 0");
        }
        this.saldo += monto;
    }

    retirar(monto: number): void {
        if (monto <=0) {
            throw new Error("El monto a retirar debe ser un nùmero mayor que 0");
        }
        if (monto > this.saldo) {
            throw new Error("Saldo insuficiente para realizar el retiro");
        }
        this.saldo -= monto;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}
