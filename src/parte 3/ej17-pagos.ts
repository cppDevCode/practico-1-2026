/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    public pagar(monto: number): void {
        console.log(`Pago de $${monto} realizado con tarjeta de crédito.`);
    }
}

export class Transferencia implements MetodoPago {
    public pagar(monto: number): void {
        console.log(`Pago de $${monto} realizado con transferencia.`);
    }
}

export class MercadoPago implements MetodoPago {
    public pagar(monto: number): void {
        console.log(`Pago de $${monto} realizado con mercado pago.`);
    }
}

export class Efectivo implements MetodoPago {
    public pagar(monto: number): void {
        console.log(`Pago de $${monto} realizado con efectivo.`);
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    // TODO: delegar el pago al método recibido.
    metodo.pagar(monto);
}
