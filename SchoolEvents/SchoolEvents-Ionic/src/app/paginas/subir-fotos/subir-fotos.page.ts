import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { EventosService } from '../../servicios/eventos.service';
import { FotosService } from '../../servicios/fotos.service';
@Component({
  selector:'app-subir-fotos',
  templateUrl:'./subir-fotos.page.html',
  styleUrls:['./subir-fotos.page.scss'],
  imports:[IonContent,IonIcon,RouterLink,CabeceraComponent]
})
export class SubirFotosPage {
  private ruta=inject(ActivatedRoute);
  private router=inject(Router);
  private eventos=inject(EventosService);
  private fotos=inject(FotosService);
  acepto=false;
  previsualizacion='';
  nombreArchivo='';
  error='';
  get id(){
    return Number(
        this.ruta.snapshot.paramMap.get('id'));
  }
  get evento(){
    return this.eventos.obtener(
        this.id);
  }
  /*La parte de subida de fotos de galería es un comando que he sacado de una web para que quede más profesional*/
/*esta parte porque me gustaba más profesional*/
  seleccionar(evento:Event){
    const input=evento.target as HTMLInputElement;
    const archivo=input.files?.[0];
    this.previsualizacion='';this.error='';
    if(!archivo) return;
    if(!archivo.type.startsWith('image/')) {
      this.error='Selecciona una imagen.';
      return;
    }
    if(archivo.size>3_000_000){
      this.error='La imagen debe pesar menos de 3 MB.';
      return;
    }
    this.nombreArchivo=archivo.name;
    const lector=new FileReader();lector.onload=()=>{
      this.previsualizacion=String(lector.result||'');
    };
    lector.readAsDataURL(archivo);
  }
  /*esto ya sabia hacerlo*/
  guardar(){
    if(!this.acepto || !this.previsualizacion){
      this.error='Debes seleccionar una foto y aceptar el consentimiento.';
      return;
    }
    if(!this.evento){
      this.error='Evento no encontrado.';
      return;
    }
    this.fotos.agregar({
      eventoId:this.id,url:this.previsualizacion,nombre: this.nombreArchivo
    });
    void this.router.navigateByUrl('/mis-fotos');
  }
}
