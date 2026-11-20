import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaEventoComponent } from '../../componentes/tarjeta-evento/tarjeta-evento.component';
import { CATEGORIAS, EVENTOS } from '../../datos/eventos';
@Component({
    selector:'app-inicio',
    templateUrl:'./inicio.page.html',
    styleUrls:['./inicio.page.scss'],
    imports:[RouterLink,IonContent,CabeceraComponent,TarjetaEventoComponent]
})
export class InicioPage {
    categorias=CATEGORIAS;
    eventos=EVENTOS.slice(0,3);
}
