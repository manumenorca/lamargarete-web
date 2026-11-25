// ============================================================
//  CONTENIDO DE LA WEB DE LA MARGARETE
//  Todo lo que cambia a menudo está aquí: carta, horario,
//  agenda, fotos y redes. El diseño está en index.html.
//  Para cambiar algo, pídeselo a Claude ("sube la caña a 3,50",
//  "añade DJ el sábado"...) o edítalo tú mismo.
//
//  IDIOMAS: la web está en catalán, castellano, inglés y francés.
//  Un texto puede ser:
//    "texto"                                          -> igual en todos los idiomas (nombres, marcas)
//    { es: "...", ca: "...", en: "...", fr: "..." }   -> traducido
//  Si falta un idioma, se usa el español.
// ============================================================

window.MARGARETE = {

  // ---------- Datos básicos ----------
  lema: {
    es: "Jardín de copas en el casco antiguo de Ciutadella", ca: "Jardí de copes al nucli antic de Ciutadella",
    en: "A garden bar hidden in the old town of Ciutadella",
    fr: "Un bar-jardin caché dans la vieille ville de Ciutadella",
  },
  presentacion: {
    es: "Dentro, la nave de la antigua fábrica de zapatos conserva sus vigas, el suelo original y restos de los soportes de las poleas que, con correas, movían las máquinas de la zapatería. Fuera, el jardín interior más grande de Menorca, a la sombra de un ficus enorme.", ca: "A dins, la nau de l'antiga fàbrica de sabates conserva les bigues, el terra original i restes dels suports de les politges que, amb corretges, movien les màquines de la sabateria. A fora, el jardí interior més gran de Menorca, a l'ombra d'un ficus enorme.",
    en: "Inside, the old shoe factory still has its beams, its original floor and the remains of the pulley brackets whose belts once drove the shoemaking machines. Outside lies the largest inner garden in Menorca, in the shade of a huge ficus tree.",
    fr: "À l'intérieur, l'ancienne fabrique de chaussures a gardé ses poutres, son sol d'origine et les restes des supports de poulies dont les courroies actionnaient les machines. Dehors, le plus grand jardin intérieur de Minorque, à l'ombre d'un immense ficus.",
  },
  direccion: "Carrer de Sant Joan Baptista, 6",
  ciudad: "07760 Ciutadella de Menorca",
  telefono: "", // no se publica
  email: "lamargarete@gmail.com", // vacío ("") = no se muestra
  mapa: "https://www.google.com/maps/search/?api=1&query=La+Margarete+Carrer+de+Sant+Joan+Baptista+6+Ciutadella",

  // ---------- Horario ----------
  // aviso: un mensaje que sale arriba del todo (vacío "" = no sale nada)
  aviso: "",
  horario: [
    {
      dias: { es: "Viernes", ca: "Divendres", en: "Friday", fr: "Vendredi" },
      horas: { es: "Desde las 20:00", ca: "Des de les 20:00", en: "From 8 pm", fr: "À partir de 20 h" },
    },
    {
      dias: { es: "Sábado (tardeo)", ca: "Dissabte, tarda i vespre", en: "Saturday, afternoon and evening", fr: "Samedi, après-midi et soirée" },
      horas: { es: "Desde las 16:00", ca: "Des de les 16:00", en: "From 4 pm", fr: "À partir de 16 h" },
    },
  ],
  reservas: {
    es: "Sin reservas: por orden de llegada.", ca: "Sense reserves: per ordre d'arribada.",
    en: "No reservations: first come, first served.",
    fr: "Pas de réservation : premier arrivé, premier servi.",
  },

  // ---------- Redes sociales ----------
  // Deja la url vacía ("") para que no aparezca
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/lamargaretemenorca" },
    { nombre: "Facebook", url: "https://facebook.com/lamargarete" },
    { nombre: "TikTok", url: "" },
  ],

  // ---------- Carta ----------
  // Cada sección es una pestaña. Dentro:
  //   { titulo: "Blancos" }                          -> subtítulo dentro de la sección
  //   { nombre, desc, precio: 10 }                   -> un precio
  //   { nombre, desc, precios: [["Copa", 4], ["Botella", 20]] }  -> varios precios
  // Los precios van como número (5.5 = 5,50 €).
  // Las etiquetas de precio (Copa, Botella, Copa ancha, Jarra de 1 litro, Chupito, Combinado)
  // se traducen solas. Si pones una nueva, escríbela como { es, en, fr }.
  // soloVerano: true -> esa sección solo se ve si temporadaVerano es true (cócteles y comida)
  temporadaVerano: false, // cócteles y comida: solo en verano (desde junio)
  cartaPdf: "", // sin PDF descargable: la carta está en la propia web
  notaCarta: {
    es: "Suplemento de Red Bull en las copas: +1 €.",
    ca: "Suplement de Red Bull a les copes: +1 €.",
    en: "Red Bull as a mixer in spirits: +€1.",
    fr: "Supplément Red Bull dans les alcools : +1 €.",
  },
  carta: [
    {
      seccion: { es: "Cervezas", ca: "Cerveses", en: "Beer", fr: "Bières" },
      platos: [
        { nombre: { es: "Caña mediana", ca: "Canya mitjana", en: "Draught beer, medium", fr: "Pression, moyenne" }, precio: 3 },
        { nombre: { es: "Caña grande", ca: "Canya grossa", en: "Draught beer, large", fr: "Pression, grande" }, precio: 5 },
        { titulo: { es: "Medianas (1/3)", ca: "Mitjanes (1/3)", en: "Bottles (33 cl)", fr: "Bouteilles (33 cl)" } },
        { nombre: "Estrella", precio: 4 },
        { nombre: "Estrella Galicia", precio: 4 },
        { nombre: "Coronita", precio: 5 },
        { nombre: "Alhambra", precio: 5 },
        { nombre: "Voll-Damm", precio: 5 },
        { nombre: { es: "Daura sin gluten", ca: "Daura sense gluten", en: "Daura (gluten-free)", fr: "Daura (sans gluten)" }, precio: 5 },
        { nombre: { es: "Sin alcohol", ca: "Sense alcohol", en: "Alcohol-free", fr: "Sans alcool" }, precio: 4 },
      ],
    },
    {
      seccion: { es: "Vinos", ca: "Vins", en: "Wine", fr: "Vins" },
      platos: [
        { titulo: { es: "Blancos", ca: "Blancs", en: "White", fr: "Blancs" } },
        { nombre: "Pita Verdejo", desc: "Verdejo, Rueda", precios: [["Copa", 4], ["Botella", 20]] },
        { nombre: "Sa Caterina Blanc", desc: { es: "Malvasía, chardonnay y macabeo, Menorca", ca: "Malvasia, chardonnay i macabeu, Menorca", en: "Malvasia, Chardonnay and Macabeo, Menorca", fr: "Malvoisie, chardonnay et macabeu, Minorque" }, precios: [["Copa", 6], ["Botella", 35]] },
        { nombre: "Pazo Señorans", desc: "Albariño, Rías Baixas", precios: [["Botella", 36]] },
        { titulo: { es: "Tintos", ca: "Negres", en: "Red", fr: "Rouges" } },
        { nombre: "Bideona Laderas", desc: "Tempranillo, Rioja Alavesa", precios: [["Copa", 4], ["Botella", 20]] },
        { nombre: "Sa Caterina Negre", desc: "Vi de la Terra Illa de Menorca", precios: [["Copa", 6], ["Botella", 35]] },
        { nombre: "Parajes de Callejo", desc: "D.O. Ribera del Duero", precios: [["Botella", 36]] },
        { titulo: { es: "Para compartir", ca: "Per compartir", en: "To share", fr: "À partager" } },
        { nombre: { es: "Sangría", ca: "Sangria", en: "Sangria", fr: "Sangria" }, precios: [["Jarra de 1 litro", 20]] },
        { nombre: "Tinto de verano", desc: { en: "Red wine with lemon soda", fr: "Vin rouge et limonade" }, precios: [["Copa ancha", 5.5], ["Jarra de 1 litro", 15]] },
        { nombre: "Kalimotxo", desc: { en: "Red wine with cola", fr: "Vin rouge et cola" }, precios: [["Copa ancha", 4.5], ["Jarra de 1 litro", 12]] },
        { nombre: { es: "Benjamín de cava", ca: "Benjamí de cava", en: "Cava, small bottle", fr: "Cava, petite bouteille" }, precio: 6 },
      ],
    },
    {
      seccion: { es: "Gin con limonada", ca: "Gin amb llimonada", en: "Gin & lemonade", fr: "Gin-limonade" },
      platos: [
        { nombre: { es: "Pequeño", ca: "Petit", en: "Small", fr: "Petit" }, precio: 4 },
        { nombre: { es: "Grande", ca: "Gran", en: "Large", fr: "Grand" }, precio: 8 },
        { nombre: { es: "Jarra", ca: "Gerra", en: "Jug", fr: "Carafe" }, precio: 22 },
      ],
    },
    {
      seccion: { es: "Ginebras", ca: "Ginebres", en: "Gin", fr: "Gins" },
      platos: [
        { titulo: { es: "Ginebras", ca: "Ginebres", en: "Gin", fr: "Gins" } },
        { nombre: "Seagram's", precio: 10 },
        { nombre: "Tanqueray", precio: 10 },
        { nombre: "Bombay Sapphire", precio: 10 },
        { nombre: "Beefeater", precio: 10 },
        { nombre: "Xoriguer", precio: 10 },
        { nombre: { es: "Gloop fresa", ca: "Gloop maduixa", en: "Gloop strawberry", fr: "Gloop fraise" }, precio: 10 },
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
      seccion: { es: "Rones", ca: "Rons", en: "Rum", fr: "Rhums" },
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
      seccion: { es: "Licores", ca: "Licors", en: "Liqueurs", fr: "Liqueurs" },
      platos: [
        { nombre: { es: "Hierbas mallorquinas, Campari, Licor 43, Pacharán, Baileys, Fernet, Frangelico, Amaretto, Tequila, Cointreau, Malibú, Jägermeister, crema de orujo, Anís del Mono", ca: "Herbes mallorquines, Campari, Licor 43, Patxaran, Baileys, Fernet, Frangelico, Amaretto, Tequila, Cointreau, Malibú, Jägermeister, crema d'orujo, Anís del Mono", en: "Hierbas (Mallorcan herb liqueur), Campari, Licor 43, Pacharán, Baileys, Fernet, Frangelico, Amaretto, Tequila, Cointreau, Malibu, Jägermeister, crema de orujo, Anís del Mono", fr: "Hierbas (liqueur d'herbes de Majorque), Campari, Licor 43, Pacharán, Baileys, Fernet, Frangelico, Amaretto, Tequila, Cointreau, Malibu, Jägermeister, crème d'orujo, Anís del Mono" }, precios: [["Chupito", 2.5], ["Copa ancha", 6.5], ["Combinado", 10]] },
        { nombre: "Vermouth Izaguirre", precio: 5.5 },
        { nombre: "Martini Rosso / Martini Bianco", precio: 6.5 },
      ],
    },
    {
      seccion: { es: "Refrescos y agua", ca: "Refrescs i aigua", en: "Soft drinks & water", fr: "Sodas et eau" },
      platos: [
        { titulo: { es: "Agua", ca: "Aigua", en: "Water", fr: "Eau" } },
        { nombre: { es: "Agua sin gas", ca: "Aigua sense gas", en: "Still water", fr: "Eau plate" }, precio: 3 },
        { nombre: { es: "Vichy con gas", ca: "Vichy amb gas", en: "Vichy sparkling water", fr: "Vichy gazeuse" }, precio: 3 },
        { titulo: { es: "Refrescos", ca: "Refrescs", en: "Soft drinks", fr: "Sodas" } },
        { nombre: { es: "Coca-Cola, Cola Zero, 7UP, naranja, limón, Nestea, Aquarius", ca: "Coca-Cola, Cola Zero, 7UP, taronja, llimona, Nestea, Aquarius", en: "Coca-Cola, Cola Zero, 7UP, orange, lemon, Nestea, Aquarius", fr: "Coca-Cola, Cola Zero, 7UP, orange, citron, Nestea, Aquarius" }, precio: 3 },
        { nombre: { es: "Tónica, tónica pink, ginger ale", ca: "Tònica, tònica pink, ginger ale", en: "Tonic, pink tonic, ginger ale", fr: "Tonic, tonic pink, ginger ale" }, precio: 3 },
        { nombre: "Red Bull", precio: 3.5 },
        { titulo: { es: "Zumos", ca: "Sucs", en: "Juices", fr: "Jus" } },
        { nombre: { es: "Piña, naranja, melocotón, tomate", ca: "Pinya, taronja, melicotó, tomàtiga", en: "Pineapple, orange, peach, tomato", fr: "Ananas, orange, pêche, tomate" }, precio: 3 },
      ],
    },
    {
      seccion: { es: "Cócteles", ca: "Còctels", en: "Cocktails", fr: "Cocktails" },
      soloVerano: true, // solo hacemos cócteles en verano
      platos: [
        { nombre: { es: "Mojito, caipirinha y caipiroska", ca: "Mojito, caipirinha i caipiroska", en: "Mojito, caipirinha and caipiroska", fr: "Mojito, caipirinha et caipiroska" }, desc: { es: "Además de los clásicos, te los podemos hacer de fresa, maracuyá o mango.", ca: "A més dels clàssics, te'ls podem fer de maduixa, fruita de la passió o mango.", en: "As well as the classics, we can make them with strawberry, passion fruit or mango.", fr: "En plus des classiques, on peut vous les faire à la fraise, au fruit de la passion ou à la mangue." }, precio: 10 },
        { nombre: "Sant Joan Six", desc: { es: "Una reinterpretación del clásico caipiriña en clave isleña: gin Xoriguer, lima, limón y un delicioso toque de licor de hierbas menorquinas.", ca: "Una reinterpretació del clàssic caipirinha en clau illenca: gin Xoriguer, llima, llimona i un toc deliciós de licor d'herbes menorquines.", en: "An island take on the classic caipirinha: Xoriguer gin, lime, lemon and a lovely touch of Menorcan herb liqueur.", fr: "Le classique caipirinha version île : gin Xoriguer, citron vert, citron et une délicieuse touche de liqueur d'herbes de Minorque." }, precio: 10 },
        { nombre: "Negroni", desc: { es: "Un cóctel fuerte para paladares curiosos: Gin Mare, vermouth dulce y Campari.", ca: "Un còctel fort per a paladars curiosos: Gin Mare, vermut dolç i Campari.", en: "A strong cocktail for curious palates: Gin Mare, sweet vermouth and Campari.", fr: "Un cocktail corsé pour palais curieux : Gin Mare, vermouth doux et Campari." }, precio: 10 },
        { nombre: { es: "La frozen margarita de la margarete", ca: "La frozen margarita de la margarete", en: "The margarete's frozen margarita", fr: "La frozen margarita de la margarete" }, desc: { es: "Con lima y jengibre. La primera con «j» y la segunda con «g». Si no te tomas una margarita en la margarete, ya me contarás… ¡Y está granizada!", ca: "Amb llima i gingebre. Si no et prens una margarita a la margarete, ja m'ho contaràs… I és granissada!", en: "With lime and ginger. Come on, you can't skip a margarita at the margarete… And it's frozen!", fr: "Au citron vert et au gingembre. Venir à la margarete sans boire une margarita ? Impensable… Et elle est frappée !" }, precio: 10 },
        { nombre: { es: "Piña colada", ca: "Piña colada", en: "Piña colada", fr: "Piña colada" }, desc: { es: "If you like… Ron, piña y batida de coco.", ca: "If you like… Rom, pinya i crema de coco.", en: "If you like… Rum, pineapple and coconut cream.", fr: "If you like… Rhum, ananas et crème de coco." }, precio: 10 },
        { titulo: { es: "Además", ca: "A més", en: "Also", fr: "Et aussi" } },
        { nombre: { es: "Mojito sin alcohol", ca: "Mojito sense alcohol", en: "Alcohol-free mojito", fr: "Mojito sans alcool" }, precio: 7 },
        { nombre: "Aperol Spritz", precio: 8 },
      ],
    },
    {
      seccion: { es: "Para comer", ca: "Per menjar", en: "Food", fr: "À manger" },
      soloVerano: true,
      platos: [
        // Se rellena en junio con la carta de comida
      ],
    },
  ],

  // ---------- Eventos y prebodas ----------
  eventos: {
    texto: {
      es: "Organizamos eventos privados y prebodas en el jardín. Escríbenos con la fecha, el tipo de evento y cuántas personas seréis, y te respondemos con una propuesta.", ca: "Organitzam esdeveniments privats i prebodes al jardí. Escriu-nos amb la data, el tipus d'esdeveniment i quantes persones sereu, i et respondrem amb una proposta.",
      en: "We host private events and pre-wedding parties in the garden. Tell us the date, the kind of event and how many of you there will be, and we'll get back to you with a proposal.",
      fr: "Nous organisons des événements privés et des pré-mariages dans le jardin. Écrivez-nous en indiquant la date, le type d'événement et le nombre de personnes, et nous vous répondrons avec une proposition.",
    },
    tipos: [
      { es: "Preboda", ca: "Preboda", en: "Pre-wedding party", fr: "Pré-mariage" },
      { es: "Cumpleaños", ca: "Aniversari", en: "Birthday", fr: "Anniversaire" },
      { es: "Evento de empresa", ca: "Esdeveniment d'empresa", en: "Company event", fr: "Événement d'entreprise" },
      { es: "Otro", ca: "Altres", en: "Other", fr: "Autre" },
    ],
    email: "lamargarete@gmail.com", // a dónde llegan las solicitudes
  },

  // ---------- Agenda ----------
  // fecha en formato AAAA-MM-DD. Las fechas pasadas se ocultan solas.
  agenda: [
    // { fecha: "2026-12-12", hora: "21:00", titulo: "Nombre del DJ", tipo: { es: "Sesión de DJ", ca: "Sessió de DJ", en: "DJ set", fr: "DJ set" } },
  ],
  agendaVacia: {
    es: "Hay DJ todos los viernes y sábados. Quién pincha cada semana lo anunciamos en Instagram.", ca: "Hi ha DJ tots els divendres i dissabtes. Qui punxa cada setmana ho anunciam a Instagram.",
    en: "There's a DJ every Friday and Saturday. We announce who's playing each week on Instagram.",
    fr: "Il y a un DJ tous les vendredis et samedis. On annonce qui mixe chaque semaine sur Instagram.",
  },

  // ---------- Fotos ----------
  // Sube las fotos a la carpeta "fotos" y pon aquí su nombre.
  // portada: la foto grande de arriba (vacío = fondo verde)
  portada: "fotos/ficus-noche.jpg",
  fotos: [
    { archivo: "fotos/buganvilla.jpg", texto: { es: "La buganvilla y el olivo", ca: "La buguenvíl·lea i l'olivera", en: "The bougainvillea and the olive tree", fr: "Le bougainvillier et l'olivier" } },
    { archivo: "fotos/barra-rueda.jpg", texto: { es: "La barra, bajo las vigas de la fábrica", ca: "La barra, sota les bigues de la fàbrica", en: "The bar, under the factory beams", fr: "Le bar, sous les poutres de la fabrique" } },
    { archivo: "fotos/raices-ficus.jpg", texto: { es: "El ficus que se comió una bici antigua", ca: "El ficus que es va menjar una bici antiga", en: "The ficus that swallowed an old bicycle", fr: "Le ficus qui a avalé un vieux vélo" } },
    { archivo: "fotos/bajo-el-ficus.jpg", texto: { es: "Bajo el ficus", ca: "Sota el ficus", en: "Under the ficus", fr: "Sous le ficus" } },
    { archivo: "fotos/margarita-pared.jpg", texto: { es: "La margarita del jardín", ca: "La margalida del jardí", en: "The garden daisy", fr: "La marguerite du jardin" } },
    { archivo: "fotos/interior-noche.jpg", texto: { es: "Dentro, de noche", ca: "A dins, de nit", en: "Inside, at night", fr: "À l'intérieur, la nuit" } },
    { archivo: "fotos/jardin-atardecer.jpg", texto: { es: "Al caer la tarde", ca: "En caure el vespre", en: "At dusk", fr: "À la tombée du jour" } },
    { archivo: "fotos/jardin-de-dia.jpg", texto: { es: "La antigua fábrica, de día", ca: "L'antiga fàbrica, de dia", en: "The old factory by day", fr: "L'ancienne fabrique, de jour" } },
  ],

  // Las estampitas de la ventana (vacío = no sale)
  retratos: {
    titulo: { es: "Las actrices de la ventana", ca: "Les actrius de la finestra", en: "The actresses in the window", fr: "Les actrices de la fenêtre" },
    texto: {
      es: "Las trabajadoras de la fábrica pegaron en una ventana estampitas de las actrices de su época, y ahí siguen. Quién sabe, a lo mejor las pegó tu abuela. ¿Las reconoces? Te damos una pista: una es Ava Gardner. Búscalas, hazles una foto y etiquétanos.", ca: "Les treballadores de la fàbrica varen aferrar a una finestra estampetes de les actrius de la seva època, i encara hi són. Qui sap, potser les va aferrar la teva avia. Les reconeixes? Et donam una pista: una és Ava Gardner. Cerca-les, fes-los una foto i etiqueta'ns.",
      en: "The women who worked at the factory stuck little pictures of the film stars of their day on a window, and they're still there. Who knows, maybe your grandmother put them up. Do you recognise them? Here's a clue: one of them is Ava Gardner. Find them, take a photo and tag us.",
      fr: "Les ouvrières de la fabrique ont collé sur une fenêtre des images des actrices de leur époque, et elles y sont toujours. Qui sait, c'est peut-être votre grand-mère qui les a collées. Vous les reconnaissez ? Un indice : l'une d'elles est Ava Gardner. Trouvez-les, prenez-les en photo et identifiez-nous.",
    },
    etiqueta: "@lamargaretemenorca", // enlaza al Instagram
    fotos: ["fotos/retrato-1.jpg", "fotos/retrato-2.jpg", "fotos/retrato-3.jpg", "fotos/retrato-4.jpg"],
  },

  // Foto del cartel de la entrada, en "Dónde estamos"
  fotoEntrada: "fotos/cartel.jpg",

  // ---------- La puerta ----------
  // La sección "No te vas a creer lo que hay detrás de esta puerta"
  puerta: {
    foto: "fotos/puerta.jpg",       // lo que se ve desde la calle
    detras: "fotos/detras-puerta.jpg", // lo que aparece al abrirla
  },

  // Foto de la sección de DJs
  fotoDJ: "fotos/dj-noche.jpg",
};
