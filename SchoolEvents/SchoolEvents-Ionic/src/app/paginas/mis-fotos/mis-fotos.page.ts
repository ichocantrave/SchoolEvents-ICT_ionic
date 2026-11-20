import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { FotosService } from '../../servicios/fotos.service';
import { EventosService } from '../../servicios/eventos.service';
@Component({
    selector:'app-mis-fotos',
    templateUrl:'./mis-fotos.page.html',
    styleUrls:['./mis-fotos.page.scss'],
    imports:[IonContent,RouterLink,CabeceraComponent]
})
export class MisFotosPage {
    fotos=inject(FotosService);
    eventos=inject(EventosService);
}
