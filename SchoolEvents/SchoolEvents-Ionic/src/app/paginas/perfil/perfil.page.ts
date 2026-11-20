import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonToggle } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { EventosService } from '../../servicios/eventos.service';
import { FotosService } from '../../servicios/fotos.service';
import { TemaService } from '../../servicios/tema.service';
@Component({
    selector:'app-perfil',
    templateUrl:'./perfil.page.html',
    styleUrls:['./perfil.page.scss'],
    imports:[IonContent,IonIcon,IonToggle,RouterLink,CabeceraComponent]
})
export class PerfilPage {
    eventos=inject(EventosService);
    fotos=inject(FotosService);
    tema=inject(TemaService);
}
