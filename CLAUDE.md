# Web de La Margarete (lamargarete.com)

Web estática de La Margarete, bar con jardín en Ciutadella (Menorca). Se publica sola con GitHub Pages cada vez que hay un cambio en la rama `main`. El dueño es Manu, que la edita pidiéndoselo a Claude desde el móvil o el PC. No sabe programar: explícale los cambios en lenguaje normal, sin jerga.

## Dónde está cada cosa
- `contenido.js`: **todo lo que se cambia a menudo**: carta y precios, horario, aviso de arriba, agenda de DJs, redes sociales, fotos. Casi todos los cambios van aquí.
- `index.html`: diseño (colores, tipografías, estructura). Tocar solo si Manu pide cambiar el aspecto.
- `fotos/`: imágenes. Antes de subir una foto, redúcela a un máximo de 1600 px de ancho y calidad JPG ~80 para que la web cargue rápido.
- `CNAME`: (se añadirá cuando lamargarete.com apunte a GitHub). Si existe, no tocar.

## Cómo hacer un cambio
1. Edita `contenido.js` (respeta comas y comillas: es JavaScript).
2. Comprueba que no hay errores: `node -e "global.window={};require('./contenido.js');console.log('ok')"`.
3. Haz commit en `main` con un mensaje en español ("Sube el mojito a 9 €") y push. En 1-2 minutos está publicado.
4. Dile a Manu qué cambiaste.

## Idiomas (muy importante)
La web está en **catalán, castellano, inglés y francés**. El catalán es imprescindible: estamos en Menorca (se habla menorquín) y hay muchísimos clientes de Barcelona. Muchos clientes son franceses e ingleses.
- Idioma por defecto: móviles en francés → francés; en inglés → inglés; **todos los demás → catalán**. Cada visitante cambia con los botones y la web recuerda su elección. Botones CA / ES / EN / FR arriba. Enlace a un idioma concreto: `?lang=ca`, `?lang=es`, `?lang=en`, `?lang=fr`.
- En `contenido.js`, un texto traducido se escribe `{ es: "...", ca: "...", en: "...", fr: "..." }`. Nombres propios y marcas van como texto normal.
- **Cada vez que cambies o añadas un texto, ponlo en los cuatro idiomas.** Manu escribe en castellano: tradúcelo tú con naturalidad. Inglés británico, francés de Francia.
- **Catalán de Menorca, con cuidado** (si suena a Mallorca o a Barcelona, «la liamos»): formas baleares de primera persona (organitzam, anunciam, donam), aferrar (pegar), cercar (buscar). Vocabulario corregido por Manu: **avia** (abuela; no «padrina»), **xupito** (no «xopet»), suelo = **terra** (no «trespol»). Ante una palabra dudosa, usa la más común o pregunta a Manu.
- Los textos fijos del diseño (títulos de sección, botones, formulario) están en el diccionario `UI` de `index.html`.

## Ojo
- Ya no se hacen conciertos (no está permitido). No anunciar música en directo; solo sesiones de DJ (viernes y sábados).

## Atajos habituales
- "Pon un aviso": rellenar `aviso` (p. ej. "Cerrado por vacaciones hasta el 15 de marzo"). Quitarlo = dejarlo en "".
- Sesiones de DJ: añadir a `agenda` con fecha AAAA-MM-DD; las fechas pasadas se ocultan solas.
- Precios: como número, sin "€" (5.5 = 5,50 €; la web lo formatea). Varios precios: `precios: [["Copa", 4], ["Botella", 20]]`. Subtítulo dentro de una sección: `{ titulo: "Blancos" }`.
- Sin PDF de la carta: Manu no quiere carta descargable. Si manda un PDF nuevo, pasa los cambios a la carta de `contenido.js`, pero no lo publiques.
- Cócteles y comida: solo en verano (desde junio). Para activarlos, `temporadaVerano: true` (y rellenar "Para comer"; una sección vacía no sale). En invierno, `false`.
