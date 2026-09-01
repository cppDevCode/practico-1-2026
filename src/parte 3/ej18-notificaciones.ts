/**
 * EJERCICIO 18 - Sistema de notificaciones
 * ---------------------------------------------------------------------------
 * `enviarNotificaciones` debe funcionar con cualquier tipo de notificación,
 * sin importarle cuál es el tipo concreto.
 */
export abstract class Notificacion {
    abstract enviar(mensaje: string): void;
}

export class NotificacionEmail extends Notificacion {
    public override enviar(mensaje: string): void {
        console.log(`Enviando email con el mensaje: ${mensaje}`);
    }
}

export class NotificacionSMS extends Notificacion {
    public override enviar(mensaje: string): void {
        console.log(`Enviando SMS con el mensaje: ${mensaje}`);
    }
}

export class NotificacionPush extends Notificacion {
    public override enviar(mensaje: string): void {
        console.log(`Enviando notificación push con el mensaje: ${mensaje}`);
    }
}

export function enviarNotificaciones(
    notificaciones: Notificacion[],
    mensaje: string
): void {
    notificaciones.forEach((notificacion) => notificacion.enviar(mensaje));
}
