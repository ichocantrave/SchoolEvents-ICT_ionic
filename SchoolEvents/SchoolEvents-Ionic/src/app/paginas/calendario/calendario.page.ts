import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { EVENTOS, fechaBonita } from '../../datos/eventos';
@Component({
  selector:'app-calendario',
  templateUrl:'./calendario.page.html',
  styleUrls:['./calendario.page.scss'],
  imports:[IonContent,IonIcon,RouterLink,CabeceraComponent]
})
export class CalendarioPage {
  mes = 10;
  anyo = 2026;
  diaSeleccionado = 5;
  semana = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  fechaBonita = fechaBonita;
  get nombreMes() {
    return new Intl.DateTimeFormat('es-ES',
        {month:'long', year:'numeric'}).format(new Date(this.anyo, this.mes));
  }
  get celdas(): (number|null)[] {
    const inicio = (new Date(this.anyo, this.mes, 1).getDay() + 6) % 7;
    const dias = new Date(this.anyo, this.mes + 1, 0).getDate();
    return [...Array<null>(inicio).fill(null), ...Array.from({length:dias},(_,i)=>i+1)];
  }
  private iso(dia:number) {
    return `${this.anyo}-${String(this.mes+1).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;
  }
  /*recibe día y da fecha año, mes y día. padStart es pa add 0 delante meses y días.*/
  tieneEvento(dia:number):boolean {
    return EVENTOS.some(e=>e.fecha===this.iso(dia));
  }
  get eventosDelDia() {
    return EVENTOS.filter(e=>e.fecha===this.iso(this.diaSeleccionado));
  }
  moverMes(paso:number) {
    const fecha = new Date(this.anyo,this.mes+paso,1);
    this.mes=fecha.getMonth();this.anyo=fecha.getFullYear();this.diaSeleccionado=1;
  }
}
