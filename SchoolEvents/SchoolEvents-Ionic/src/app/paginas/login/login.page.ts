import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
  selector:'app-login',
  templateUrl:'./login.page.html',
  styleUrls:['./login.page.scss'],
  imports:[IonContent]
})
export class LoginPage {
  private router=inject(Router);
  mensaje='';
  iniciarSesion(evento:Event):void {
    evento.preventDefault();
    this.mensaje='';
    void this.router.navigateByUrl('/app/inicio');
  }
  recuperarContrasena():void {
    void this.router.navigateByUrl('/recuperar-contrasena');
  }
  cuentaEscolar():void {
    this.mensaje='El acceso con cuenta escolar necesita un servicio de autenticación del centro.';
  }
}
