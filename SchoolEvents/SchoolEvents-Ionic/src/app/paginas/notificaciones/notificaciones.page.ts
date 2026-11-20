import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
@Component({
  selector:'app-notificaciones',
  templateUrl:'./notificaciones.page.html',
  styleUrls:['./notificaciones.page.scss'],
  imports:[IonContent,IonIcon,RouterLink,CabeceraComponent]
})
export class NotificacionesPage {
  notificaciones = [
    {id:1,icono:'calendar-outline',titulo:'Recordatorio de evento',mensaje:'¡No olvides tu inscripción!',hace:'Hace 3 horas',ruta:'/app/inscripciones'},
    {id:2,icono:'time-outline',titulo:'Cambio de horario',mensaje:'La feria de las ciencias se realizará de 09:00 a 14:00.',hace:'Hace 7 horas',ruta:'/app/evento/1'},
    {id:3,icono:'images-outline',titulo:'Nueva foto del evento',mensaje:'Se han compartido fotos del festival cultural.',hace:'Hace 5 días',ruta:'/mis-fotos'},
    {id:4,icono:'checkmark-circle-outline',titulo:'Inscripción confirmada',mensaje:'Tu inscripción al viaje de Roma ha sido confirmada.',hace:'Hace 1 semana',ruta:'/app/evento/7'},
  ];
}
