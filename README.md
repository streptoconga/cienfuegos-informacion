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
