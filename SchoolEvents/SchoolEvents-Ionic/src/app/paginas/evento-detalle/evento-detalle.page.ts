import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { EventosService } from '../../servicios/eventos.service';
import { fechaBonita, nombreCategoria } from '../../datos/eventos';

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.page.html',
  styleUrls: ['./evento-detalle.page.scss'],
  imports: [IonContent, IonIcon, RouterLink, CabeceraComponent]
})
export class EventoDetallePage {
  servicio = inject(EventosService); /*Inject es pa obtene servicio de angular*/
  private ruta = inject(ActivatedRoute);
  private router = inject(Router);
  fechaBonita = fechaBonita;
  nombreCategoria = nombreCategoria;
  get evento() { return this.servicio.obtener(Number(this.ruta.snapshot.paramMap.get('id'))); } /*obtiene id del event desde direccion de la pag*/
  inscribirme(id: number) {
    this.servicio.inscribir(id);
    void this.router.navigateByUrl('/app/inscripciones');
  }
  quitar(id: number) { this.servicio.cancelar(id); }
  abrirPago(id: number) { void this.router.navigate(['/pago', id]); }
}
