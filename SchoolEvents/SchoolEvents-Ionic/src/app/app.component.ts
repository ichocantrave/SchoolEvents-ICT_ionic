import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { TemaService } from './servicios/tema.service';
import {
  home,homeOutline,calendar,calendarOutline,checkbox,checkboxOutline,person,personOutline,
  notifications,notificationsOutline,arrowBackOutline,timeOutline,locationOutline,
  heart,heartOutline,imagesOutline,settingsOutline,helpCircleOutline,checkmarkCircleOutline,
  chevronBackOutline,chevronForwardOutline,cameraOutline,cloudUploadOutline,cardOutline,
  checkmarkOutline,logOutOutline,closeOutline
} from 'ionicons/icons';
@Component({selector:'app-root',templateUrl:'app.component.html',imports:[IonApp,IonRouterOutlet]})
export class AppComponent {
  constructor() { inject(TemaService); addIcons({home,homeOutline,calendar,calendarOutline,checkbox,checkboxOutline,person,personOutline,
    notifications,notificationsOutline,arrowBackOutline,timeOutline,locationOutline,heart,heartOutline,
    imagesOutline,settingsOutline,helpCircleOutline,checkmarkCircleOutline,chevronBackOutline,
    chevronForwardOutline,cameraOutline,cloudUploadOutline,cardOutline,checkmarkOutline,logOutOutline,closeOutline});}
}
