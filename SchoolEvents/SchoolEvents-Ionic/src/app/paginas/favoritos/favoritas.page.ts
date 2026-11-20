import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { EventosService } from '../../servicios/eventos.service';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaEventoComponent } from '../../componentes/tarjeta-evento/tarjeta-evento.component';
@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.page.html',
    styleUrls: ['./favoritos.page.scss'],
    imports: [IonContent, RouterLink, CabeceraComponent, TarjetaEventoComponent]
})
export class FavoritosPage {
    servicio = inject(EventosService);
    // Obtiene los eventos favoritos
    get eventos() {
        return this.servicio.eventos.filter(e =>
            this.servicio.esFavorito(e.id)
        );
    }
    // Elimina un evento de favoritos
    quitarFavorito(id: number) {
        this.servicio.quitarFavorito(id);
    }
}
