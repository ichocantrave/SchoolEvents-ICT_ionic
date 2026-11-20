import { Injectable, signal } from '@angular/core';
export interface FotoLocal {
  eventoId:number;
  url:string;
  nombre:string;
}
@Injectable({
  providedIn:'root'
})
export class FotosService {
  // Es una demo porque las fts in memory se pierden al recharge
  readonly fotos = signal<FotoLocal[]>([]);
  agregar(foto:FotoLocal) {
    this.fotos.update(actuales=>[foto,...actuales]);
  }
}
