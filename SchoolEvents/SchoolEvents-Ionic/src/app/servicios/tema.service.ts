import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) /*allow varias screen use mode dark */
export class TemaService {
  private readonly clave = 'schoolevents-modo-oscuro';
  readonly modoOscuro = signal(this.leerPreferencia()); /*señal que modo dark is activate o no*/
  constructor() {
    this.aplicar(this.modoOscuro());
  }
  cambiarModo(activado: boolean): void {
    this.modoOscuro.set(activado);
    try {
      localStorage.setItem(this.clave, String(activado));
    } catch {
      // Si el navega block el alma, el tema  funcio durante esta sesión.
    }

    this.aplicar(activado);
  }
  /*pa leer la prefe use that method*/
  private leerPreferencia(): boolean {
    try {
      return localStorage.getItem(this.clave) === 'true';
    } catch {
      return false;
    }
  }
  /*method que cambia aparien*/
  private aplicar(activado: boolean): void {
    document.documentElement.classList.toggle('modo-oscuro', activado);
  }
}
