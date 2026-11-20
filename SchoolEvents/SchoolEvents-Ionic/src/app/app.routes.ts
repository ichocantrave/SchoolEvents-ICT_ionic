import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'login', loadComponent:()=>import('./paginas/login/login.page').then(m=>m.LoginPage) },
  { path:'recuperar-contrasena',loadComponent:()=>import('./paginas/recuperar-contrasena/recuperar-contrasena.page').then(m=>m.RecuperarContrasenaPage) },
  {
    path:'app',loadComponent:()=>import('./paginas/tabs/tabs.page').then(m=>m.TabsPage),
    children:[
      { path:'inicio',loadComponent:()=>import('./paginas/inicio/inicio.page').then(m=>m.InicioPage) },
      { path:'eventos',loadComponent:()=>import('./paginas/eventos/eventos.page').then(m=>m.EventosPage) },
      { path:'evento/:id',loadComponent:()=>import('./paginas/evento-detalle/evento-detalle.page').then(m=>m.EventoDetallePage) },
      { path:'calendario',loadComponent:()=>import('./paginas/calendario/calendario.page').then(m=>m.CalendarioPage) },
      { path:'inscripciones',loadComponent:()=>import('./paginas/inscripciones/inscripciones.page').then(m=>m.InscripcionesPage) },
      { path:'perfil',loadComponent:()=>import('./paginas/perfil/perfil.page').then(m=>m.PerfilPage) },
      { path:'',redirectTo:'inicio',pathMatch:'full' },
      {path: 'favoritos', loadComponent: () => import('./paginas/favoritos/favoritas.page').then(m => m.FavoritosPage)
      },
    ],
  },
  { path:'notificaciones',loadComponent:()=>import('./paginas/notificaciones/notificaciones.page').then(m=>m.NotificacionesPage) },
  { path:'mis-fotos',loadComponent:()=>import('./paginas/mis-fotos/mis-fotos.page').then(m=>m.MisFotosPage) },
  { path:'subir-fotos/:id',loadComponent:()=>import('./paginas/subir-fotos/subir-fotos.page').then(m=>m.SubirFotosPage) },
  { path:'configuracion',loadComponent:()=>import('./paginas/configuracion/configuracion.page').then(m=>m.ConfiguracionPage) },
  { path:'ayuda',loadComponent:()=>import('./paginas/ayuda/ayuda.page').then(m=>m.AyudaPage) },
  { path:'pago/:id',loadComponent:()=>import('./paginas/pago/pago.page').then(m=>m.PagoPage) },
  { path:'**',loadComponent:()=>import('./paginas/no-encontrada/no-encontrada.page').then(m=>m.NoEncontradaPage) },
];
