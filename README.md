# Cienfuegos Informa — Prototipo académico

Sitio web informativo y adaptable a celulares para el proyecto de mejora del **CESFAM Profesor Eugenio Cienfuegos** (Viña del Mar, Chile). **NO es una aplicación oficial.** No permite tomar horas, acceder a fichas clínicas ni guardar información personal de salud.

## Funcionalidades disponibles

- Catálogo de 12 prestaciones/unidades **referenciales**, organizadas por categoría.
- Búsqueda inmediata y filtros.
- Fichas explicativas con horarios, requisitos y contactos marcados como **pendientes de validación**.
- Guardados locales en el dispositivo (sin cuentas ni servidor).
- Interfaz adaptada a pantallas pequeñas, teclado y lectores de pantalla.
- PWA instalable y disponible sin conexión después de la primera carga (según compatibilidad del navegador).



## Alcance e indicadores posibles para el informe

- Resultado realizado: prototipo web desarrollado y pruebas locales documentadas, una vez verificadas.
- Pendiente: validación institucional, capacitación de funcionarios, pruebas con usuarios, despliegue piloto real y medición de indicadores de impacto.
- Indicadores **propuestos**, no medidos: porcentaje de contenido validado, número de funcionarios capacitados, proporción de usuarios que encuentran una prestación en una tarea, valoración de facilidad de uso.

## Archivos

- `index.html`: estructura.
- `styles.css`: identidad visual y adaptación a móviles.
- `app.js`: interacciones de búsqueda, favoritos y fichas.
- `data.js`: catálogo editable.
- `manifest.webmanifest`, `sw.js` e `icons/`: funciones PWA/offline.
- `.nojekyll`: evita procesamiento de Jekyll.

**Proyecto exclusivamente académico. No reemplaza información ni orientación oficial del CESFAM.**


## Contenido de la versión 2.0 (16/11/2026)

- Biblioteca de fuentes nacionales oficiales de APS, Fonasa, GES, infancia, PNI, salud mental, crónicas y derechos; un recurso académico de CEDETi UC.
- Calendario PNI 2026 en `documentos/calendario-pni-2026.pdf` (aportado por el usuario) y enlace a calendario actualizado.
- Enlaces a Instagram, WhatsApp Morbilidad Médica (`https://wa.me/56974109445`) y SOME Virtual (`https://wa.me/56974106904`), transcritos de un afiche proporcionado. Confirmar vigencia con el CESFAM antes de difusión oficial.
- Diseño turquesa, celeste y verde agua. Logo en `assets/logo-cesfam-referencia.png` basado en fotografía proporcionada.
- Crédito de autoría al pie.

**Edición de recursos:** `recursos.js` tiene títulos, descripciones, URLs, tipo y agrupación. `data.js` mantiene el catálogo local de prestaciones, aún sujeto a validación del CESFAM.

La existencia de un recurso nacional no indica disponibilidad de prestaciones concretas en el CESFAM. Enlace externo puede cambiar sin aviso. Este sitio no está autorizado como canal oficial, no entrega atención clínica ni agenda horas.


## Actualización v2.1 (16/11/2026)

- Nuevo recurso «Guías anticipatorias para la adolescencia», PDF del MINSAL para tres grupos de edad: 10–13, 14–16 y 17–19 años. El documento es material educativo de consulta; sus recomendaciones deben contrastarse con orientaciones actuales si se utilizan en atención.
- Nueva sección «Horarios» con tres tarjetas: sector amarillo, sector azul, sector rojo. Los horarios **individuales están pendientes de confirmación**: no se deducen del horario general del centro.
- Horario general de referencia tomado de la Tabla 1 del diagnóstico institucional 2026: lunes a viernes, 08:00 a 20:00; sábado, 09:00 a 13:00. No garantiza que cada prestación o profesional atienda durante toda esa franja, ni sustituye una confirmación actualizada con SOME.
- Para completar horarios reales por sector, actualiza las tres tarjetas de `index.html` tras obtener fuente oficial y fecha de validación. Evita publicar agendas particulares de pacientes o funcionarios.


## Actualización v2.2 — Horarios por servicio

- Se reemplazaron las tres tarjetas de sector territorial por **horarios por servicio**, según la tabla institucional de 2026 proporcionada por la autora: consultas/odontología/SOME/botiquín, OIRS, PNAC/PACAM, toma de muestras y procedimientos, vacunatorio, atención vespertina, atención médica sábados y tardes protegidas.
- La tabla **no permite asegurar** horarios específicos de controles por profesional, entrega de números SOME, curaciones ni tratamientos individuales, por lo que esos datos siguen pendientes de confirmación.
- Se distingue expresamente que la atención médica del sábado figura 08:00–12:00, mientras la atención general del sábado figura 09:00–13:00, sin reconciliar horarios de fuentes diferentes de forma especulativa.
- La vigencia de todos los horarios debe ser validada por funcionarios responsables antes de divulgarse como información oficial.


## Actualización v2.3 — Diseño blanco y logo en la raíz

- Se recupera el blanco como color de fondo principal, con acentos celestes y verde agua.
- La imagen del CESFAM está en `logo-cesfam.png` **junto a `index.html`**, no es necesario crear una carpeta especial.
- Si el logo no aparece en GitHub Pages, revisa que exista `logo-cesfam.png` en la raíz del repositorio: `https://github.com/streptoconga/cienfuegos-informacion/blob/main/logo-cesfam.png`.
- Los dos `<img>` de `index.html` utilizan `src="./logo-cesfam.png"`. GitHub distingue mayúsculas/minúsculas en los nombres.
- La imagen es la referencia facilitada para el proyecto. Antes de difundir el prototipo como sitio institucional, confirma autorización del logo.
- Actualiza `index.html`, `styles.css`, `sw.js`, `manifest.webmanifest` y **sube `logo-cesfam.png`**. Si el sitio muestra la versión anterior, realiza una recarga forzada o borra datos del sitio (debido a la memoria offline).


## v2.4 — Contacto del vacunatorio

- Se añade WhatsApp Vacunatorio: `+56 9 5694 3769` → `https://wa.me/56956943769`, tanto en Contacto como en la ficha de horarios del vacunatorio. Número proporcionado por la usuaria y pendiente de confirmación institucional antes de la difusión pública.
- Diseño predominantemente blanco con acentos celeste y verde agua (desde v2.3).
- El logo se encuentra en la raíz con nombre exacto **`logo-cesfam.png`**, junto con **`index.html`**. En GitHub, subir ambos archivos a la raíz y sobreescribir los ya existentes, además de actualizar los demás archivos del ZIP.
- Se incrementó la versión de caché del service worker para que los visitantes reciban los cambios con la actualización del sitio.
