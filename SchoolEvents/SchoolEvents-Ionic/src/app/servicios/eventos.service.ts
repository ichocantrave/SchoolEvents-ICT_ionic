
import { Injectable, signal } from '@angular/core';
import { EVENTOS } from '../datos/eventos';
import { Evento } from '../modelos/evento';
const CLAVE = 'schoolevents_inscripciones';
const CLAVE_FAVORITOS = 'schoolevents_favoritos';
@Injectable({ providedIn: 'root' })
export class EventosService {
  readonly eventos: Evento[] = EVENTOS;
  readonly inscritos = signal<number[]>(this.leer(CLAVE));
  readonly favoritos = signal<number[]>(this.leer(CLAVE_FAVORITOS));
  private leer(clave: string): number[] {
    try {
      return JSON.parse(localStorage.getItem(clave) || '[]') as number[];
    } catch {
      return [];
    }
  }
  // find un event x su ID
  obtener(id: number): Evento | undefined {
    return this.eventos.find(evento => evento.id === id);
  }
  // test if user esta inscrip
  estaInscrito(id: number): boolean {
    return this.inscritos().includes(id);
  }
  // Inscri user a event
  inscribir(id: number): void {
    if (this.obtener(id)) {
      this.inscritos.update(ids =>
          ids.includes(id) ? ids : [...ids, id]
      );
      this.guardar();
    }
  }
  // Cancela una inscripción
  cancelar(id: number): void {
    this.inscritos.update(ids =>
        ids.filter(actual => actual !== id)
    );
    this.guardar();
  }
  // test si un event es fav
  esFavorito(id: number): boolean {
    return this.favoritos().includes(id);
  }
  // add o quit event de fav
  cambiarFavorito(id: number): void {
    if (!this.obtener(id)) return;
    if (this.esFavorito(id)) {
      this.quitarFavorito(id);
    } else {
      this.favoritos.update(ids => [...ids, id]);
      this.guardarFavoritos();
    }
  }
  // delete un event de fav
  quitarFavorito(id: number): void {
    this.favoritos.update(ids =>
        ids.filter(actual => actual !== id)
    );
    this.guardarFavoritos();
  }
  // save las inscrip
  private guardar(): void {
    try {
      localStorage.setItem(
          CLAVE,
          JSON.stringify(this.inscritos())
      );
    } catch {
      // Alma no dispo
    }
  }
  // save fav
  private guardarFavoritos(): void {
    try {
      localStorage.setItem(
          CLAVE_FAVORITOS,
          JSON.stringify(this.favoritos())
      );
    } catch {
      // Almacenamiento no disponible
    }
  }
}

