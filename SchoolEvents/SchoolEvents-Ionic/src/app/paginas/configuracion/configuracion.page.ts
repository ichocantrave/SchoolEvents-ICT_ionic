import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
@Component({
    selector:'app-configuracion',
    templateUrl:'./configuracion.page.html',
    styleUrls:['./configuracion.page.scss'],
    imports:[IonContent,CabeceraComponent]
})
export class ConfiguracionPage {
    notificaciones=true;
    mensajito='';
    guardar(){
        this.mensajito='Preferencias guardadas en esta sesión.';
    }
}
