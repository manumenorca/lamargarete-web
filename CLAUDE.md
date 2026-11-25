# Web de La Margarete (lamargarete.com)

Web estática de La Margarete, bar con jardín en Ciutadella (Menorca). Se publica sola con GitHub Pages cada vez que hay un cambio en la rama `main`. El dueño es Manu, que la edita pidiéndoselo a Claude desde el móvil o el PC. No sabe programar: explícale los cambios en lenguaje normal, sin jerga.

## Dónde está cada cosa
- `contenido.js`: **todo lo que se cambia a menudo**: carta y precios, horario, aviso de arriba, agenda de DJs, redes sociales, fotos. Casi todos los cambios van aquí.
- `index.html`: diseño (colores, tipografías, estructura). Tocar solo si Manu pide cambiar el aspecto.
- `fotos/`: imágenes. Antes de subir una foto, redúcela a un máximo de 1600 px de ancho y calidad JPG ~80 para que la web cargue rápido.
- `CNAME`: dominio principal (lamargarete.com). No tocar.

## Cómo hacer un cambio
1. Edita `contenido.js` (respeta comas y comillas: es JavaScript).
2. Comprueba que no hay errores: `node -e "global.window={};require('./contenido.js');console.log('ok')"`.
3. Haz commit en `main` con un mensaje en español ("Sube el mojito a 9 €") y push. En 1-2 minutos está publicado.
4. Dile a Manu qué cambiaste.

## Ojo
- Ya no se hacen conciertos (no está permitido). No anunciar música en directo; solo sesiones de DJ (viernes y sábados).

## Atajos habituales
- "Modo verano / modo invierno": cambiar `temporadaVerano` (muestra u oculta la sección "Para comer").
- "Pon un aviso": rellenar `aviso` (p. ej. "Cerrado por vacaciones hasta el 15 de marzo"). Quitarlo = dejarlo en "".
- Sesiones de DJ: añadir a `agenda` con fecha AAAA-MM-DD; las fechas pasadas se ocultan solas.
- Precios: solo el número, sin "€" (la web lo añade).
