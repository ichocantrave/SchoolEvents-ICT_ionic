import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
@Component({
    selector:'app-ayuda',
    templateUrl:'./ayuda.page.html',
    styleUrls:['./ayuda.page.scss'],
    imports:[IonContent,CabeceraComponent]
})
export class AyudaPage {}
