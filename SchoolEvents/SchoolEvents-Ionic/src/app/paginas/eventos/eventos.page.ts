import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CATEGORIAS, EVENTOS } from '../../datos/eventos';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaEventoComponent } from '../../componentes/tarjeta-evento/tarjeta-evento.component';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  imports: [IonContent, CabeceraComponent, TarjetaEventoComponent]
})
export class EventosPage {
  private ruta = inject(ActivatedRoute);
  get categoria() { return this.ruta.snapshot.queryParamMap.get('categoria') || 'todos'; }
  get nombre() { return CATEGORIAS.find(c => c.id === this.categoria)?.nombre || 'Todos'; }
  get imagenCategoria() { return CATEGORIAS.find(c => c.id === this.categoria)?.imagen; }
  get eventos() {
    return this.categoria === 'todos' ? EVENTOS : EVENTOS.filter(e => e.categoria === this.categoria);
  }
}
