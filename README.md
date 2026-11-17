# Cienfuegos Informa — Prototipo académico

Sitio web informativo y adaptable a celulares para el proyecto de mejora del **CESFAM Profesor Eugenio Cienfuegos** (Viña del Mar, Chile). **NO es una aplicación oficial.** No permite tomar horas, acceder a fichas clínicas ni guardar información personal de salud.

## Funcionalidades disponibles

- Catálogo de 12 prestaciones/unidades **referenciales**, organizadas por categoría.
- Búsqueda inmediata y filtros.
- Fichas explicativas con horarios, requisitos y contactos marcados como **pendientes de validación**.
- Guardados locales en el dispositivo (sin cuentas ni servidor).
- Interfaz adaptada a pantallas pequeñas, teclado y lectores de pantalla.
- PWA instalable y disponible sin conexión después de la primera carga (según compatibilidad del navegador).

## Publicar en GitHub Pages

1. Inicia sesión en https://github.com y crea un repositorio **público**, por ejemplo `cienfuegos-informa`.
2. Descomprime el archivo ZIP y sube **todos sus archivos y la carpeta `icons`** a la raíz del repositorio. El archivo `index.html` debe quedar en la raíz, NO dentro de una carpeta adicional.
3. En el repositorio abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**. Selecciona la rama `main` y la carpeta `/(root)`, luego **Save**.
5. Abre la URL que aparece en **Pages**. Generalmente es `https://USUARIO.github.io/cienfuegos-informa/` (reemplaza `USUARIO`).

Para pruebas locales, puedes abrir `index.html` directamente, excepto que la instalación/offline requiere HTTPS o localhost. Una alternativa local es ejecutar `python -m http.server 8000` y visitar `http://localhost:8000/`.

## Personalizar la información

Edita **`data.js`**, donde cada servicio incluye nombre, categoría, descripción y términos de búsqueda. Es contenido de demostración. Antes de hacer accesible esta app a usuarios reales:

- Confirmar con la dirección y encargados cada prestación, condición de acceso, requisito, horario, sede, contacto y mecanismo de actualización.
- Contar con autorización institucional para el uso del nombre/logo y difusión comunitaria.
- Probar usabilidad con participantes que acepten voluntariamente, considerando diversidad de edades y habilidades digitales.
- Asegurar un responsable de revisión de contenidos y fecha de actualización.
- Respetar privacidad: **NO subir registros de pacientes, fichas, contraseñas ni documentos internos** a GitHub. GitHub Pages suele ser públicamente accesible, incluso si el repositorio es privado según el plan.

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

**Publicación:** descomprime el ZIP y sube todos los archivos y carpetas a la raíz del repositorio en GitHub. Conserva `index.html` en la raíz. Activar Pages → main → /(root). Para actualizar la versión anterior, usa `Add file → Upload files` y confirma la sustitución de los archivos ya existentes. Sube también las carpetas `assets`, `documentos` e `icons` completas.

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
