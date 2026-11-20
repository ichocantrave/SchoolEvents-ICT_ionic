import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
    selector:'app-recuperar-contrasena',
    templateUrl:'./recuperar-contrasena.page.html',
    styleUrls:['./recuperar-contrasena.page.scss'],
    imports:[IonContent,RouterLink,FormsModule]
})
export class RecuperarContrasenaPage {
    correo='';
    enviado=false;
    enviar(evento:Event){
        evento.preventDefault();
        this.enviado=true;
    }
}
