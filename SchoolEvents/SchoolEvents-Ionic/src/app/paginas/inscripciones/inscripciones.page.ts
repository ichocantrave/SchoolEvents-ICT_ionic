import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { EventosService } from '../../servicios/eventos.service';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaEventoComponent } from '../../componentes/tarjeta-evento/tarjeta-evento.component';
@Component({
  selector:'app-inscripciones',
  templateUrl:'./inscripciones.page.html',
  styleUrls:['./inscripciones.page.scss'],
  imports:[IonContent,RouterLink,CabeceraComponent,TarjetaEventoComponent]
})
export class InscripcionesPage {
  servicio=inject(EventosService);
  get eventos(){
    return this.servicio.eventos.filter(e=>this.servicio.estaInscrito(e.id));
  }
  cancelar(id:number){
    this.servicio.cancelar(id);
  }
}
