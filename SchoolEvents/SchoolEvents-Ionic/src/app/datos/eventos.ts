import { Evento, Categoria } from '../modelos/evento';

const foto = (nombre: string) => `assets/schoolevents/${nombre}`;

export const CATEGORIAS: Categoria[] = [
  { id: 'todos', nombre: 'Todos', imagen: foto('categoria-todos.png') },
  { id: 'academico', nombre: 'Académico', imagen: foto('categoria-academico.png') },
  { id: 'deportivo', nombre: 'Deportivo', imagen: foto('categoria-deportivo.png') },
  { id: 'cultural', nombre: 'Cultural', imagen: foto('categoria-cultural.png') },
  { id: 'religioso', nombre: 'Religioso', imagen: foto('categoria-religioso.png') }
];

// Precio 0 = gratuito en esta maqueta. Solo Sevilla FC tiene precio confirmado en las capturas.
export const EVENTOS: Evento[] = [
  { id: 1, titulo: 'Feria de Ciencias', categoria: 'academico', fecha: '2027-04-13', hora: '09:00 - 14:00', lugar: 'Palacio de Congreso', imagen: foto('feriacienciachoco.png'), precio: 0, descripcion: 'Disfruta de experimentos, talleres y actividades científicas.' },
  { id: 2, titulo: 'Casa de la Ciencia', categoria: 'cultural', fecha: '2026-11-30', hora: '10:00 - 13:30', lugar: 'Casco Antiguo', imagen: foto('casacienciachoco.png'), precio: 0, descripcion: 'Descubre la ciencia con exposiciones y actividades para estudiantes.' },
  { id: 3, titulo: 'Escuela ETSI', categoria: 'academico', fecha: '2026-10-05', hora: '08:00 - 12:30', lugar: 'Cartuja', imagen: foto('chocoetsi.png'), precio: 0, descripcion: 'Conoce la Escuela Técnica Superior de Ingeniería y sus instalaciones.' },
  { id: 4, titulo: 'IMSE-CNM', categoria: 'academico', fecha: '2026-12-15', hora: '09:00 - 14:00', lugar: 'Cartuja', imagen: foto('IMSE.jfif'), precio: 0, descripcion: 'Visita el Instituto de Microelectrónica de Sevilla.' },
  { id: 5, titulo: 'CICA', categoria: 'academico', fecha: '2026-11-19', hora: '08:00 - 14:30', lugar: 'Reina Mercedes', imagen: foto('CICA.jfif'), precio: 0, descripcion: 'Visita las instalaciones del Centro Informático Científico de Andalucía.' },
  { id: 6, titulo: 'Visita estadio del Sevilla FC', categoria: 'deportivo', fecha: '2026-11-23', hora: '09:00 - 14:00', lugar: 'Nervión', imagen: foto('chocosevilla.png'), precio: 14, descripcion: '¿Te gusta el fútbol y quieres conocer lo que ocurre detrás de los partidos? ⚽ En el Estadio Ramón Sánchez-Pizjuán podrás recorrer los vestuarios, pasar por el túnel de salida al campo, sentarte en los banquillos, conocer la sala de prensa y pisar el césped. ¡Ven con tus compañeros y vive el fútbol de una forma diferente!' },
  { id: 7, titulo: 'Viaje a Roma', categoria: 'religioso', fecha: '2026-09-27', hora: '06:00', lugar: 'Aeropuerto', imagen: foto('roma.jpg'), precio: 479, descripcion: 'Viaje a Roma para conocer su patrimonio histórico y religioso.' },
  { id: 8, titulo: 'El Quijote de Cervantes', categoria: 'cultural', fecha: '2027-04-30', hora: '11:00 - 13:30', lugar: 'Centro cultural Unicaja', imagen: foto('quijote_cartel.jpg'), precio: 10, descripcion: 'Disfruta de una actividad sobre Don Quijote de la Mancha.' },
  { id: 9, titulo: 'Visita Barrio de Triana', categoria: 'cultural', fecha: '2026-03-07', hora: '10:00 - 14:00', lugar: 'Triana', imagen: foto('triana.jpg'), precio: 0, descripcion: 'Conoce la historia, la cultura y las calles del barrio de Triana.' },
  { id: 10, titulo: 'Visitas hermandades', categoria: 'religioso', fecha: '2027-04-26', hora: '11:00 - 13:30', lugar: 'Casco Antiguo', imagen: foto('hermandadades.jfif'), precio: 0, descripcion: 'Conoce algunas de las hermandades de Sevilla.' },
  { id: 11, titulo: 'Visita Real Alcázar de Sevilla', categoria: 'cultural', fecha: '2026-06-09', hora: '10:00 - 12:30', lugar: 'Casco Antiguo', imagen: foto('alcazar.jfif'), precio: 0, descripcion: 'Descubre los jardines y las salas del Real Alcázar de Sevilla.' },
  { id: 12, titulo: 'Visita Catedral', categoria: 'religioso', fecha: '2027-05-27', hora: '11:00 - 13:30', lugar: 'Casco Antiguo', imagen: foto('catedralout.png'), precio: 0, descripcion: 'Conoce la Catedral de Sevilla y su patrimonio.' },
  { id: 13, titulo: 'Viaje París', categoria: 'religioso', fecha: '2026-12-07', hora: '06:00', lugar: 'Aeropuerto', imagen: foto('paris.jpg'), precio: 568, descripcion: 'Viaje para conocer lugares de interés histórico y religioso en París.' },
  { id: 14, titulo: 'Partido Insolac caja 87', categoria: 'deportivo', fecha: '2027-02-02', hora: '18:00 - 20:30', lugar: 'Palacio de Deportes San Pablo', imagen: foto('chococaja.png'), precio: 20, descripcion: 'Disfruta con tus compañeros de un partido de baloncesto.' },
  { id: 15, titulo: 'Bosque Suspendido', categoria: 'deportivo', fecha: '2027-03-19', hora: '08:00 - 14:00', lugar: 'La Juliana', imagen: foto('chocobosque.png'), precio: 35, descripcion: 'Actividad al aire libre con circuitos de aventura.' },
  { id: 16, titulo: 'Camino de Santiago', categoria: 'deportivo', fecha: '2027-05-05', hora: '08:00', lugar: 'Torre Sevilla', imagen: foto('chocosanti.png'), precio: 300, descripcion: 'Realiza una actividad de senderismo inspirada en el Camino de Santiago.' }
];

export function fechaBonita(fecha: string): string {
  if (!fecha) return 'Fecha por confirmar';
  const [anyo, mes, dia] = fecha.split('-').map(Number); //dividimosfechitaentre
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(anyo, mes - 1, dia));
}

export function nombreCategoria(id: string): string {
  return CATEGORIAS.find(c => c.id === id)?.nombre || id;
}
