export type CategoriaEvento = 'academico' | 'deportivo' | 'cultural' | 'religioso';

export interface Evento {
  id: number;
  titulo: string;
  categoria: CategoriaEvento;
  fecha: string;
  hora: string;
  lugar: string;
  imagen: string;
  descripcion: string;
  precio: number; // 0 significa que el evento es gratuito
}

export interface Categoria {
  id: CategoriaEvento | 'todos';
  nombre: string;
  imagen: string;
}
