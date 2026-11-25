// ============================================================
//  CONTENIDO DE LA WEB DE LA MARGARETE
//  Todo lo que cambia a menudo está aquí: carta, horario,
//  agenda, fotos y redes. El diseño está en index.html.
//  Para cambiar algo, pídeselo a Claude ("sube el mojito a 9 €",
//  "añade concierto el sábado"...) o edítalo tú mismo.
// ============================================================

window.MARGARETE = {

  // ---------- Datos básicos ----------
  lema: "Bar y jardín en el casco antiguo de Ciutadella",
  presentacion:
    "Una antigua fábrica de zapatos convertida en bar, con un patio interior a la sombra de un ficus enorme. Cócteles, música en directo, DJs y teatro.",
  direccion: "Carrer de Sant Joan Baptista, 6",
  ciudad: "07760 Ciutadella de Menorca",
  telefono: "+34 619 842 438",
  email: "", // p. ej. "hola@lamargarete.com" (vacío = no se muestra)
  mapa: "https://www.google.com/maps/search/?api=1&query=La+Margarete+Carrer+de+Sant+Joan+Baptista+6+Ciutadella",

  // ---------- Horario ----------
  // aviso: un mensaje que sale arriba del todo (vacío = no sale nada)
  aviso: "",
  horario: [
    { dias: "Lunes a sábado", horas: "19:00 – 01:30" },
    { dias: "Domingo", horas: "Cerrado" },
  ],

  // ---------- Redes sociales ----------
  // Deja la url vacía ("") para que no aparezca
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/lamargaretemenorca" },
    { nombre: "Facebook", url: "" },
    { nombre: "TikTok", url: "" },
    { nombre: "WhatsApp", url: "https://wa.me/34619842438" },
  ],

  // ---------- Carta ----------
  // soloVerano: true  -> esa sección solo se muestra si temporadaVerano es true
  temporadaVerano: true,
  carta: [
    {
      seccion: "Cócteles",
      platos: [
        { nombre: "Margarete", desc: "El de la casa. Pregunta en barra", precio: "10" },
        { nombre: "Mojito", desc: "Ron blanco, lima, hierbabuena", precio: "9" },
        { nombre: "Margarita", desc: "Tequila, triple seco, lima", precio: "9" },
        { nombre: "Pomada", desc: "Gin de Menorca con limonada", precio: "7" },
        { nombre: "Espresso martini", desc: "Vodka, café, licor de café", precio: "10" },
      ],
    },
    {
      seccion: "Gin tonics",
      platos: [
        { nombre: "Xoriguer", desc: "Gin de Mahón, tónica, limón", precio: "9" },
        { nombre: "Hendrick's", desc: "Pepino y pimienta rosa", precio: "11" },
        { nombre: "Mare", desc: "Albahaca y romero", precio: "12" },
      ],
    },
    {
      seccion: "Cervezas y vinos",
      platos: [
        { nombre: "Caña", desc: "", precio: "3" },
        { nombre: "Cerveza artesana de Menorca", desc: "", precio: "5" },
        { nombre: "Copa de vino blanco / tinto", desc: "Vinos de la isla", precio: "4,5" },
        { nombre: "Cava", desc: "", precio: "5" },
      ],
    },
    {
      seccion: "Sin alcohol",
      platos: [
        { nombre: "Zumo natural", desc: "", precio: "4,5" },
        { nombre: "Limonada casera", desc: "", precio: "4" },
        { nombre: "Refrescos", desc: "", precio: "3" },
      ],
    },
    {
      seccion: "Para comer",
      soloVerano: true,
      platos: [
        { nombre: "Nachos", desc: "Guacamole, pico de gallo, queso", precio: "10" },
        { nombre: "Hamburguesa", desc: "Ternera, queso de Mahón, patatas", precio: "14" },
        { nombre: "Tabla de quesos de Menorca", desc: "", precio: "12" },
      ],
    },
  ],

  // ---------- Agenda ----------
  // fecha en formato AAAA-MM-DD. Las fechas pasadas se ocultan solas.
  agenda: [
    // { fecha: "2026-12-12", hora: "22:00", titulo: "Concierto: nombre del grupo", tipo: "Música en directo" },
  ],
  agendaVacia:
    "Ahora mismo no hay nada programado. Los conciertos, DJs y obras los anunciamos primero en Instagram.",

  // ---------- Fotos ----------
  // Sube las fotos a la carpeta "fotos" y pon aquí su nombre.
  // portada: la foto grande de arriba (vacío = fondo verde)
  portada: "",
  fotos: [
    // { archivo: "fotos/jardin.jpg", texto: "El jardín con el ficus" },
  ],
};
