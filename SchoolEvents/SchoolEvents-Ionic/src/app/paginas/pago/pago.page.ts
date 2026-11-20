import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { EventosService } from '../../servicios/eventos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
  imports: [IonContent, RouterLink, FormsModule]
})
export class PagoPage {
  private ruta = inject(ActivatedRoute);
  private router = inject(Router);
  private servicio = inject(EventosService);
  paso = 1;
  metodo = '';
  numero = '';
  caducidad = '';
  cvv = '';
  titular = '';
  error = '';

  get evento() { return this.servicio.obtener(Number(this.ruta.snapshot.paramMap.get('id'))); }

  seleccionar(metodo: string) {
    this.metodo = metodo;
    this.error = '';
    this.paso = 2;
  }

  pagar() {
    // Es una simulación: comprobamos campos, pero no enviamos ni guardamos datos bancarios.
    if (this.metodo === 'Visa' || this.metodo === 'Mastercard') {
      const numero = this.numero.replace(/\s/g, ''); /*elimina gaps ewdel num de tarjeta*/
      const fecha = this.caducidad.match(/^(0[1-9]|1[0-2])\s*\/\s*(\d{2})$/); /*test dcaducity format válido*/
      const valido = fecha && new Date(2000 + Number(fecha[2]), Number(fecha[1]), 1) > new Date(); /*tets fechas w coinci valida*/
      if (!/^\d{13,19}$/.test(numero) || !valido || !/^\d{3,4}$/.test(this.cvv) || !this.titular.trim()) {
        /*num tarjet btw 13 y 19 cifras*//*fecha caducidad no valida*//*si CVV have format correct*//*por si falla*/
        this.error = 'Revisa el número de tarjeta, la caducidad, el CVV y el titular.';
        return;
      }
    }
    if (!this.evento) { this.error = 'Evento no encontrado.'; return; }
    this.servicio.inscribir(this.evento.id);
    // Eliminamos los campos antes de mostrar el resultado.
    this.numero = this.caducidad = this.cvv = this.titular = '';
    this.paso = 3;
  }

  volver() { void this.router.navigateByUrl('/app/inicio'); }
}
