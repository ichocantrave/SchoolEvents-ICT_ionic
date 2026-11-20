import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { Evento } from '../../modelos/evento';
import { fechaBonita, nombreCategoria } from '../../datos/eventos';

@Component({
  selector: 'app-tarjeta-evento',
  templateUrl: './tarjeta-evento.component.html',
  styleUrls: ['./tarjeta-evento.component.scss'],
  imports: [RouterLink, IonIcon]
})
export class TarjetaEventoComponent {
  @Input({ required: true }) evento!: Evento;
  fechaBonita = fechaBonita;
  nombreCategoria = nombreCategoria;
}
