import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonIcon } from '@ionic/angular';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonIcon],
})
export class CabeceraComponent { @Input() titulo = ''; }
