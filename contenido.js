// ============================================================
//  CONTENIDO DE LA WEB DE LA MARGARETE
//  Todo lo que cambia a menudo está aquí: carta, horario,
//  agenda, fotos y redes. El diseño está en index.html.
//  Para cambiar algo, pídeselo a Claude ("sube el mojito a 9 €",
//  "añade DJ el sábado"...) o edítalo tú mismo.
// ============================================================

window.MARGARETE = {

  // ---------- Datos básicos ----------
  lema: "Jardín de copas en el casco antiguo de Ciutadella",
  presentacion:
    "Escondido en el casco antiguo de Ciutadella está el jardín más grande de Menorca: una antigua fábrica de zapatos con un patio a la sombra de un ficus enorme. Cócteles y sesiones de DJ los viernes y sábados.",
  direccion: "Carrer de Sant Joan Baptista, 6",
  ciudad: "07760 Ciutadella de Menorca",
  telefono: "", // no se publica
  email: "lamargarete@gmail.com", // vacío ("") = no se muestra
  mapa: "https://www.google.com/maps/search/?api=1&query=La+Margarete+Carrer+de+Sant+Joan+Baptista+6+Ciutadella",

  // ---------- Horario ----------
  // aviso: un mensaje que sale arriba del todo (vacío = no sale nada)
  aviso: "",
  horario: [
    { dias: "Viernes", horas: "Desde las 20:00" },
    { dias: "Sábado (tardeo)", horas: "Desde las 16:00" },
  ],
  reservas: "Sin reservas: por orden de llegada.",

  // ---------- Redes sociales ----------
  // Deja la url vacía ("") para que no aparezca
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/lamargaretemenorca" },
    { nombre: "Facebook", url: "https://facebook.com/lamargarete" },
    { nombre: "X (Twitter)", url: "https://twitter.com/lamargarete" },
    { nombre: "TikTok", url: "" },
  ],

  // ---------- Carta ----------
  // Cada sección es una pestaña. Dentro:
  //   { titulo: "Blancos" }                          -> subtítulo dentro de la sección
  //   { nombre, desc, precio: 10 }                   -> un precio
  //   { nombre, desc, precios: [["Copa", 4], ["Botella", 20]] }  -> varios precios
  // Los precios van como número (5.5 = 5,50 €).
  // soloVerano: true -> esa sección solo se ve si temporadaVerano es true (cócteles y comida)
  temporadaVerano: false, // cócteles y comida: solo en verano (desde junio)
  cartaPdf: "carta/carta-bebidas.pdf", // vacío ("") = sin botón de descarga
  notaCarta: "Suplemento de Red Bull en cualquier consumición: +1 €.",
  carta: [
    {
      seccion: "Cervezas",
      platos: [
        { nombre: "Caña mediana", precio: 3 },
        { nombre: "Caña grande", precio: 5 },
        { titulo: "Medianas (1/3)" },
        { nombre: "Estrella", precio: 4 },
        { nombre: "Estrella Galicia", precio: 4 },
        { nombre: "Coronita", precio: 5 },
        { nombre: "Alhambra", precio: 5 },
        { nombre: "Voll-Damm", precio: 5 },
        { nombre: "Daura sin gluten", precio: 5 },
        { nombre: "Sin alcohol", precio: 4 },
      ],
    },
    {
      seccion: "Vinos",
      platos: [
        { titulo: "Blancos" },
        { nombre: "Pita Verdejo", desc: "Verdejo, Rueda", precios: [["Copa", 4], ["Botella", 20]] },
        { nombre: "Sa Caterina Blanc", desc: "Malvasía, chardonnay y macabeo, Menorca", precios: [["Copa", 6], ["Botella", 35]] },
        { nombre: "Pazo Señorans", desc: "Albariño, Rías Baixas", precios: [["Botella", 36]] },
        { titulo: "Tintos" },
        { nombre: "Bideona Laderas", desc: "Tempranillo, Rioja Alavesa", precios: [["Copa", 4], ["Botella", 20]] },
        { nombre: "Sa Caterina Negre", desc: "Vi de la Terra Illa de Menorca", precios: [["Copa", 6], ["Botella", 35]] },
        { nombre: "Parajes de Callejo", desc: "D.O. Ribera del Duero", precios: [["Botella", 36]] },
        { titulo: "Para compartir" },
        { nombre: "Sangría", precios: [["Jarra de 1 litro", 20]] },
        { nombre: "Tinto de verano", precios: [["Copa ancha", 5.5], ["Jarra de 1 litro", 15]] },
        { nombre: "Kalimotxo", precios: [["Copa ancha", 4.5], ["Jarra de 1 litro", 12]] },
        { nombre: "Benjamín de cava", precio: 6 },
      ],
    },
    {
      seccion: "Gin con limonada",
      platos: [
        { nombre: "Pequeño", precio: 4 },
        { nombre: "Grande", precio: 8 },
        { nombre: "Jarra", precio: 22 },
      ],
    },
    {
      seccion: "Ginebras",
      platos: [
        { titulo: "Ginebras" },
        { nombre: "Seagram's", precio: 10 },
        { nombre: "Tanqueray", precio: 10 },
        { nombre: "Bombay Sapphire", precio: 10 },
        { nombre: "Beefeater", precio: 10 },
        { nombre: "Xoriguer", precio: 10 },
        { nombre: "Gloop fresa", precio: 10 },
        { nombre: "Puerto de Indias", precio: 10 },
        { titulo: "Premium" },
        { nombre: "Hendrick's", precio: 13 },
        { nombre: "G'Vine", precio: 13 },
        { nombre: "Innat Menorca", precio: 13 },
        { nombre: "Martin Miller's", precio: 13 },
        { nombre: "Bulldog", precio: 13 },
        { nombre: "Gin Mare", precio: 13 },
        { nombre: "Nordés", precio: 13 },
      ],
    },
    {
      seccion: "Rones",
      platos: [
        { nombre: "Cacique, Barceló, Santa Teresa, Brugal, Havana 3, Bacardí, Captain Morgan, Havana 7", precios: [["Chupito", 2.5], ["Copa ancha", 6.5], ["Combinado", 10]] },
        { nombre: "Zacapa 23", precios: [["Copa ancha", 10], ["Combinado", 15]] },
      ],
    },
    {
      seccion: "Whiskies",
      platos: [
        { nombre: "JB, Ballantine's, Cutty Sark, White Label, Passport, Southern Comfort, Jameson", precios: [["Chupito", 2.5], ["Copa ancha", 7.5], ["Combinado", 10]] },
        { nombre: "Jack Daniel's", precios: [["Copa ancha", 7.5], ["Combinado", 12]] },
        { nombre: "Chivas", precios: [["Copa ancha", 7.5], ["Combinado", 13]] },
        { nombre: "Cardhu", precios: [["Copa ancha", 7.5], ["Combinado", 13]] },
        { nombre: "Johnnie Walker Black", precios: [["Copa ancha", 7.5], ["Combinado", 13]] },
      ],
    },
    {
      seccion: "Vodkas",
      platos: [
        { nombre: "Absolut, Smirnoff, Moskovskaya", precios: [["Chupito", 2.5], ["Copa ancha", 7.5], ["Combinado", 10]] },
      ],
    },
    {
      seccion: "Licores",
      platos: [
        { nombre: "Hierbas mallorquinas, Campari, Licor 43, Pacharán, Baileys, Fernet, Frangelico, Amaretto, Tequila, Cointreau, Malibú, Jägermeister, crema de orujo, Anís del Mono", precios: [["Chupito", 2.5], ["Copa ancha", 6.5], ["Combinado", 10]] },
        { nombre: "Vermouth Izaguirre", precio: 5.5 },
        { nombre: "Martini Rosso / Martini Bianco", precio: 6.5 },
      ],
    },
    {
      seccion: "Refrescos y agua",
      platos: [
        // Pendiente: lista y precios (agua, refrescos, zumos, tónica...). Vacío = no sale.
      ],
    },
    {
      seccion: "Cócteles",
      soloVerano: true, // solo hacemos cócteles en verano
      platos: [
        { nombre: "Mojito, caipirinha y caipiroska", desc: "Además de los clásicos, te los podemos hacer de fresa, maracuyá o mango.", precio: 10 },
        { nombre: "Sant Joan Six", desc: "Una reinterpretación del clásico caipiriña en clave isleña: gin Xoriguer, lima, limón y un delicioso toque de licor de hierbas menorquinas.", precio: 10 },
        { nombre: "Negroni", desc: "Un cóctel fuerte para paladares curiosos: Gin Mare, vermouth dulce y Campari.", precio: 10 },
        { nombre: "La frozen margarita de la margarete", desc: "Con lima y jengibre. La primera con «j» y la segunda con «g». Si no te tomas una margarita en la margarete, ya me contarás… ¡Y está granizada!", precio: 10 },
        { nombre: "Piña colada", desc: "If you like… Ron, piña y batida de coco.", precio: 10 },
        { titulo: "Además" },
        { nombre: "Mojito sin alcohol", precio: 7 },
        { nombre: "Aperol Spritz", precio: 8 },
      ],
    },
    {
      seccion: "Para comer",
      soloVerano: true,
      platos: [
        // Se rellena en junio con la carta de comida
      ],
    },
  ],

  // ---------- Eventos y prebodas ----------
  eventos: {
    texto:
      "Organizamos eventos privados y prebodas en el jardín. Escríbenos con la fecha, el tipo de evento y cuántas personas seréis, y te respondemos con una propuesta.",
    tipos: ["Preboda", "Cumpleaños", "Evento de empresa", "Otro"],
    email: "lamargarete@gmail.com", // a dónde llegan las solicitudes
  },

  // ---------- Agenda ----------
  // fecha en formato AAAA-MM-DD. Las fechas pasadas se ocultan solas.
  agenda: [
    // { fecha: "2026-12-12", hora: "21:00", titulo: "Nombre del DJ", tipo: "Sesión de DJ" },
  ],
  agendaVacia:
    "Hay DJ todos los viernes y sábados. Quién pincha cada semana lo anunciamos en Instagram.",

  // ---------- Fotos ----------
  // Sube las fotos a la carpeta "fotos" y pon aquí su nombre.
  // portada: la foto grande de arriba (vacío = fondo verde)
  portada: "fotos/terraza-gente.jpg",
  fotos: [
    { archivo: "fotos/jardin-1.jpg", texto: "El jardín" },
    { archivo: "fotos/jardin-ficus.jpg", texto: "Bajo el ficus" },
    { archivo: "fotos/vista-jardin.jpg", texto: "El jardín desde arriba" },
    { archivo: "fotos/jardin-noche.jpg", texto: "Al caer la tarde" },
    { archivo: "fotos/raices-ficus.jpg", texto: "Las raíces del ficus" },
    { archivo: "fotos/jardin-mesas.jpg", texto: "Las mesas del jardín" },
  ],
};
