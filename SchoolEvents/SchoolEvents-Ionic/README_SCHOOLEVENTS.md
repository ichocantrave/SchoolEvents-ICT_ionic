# SchoolEvents en Angular + Ionic

## ¿Qué he cambiado?

He partido del proyecto `aquapedia_ionic-master` incluido en el ZIP, porque era el que tenía tu inicio de sesión. He quitado de las rutas principales los nombres de AquaPedia. Los archivos antiguos quedan conservados en la carpeta `respaldo_aquapedia/` fuera de `src`.

El proyecto implementa una primera versión navegable basada en las pantallas consultadas del Figma School Events. Incluye:
- Inicio de sesión (demostración, sin backend)
- Página de inicio y categorías
- Todos los eventos, listado por categoría y detalles
- Calendario interactivo por meses
- Inscripciones guardadas en localStorage
- Perfil con accesos a inscripciones, mis fotos, configuración y ayuda
- Notificaciones de ejemplo
- Subida y galería de fotos (solo memoria, se pierden al recargar)
- Recuperación de contraseña simulada y vista de pagos sin transacciones

Las imágenes incluidas en `src/assets/schoolevents/` provienen de la referencia anterior facilitada en la conversación, no son exportaciones originales de Figma. Para replicar al píxel cada una de las >100 variaciones del prototipo faltan las exportaciones SVG/PNG originales y continuar con las pantallas secundarias. Los elementos de ejemplo se identifican como tales; no se envían correos ni se procesan pagos.

## ¿Cómo lo abro en WebStorm?

1. Descomprime el ZIP. En WebStorm abre la carpeta que **contiene `package.json`** (no la carpeta de más arriba).
2. Abre Terminal e introduce `npm install` (solo la primera vez).
3. Ejecuta `npm start` o `ionic serve` si tienes Ionic CLI instalado.
4. Abre `http://localhost:4200/login` con `npm start`, o el puerto que indique tu terminal. Normalmente Ionic CLI sirve en `http://localhost:8100/login`.
5. Escribe un correo con formato válido y cualquier contraseña no vacía para navegar a `/app/inicio`.

## Estructura principal

`src/app/app.routes.ts` → rutas del proyecto
`src/app/paginas/login` → inicio de sesión
`src/app/paginas/inicio` → pantalla principal
`src/app/paginas/eventos` → listado y categorías
`src/app/paginas/evento-detalle` → detalle e inscripción
`src/app/paginas/calendario` → calendario
`src/app/paginas/inscripciones` → lista de inscripciones
`src/app/paginas/perfil` → perfil
`src/app/paginas/tabs` → menú inferior
`src/app/datos/eventos.ts` → datos de ejemplo
`src/app/servicios/eventos.service.ts` → persistencia local de inscripciones
`src/app/componentes` → cabecera y tarjeta reutilizable

## Nota

Son pantallas demostrativas. Para producción faltan autenticación real, integración con API/backend, subida real de imágenes y plataforma segura de pagos. No subas datos bancarios ni contraseñas reales a esta versión de demostración.
