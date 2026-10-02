(function(){
  "use strict";
  const IMG = {
  "abarrotes": "images/abarrotes.webp",
  "alto": "images/alto.webp",
  "artesanias": "images/artesanias.webp",
  "biblioteca": "images/biblioteca.webp",
  "bibliotecaTablero": "images/bibliotecaTablero.webp",
  "bicicletas": "images/bicicletas.webp",
  "burritos": "images/burritos.webp",
  "cafe": "images/cafe.webp",
  "callejonLuces": "images/callejonLuces.webp",
  "casaFiesta": "images/casaFiesta.webp",
  "cascada": "images/cascada.webp",
  "cocina": "images/cocina.webp",
  "colmena": "images/colmena.webp",
  "cruzPueblo": "images/cruzPueblo.webp",
  "dulceria": "images/dulceria.webp",
  "espiga": "images/espiga.webp",
  "estanque": "images/estanque.webp",
  "fachada": "images/fachada.webp",
  "farmacia": "images/farmacia.webp",
  "frituras": "images/frituras.webp",
  "frutilandia": "images/frutilandia.webp",
  "herradura": "images/herradura.webp",
  "letreroCruz": "images/letreroCruz.webp",
  "mercadoGente": "images/mercadoGente.webp",
  "mercadoNoche": "images/mercadoNoche.webp",
  "mirador": "images/mirador.webp",
  "miradorGente": "images/miradorGente.webp",
  "mojiganga": "images/mojiganga.webp",
  "nogal": "images/nogal.webp",
  "panaderia2": "images/panaderia2.webp",
  "papelPicado": "images/papelPicado.webp",
  "parque": "images/parque.webp",
  "parroquiaDia": "images/parroquiaDia.webp",
  "parroquiaNoche": "images/parroquiaNoche.webp",
  "presa": "images/presa.webp",
  "presaLirio": "images/presaLirio.webp",
  "reposteria": "images/reposteria.webp",
  "rio": "images/rio.webp",
  "talabarteria": "images/talabarteria.webp",
  "tallerMoji": "images/tallerMoji.webp",
  "tamales": "images/tamales.webp",
  "templo": "images/templo.webp",
  "tianguis": "images/tianguis.webp",
  "tiendita": "images/tiendita.webp"
};
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  const CAM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
  const MAS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 4v16M4 12h16"/></svg>';

  const ponImg = el => { const s = IMG[el.dataset.img || el.dataset.lazy]; if (s && !el.getAttribute("src")){ el.decoding = "async"; el.src = s; } };
  const ioImg = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ ponImg(e.target); ioImg.unobserve(e.target); } }), { rootMargin: "1400px 0px" }) : null;
  const cargaImgs = (r = document) => $$("img[data-img]:not([src]), img[data-lazy]:not([src])", r).forEach(el => ioImg ? ioImg.observe(el) : ponImg(el));
  cargaImgs();

  const TAGS = { ok:["tag-ok","Verificado"], conf:["tag-conf","Por confirmar"], falta:["tag-falta","Por agregar"] };
  const tag = (k, txt) => `<span class="tag ${TAGS[k][0]}">${esc(txt || TAGS[k][1])}</span>`;
  const mapa = q => q
    ? `<a class="ir" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + ", San Miguel de Allende")}" target="_blank" rel="noopener">${PIN}Cómo llegar</a>`
    : `<span class="ir off">${PIN}Ubicación por agregar</span>`;
  const foto = (k, alt, ar) => k
    ? `<figure class="cuadro rev" data-rev><div class="marco"${ar ? ` style="aspect-ratio:${ar}"` : ""}><img data-lazy="${k}" alt="${esc(alt || "")}"></div></figure>`
    : `<figure class="cuadro"><div class="marco"${ar ? ` style="aspect-ratio:${ar}"` : ""}><div class="vacio">${CAM}<span>foto pendiente</span></div></div></figure>`;

  /* ---------- título de portada: letras ---------- */
  const h1 = $("#hero-h1 .h1-main");
  let li = 0;
  h1.innerHTML = h1.textContent.split(" ").map(w => `<span class="w" aria-hidden="true">${[...w].map(c => `<span class="l" style="--i:${li++}">${c}</span>`).join("")}</span>`).join(" ");

  /* ---------- marquesina ---------- */
  const lugaresM = ["Guadalupe","San Antonio","Independencia","La Aurora","El Chorro","El Mirador","Valle del Maíz","La Presa","El Jardín"];
  const tira = lugaresM.map(n => `<span>${n}</span><span class="e">✦</span>`).join("");
  $("#marquesina").innerHTML = tira + tira;

  /* ---------- guirnaldas de papel picado ---------- */
  const FLAG = "M0 0H48V56L44 62L40 56L36 62L32 56L28 62L24 56L20 62L16 56L12 62L8 56L4 62L0 56Z M18 27a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z M24 7l4 6l-4 6l-4-6Z M24 35l4 6l-4 6l-4-6Z M6 27l5-4l5 4l-5 4Z M32 27l5-4l5 4l-5 4Z M5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z M39 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z M5 47a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z M39 47a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z";
  const COL = {
    claro:["#C98476","#E6B866","#22385E","#3F6B4F","#A32D63","#D9774A"],
    fiesta:["#E6B866","#F3E9D8","#22385E","#E58FA8","#3F6B4F","#F0A15E"],
    orgullo:["#D7312A","#EE8A2B","#F2CF3A","#2E8B57","#2F5DA8","#7A3D96"]
  };
  function guirnalda(el){
    const w = el.clientWidth, sag = 26;
    const n = Math.max(6, Math.round(w / 70));
    const col = COL[el.dataset.guirnalda] || COL.claro;
    let flags = "";
    for (let i = 0; i < n; i++){
      const x = (i + .5) / n;
      const y = 4 * sag * x * (1 - x);
      flags += `<svg class="bandera" viewBox="0 0 48 62" style="left:calc(${(x*100).toFixed(3)}% - 24px); top:${(y + 2).toFixed(1)}px; --d:${(-i*0.37).toFixed(2)}s; transform:rotate(${((x - .5) * -10).toFixed(1)}deg)"><path fill-rule="evenodd" fill="${col[i % col.length]}" d="${FLAG}"/></svg>`;
    }
    const hilo = `<svg class="hilo-svg" viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M0 4 Q50 ${4 + sag * 2 * 60 / 96} 100 4"/></svg>`;
    el.innerHTML = `<div class="guirnalda-capa ${el.dataset.guirnalda === "orgullo" ? "luz" : "sombra"}">${hilo}${flags}</div><div class="guirnalda-capa">${hilo}${flags}</div>`;
  }
  const guirnaldas = $$("[data-guirnalda]");
  guirnaldas.forEach(guirnalda);

  /* ---------- comunidades ---------- */
  const colonias = [
    { nom:"Guadalupe", dibujo:"altar", fiesta:{ cuando:"Viernes de Dolores, antes de Semana Santa", que:"Altares de Dolores en las casas, con velas, flores, naranjas con banderitas doradas y trigo. Quienes conocen San Miguel recomiendan Guadalupe para verlos lejos del turismo." }, lema:"El barrio que se volvió galería", estado:"ok",
      cronica:"Pegadita al Centro y cruzada por el arroyo del Obraje, Guadalupe es colonia de casas que levantaron sus propios vecinos. En 2013, el proyecto Muros en Blanco, de Colleen Sorenson y Federico Vega, la convirtió en el primer distrito de arte de la ciudad: artistas de México y de otros países pintaron bardas con permiso de los dueños, se hospedaron con familias del barrio y chavos de la colonia pintaron con ellos. En el Centro histórico el arte urbano no está permitido; aquí, sí.",
      sabemos:"El origen de los murales en 2013 y que Guadalupe fue el primer distrito de arte.",
      falta:"Qué se celebra en sus fiestas, qué se come y quién cuida hoy el barrio.",
      voz:"Aquí las fiestas patronales son las más ruidosas de San Miguel. Y nos gusta así.", autor:"Vecina de Guadalupe",
      dir:"Colonia Guadalupe, C.P. 37710", q:"Colonia Guadalupe, 37710" },
    { nom:"San Antonio", dibujo:"loco", fiesta:{ cuando:"Domingo después del 13 de junio", que:"El Convite de Locos, en honor a San Antonio de Padua: máscaras, disfraces, música y dulces que vuelan sobre la gente." }, lema:"De donde salen los Locos", estado:"ok",
      cronica:"Barrio con templo propio: la Parroquia de San Antonio de Padua, al poniente del Instituto Allende. Cada junio, el domingo después del 13, los Locos toman la ciudad: miles de disfrazados aventando dulces y pidiendo un buen temporal. Al final regresan a San Antonio a seguir bailando. En 2026, el municipio contó casi 139 mil asistentes y 9,500 participantes. Los murales que nacieron en Guadalupe también ya llegaron por aquí.",
      sabemos:"La fiesta de San Antonio y el Convite de Locos, con datos del municipio.",
      falta:"Todavía no la caminamos con vecinos. Esto es lo que dicen las fuentes; lo demás, pronto.",
      dir:"Parroquia de San Antonio de Padua: Plaza San Antonio 1, colonia San Antonio", q:"Parroquia de San Antonio de Padua, Plaza San Antonio 1" },
    { nom:"Independencia", dibujo:"columna", fiesta:{ cuando:"Dos domingos antes de Semana Santa", que:"La traída del Señor de la Columna: miles de personas caminan 12 kilómetros desde Atotonilco hasta el templo de San Juan de Dios, muy cerca de la colonia, que la recibe con tapetes de aserrín. Se queda hasta el miércoles después de Pascua." }, lema:"Una calle con mucha vida", estado:"ok",
      cronica:"Colonia vecina de Guadalupe, en lo alto, a unos 20 minutos a pie del Centro y cerca de los mercados de Guadalupe y de San Juan de Dios. Su eje es la avenida Independencia, y desde sus azoteas se ve todo el Centro. Lo demás nos lo dijo un señor sentado junto a la Columna, y se lo creemos completito.",
      sabemos:"Dónde está y que colinda con Guadalupe.",
      falta:"Quién hace los tapetes de aserrín y qué otras fiestas se celebran en la colonia.",
      voz:"Independencia es una calle que tiene mucha vida y está llena de tradiciones.", autor:"Señor de la Columna",
      dir:"Avenida Independencia, colonia Independencia", q:"Colonia Independencia" },
    { nom:"La Cruz del Palmar", dibujo:"calvario", fiesta:{ cuando:"Fecha por confirmar", que:"Sus estudiantes presumen la danza de apaches como su baile y El Calvario como su lugar más representativo. Para llegar: los camiones que dicen “Cruz del Palmar” salen de la Calzada de la Luz." }, lema:"Comunidad rural, a 12 kilómetros", estado:"ok",
      cronica:"No es colonia: es una comunidad rural del municipio, a unos 12 kilómetros de la ciudad, con 1,248 habitantes según el Censo 2020. Los estudiantes de su bachillerato presumen El Calvario como su lugar más representativo y la danza de apaches como su baile. Nos dijeron que, adelante, hay un mirador para ver la ciudad sin pagar terraza; eso todavía lo estamos confirmando.",
      sabemos:"Que es localidad del municipio, su población y su código postal.",
      falta:"Cómo llegar en transporte público y dónde está exactamente el mirador.",
      dir:"La Cruz del Palmar, C.P. 37893", q:"La Cruz del Palmar" },
    { nom:"Tu colonia", dibujo:"casa", lema:"Este espacio está libre", estado:"falta", libre:true,
      cronica:"Todavía nos faltan muchísimas. Si la tuya no está, no es porque no importe: es porque no hemos llegado. Cuéntanos de ella y la caminamos juntos." }
  ];
  const DIB_COL = {"altar": "<svg viewBox=\"-10 -10 220 220\" preserveAspectRatio=\"xMidYMid meet\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M30 170 L170 170 L170 150 L30 150 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M44 150 L156 150 L156 128 L44 128 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M60 128 L140 128 L140 106 L60 106 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M30 170 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M40 150 L40 118 M48 150 L48 118 M40 118 L48 118\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M44 118 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M152 150 L152 118 M160 150 L160 118 M152 118 L160 118\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M156 118 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M84 106 L84 64 L116 64 L116 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M100 96 C90 88 86 82 90 77 C94 72 99 75 100 79 C101 75 106 72 110 77 C114 82 110 88 100 96 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M60 121 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M66 115 L66 99 L75 102 L66 105\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M128 121 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M134 115 L134 99 L143 102 L134 105\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M64 106 L67 96 L79 96 L82 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M70 96 L67 84 M73 96 L73 82 M76 96 L79 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M118 106 L121 96 L133 96 L136 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M124 96 L121 84 M127 96 L127 82 M130 96 L133 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:900ms\" d=\"M14 34 Q100 56 186 34\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:950ms\" d=\"M34 39 L34 54 L48 56 L48 42\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1000ms\" d=\"M66 46 L66 61 L80 62 L80 49\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1050ms\" d=\"M100 50 L100 65 L114 64 L114 50\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M134 47 L134 62 L148 59 L148 44\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1150ms\" d=\"M164 39 L164 53 L176 50 L176 36\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1200ms\" d=\"M150 166 L156 160\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1250ms\" d=\"M158 166 L164 160\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1300ms\" d=\"M140 146 L146 140\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1350ms\" d=\"M148 146 L154 140\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1400ms\" d=\"M130 124 L136 118\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1450ms\" d=\"M108 102 L114 96\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M30 170 L170 170 L170 150 L30 150 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M44 150 L156 150 L156 128 L44 128 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M60 128 L140 128 L140 106 L60 106 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M30 170 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M40 150 L40 118 M48 150 L48 118 M40 118 L48 118\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M44 118 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M152 150 L152 118 M160 150 L160 118 M152 118 L160 118\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M156 118 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M84 106 L84 64 L116 64 L116 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M100 96 C90 88 86 82 90 77 C94 72 99 75 100 79 C101 75 106 72 110 77 C114 82 110 88 100 96 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M60 121 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M66 115 L66 99 L75 102 L66 105\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M128 121 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M134 115 L134 99 L143 102 L134 105\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M64 106 L67 96 L79 96 L82 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M70 96 L67 84 M73 96 L73 82 M76 96 L79 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M118 106 L121 96 L133 96 L136 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M124 96 L121 84 M127 96 L127 82 M130 96 L133 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:900ms\" d=\"M14 34 Q100 56 186 34\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:950ms\" d=\"M34 39 L34 54 L48 56 L48 42\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1000ms\" d=\"M66 46 L66 61 L80 62 L80 49\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1050ms\" d=\"M100 50 L100 65 L114 64 L114 50\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M134 47 L134 62 L148 59 L148 44\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1150ms\" d=\"M164 39 L164 53 L176 50 L176 36\"/></g></g></svg>", "loco": "<svg viewBox=\"-10 -10 220 220\" preserveAspectRatio=\"xMidYMid meet\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M100 72 C76 72 66 94 70 118 C74 142 88 156 100 156 C112 156 126 142 130 118 C134 94 124 72 100 72 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M84 106 q6 -7 12 0 q-6 5 -12 0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M104 106 q6 -7 12 0 q-6 5 -12 0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M84 130 q16 15 32 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M88 133 L112 133\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M76 122 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M114 122 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M98 112 q2 8 -2 12 q4 2 6 -1\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M48 74 Q100 58 152 74 Q100 86 48 74 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M74 70 C74 40 126 40 126 70\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M120 50 C130 30 150 22 166 24 C152 32 138 42 126 56\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M80 50 C70 30 50 22 34 24 C48 32 62 42 74 56\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M100 44 C98 26 104 14 112 8 C108 22 106 34 104 44\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M78 154 q6 9 11 0 q6 9 11 0 q6 9 11 0 q6 9 11 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M150 112 l9 -4 l4 9 l-9 4 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M150 112 l-6 -3 M163 117 l6 3\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M36 136 l9 -4 l4 9 l-9 4 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M36 136 l-6 -3 M49 141 l6 3\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:900ms\" d=\"M124 100 L130 94\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:950ms\" d=\"M126 114 L132 108\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1000ms\" d=\"M124 128 L130 122\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1050ms\" d=\"M110 62 L116 56\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M118 66 L124 60\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1150ms\" d=\"M46 188 C90 184 130 190 170 186\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M100 72 C76 72 66 94 70 118 C74 142 88 156 100 156 C112 156 126 142 130 118 C134 94 124 72 100 72 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M84 106 q6 -7 12 0 q-6 5 -12 0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M104 106 q6 -7 12 0 q-6 5 -12 0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M84 130 q16 15 32 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M88 133 L112 133\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M76 122 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M114 122 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M98 112 q2 8 -2 12 q4 2 6 -1\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M48 74 Q100 58 152 74 Q100 86 48 74 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M74 70 C74 40 126 40 126 70\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M120 50 C130 30 150 22 166 24 C152 32 138 42 126 56\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M80 50 C70 30 50 22 34 24 C48 32 62 42 74 56\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M100 44 C98 26 104 14 112 8 C108 22 106 34 104 44\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M78 154 q6 9 11 0 q6 9 11 0 q6 9 11 0 q6 9 11 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M150 112 l9 -4 l4 9 l-9 4 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M150 112 l-6 -3 M163 117 l6 3\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M36 136 l9 -4 l4 9 l-9 4 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M36 136 l-6 -3 M49 141 l6 3\"/></g></g></svg>", "columna": "<svg viewBox=\"-10 -10 220 220\" preserveAspectRatio=\"xMidYMid meet\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M86 150 L86 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M114 150 L114 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M95 150 L95 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M105 150 L105 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M78 60 L122 60 L122 50 L78 50 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M82 50 Q100 42 118 50\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M78 150 L122 150 L122 162 L78 162 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M86 82 Q100 92 114 86\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M86 98 Q100 108 114 102\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M36 198 L164 198 L142 166 L58 166 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M100 170 L118 182 L100 194 L82 182 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M100 176 L109 182 L100 188 L91 182 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M60 188 a4 3 0 1 0 8 0 a4 3 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M132 188 a4 3 0 1 0 8 0 a4 3 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M70 172 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M124 172 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M40 166 L40 128 M48 166 L48 128 M40 128 L48 128\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M44 128 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:900ms\" d=\"M152 166 L152 128 M160 166 L160 128 M152 128 L160 128\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:950ms\" d=\"M156 128 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1000ms\" d=\"M150 36 l3 8 l8 0 l-6 5 l2 8 l-7 -5 l-7 5 l2 -8 l-6 -5 l8 0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1050ms\" d=\"M50 44 l2 6 l6 0 l-5 4 l2 6 l-5 -4 l-5 4 l2 -6 l-5 -4 l6 0 Z\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M114 70 L120 64\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1150ms\" d=\"M114 120 L120 114\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1200ms\" d=\"M114 136 L120 130\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1250ms\" d=\"M146 194 L152 188\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1300ms\" d=\"M152 194 L158 188\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M86 150 L86 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M114 150 L114 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M95 150 L95 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M105 150 L105 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M78 60 L122 60 L122 50 L78 50 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M82 50 Q100 42 118 50\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M78 150 L122 150 L122 162 L78 162 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M86 82 Q100 92 114 86\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M86 98 Q100 108 114 102\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M36 198 L164 198 L142 166 L58 166 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M100 170 L118 182 L100 194 L82 182 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M100 176 L109 182 L100 188 L91 182 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M60 188 a4 3 0 1 0 8 0 a4 3 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M132 188 a4 3 0 1 0 8 0 a4 3 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M70 172 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M124 172 a3 2 0 1 0 6 0 a3 2 0 1 0 -6 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M40 166 L40 128 M48 166 L48 128 M40 128 L48 128\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M44 128 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:900ms\" d=\"M152 166 L152 128 M160 166 L160 128 M152 128 L160 128\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:950ms\" d=\"M156 128 q-5 -8 0 -15 q5 7 0 15\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1000ms\" d=\"M150 36 l3 8 l8 0 l-6 5 l2 8 l-7 -5 l-7 5 l2 -8 l-6 -5 l8 0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:1050ms\" d=\"M50 44 l2 6 l6 0 l-5 4 l2 6 l-5 -4 l-5 4 l2 -6 l-5 -4 l6 0 Z\"/></g></g></svg>", "calvario": "<svg viewBox=\"-10 -10 220 220\" preserveAspectRatio=\"xMidYMid meet\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M10 180 C50 122 88 110 118 112 C150 114 176 140 194 180\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M6 182 C70 178 130 184 196 180\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M110 112 L110 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M96 76 L124 76\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M70 178 L80 160 L92 146 L102 128 L108 116\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M50 180 C52 150 54 130 50 104\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M50 104 C38 98 28 100 18 108\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M50 104 C40 90 30 86 20 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M50 104 C56 88 66 82 78 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M50 104 C62 96 72 98 82 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M50 104 C48 92 50 84 56 76\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M140 62 Q160 54 182 62\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M146 60 L140 34\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M154 57 L152 30\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M162 56 L164 29\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M170 57 L176 31\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M178 60 L188 36\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M150 150 L160 140\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:900ms\" d=\"M160 160 L170 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:950ms\" d=\"M170 172 L178 164\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1000ms\" d=\"M140 140 L148 132\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1050ms\" d=\"M116 96 L122 90\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M58 140 L64 134\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M10 180 C50 122 88 110 118 112 C150 114 176 140 194 180\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M6 182 C70 178 130 184 196 180\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M110 112 L110 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M96 76 L124 76\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M70 178 L80 160 L92 146 L102 128 L108 116\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M50 180 C52 150 54 130 50 104\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M50 104 C38 98 28 100 18 108\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M50 104 C40 90 30 86 20 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M50 104 C56 88 66 82 78 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M50 104 C62 96 72 98 82 106\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M50 104 C48 92 50 84 56 76\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M140 62 Q160 54 182 62\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M146 60 L140 34\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M154 57 L152 30\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M162 56 L164 29\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M170 57 L176 31\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M178 60 L188 36\"/></g></g></svg>", "casa": "<svg viewBox=\"-10 -10 220 220\" preserveAspectRatio=\"xMidYMid meet\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M20 170 L20 120 L60 120 L60 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M16 122 L40 100 L64 122\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M34 170 L34 146 L46 146 L46 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M70 170 L70 110 L120 110 L120 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M66 110 L124 110\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M80 126 L94 126 L94 140 L80 140 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M100 170 L100 140 L112 140 L112 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M130 170 L130 124 L180 124 L180 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M126 126 L155 104 L184 126\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M144 136 L158 136 L158 150 L144 150 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M10 64 Q100 88 190 64\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M30 70 L30 84 L42 86 L42 73\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M60 76 L60 90 L72 91 L72 78\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M92 79 L92 93 L104 93 L104 80\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M124 79 L124 92 L136 91 L136 78\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M156 73 L156 86 L168 84 L168 71\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:850ms\" d=\"M50 130 L56 124\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:900ms\" d=\"M50 144 L56 138\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:950ms\" d=\"M110 120 L116 114\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1000ms\" d=\"M110 134 L116 128\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1050ms\" d=\"M170 134 L176 128\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M170 148 L176 142\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M20 170 L20 120 L60 120 L60 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:50ms\" d=\"M16 122 L40 100 L64 122\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:100ms\" d=\"M34 170 L34 146 L46 146 L46 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:150ms\" d=\"M70 170 L70 110 L120 110 L120 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:200ms\" d=\"M66 110 L124 110\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:250ms\" d=\"M80 126 L94 126 L94 140 L80 140 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:300ms\" d=\"M100 170 L100 140 L112 140 L112 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:350ms\" d=\"M130 170 L130 124 L180 124 L180 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:400ms\" d=\"M126 126 L155 104 L184 126\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:450ms\" d=\"M144 136 L158 136 L158 150 L144 150 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:500ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M10 64 Q100 88 190 64\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:600ms\" d=\"M30 70 L30 84 L42 86 L42 73\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:650ms\" d=\"M60 76 L60 90 L72 91 L72 78\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:700ms\" d=\"M92 79 L92 93 L104 93 L104 80\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:750ms\" d=\"M124 79 L124 92 L136 91 L136 78\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:800ms\" d=\"M156 73 L156 86 L168 84 L168 71\"/></g></g></svg>"};
  const filas = $("#filas");
  colonias.forEach((c, i) => {
    const d = document.createElement("div");
    d.className = "fila";
    const det = [
      c.sabemos ? `<div><dt>${tag("ok", "Lo que sabemos")}</dt><dd>${esc(c.sabemos)}</dd></div>` : "",
      c.falta ? `<div><dt>${tag("falta", "Lo que falta")}</dt><dd>${esc(c.falta)}</dd></div>` : ""
    ].join("");
    d.innerHTML = `
      <button class="fila-cab" aria-expanded="false" aria-controls="fila-${i}" id="fila-b-${i}">
        <span><span class="disp fila-nom">${esc(c.nom)}</span><span class="fila-lema">${esc(c.lema)}</span></span>
        ${tag(c.estado)}
        <span class="fila-mas">${MAS}</span>
      </button>
      <div class="fila-cuerpo" id="fila-${i}" role="region" aria-labelledby="fila-b-${i}"><div>
        <div class="fila-det">
          <div class="dibujo-col" data-rev aria-hidden="true">${DIB_COL[c.dibujo] || ""}</div>
          <div>
            <p class="cronica">${esc(c.cronica)}</p>
            ${c.fiesta ? `<div class="fiesta-col"><p class="lbl">Su fiesta</p><p class="fc-cuando disp">${esc(c.fiesta.cuando)}</p><p class="fc-que">${esc(c.fiesta.que)}</p></div>` : ""}
            ${det ? `<dl>${det}</dl>` : ""}
            ${c.voz ? `<blockquote>“${esc(c.voz)}”<cite>${esc(c.autor)}, testimonio real</cite></blockquote>` : ""}
            <div class="acciones">${c.libre ? `<a class="btn btn-oscuro" href="https://docs.google.com/forms/d/e/1FAIpQLSdEmQXIcB_R-0W46NC60v4dkvlhztIWtqs76IDmvuJhKgUTNA/viewform" target="_blank" rel="noopener">Contar la de mi colonia</a>` : mapa(c.q)}</div>
            ${c.dir ? `<p class="direccion">${esc(c.dir)}</p>` : ""}
          </div>
        </div>
      </div></div>`;
    const b = $(".fila-cab", d);
    b.addEventListener("click", () => {
      const abrir = !d.classList.contains("abierta");
      d.classList.toggle("abierta", abrir);
      b.setAttribute("aria-expanded", abrir ? "true" : "false");
      if (abrir) setTimeout(() => $$("[data-rev]", d).forEach(x => x.classList.add("visto")), 200);
    });
    filas.appendChild(d);
  });
  filas.firstElementChild.querySelector(".fila-cab").click();

  /* ---------- cero pesos ---------- */
  const lugares = [
    { id:"mirador", nom:"El Mirador", estado:"ok", foto:"mirador", alt:"Terraza con papel picado en la baranda y la ciudad al fondo", pin:[73, 59],
      dir:"Salida Real a Querétaro 92, Zona Centro", txt:"En la Salida Real a Querétaro, de 15 a 20 minutos a pie desde el Jardín. Vista de día y de noche, y atrás hay un mercadito de artesanías. Es el mirador principal: la vista más famosa del Centro.", q:"El Mirador, Salida Real a Querétaro" },
    { id:"jardin", nom:"El Jardín", estado:"ok", dir:"Jardín Principal, Zona Centro", foto:"parroquiaNoche", alt:"La Parroquia iluminada de noche", pin:[50.5, 45],
      txt:"La plaza frente a la Parroquia. Aquí explota la Alborada a las cuatro de la mañana y hasta aquí llegan casi todos los desfiles. Sentarse en una banca sigue costando cero.", q:"Jardín Principal" },
    { id:"capillaChorro", nom:"Capilla de la Santa Cruz del Chorro", estado:"ok", foto:"casaFiesta", alt:"Capilla blanca con guardapolvo rojo, papel picado y escalinata de piedra, entre árboles", pin:[58.5, 63.6],
      dir:"El Chorro 56, Zona Centro", txt:"En lo alto de El Chorro, el manantial donde se fundó la ciudad. Dicen que aquí se celebró la primera ceremonia cristiana de San Miguel. Tiene escalinata de piedra, atrio y vista a la ciudad, y en fiestas la adornan con papel picado.", q:"Capilla Santa Cruz del Chorro" },
    { id:"cruz", nom:"Mirador Cruz del Pueblo", estado:"ok", dir:"Calle Cruz del Pueblo, por la calle De la Garita", foto:"cruzPueblo", pin:[79, 52], alt:"Una cruz sobre un pedestal de piedra con una pintura de Cristo, bajo un cielo nublado",
      extra:"letreroCruz", extraAlt:"Letrero pintado en forma de pergamino que cuenta un milagro de 1901",
      txt:"Se sube por la calle De la Garita y unos 254 escalones. Arriba hay una cruz con una pintura de Cristo y, a un lado, un letrero pintado en 2025 que cuenta un milagro de 1901: un sacerdote enfermo de tifo se encomendó a esta cruz y se salvó. El retablo original, dice el letrero, está en el templo de San Francisco.", q:"Mirador Cruz del Pueblo" },
    { id:"rio", nom:"Antigua Presa de Banda", estado:"ok", foto:"rio", alt:"Familias nadando en la presa y conviviendo en la orilla, entre árboles",
      extra:"cascada", extraAlt:"Agua cayendo sobre un vado de piedra entre árboles, un poco más adelante de la presa", dir:"Comunidad de Banda, C.P. 37893", txt:"Una presa antigua en la comunidad de Banda, al noroeste de la ciudad. En temporada de lluvias se llena y las familias van a nadar y a hacer carne asada en la orilla; en secas puede quedar casi vacía. Un poco más adelante, el agua cae sobre un vado de piedra entre árboles. Es de los de casi cero pesos: la gente de la comunidad cobra una cuota por cuidar los carros y mantener limpio el lugar.", q:"Antigua Presa de Banda" },
    { id:"presa", nom:"Presa Allende", estado:"ok", foto:"presa", alt:"La Presa Allende con agua azul, vista desde la orilla pedregosa en un día despejado", pin:[16, 90],
      dir:"Presa Allende, C.P. 37898", txt:"La presa grande del municipio, al suroeste de la ciudad. La foto la tomó el equipo cuando el lirio acuático todavía no la cubría; hoy gran parte está tapada, y lo contamos en La neta.", q:"Presa Allende" },
    { id:"plazita", nom:"Plaza Garibaldi", estado:"ok", foto:"tianguis", alt:"Explanada de piedra con puestos bajo toldos de colores y gente comprando", pin:[43, 38],
      dir:"Plaza Garibaldi, Zona Centro", txt:"“La plazita”: una explanada a unas cuadras al norte del Jardín, con bancas, árboles y, algunos días, puestos con toldos de colores. Creemos que la foto es de aquí.", q:"Plaza Garibaldi" },
    { id:"estanque", nom:"Estanque de El Chorro", estado:"ok", foto:"estanque", alt:"Estanque con peces bajo un arco de piedra",
      dir:"El Chorro, junto a la Capilla de la Santa Cruz, Zona Centro", txt:"Un estanque con peces bajo un arco de piedra, en El Chorro, junto a la Capilla de la Santa Cruz: la zona del manantial donde se fundó la ciudad. Se ve de pasada si bajas del Mirador.", q:"Capilla Santa Cruz del Chorro" },
  ];
  const lugaresEl = $("#lugares");
  const croquis = $("#croquis");
  lugares.forEach(l => {
    const a = document.createElement("article");
    a.className = "lugar"; a.id = "l-" + l.id;
    a.innerHTML = `${foto(l.foto, l.alt, "4/3")}<h3 class="disp">${esc(l.nom)}</h3>${tag(l.estado)}<p>${esc(l.txt)}</p>${l.q !== undefined ? mapa(l.q) : ""}${l.dir ? `<p class="direccion">${esc(l.dir)}</p>` : ""}`;
    if (l.extra){
      $(".cuadro", a).insertAdjacentHTML("beforeend", `<figure class="inserto"><img data-lazy="${l.extra}" alt="${esc(l.extraAlt)}"></figure>`);
    }
    lugaresEl.appendChild(a);
    if (l.pin){
      const p = document.createElement("button");
      p.className = "pin" + (l.pin[0] > 60 ? " der" : ""); p.type = "button";
      p.style.left = l.pin[0] + "%"; p.style.top = l.pin[1] + "%";
      p.innerHTML = `<b>${esc(l.nom)}</b><i></i>`;
      p.setAttribute("aria-label", "Ver " + l.nom);
      p.addEventListener("click", () => {
        $$(".pin", croquis).forEach(x => x.classList.toggle("activo", x === p));
        $$(".lugar").forEach(x => x.classList.toggle("resalta", x === a));
        a.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      });
      croquis.appendChild(p);
    }
  });

  [{ nom:"Parque Zeferino", pin:[33, 18.5], destino:"#zeferino" }, { nom:"Nuevo Comienzo", pin:[21, 44.5], destino:"#directorio" }].forEach(x => {
    const p = document.createElement("button");
    p.className = "pin" + (x.destino === "#zeferino" ? " pin-orgullo" : " pin-dir") + (x.pin[0] > 60 ? " der" : ""); p.type = "button";
    p.style.left = x.pin[0] + "%"; p.style.top = x.pin[1] + "%";
    p.innerHTML = `<b>${esc(x.nom)}</b><i></i>`;
    p.setAttribute("aria-label", "Ver " + x.nom);
    p.addEventListener("click", () => $(x.destino).scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" }));
    croquis.appendChild(p);
  });

  /* ---------- negocios ---------- */
  const negocios = [
    { cat:"Tiendita", nom:"Farmacia Santa Julia", foto:"farmacia", alt:"Fachada de cantera de la Farmacia Santa Julia, con letrero pintado a mano y puertas de madera", falta:null, dir:"Canal 164, Zona Centro", q:"Farmacia Santa Julia, Canal 164",
      txt:"Letrero pintado a mano, fachada de cantera y puertas de madera: una farmacia de barrio con cara de las de antes." },
    { cat:"Tiendita", nom:"Cremería El Venado", foto:"tiendita", alt:"Tienda de abarrotes de noche, con frituras colgando de la puerta y letreros escritos a mano", falta:null, dir:"Calle La Soledad, junto a la Plaza Cívica, Zona Centro", q:"Cremería Venado, La Soledad, San Miguel de Allende",
      txt:"Lleva 27 años como la tienda de confianza: abarrotes y salchichonería, hielo, frituras colgando de la puerta y letreros escritos a mano en papel fosforescente. Abre de 8 de la mañana a 9 de la noche." },
    { cat:"Dulcería", nom:"Dulcería Goretti", foto:"dulceria", alt:"Dulcería con piñatas colgando del techo y dulces a granel", extra:"frituras", extraAlt:"Bolsas de frituras y chicharrón de harina en los anaqueles de la misma dulcería", falta:null, dir:"Puente de Umarán 20, Zona Centro", q:"Dulcería Goretti, Puente de Umarán 20",
      txt:"Lleva 30 años en el barrio: dulces a granel, frituras en bolsas de kilo, desechables y piñatas colgando del techo. Aquí se arman los cumpleaños de la colonia. Abre todos los días, de 9 de la mañana a 7 de la noche." },
    { cat:"Jarcería", nom:"Jarcería del barrio", foto:"reposteria", alt:"Jarcería con anaqueles hasta el techo llenos de desechables, frascos, moldes y artículos para la casa", falta:"Nombre y dirección",
      txt:"De todo un poco, del piso al techo: platos y vasos desechables, frascos, moldes, utensilios de cocina, artículos de limpieza y cosas para la fiesta. Si necesitas algo para la casa y no sabes dónde buscarlo, empieza aquí." },
    { cat:"Panadería", nom:"La Colmena", foto:"colmena", alt:"Panadería con anaqueles llenos de pan dulce", falta:null, dir:"Relox 21, Zona Centro", q:"Panadería La Colmena, Relox 21",
      txt:"Abrió en 1901 y es la panadería más antigua de San Miguel; el municipio le puso una placa por sus 120 años. Anaqueles de pan dulce, reloj de pared y un altarcito en la esquina. Abre de lunes a sábado de 6 de la mañana a 9 de la noche, y los domingos de 8 a 9; las piezas van de 20 a 30 pesos." },
    { cat:"Panadería", nom:"La Espiga, sucursal Canal", foto:"espiga", alt:"Fachada blanca de la panadería La Espiga, con toldo y letrero redondo que dice desde 1976", falta:null, dir:"Canal Lote 102, Zona Centro", q:"Panadería La Espiga, Canal, San Miguel de Allende",
      txt:"Abrió en 1976 y hoy tiene varias sucursales en el Centro, con pan dulce accesible, blanco e integral. Toldo blanco con orilla de olas y vitrinas de pan al fondo. Abre de lunes a sábado, de 7 de la mañana a 9 de la noche, y las piezas van de 15 a 30 pesos." },
    { cat:"Panadería", nom:"La Espiga, sucursal La Aurora", foto:"panaderia2", alt:"Vitrinas de pan dulce en el mostrador de una panadería", falta:null, dir:"Calzada de La Aurora 2, Guadalupe", q:"Panadería La Espiga, Calzada de La Aurora 2",
      txt:"Otra sucursal de La Espiga: vitrinas de concha, oreja y bolillo, y alguien atendiendo el mostrador desde temprano. Abre de lunes a sábado, de 7 de la mañana a 9 de la noche." },
    { cat:"Puesto", nom:"Las señoras de la parada del Oratorio", foto:"mercadoGente", alt:"Señoras vendiendo en un puesto bajo los árboles", falta:null, dir:"Parada del camión frente al Templo del Oratorio", q:"Templo del Oratorio de San Felipe Neri",
      txt:"Siempre están ahí, en la parada del camión frente al Oratorio: nopales, garbanzos, tortillas, aguas frescas, churros y otras cosas típicas para llevar mientras esperas el camión." },
    { cat:"Mercado", nom:"Frutilandia", foto:"frutilandia", alt:"Frutería con toldo verde, piñas, melones y una señora limpiando nopales", falta:null, dir:"5 de Mayo 15, Guadiana", q:"Frutilandia, 5 de Mayo 15, San Miguel de Allende",
      txt:"Frutas y verduras frescas bajo un arco de cantera: piñas, melones, manzanas y una señora que limpia nopales a mano. Abre de lunes a sábado de 8 de la mañana a 8 de la noche, y los domingos hasta las 6." },
    { cat:"Mercado", nom:"Mercado de Artesanías", foto:"artesanias", alt:"Entrada de la tercera sección del Mercado de Artesanías, en una fachada naranja y roja", falta:null, dir:"Andador Lucas Balderas, Zona Centro", q:"Mercado de Artesanías, Lucas Balderas",
      txt:"La entrada de su tercera sección: textiles, cuero, juguetes y recuerdos en pasillos que siguen y siguen. Ve con calma y con efectivo." },
    { cat:"Tiendita", nom:"Abarrotes", foto:"abarrotes", alt:"Tienda de abarrotes con toldo amarillo y azul en una fachada naranja", falta:"Nombre y dirección",
      txt:"Toldo amarillo y azul con la palabra que lo dice todo, dos veces: abarrotes. La de la colonia, la de todos los días." },
    { cat:"Café", nom:"Café de Chiapas", foto:"cafe", alt:"Mostrador de cafetería con cafetera antigua y frascos de café", falta:"Dirección", q:"Café de Chiapas",
      txt:"Grano a la vista, cafetera antigua y un letrero que presume café orgánico de Chiapas. Solo aceptan efectivo: pasa al cajero antes." },
    { cat:"Taller", nom:"Zapatería y talabartería", foto:"talabarteria", alt:"Taller de zapatería con botas, huaraches y sombreros hasta el techo, máquinas para coser cuero y un equipal en la entrada", falta:null, dir:"Salida a Querétaro 66, Zona Centro", q:"Salida a Querétaro 66, San Miguel de Allende",
      txt:"Setenta años reparando lo que otros tirarían: artículos para caballo, botas, tenis, mochilas, maletas y cierres. Botas y sombreros hasta el techo, máquinas para coser cuero y un equipal en la entrada. Abre de lunes a sábado, de 10 a 4 y de 5 a 9 de la noche." },
    { cat:"Taller", nom:"Bicicletas y Refacciones", foto:"bicicletas", alt:"Taller de bicicletas en una casa naranja, con llantas colgando del techo y motos estacionadas afuera", falta:null, dir:"Canal 147, Zona Centro", q:"Bicicletas y Refacciones, Canal 147",
      txt:"De los pocos talleres de San Miguel que siguen la tradición del barrio sin estar pensados para turistas. Llantas colgando del techo, bicis de todos los tamaños y un letrero a mano: “Tenemos reparación de bicicletas”. Abre de lunes a jueves de 9:00 a 19:30, y los viernes de 9:00 a 12:00." },
    { cat:"Tuyo", nom:"Tu favorito", libre:true,
      txt:"¿Conoces un negocio que debería estar aquí? Mándanos el nombre, una foto y por qué es de los de verdad." }
  ];
  const carta = $("#carta");
  negocios.forEach(n => {
    const a = document.createElement("article");
    a.className = "plato" + (n.libre ? " libre" : "");
    a.dataset.cat = n.cat;
    a.innerHTML = n.libre
      ? `<p class="lbl" style="color:var(--acento)">Espacio libre</p><h3 class="disp">${esc(n.nom)}</h3><p>${esc(n.txt)}</p><a class="btn btn-oscuro" href="https://docs.google.com/forms/d/e/1FAIpQLSdEmQXIcB_R-0W46NC60v4dkvlhztIWtqs76IDmvuJhKgUTNA/viewform" target="_blank" rel="noopener">Proponer un negocio</a>`
      : `${foto(n.foto, n.alt, "4/5")}<p class="lbl plato-cat">${esc(n.cat)}</p><h3 class="disp">${esc(n.nom)}</h3><p>${esc(n.txt)}</p><div class="pie-plato">${n.falta ? tag("falta", n.falta + ": por agregar") : tag("ok")}${mapa(n.q)}${n.dir ? `<p class="direccion">${esc(n.dir)}</p>` : ""}</div>`;
    const cu = a.querySelector(".cuadro");
    if (n.extra && cu) cu.insertAdjacentHTML("beforeend", `<figure class="inserto"><img data-lazy="${n.extra}" alt="${esc(n.extraAlt)}"></figure>`);
    carta.appendChild(a);
  });
  const PLURAL = { Todos:"Todos", Fonda:"Fondas", Tiendita:"Tienditas", "Panadería":"Panaderías", "Dulcería":"Dulcerías", "Nevería":"Neverías", "Puesto":"Puestos", "Jarcería":"Jarcerías", Carrito:"Carritos", Mercado:"Mercado", "Café":"Cafés", Taller:"Talleres" };
  const filtros = $("#filtros");
  Object.keys(PLURAL).filter(c => c === "Todos" || negocios.some(n => n.cat === c)).forEach(c => {
    const b = document.createElement("button");
    b.className = "filtro"; b.type = "button"; b.textContent = PLURAL[c];
    b.setAttribute("aria-pressed", c === "Todos" ? "true" : "false");
    b.addEventListener("click", () => {
      $$(".filtro", filtros).forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      $$(".plato", carta).forEach(p => {
        p.hidden = !(c === "Todos" || p.dataset.cat === c || p.dataset.cat === "Tuyo");
        if (!p.hidden) $$("[data-rev]", p).forEach(x => x.classList.add("visto"));
      });
    });
    filtros.appendChild(b);
  });

  /* ---------- fiestas ---------- */
  const fiestas = [
    { m:[1], dia:"21 de enero", nom:"Natalicio de Ignacio Allende", txt:"La ciudad celebra al hijo que le dio apellido, nacido en 1769 frente a la plaza." },
    { m:[1,2], dia:"Enero y febrero", nom:"Feria de la Candelaria", txt:"Una de las ferias más viejas de la ciudad: en 2025 cumplió 69 ediciones. Hoy se hace en el Parque Zeferino Gutiérrez." },
    { m:[3], dia:"8 de marzo", nom:"Aniversario como ciudad", txt:"En 1826 la villa se volvió ciudad y se llamó San Miguel de Allende. En 2026 se cumplieron doscientos años." },
    { m:[3,4], dia:"Marzo o abril", nom:"Semana Santa", txt:"Procesiones y altares en las calles, y en muchas casas no falta la conserva. La fecha cambia cada año; nos falta documentar cómo se vive en cada colonia." },
    { m:[6], dia:"Domingo después del 13 de junio", nom:"Convite de Locos", txt:"En honor a San Antonio de Padua. Máscaras, superhéroes, políticos de mentira y dulces para todos. En 2026 fue el 14 de junio, con casi 139 mil asistentes." },
    { m:[9], dia:"15 y 16 de septiembre", nom:"Independencia", txt:"Fuegos artificiales, Grito y la Carrera de la Conspiración, que en 2024 llegó a su edición 69." },
    { m:[9,10], dia:"Fin de semana más cercano al 29 de septiembre", nom:"La Alborada", txt:"La fiesta grande del santo patrono. Desde las 3 de la mañana los barrios caminan hacia la Parroquia con bandas, estrellas y mojigangas; a las 4 empieza la batalla de cohetes entre San Miguel Arcángel y Lucifer. La revivieron en 1924 los obreros de La Aurora." },
    { m:[11], dia:"1 y 2 de noviembre", nom:"Día de Muertos", txt:"Altares, panteones y el festival La Calaca. Nos falta documentar cómo se vive en cada colonia." },
    { m:[12], dia:"12 de diciembre", nom:"Virgen de Guadalupe", txt:"Por confirmar cómo se celebra en la colonia que lleva su nombre." },
    { m:[12], dia:"16 al 24 de diciembre", nom:"Posadas", txt:"Nueve noches de pedir posada por las calles y las comunidades, con cantos, piñata y ponche. Nuestro consejo: ve a las de los templos, que son de las más bonitas y donde mejor se guarda la tradición." }
  ];
  const mesHoy = new Date().getMonth() + 1;
  $("#calendario").innerHTML = fiestas.map(f => `
    <div class="fecha${f.m.includes(mesHoy) ? " este-mes" : ""}">
      <p class="fecha-dia">${esc(f.dia)}</p>
      <div><h3>${esc(f.nom)}</h3><p>${esc(f.txt)}</p></div>
      <span class="ahora">Este mes</span>
    </div>`).join("");

  /* ---------- camino de cempasúchil ---------- */
  const FLOR = "<svg viewBox=\"-16 -16 32 32\"><path fill=\"#C2410C\" d=\"M14.47 0.00 L15.86 1.04 L16.34 2.15 L14.37 2.86 L12.83 3.44 L11.98 4.07 L12.53 5.19 L14.05 6.93 L13.96 8.06 L12.97 8.67 L10.77 8.26 L9.38 8.23 L9.34 9.34 L10.03 11.44 L9.77 12.73 L8.86 13.27 L7.35 12.72 L5.89 11.94 L4.94 11.91 L4.55 13.40 L4.22 15.77 L3.14 15.78 L2.04 15.47 L0.88 13.37 L0.00 12.48 L-0.87 13.26 L-1.98 15.05 L-3.26 16.40 L-4.06 15.15 L-4.59 13.53 L-4.95 11.95 L-5.72 11.60 L-7.32 12.67 L-8.79 13.16 L-9.74 12.69 L-9.73 11.09 L-9.46 9.46 L-9.54 8.37 L-10.90 8.37 L-13.07 8.73 L-14.25 8.23 L-13.90 6.85 L-13.01 5.39 L-12.18 4.14 L-12.64 3.39 L-14.74 2.93 L-16.23 2.14 L-16.45 1.08 L-14.77 0.00 L-12.86 -0.84 L-13.04 -1.72 L-13.69 -2.72 L-15.34 -4.11 L-15.79 -5.36 L-13.91 -5.76 L-12.14 -5.99 L-10.75 -6.20 L-11.36 -7.59 L-12.32 -9.45 L-12.42 -10.89 L-11.48 -11.48 L-9.29 -10.60 L-7.90 -10.29 L-7.27 -10.88 L-7.33 -12.69 L-7.14 -14.48 L-6.36 -15.37 L-4.92 -14.49 L-3.43 -12.79 L-2.51 -12.60 L-1.77 -13.45 L-1.03 -15.78 L-0.00 -16.62 L1.05 -16.01 L1.84 -13.98 L2.46 -12.36 L3.41 -12.73 L4.85 -14.30 L6.11 -14.75 L7.14 -14.48 L7.18 -12.43 L7.10 -10.62 L7.65 -9.97 L9.51 -10.84 L11.06 -11.06 L12.22 -10.72 L12.09 -9.28 L11.47 -7.67 L10.77 -6.22 L12.12 -5.98 L14.19 -5.88 L15.89 -5.39 L15.64 -4.19 L14.21 -2.83 L12.60 -1.66 L12.94 -0.85 Z\"/><path fill=\"#EA7A10\" d=\"M12.49 0.00 L13.55 0.89 L13.08 1.72 L11.16 2.22 L9.77 2.62 L9.23 3.13 L9.71 4.02 L10.82 5.33 L11.46 6.61 L10.85 7.25 L9.39 7.21 L8.02 7.04 L6.95 6.95 L6.77 7.72 L7.16 9.33 L7.20 10.78 L6.67 11.56 L5.63 11.41 L4.34 10.48 L3.17 9.34 L2.63 9.81 L2.17 10.89 L1.65 12.51 L0.88 13.45 L0.00 12.97 L-0.77 11.72 L-1.34 10.14 L-1.94 9.74 L-2.65 9.89 L-3.73 10.97 L-4.92 11.89 L-5.77 11.71 L-6.13 10.61 L-5.93 8.87 L-5.90 7.69 L-6.55 7.46 L-7.82 7.82 L-9.46 8.30 L-10.33 7.93 L-10.86 7.25 L-9.99 5.77 L-8.99 4.44 L-9.03 3.74 L-10.10 3.43 L-11.68 3.13 L-12.72 2.53 L-13.27 1.75 L-12.30 0.81 L-10.60 0.00 L-9.84 -0.65 L-10.00 -1.32 L-11.17 -2.22 L-12.38 -3.32 L-12.47 -4.23 L-11.79 -4.88 L-9.81 -4.84 L-8.48 -4.90 L-8.50 -5.68 L-8.79 -6.74 L-9.22 -8.09 L-9.43 -9.43 L-8.35 -9.52 L-7.13 -9.29 L-5.89 -8.82 L-5.02 -8.70 L-4.71 -9.56 L-4.52 -10.92 L-4.19 -12.34 L-3.37 -12.58 L-2.42 -12.18 L-1.41 -10.74 L-0.66 -10.03 L-0.00 -10.08 L0.73 -11.21 L1.69 -12.85 L2.67 -13.40 L3.35 -12.52 L3.71 -10.92 L3.94 -9.52 L4.44 -9.01 L5.35 -9.27 L6.83 -10.22 L8.01 -10.44 L8.43 -9.62 L8.23 -8.23 L7.83 -6.86 L7.73 -5.93 L8.72 -5.82 L10.39 -6.00 L11.62 -5.73 L12.56 -5.20 L12.08 -4.10 L10.89 -2.92 L9.73 -1.93 L9.82 -1.29 L10.99 -0.72 Z\"/><g stroke=\"#B5410B\" stroke-width=\".55\" stroke-linecap=\"round\" opacity=\".55\"><path d=\"M6.0 0.6 L12.4 1.2\"/><path d=\"M5.3 2.8 L11.0 5.9\"/><path d=\"M3.8 4.6 L7.9 9.7\"/><path d=\"M1.7 5.7 L3.6 12.0\"/><path d=\"M-0.6 6.0 L-1.2 12.4\"/><path d=\"M-2.8 5.3 L-5.9 11.0\"/><path d=\"M-4.6 3.8 L-9.7 7.9\"/><path d=\"M-5.7 1.7 L-12.0 3.6\"/><path d=\"M-6.0 -0.6 L-12.4 -1.2\"/><path d=\"M-5.3 -2.8 L-11.0 -5.9\"/><path d=\"M-3.8 -4.6 L-7.9 -9.7\"/><path d=\"M-1.7 -5.7 L-3.6 -12.0\"/><path d=\"M0.6 -6.0 L1.2 -12.4\"/><path d=\"M2.8 -5.3 L5.9 -11.0\"/><path d=\"M4.6 -3.8 L9.7 -7.9\"/><path d=\"M5.7 -1.7 L12.0 -3.6\"/></g><path fill=\"#F6A21E\" d=\"M9.07 0.00 L9.16 0.60 L8.75 1.15 L7.84 1.56 L6.87 1.84 L6.28 2.13 L6.49 2.69 L7.11 3.50 L7.41 4.28 L7.80 5.21 L7.47 5.73 L6.51 5.71 L5.43 5.43 L4.50 5.13 L3.99 5.20 L4.03 6.04 L4.00 6.93 L4.02 8.15 L3.66 8.85 L2.91 8.56 L2.13 7.96 L1.46 7.35 L0.89 6.74 L0.43 6.61 L0.00 7.25 L-0.54 8.17 L-1.21 9.23 L-1.85 9.31 L-2.27 8.45 L-2.62 7.72 L-2.79 6.73 L-2.97 6.01 L-3.40 5.90 L-4.25 6.36 L-5.13 6.69 L-5.95 6.79 L-6.73 6.73 L-6.59 5.78 L-6.16 4.73 L-5.89 3.93 L-5.73 3.31 L-6.42 3.17 L-7.41 3.07 L-8.23 2.79 L-8.90 2.38 L-8.92 1.77 L-8.27 1.09 L-7.51 0.49 L-6.71 0.00 L-6.64 -0.44 L-7.04 -0.93 L-8.17 -1.62 L-8.64 -2.32 L-8.84 -3.00 L-8.38 -3.47 L-7.50 -3.70 L-6.26 -3.61 L-5.68 -3.79 L-5.37 -4.12 L-5.62 -4.93 L-5.96 -5.96 L-5.90 -6.73 L-5.67 -7.39 L-4.83 -7.23 L-3.87 -6.70 L-3.17 -6.42 L-2.50 -6.04 L-2.22 -6.54 L-2.02 -7.54 L-1.70 -8.52 L-1.20 -9.12 L-0.61 -9.25 L-0.00 -8.64 L0.51 -7.76 L0.88 -6.69 L1.30 -6.54 L1.81 -6.76 L2.54 -7.47 L3.45 -8.32 L4.14 -8.39 L4.58 -7.94 L4.71 -7.05 L4.61 -6.00 L4.44 -5.06 L4.77 -4.77 L5.49 -4.82 L6.55 -5.02 L7.61 -5.09 L8.09 -4.67 L8.06 -3.98 L7.48 -3.10 L6.95 -2.36 L6.51 -1.74 L6.81 -1.35 L7.65 -1.01 L8.38 -0.55 Z\"/><path fill=\"#FFC14D\" d=\"M4.89 0.00 L5.42 0.36 L5.56 0.73 L5.21 1.04 L4.77 1.28 L4.25 1.44 L3.63 1.50 L3.29 1.62 L3.15 1.82 L3.37 2.25 L3.63 2.79 L3.86 3.39 L3.76 3.76 L3.68 4.19 L3.26 4.24 L2.65 3.97 L2.21 3.82 L1.76 3.57 L1.39 3.36 L1.25 3.67 L1.07 4.01 L0.92 4.60 L0.69 5.27 L0.36 5.56 L0.00 5.39 L-0.34 5.15 L-0.61 4.65 L-0.81 4.05 L-0.97 3.60 L-1.17 3.46 L-1.51 3.64 L-1.87 3.80 L-2.44 4.23 L-2.94 4.41 L-3.28 4.27 L-3.54 4.03 L-3.58 3.58 L-3.39 2.97 L-3.11 2.39 L-3.17 2.12 L-3.27 1.89 L-3.69 1.82 L-4.09 1.69 L-4.71 1.60 L-5.11 1.37 L-5.48 1.09 L-5.20 0.68 L-4.76 0.31 L-4.31 0.00 L-3.96 -0.26 L-3.71 -0.49 L-3.67 -0.73 L-3.96 -1.06 L-4.54 -1.54 L-4.81 -1.99 L-4.97 -2.45 L-4.65 -2.68 L-4.21 -2.81 L-3.75 -2.88 L-3.12 -2.73 L-2.62 -2.62 L-2.48 -2.83 L-2.39 -3.11 L-2.45 -3.66 L-2.39 -4.13 L-2.39 -4.85 L-2.07 -4.99 L-1.77 -5.21 L-1.30 -4.85 L-0.87 -4.38 L-0.53 -3.99 L-0.25 -3.79 L-0.00 -3.68 L0.26 -3.94 L0.59 -4.48 L0.97 -4.88 L1.37 -5.13 L1.74 -5.13 L1.99 -4.79 L2.12 -4.30 L2.14 -3.71 L2.14 -3.20 L2.27 -2.96 L2.47 -2.82 L2.95 -2.95 L3.47 -3.05 L4.08 -3.13 L4.45 -2.97 L4.69 -2.71 L4.53 -2.24 L4.38 -1.81 L3.95 -1.34 L3.60 -0.96 L3.61 -0.72 L3.94 -0.52 L4.24 -0.28 Z\"/><circle r=\"1.7\" fill=\"#9A3412\"/></svg>";
  /* ---------- un puño de cempasúchil sobre el título de Fiestas ---------- */
  const tFiesta = $("#fiestas .pliego .titulo");
  if (tFiesta){
    const capa = document.createElement("div"); capa.className = "punado"; capa.setAttribute("aria-hidden", "true");
    tFiesta.appendChild(capa);
    const N = innerWidth < 760 ? 28 : 48, pet = [];
    for (let i = 0; i < N; i++){
      const flor = i % 8 === 0, el = document.createElement(flor ? "span" : "i");
      const s = flor ? 18 + Math.random() * 8 : 8 + Math.random() * 7;
      el.className = flor ? "pf pf-flor" : "pf p" + (i % 3);
      el.style.width = s + "px"; el.style.height = (flor ? s : s * 1.4) + "px";
      el.style.marginLeft = (-s / 2) + "px"; el.style.marginTop = (-(flor ? s : s * 1.4) / 2) + "px";
      if (flor) el.innerHTML = FLOR;
      capa.appendChild(el); pet.push({ el, s, flor });
    }
    let destinos = [], soltado = false;
    const calcula = () => {
      const hr = tFiesta.getBoundingClientRect();
      const lineas = $$(":scope > span > span", tFiesta).map(x => x.getBoundingClientRect());
      const ancho = lineas.length ? Math.max(...lineas.map(l => l.right)) - hr.left : hr.width;
      destinos = pet.map(p => {
        const r = Math.random();
        if (r < .5 && lineas.length){
          const L = lineas[(Math.random() * lineas.length) | 0];
          return { x: L.left - hr.left + 6 + Math.random() * (L.width - 12), y: L.top - hr.top + L.height * .14 - p.s * .3, rot: (Math.random() * 360) | 0, flat: p.flor ? .7 : .5 + Math.random() * .3 };
        }
        return { x: Math.random() * ancho * 1.04, y: hr.height + 8 + Math.random() * 14, rot: (Math.random() * 360) | 0, flat: p.flor ? .75 : .45 + Math.random() * .3 };
      });
    };
    const fija = () => pet.forEach((p, i) => {
      const d = destinos[i];
      p.el.getAnimations().forEach(a => a.cancel());
      p.el.style.transform = `translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px) rotate(${d.rot}deg) scale(1, ${d.flat.toFixed(2)})`;
      p.el.style.opacity = "1";
    });
    const suelta = () => {
      soltado = true; calcula();
      pet.forEach((p, i) => {
        const d = destinos[i], dir = Math.random() < .5 ? -1 : 1;
        const x0 = d.x + (Math.random() - .5) * 180, y0 = -240 - Math.random() * 180, r0 = (Math.random() * 360) | 0;
        const sw = 16 + Math.random() * 28;
        const px = f => x0 + (d.x - x0) * f, py = f => y0 + (d.y - y0) * f;
        const a = p.el.animate([
          { transform: `translate(${x0}px, ${y0}px) rotate(${r0}deg) scale(1, 1)`, opacity: 0 },
          { offset: .1, opacity: 1 },
          { offset: .38, transform: `translate(${(px(.38) + sw * dir).toFixed(1)}px, ${py(.36).toFixed(1)}px) rotate(${r0 + 150 * dir}deg) scale(1, .75)` },
          { offset: .7, transform: `translate(${(px(.72) - sw * dir * .7).toFixed(1)}px, ${py(.72).toFixed(1)}px) rotate(${r0 + 270 * dir}deg) scale(1, .9)` },
          { offset: .9, transform: `translate(${d.x.toFixed(1)}px, ${(d.y - 7).toFixed(1)}px) rotate(${d.rot + 12 * dir}deg) scale(1, ${d.flat.toFixed(2)})`, opacity: 1 },
          { transform: `translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px) rotate(${d.rot}deg) scale(1, ${d.flat.toFixed(2)})`, opacity: 1 }
        ], { duration: 1900 + Math.random() * 1300, delay: Math.random() * 900, easing: "cubic-bezier(.35,.05,.5,1)", fill: "forwards" });
        a.onfinish = () => { p.el.style.transform = `translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px) rotate(${d.rot}deg) scale(1, ${d.flat.toFixed(2)})`; p.el.style.opacity = "1"; a.cancel(); };
      });
    };
    if (reduced){ calcula(); fija(); soltado = true; }
    else if ("IntersectionObserver" in window){
      const ioF = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting && !soltado){ ioF.disconnect(); setTimeout(suelta, 1500); }
      }), { threshold: .6 });
      ioF.observe(tFiesta);
    }
    let tPun; addEventListener("resize", () => { if (!soltado) return; clearTimeout(tPun); tPun = setTimeout(() => { calcula(); fija(); }, 250); });
  }

  /* ---------- puntos de encuentro ---------- */
  const DIBUJOS = {"casa": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M14 170 C60 167 132 172 188 167\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M50 168 L49 96\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M151 168 L152 96\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M36 101 L100 46 L165 101\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M128 66 L128 47 L141 47 L141 77\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M87 168 L87 128 Q100 114 113 128 L113 168\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M61 110 L81 110 L81 129 L61 129 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M71 110 L71 129\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M61 119.5 L81 119.5\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M120 110 L140 110 L140 129 L120 129 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M130 110 L130 129\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M120 119.5 L140 119.5\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M100 31 C95 22 83 25 88 35 C91 40 100 45 100 45 C100 45 109 40 112 35 C117 25 105 22 100 31\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M104.5 149 a1.6 1.6 0 1 0 3.2 0 a1.6 1.6 0 1 0 -3.2 0\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M108 58 L118 66\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M113 54 L126 65\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M120 60 L134 72\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M127 66 L141 78\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M134 72 L150 86\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1045ms\" d=\"M52 100 L60 92\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M56 105 L66 95\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1155ms\" d=\"M28 172 L25 165\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1210ms\" d=\"M33 171 L35 163\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1265ms\" d=\"M166 170 L164 163\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1320ms\" d=\"M171 169 L174 162\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M14 170 C60 167 132 172 188 167\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M50 168 L49 96\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M151 168 L152 96\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M36 101 L100 46 L165 101\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M128 66 L128 47 L141 47 L141 77\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M87 168 L87 128 Q100 114 113 128 L113 168\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M61 110 L81 110 L81 129 L61 129 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M71 110 L71 129\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M61 119.5 L81 119.5\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M120 110 L140 110 L140 129 L120 129 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M130 110 L130 129\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M120 119.5 L140 119.5\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M100 31 C95 22 83 25 88 35 C91 40 100 45 100 45 C100 45 109 40 112 35 C117 25 105 22 100 31\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M104.5 149 a1.6 1.6 0 1 0 3.2 0 a1.6 1.6 0 1 0 -3.2 0\"/></g></g></svg>", "ieca": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M112.7 75.1 L123.4 77.2 L123.4 90.8 L112.7 92.9 L110.5 98.0 L116.7 107.1 L107.1 116.7 L98.0 110.5 L92.9 112.7 L90.8 123.4 L77.2 123.4 L75.1 112.7 L70.0 110.5 L60.9 116.7 L51.3 107.1 L57.5 98.0 L55.3 92.9 L44.6 90.8 L44.6 77.2 L55.3 75.1 L57.5 70.0 L51.3 60.9 L60.9 51.3 L70.0 57.5 L75.1 55.3 L77.2 44.6 L90.8 44.6 L92.9 55.3 L98.0 57.5 L107.1 51.3 L116.7 60.9 L110.5 70.0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M84 72 a12 12 0 1 0 0.1 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M84 80 a4 4 0 1 0 0.1 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M112 168 L158 122\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M121 176 L167 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M112 168 Q106 178 121 176\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M158 122 C148 108 156 92 172 92 L166 104 L176 112 L188 104 C190 122 178 136 167 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M20 182 L104 182 L104 192 L20 192 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M28 182 L28 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M36 182 L36 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M44 182 L44 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M52 182 L52 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M60 182 L60 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M68 182 L68 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M76 182 L76 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M84 182 L84 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M92 182 L92 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M100 182 L100 186\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M96 106 L104 98\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1045ms\" d=\"M100 112 L110 102\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M106 116 L114 108\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1155ms\" d=\"M150 38 L150 52\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1210ms\" d=\"M143 45 L157 45\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M112.7 75.1 L123.4 77.2 L123.4 90.8 L112.7 92.9 L110.5 98.0 L116.7 107.1 L107.1 116.7 L98.0 110.5 L92.9 112.7 L90.8 123.4 L77.2 123.4 L75.1 112.7 L70.0 110.5 L60.9 116.7 L51.3 107.1 L57.5 98.0 L55.3 92.9 L44.6 90.8 L44.6 77.2 L55.3 75.1 L57.5 70.0 L51.3 60.9 L60.9 51.3 L70.0 57.5 L75.1 55.3 L77.2 44.6 L90.8 44.6 L92.9 55.3 L98.0 57.5 L107.1 51.3 L116.7 60.9 L110.5 70.0 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M84 72 a12 12 0 1 0 0.1 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M84 80 a4 4 0 1 0 0.1 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M112 168 L158 122\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M121 176 L167 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M112 168 Q106 178 121 176\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M158 122 C148 108 156 92 172 92 L166 104 L176 112 L188 104 C190 122 178 136 167 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M20 182 L104 182 L104 192 L20 192 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M28 182 L28 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M36 182 L36 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M44 182 L44 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M52 182 L52 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M60 182 L60 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M68 182 L68 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M76 182 L76 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M84 182 L84 186\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M92 182 L92 188\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M100 182 L100 186\"/></g></g></svg>", "brote": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M18 166 C70 162 132 168 184 163\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M52 165 Q100 146 150 165\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M100 156 C97 132 104 112 100 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M100 116 C82 116 66 102 63 86 C82 86 97 98 100 116\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M101 100 C117 94 133 76 136 60 C118 62 103 78 101 100\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M100 88 C95 82 97 75 101 72 C106 76 105 83 100 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M29 76 C29 72 37 70 39 73 C40 77 32 79 29 76\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M39 73 L39 46\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M53 70 C53 66 61 64 63 67 C64 71 56 73 53 70\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M63 67 L63 40\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M39 46 L63 40\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M152 120 C152 116 160 114 162 117 C163 121 155 123 152 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M162 117 L162 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M162 88 Q174 92 170 104\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M99 114 C89 106 79 98 67 89\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M102 98 C113 88 123 76 133 63\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M39 51 L63 45\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M66 160 L72 154\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M78 157 L84 151\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1045ms\" d=\"M118 157 L124 151\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M130 160 L136 154\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1155ms\" d=\"M166 44 L166 56\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1210ms\" d=\"M160 50 L172 50\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M18 166 C70 162 132 168 184 163\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M52 165 Q100 146 150 165\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M100 156 C97 132 104 112 100 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M100 116 C82 116 66 102 63 86 C82 86 97 98 100 116\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M101 100 C117 94 133 76 136 60 C118 62 103 78 101 100\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M100 88 C95 82 97 75 101 72 C106 76 105 83 100 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M29 76 C29 72 37 70 39 73 C40 77 32 79 29 76\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M39 73 L39 46\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M53 70 C53 66 61 64 63 67 C64 71 56 73 53 70\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M63 67 L63 40\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M39 46 L63 40\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M152 120 C152 116 160 114 162 117 C163 121 155 123 152 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M162 117 L162 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M162 88 Q174 92 170 104\"/></g></g></svg>", "campo": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M26 150 L26 70 L174 70 L174 150\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M26 70 L40 84 L160 84 L174 70\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M40 84 L40 150\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M160 84 L160 150\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M8 184 C70 180 132 186 194 181\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M14 152 L188 151\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M112 162 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M132.0 155.0 L138.7 159.8 L136.1 167.7 L127.9 167.7 L125.3 159.8 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M132.0 155.0 L132.0 142.0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M138.7 159.8 L151.0 155.8\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M136.1 167.7 L143.8 178.2\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M127.9 167.7 L120.2 178.2\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M125.3 159.8 L113.0 155.8\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M92 158 L106 158\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M88 166 L104 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M94 174 L104 174\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M52 84 L52 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M64 84 L64 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M76 84 L76 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1045ms\" d=\"M88 84 L88 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M100 84 L100 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1155ms\" d=\"M112 84 L112 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1210ms\" d=\"M124 84 L124 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1265ms\" d=\"M136 84 L136 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1320ms\" d=\"M148 84 L148 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1375ms\" d=\"M40 96 L160 96\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1430ms\" d=\"M40 108 L160 108\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1485ms\" d=\"M40 120 L160 120\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1540ms\" d=\"M40 132 L160 132\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1595ms\" d=\"M40 144 L160 144\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M26 150 L26 70 L174 70 L174 150\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M26 70 L40 84 L160 84 L174 70\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M40 84 L40 150\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M160 84 L160 150\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M8 184 C70 180 132 186 194 181\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M14 152 L188 151\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M112 162 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M132.0 155.0 L138.7 159.8 L136.1 167.7 L127.9 167.7 L125.3 159.8 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M132.0 155.0 L132.0 142.0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M138.7 159.8 L151.0 155.8\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M136.1 167.7 L143.8 178.2\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M127.9 167.7 L120.2 178.2\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M125.3 159.8 L113.0 155.8\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M92 158 L106 158\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M88 166 L104 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M94 174 L104 174\"/></g></g></svg>", "libro": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M100 72 C80 60 50 58 24 64 L24 152 C50 146 80 148 100 160 C120 148 150 146 176 152 L176 64 C150 58 120 60 100 72 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M100 72 L100 160\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M38 84 C56 80 74 82 90 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M38 98 C56 94 74 96 90 102\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M38 112 C56 108 74 110 90 116\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M38 126 C56 122 74 124 90 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M110 88 C126 82 144 80 162 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M110 102 C126 96 144 94 162 98\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M110 116 C126 110 144 108 162 112\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M142 62 L142 96 L148 90 L154 96 L154 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M16 170 C70 166 130 172 186 167\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M30 160 L38 154\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M44 158 L52 152\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M150 158 L158 152\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M60 36 L60 48\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M54 42 L66 42\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M150 26 L150 36\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M145 31 L155 31\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M118 128 L126 122\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1045ms\" d=\"M124 132 L134 124\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M100 72 C80 60 50 58 24 64 L24 152 C50 146 80 148 100 160 C120 148 150 146 176 152 L176 64 C150 58 120 60 100 72 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M100 72 L100 160\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M38 84 C56 80 74 82 90 88\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M38 98 C56 94 74 96 90 102\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M38 112 C56 108 74 110 90 116\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M38 126 C56 122 74 124 90 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M110 88 C126 82 144 80 162 84\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M110 102 C126 96 144 94 162 98\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M110 116 C126 110 144 108 162 112\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M142 62 L142 96 L148 90 L154 96 L154 60\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M16 170 C70 166 130 172 186 167\"/></g></g></svg>", "bodega": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M20 168 C70 165 130 170 184 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M30 166 L30 92 L170 92 L170 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M24 96 Q100 46 176 96\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M30 92 Q100 54 170 92\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M62 166 L62 112 L138 112 L138 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M62 122 L138 122\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M62 132 L138 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M62 142 L138 142\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M62 152 L138 152\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M146 166 L146 130 L162 130 L162 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M100 60 L100 30\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M100 30 L124 37 L100 44\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M110 37 l3 -3 l3 3 l-3 3 Z\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M122 66 L130 72\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M134 72 L142 78\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M146 80 L154 86\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M126 116 L134 108\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M126 136 L134 128\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M40 168 L36 161\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1045ms\" d=\"M46 168 L48 160\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M20 168 C70 165 130 170 184 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M30 166 L30 92 L170 92 L170 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M24 96 Q100 46 176 96\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M30 92 Q100 54 170 92\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M62 166 L62 112 L138 112 L138 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M62 122 L138 122\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M62 132 L138 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M62 142 L138 142\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M62 152 L138 152\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M146 166 L146 130 L162 130 L162 166\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M100 60 L100 30\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M100 30 L124 37 L100 44\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M110 37 l3 -3 l3 3 l-3 3 Z\"/></g></g></svg>", "mercado": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M20 170 L20 98 L180 98 L180 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M14 100 Q57 70 100 100 Q143 70 186 100\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M80 170 L80 130 Q100 110 120 130 L120 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M56 110 L144 110 L144 122 L56 122 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M32 170 L35 150 L53 150 L56 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M40 150 L35 134 M44 150 L44 130 M48 150 L53 134\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M31 130 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M40 126 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M49 130 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M140 170 L140 156 L176 156 L176 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M146 151 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M158 151 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M152 142 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M150 96 L158 90\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M160 100 L168 94\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M110 140 L116 134\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M110 156 L116 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M64 116 L70 112\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M20 170 L20 98 L180 98 L180 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M14 100 Q57 70 100 100 Q143 70 186 100\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M80 170 L80 130 Q100 110 120 130 L120 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M56 110 L144 110 L144 122 L56 122 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M32 170 L35 150 L53 150 L56 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M40 150 L35 134 M44 150 L44 130 M48 150 L53 134\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M31 130 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M40 126 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M49 130 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M140 170 L140 156 L176 156 L176 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M146 151 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M158 151 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M152 142 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0\"/></g></g></svg>", "sanjuan": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M20 170 L20 134 L84 134 L84 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M14 134 L90 134 L82 112 L22 112 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M14 134 q6 7 12 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M112 170 L112 134 L176 134 L176 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M106 134 L182 134 L174 112 L114 112 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M106 134 q6 7 12 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M30 130 q10 -9 20 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M56 130 a6 5 0 1 0 12 0 a6 5 0 1 0 -12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M122 130 L128 118 L136 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M146 130 a7 5 0 1 0 14 0 a7 5 0 1 0 -14 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M40 54 Q100 70 160 52\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M100 64 L100 72\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M100 72 L104 82 L116 82 L106 89 L110 100 L100 93 L90 100 L94 89 L84 82 L96 82 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M90 100 l-3 12 M100 96 l0 14 M110 100 l3 12\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M76 128 L82 122\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M168 128 L174 122\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M70 160 L76 154\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M162 160 L168 154\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M20 170 L20 134 L84 134 L84 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M14 134 L90 134 L82 112 L22 112 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M14 134 q6 7 12 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M112 170 L112 134 L176 134 L176 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M106 134 L182 134 L174 112 L114 112 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M106 134 q6 7 12 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 13 0 q6 7 12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M30 130 q10 -9 20 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M56 130 a6 5 0 1 0 12 0 a6 5 0 1 0 -12 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M122 130 L128 118 L136 130\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M146 130 a7 5 0 1 0 14 0 a7 5 0 1 0 -14 0\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M40 54 Q100 70 160 52\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M100 64 L100 72\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M100 72 L104 82 L116 82 L106 89 L110 100 L100 93 L90 100 L94 89 L84 82 L96 82 Z\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M90 100 l-3 12 M100 96 l0 14 M110 100 l3 12\"/></g></g></svg>", "tianguis": "<svg viewBox=\"-10 -10 220 220\"><g filter=\"url(#lapiz)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M10 120 L40 80 L70 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M70 120 L100 72 L130 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M130 120 L160 80 L190 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M10 120 L190 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M14 120 L14 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M70 120 L70 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M130 120 L130 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M186 120 L186 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M40 80 L40 64 L52 68 L40 72\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M100 72 L100 56 L112 60 L100 64\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M160 80 L160 64 L172 68 L160 72\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M22 132 L62 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M28 132 L26 140 L30 150 L38 150 L40 140 L38 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M46 132 L44 142 L48 154 L56 154 L58 142 L56 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M140 170 L140 154 L172 154 L172 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M86 170 L86 150 L114 150 L114 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M92 150 L92 142 L108 142 L108 150\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:990ms\" d=\"M48 100 L56 94\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1045ms\" d=\"M108 96 L116 90\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1100ms\" d=\"M168 100 L176 94\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1155ms\" d=\"M150 166 L156 160\"/><path class=\"tr h\" pathLength=\"1\" style=\"transition-delay:1210ms\" d=\"M100 166 L106 160\"/><g class=\"eco\" transform=\"translate(1.2 .8)\"><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:0ms\" d=\"M8 172 C70 170 130 174 192 171\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:55ms\" d=\"M10 120 L40 80 L70 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:110ms\" d=\"M70 120 L100 72 L130 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:165ms\" d=\"M130 120 L160 80 L190 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:220ms\" d=\"M10 120 L190 120\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:275ms\" d=\"M14 120 L14 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:330ms\" d=\"M70 120 L70 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:385ms\" d=\"M130 120 L130 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:440ms\" d=\"M186 120 L186 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:495ms\" d=\"M40 80 L40 64 L52 68 L40 72\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:550ms\" d=\"M100 72 L100 56 L112 60 L100 64\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:605ms\" d=\"M160 80 L160 64 L172 68 L160 72\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:660ms\" d=\"M22 132 L62 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:715ms\" d=\"M28 132 L26 140 L30 150 L38 150 L40 140 L38 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:770ms\" d=\"M46 132 L44 142 L48 154 L56 154 L58 142 L56 132\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:825ms\" d=\"M140 170 L140 154 L172 154 L172 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:880ms\" d=\"M86 170 L86 150 L114 150 L114 170\"/><path class=\"tr \" pathLength=\"1\" style=\"transition-delay:935ms\" d=\"M92 150 L92 142 L108 142 L108 150\"/></g></g></svg>"};
  const directorio = [
    { dibujo:"casa", tipo:"Salud y juventud", nom:"CASA", sub:"Centro para los Adolescentes de San Miguel de Allende", estado:"ok",
      txt:"Nació aquí en 1981 y trabaja con adolescentes y mujeres, sobre todo de comunidades rurales: clínica y hospital de maternidad, biblioteca con libros y computadoras gratis, teatro y programas donde jóvenes enseñan a otros jóvenes. Abrió la primera escuela de partería profesional reconocida en México.",
      dir:"Santa Julia 15, San Miguel de Allende", web:"https://casa.org.mx/", q:"CASA Centro para los Adolescentes, Santa Julia 15" },
    { dibujo:"ieca", tipo:"Aprender un oficio", nom:"IECA", sub:"Instituto Estatal de Capacitación", estado:"ok",
      txt:"Cursos del gobierno de Guanajuato para aprender un oficio o especializarte, desde lo básico hasta automatización y robótica. En San Miguel tiene un núcleo tecnológico en el polígono empresarial. Cada mayo hace una semana de cursos gratis, y las mujeres desde los 15 años tienen cursos presenciales gratuitos.",
      dato:"Revisa la convocatoria vigente antes de ir.", web:"https://ieca.guanajuato.gob.mx", q:"IECA San Miguel de Allende" },
    { dibujo:"libro", tipo:"Leer, aprender y crear", nom:"Biblioteca Pública", sub:"de San Miguel de Allende", estado:"ok",
      txt:"Mucho más que libros: cada trimestre tiene clases de arte, música, idiomas, computación, programación, lectura y bienestar para todas las edades, varias gratis y otras con donativo. Las de este trimestre van del 28 de septiembre al 23 de diciembre de 2026.",
      dato:"Lo vimos en su tablero de avisos; las inscripciones son en su página.", dir:"Insurgentes 25, Zona Centro", web:"https://www.labibliotecapublica.org", q:"Biblioteca Pública, Insurgentes 25",
      foto:"biblioteca", alt:"Sala de la biblioteca con estantes de madera, faroles colgantes y piso amarillo", extra:"bibliotecaTablero", extraAlt:"Tablero con los horarios de clases del cuarto trimestre de 2026" },
    { dibujo:"brote", tipo:"Clases para todas las edades", nom:"Centro Nuevo Comienzo", sub:"DIF PILARES, Barrio Las Cuevitas", estado:"ok",
      txt:"Un centro del DIF que el gobierno del estado inauguró el 11 de septiembre de 2025, y el más grande de su tipo en Guanajuato. Tiene talleres culturales, deportivos, educativos y de inclusión, como zumba y actividades para niñas y niños, además de cocina, auditorio y estética. Es el único del estado con talleres para personas con discapacidad visual, y está pensado para casi 2 mil personas.",
      dato:"Cerca de la central de autobuses. Falta: horarios.", dir:"Calzada de la Estación s/n, Las Cuevitas, C.P. 37755", q:"Centro Nuevo Comienzo DIF PILARES Las Cuevitas" },
    { dibujo:"mercado", tipo:"Mercado de todos los días", nom:"Mercado Ignacio Ramírez", sub:"El mercado techado del Centro", estado:"ok",
      txt:"El mercado principal de la ciudad, a unas cuadras del Jardín y detrás del Oratorio. Se construyó en 1970 donde estaba el mercado original de 1889. Hay flores, frutas, verduras, carne, pollo y pescado, y fondas al fondo. Por atrás conecta con el Mercado de Artesanías.",
      dato:"Abre todos los días.", dir:"Calle Colegio s/n, Zona Centro", q:"Mercado Ignacio Ramírez, Colegio" },
    { dibujo:"sanjuan", tipo:"Mercado de barrio", nom:"Mercado de San Juan de Dios", sub:"El más de aquí", estado:"ok",
      txt:"A seis cuadras al poniente del Jardín, construido en 1992. Tiene una parte techada y muchos puestos al aire libre: frutas, verduras, fondas, tortillas, licuados, ropa, zapatos y piñatas. En los días antes de Reyes, las calles de alrededor se llenan de juguetes.",
      dato:"Abre todos los días.", dir:"Barrio de San Juan de Dios, entre la avenida Guadalupe y San Antonio Abad", q:"Mercado de San Juan de Dios" },
    { dibujo:"tianguis", tipo:"Tianguis", nom:"Tianguis de los Martes", sub:"“La Placita”, también en domingo", estado:"ok",
      txt:"El tianguis más grande de la ciudad, bajo carpas enormes del tamaño de varias canchas de futbol. Hay de todo: fruta, verdura, ropa nueva y de segunda, herramientas, antojitos y los famosos tacos de cecina. Se pone cada martes, y los domingos hay uno más chico en el mismo lugar.",
      dato:"Para llegar: los camiones que dicen “Placita”.", dir:"Boulevard de la Conspiración, salida a Querétaro, detrás de la Estación de Bomberos", q:"Tianguis de los Martes, San Miguel de Allende" },
    { dibujo:"bodega", tipo:"Para que rinda el gasto", nom:"Bodega Aurrerá", sub:"Sobre la Calzada de la Estación", estado:"ok",
      txt:"La tienda de precios bajos de la ciudad, sobre la Calzada de la Estación, cerca del puente y la glorieta: despensa, cosas para la casa y farmacia. Y el dato que más nos importa: ahí consigues nieves a solo 10 pesitos.",
      dato:"Lo de las nieves nos lo contó el equipo; los precios pueden cambiar.", dir:"Calzada de la Estación s/n, San Miguel de Allende", q:"Bodega Aurrerá, Calzada de la Estación, San Miguel de Allende" },
    { dibujo:"campo", tipo:"Cancha", nom:"Campo Los Orígeles", sub:"Futbol de barrio", estado:"ok",
      txt:"Un campo abierto donde se juegan partidos de futbol. Sin gradas de estadio ni boleto: llegas, ves la reta y, si te invitan, te metes.",
      dato:"Nos lo contó el equipo. Falta: la ubicación exacta.", q:null }
  ];
  $("#directorio").innerHTML = directorio.map(d => `
    <article class="dir" data-rev>
      <div class="dibujo" aria-hidden="true">${DIBUJOS[d.dibujo] || ""}</div>
      <p class="lbl">${esc(d.tipo)}</p>
      <h3 class="disp">${esc(d.nom)}</h3>
      <p class="sub">${esc(d.sub)}</p>
      <p class="txt">${esc(d.txt)}</p>
      ${d.foto ? `<figure class="cuadro dir-foto rev" data-rev><div class="marco"><img data-lazy="${d.foto}" alt="${esc(d.alt)}"></div>${d.extra ? `<figure class="inserto"><img data-lazy="${d.extra}" alt="${esc(d.extraAlt)}"></figure>` : ""}</figure>` : ""}
      ${d.dato ? `<p class="dato-dir">${esc(d.dato)}</p>` : ""}
      <div class="acc">${tag(d.estado)}${d.web ? `<a class="ir" href="${d.web}" target="_blank" rel="noopener">${PIN.replace("M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z", "M4 12h16M14 6l6 6-6 6").replace('<circle cx="12" cy="10" r="2.5"/>', "")}Sitio oficial</a>` : ""}${mapa(d.q)}</div>
      ${d.dir ? `<p class="direccion">${esc(d.dir)}</p>` : ""}
    </article>`).join("");

  const zf = $("#zeferino"), zfBtn = $("#zf-abrir");
  function zfAbre(v){
    zf.classList.toggle("abierto", v);
    zfBtn.setAttribute("aria-expanded", v ? "true" : "false");
    $(".zf-abrir-b", zfBtn).textContent = v ? "Volver a cerrar" : "Ábrelo ✦";
  }
  let zfManual = false;
  zf.addEventListener("focusin", () => { if (!zf.classList.contains("abierto")){ zfManual = true; zfAbre(true); } });
  zfBtn.addEventListener("click", () => { zfManual = true; zfAbre(!zf.classList.contains("abierto")); });
  if (reduced) zfAbre(true);

  /* ---------- la mesa ---------- */
  const platillos = [
    { nom:"Taquitos de piloncillo", tipo:"Postre de horno", estado:"ok",
      lead:"Un taquito de masa de maíz teñida con chile ancho, relleno de piloncillo molido con más chile y horneado con mantequilla. Primero sabe dulce; luego, poquito a poco, pica.",
      datos:[["Quién lo hizo famoso","Un equipo de estudiantes del CECyTE San Miguel de Allende II, con esta receta, ganó el primer lugar del Foodathon de Guanajuato 2024 en la categoría de postres."],["Se sirve con","Salsa de piloncillo o jalea de tuna."]],
      receta:{ equipo:"María Ana Luisa Moreno Maldonado, Lizeth Johana Acosta Yáñez, Jessica Jazmín Rosas Martínez y Juan Pablo Muñoz Téllez", tiempo:"5 horas",
        ingredientes:["1.5 kg de masa de maíz nixtamalizada","1 kg de piloncillo","200 g de chile ancho","1 kg de harina de garbanzo","180 g de mantequilla","1 paquete de hojas de tamal","Para acompañar: 3 kg de tuna roja, 3 kg de tuna verde y 25 ml de mezcal"],
        pasos:["Desvena los chiles anchos, cuécelos y muélelos.","Revuelve dos cucharadas de esa pulpa con la masa y agrega agua poco a poco, hasta que se pueda manejar.","Muele el piloncillo en el molcajete y mézclalo con el resto del chile: ese es el relleno.","En la prensa, forma cada tortilla, ponle relleno y dóblala.","Acomódalos en una charola engrasada, barnízalos con mantequilla y hornéalos.","Sírvelos con salsa de piloncillo o jalea de tuna."] } },
    { nom:"Enchiladas rojas", tipo:"Plato fuerte", estado:"ok",
      lead:"Tortillas pasadas por salsa de chile rojo, con queso y cebolla. Las de estilo San Miguel suelen llevar chile guajillo, y las recetas de la región les suman papa y zanahoria picadas.",
      datos:[["Cuándo","Todo el año."],["Lo que falta","Quién las hace mejor: ¿cenaduría, fonda o la cocina de alguna abuela?"]] },
    { nom:"Patitas de puerco", tipo:"Botana", estado:"ok",
      lead:"Patitas de cerdo cocidas y curtidas en vinagre. Frescas, ácidas y con su picor.",
      datos:[["Cómo se piden aquí","De dos formas: la patita completa o en tostada."],["Cuándo","Todo el año, de botana."],["Lo que falta","Los puestos donde las venden."]] },
    { nom:"Conserva", tipo:"Dulce de temporada", estado:"ok",
      lead:"Fruta cocida despacio en almíbar o piloncillo y guardada en frasco para que dure. Aquí es de lo más típico.",
      datos:[["Cuándo","Sobre todo en Semana Santa, aunque se encuentra todo el año."],["Lo que falta","Qué frutas se usan aquí y quién la sigue haciendo en casa."]] },
    { nom:"Garbanzos verdes", tipo:"Botana", estado:"ok",
      lead:"Garbanzo verde, fresco y cocido, servido con limón y chile. De los que se comen uno tras otro, platicando.",
      datos:[["Cómo se piden aquí","Cocidos, con limón y chile, como botana."],["Lo que falta","En qué meses se consiguen y dónde los venden."]] }
  ];
  const pizLista = $("#piz-lista"), fichaR = $("#ficha-r");
  pizLista.innerHTML = platillos.map((p, i) => `
    <li class="${p.pilon ? "pilon" : ""}"><button type="button" class="piz-item" role="tab" id="piz-${i}" aria-controls="ficha-r" aria-selected="false">
      <span class="piz-nom">${esc(p.nom)}</span><span class="piz-tipo">${esc(p.tipo)}${p.receta ? " ✦ con receta" : ""}</span>
    </button></li>`).join("");
  function verPlato(i, enfocar){
    const p = platillos[i];
    const r = p.receta;
    fichaR.innerHTML = `
      <span class="cinta" aria-hidden="true"></span>
      <p class="lbl fr-num">Ficha ${String(i + 1).padStart(2, "0")}, ${esc(p.tipo)}</p>
      <h3 class="disp">${esc(p.nom)}</h3>
      ${tag(p.estado, p.estado === "ok" ? "Verificado con fuentes o vecinos" : null)}
      <p class="fr-lead">${esc(p.lead)}</p>
      <dl class="fr-datos">${p.datos.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      ${r ? `<div class="fr-receta">
        <p class="lbl">La receta ganadora</p>
        <p class="fr-equipo">Por ${esc(r.equipo)}. Tiempo: ${esc(r.tiempo)}.</p>
        <div class="fr-cols">
          <div><h4>Ingredientes</h4><ul>${r.ingredientes.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div><h4>Cómo se hace</h4><ol>${r.pasos.map(x => `<li>${esc(x)}</li>`).join("")}</ol></div>
        </div>
      </div>` : ""}
      <p class="fr-pide">¿Tú dónde lo comes? <a class="enlace" href="https://docs.google.com/forms/d/e/1FAIpQLSdEmQXIcB_R-0W46NC60v4dkvlhztIWtqs76IDmvuJhKgUTNA/viewform" target="_blank" rel="noopener">Cuéntanos</a></p>`;
    $$(".piz-item", pizLista).forEach((b, k) => { b.setAttribute("aria-selected", k === i ? "true" : "false"); b.tabIndex = k === i ? 0 : -1; });
    fichaR.setAttribute("aria-labelledby", "piz-" + i);
    fichaR.classList.remove("entra"); void fichaR.offsetWidth; fichaR.classList.add("entra");
    if (enfocar && innerWidth < 860) fichaR.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }
  $$(".piz-item", pizLista).forEach((b, i) => b.addEventListener("click", () => verPlato(i, true)));
  pizLista.addEventListener("keydown", e => {
    const items = $$(".piz-item", pizLista), i = items.indexOf(document.activeElement);
    if (i < 0) return;
    let j = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") j = (i + 1) % items.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") j = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") j = 0;
    else if (e.key === "End") j = items.length - 1;
    if (j === null) return;
    e.preventDefault(); items[j].focus(); verPlato(j, false);
  });
  verPlato(0, false);
  const tiraM = platillos.map(p => `<span>${esc(p.nom)}</span><span class="e">✦</span>`).join("");
  $("#marq-mesa").innerHTML = tiraM + tiraM + tiraM;

  /* ---------- papel viejo y quemado en la línea del tiempo ---------- */
  let papelViento = null, reanudaPapel = null;
  if (!reduced && matchMedia("(hover: hover) and (pointer: fine)").matches){
    const pin = $(".hist-pin");
    const cv = document.createElement("canvas"); cv.className = "papelitos"; cv.setAttribute("aria-hidden", "true");
    pin.insertBefore(cv, pin.firstChild);
    const ctx = cv.getContext("2d");
    const dpr = Math.min(1.5, devicePixelRatio || 1);
    let W = 0, H = 0;
    const tam = () => { W = cv.clientWidth; H = cv.clientHeight; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); };
    tam(); addEventListener("resize", tam);
    const forma = (w, h) => {
      const n = 12, pts = [];
      for (let i = 0; i < n; i++){
        const a = (i / n) * Math.PI * 2, k = .68 + Math.random() * .34;
        pts.push([w / 2 + Math.cos(a) * w * .44 * k, h / 2 + Math.sin(a) * h * .44 * k]);
      }
      return pts;
    };
    const pinta = (w, h, pts, reves) => {
      const c = document.createElement("canvas"); c.width = w; c.height = h;
      const g = c.getContext("2d");
      const camino = () => { g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath(); };
      camino();
      const gr = g.createRadialGradient(w * .42, h * .4, 1, w / 2, h / 2, w * .62);
      gr.addColorStop(0, reves ? "#d6c196" : "#f0e3c6"); gr.addColorStop(.65, reves ? "#bf9f6c" : "#dcc493"); gr.addColorStop(1, "#6f4320");
      g.fillStyle = gr; g.fill();
      g.save(); camino(); g.clip();
      if (!reves){
        g.strokeStyle = "rgba(78,52,28,.32)"; g.lineWidth = 1;
        for (let y = h * .3; y < h * .76; y += h * .12){ g.beginPath(); g.moveTo(w * .22, y); g.lineTo(w * (.48 + Math.random() * .3), y); g.stroke(); }
      }
      for (let k = 0; k < 3; k++){
        const x = Math.random() * w, y = Math.random() * h, r = w * (.07 + Math.random() * .12);
        const m = g.createRadialGradient(x, y, 0, x, y, r); m.addColorStop(0, "rgba(58,30,10,.5)"); m.addColorStop(1, "rgba(58,30,10,0)");
        g.fillStyle = m; g.fillRect(0, 0, w, h);
      }
      g.restore();
      camino(); g.lineJoin = "round";
      g.lineWidth = Math.max(2, w * .08); g.strokeStyle = "rgba(42,22,8,.92)"; g.stroke();
      g.lineWidth = Math.max(1, w * .028); g.strokeStyle = "rgba(232,120,40,.6)"; g.stroke();
      return c;
    };
    const SPR = [];
    for (let i = 0; i < 7; i++){
      const w = (34 + Math.random() * 36) | 0, h = (w * (.55 + Math.random() * .5)) | 0, pts = forma(w, h);
      SPR.push([pinta(w, h, pts, false), pinta(w, h, pts, true)]);
    }
    const P = [], MAX = 44;
    let rafaga = 0, activo = false, ultimo = 0, acum = 0, yPrev = scrollY;
    const nace = lado => P.push({
      s: SPR[(Math.random() * SPR.length) | 0],
      x: lado ? W + 30 : Math.random() * W, y: lado ? H * (.25 + Math.random() * .6) : H + 30,
      vx: -6 - Math.random() * 16, vy: -(16 + Math.random() * 30),
      r: Math.random() * 6.28, vr: (Math.random() - .5) * 1.4,
      f: Math.random() * 6.28, vf: 1 + Math.random() * 2.2, fase: Math.random() * 6.28, amp: 10 + Math.random() * 18,
      esc: .6 + Math.random() * .5, a: 0, vida: 0
    });
    const brasa = () => P.push({ brasa: true, x: Math.random() * W, y: H + 10, vx: -4 + Math.random() * 8, vy: -(28 + Math.random() * 36), vida: 0, t: 2 + Math.random() * 2.5 });
    const cuadroPapel = now => {
      if (!activo || document.documentElement.classList.contains("quieto")){ ultimo = 0; return; }
      const dt = ultimo ? Math.min(.05, (now - ultimo) / 1000) : .016; ultimo = now;
      rafaga *= Math.pow(.18, dt);
      const viento = -12 + rafaga;
      acum += dt * (1.9 + Math.min(8, Math.abs(rafaga) / 24));
      while (acum > 1){ acum -= 1; if (P.length < MAX){ Math.random() < .2 ? brasa() : nace(rafaga < -70 && Math.random() < .45); } }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      for (let i = P.length - 1; i >= 0; i--){
        const p = P[i]; p.vida += dt;
        if (p.brasa){
          p.x += (p.vx + viento * .6) * dt; p.y += p.vy * dt;
          const v = Math.max(0, 1 - p.vida / p.t);
          ctx.fillStyle = "#F2A54A";
          ctx.globalAlpha = v * .9; ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, 6.283); ctx.fill();
          ctx.globalAlpha = v * .22; ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, 6.283); ctx.fill();
          if (v <= 0) P.splice(i, 1);
          continue;
        }
        p.f += p.vf * dt; p.r += p.vr * dt;
        p.x += (p.vx + viento) * dt + Math.sin(p.vida * 1.6 + p.fase) * p.amp * dt;
        p.y += p.vy * dt;
        p.a = Math.min(1, p.a + dt * 1.4);
        const fx = Math.cos(p.f), img = fx >= 0 ? p.s[0] : p.s[1];
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(Math.max(.08, Math.abs(fx)) * p.esc, p.esc);
        ctx.globalAlpha = p.a * .88; ctx.drawImage(img, -img.width / 2, -img.height / 2); ctx.restore();
        if (p.y < -90 || p.x < -140 || p.x > W + 160) P.splice(i, 1);
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(cuadroPapel);
    };
    papelViento = y => {
      const d = y - yPrev; yPrev = y;
      if (activo && d){ const m = innerWidth < 760; rafaga = Math.max(m ? -120 : -280, Math.min(m ? 120 : 280, rafaga - d * (m ? .45 : 1.6))); }
    };
    reanudaPapel = () => { if (activo){ ultimo = 0; requestAnimationFrame(cuadroPapel); } };
    if ("IntersectionObserver" in window){
      new IntersectionObserver(es => es.forEach(e => {
        const antes = activo; activo = e.isIntersecting;
        if (activo && !antes){ tam(); requestAnimationFrame(cuadroPapel); }
      })).observe($("#historia"));
    }
  }

  /* ---------- cursor: un farol, y tres momentos especiales ---------- */
  const fino = !reduced && matchMedia("(hover: hover) and (pointer: fine)").matches;

  // la postal y su reverso
  $$(".postal-lente .marco").forEach(m => {
    const rvT = $(".rv-txt", m), rvF = $(".rv-firma", m);
    m.setAttribute("role", "button"); m.setAttribute("tabindex", "0"); m.setAttribute("aria-pressed", "false");
    m.setAttribute("aria-label", "Voltear la postal. Al reverso dice: " + (rvT ? rvT.textContent : "") + " " + (rvF ? rvF.textContent : ""));
    const voltea = () => { m.classList.toggle("volteada"); m.setAttribute("aria-pressed", m.classList.contains("volteada") ? "true" : "false"); };
    m.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); voltea(); } });
    if (fino){
      m.addEventListener("pointermove", e => {
        const r = m.getBoundingClientRect();
        m.style.setProperty("--rx", (e.clientX - r.left).toFixed(0) + "px");
        m.style.setProperty("--ry", (e.clientY - r.top).toFixed(0) + "px");
        m.classList.add("lente");
      }, { passive: true });
      m.addEventListener("pointerleave", () => m.classList.remove("lente"));
    }
    m.addEventListener("click", voltea);
  });

  if (fino){
    const luzC = document.createElement("div"); luzC.className = "cursor-luz"; luzC.setAttribute("aria-hidden", "true");
    document.body.append(luzC);
    let mx = -300, my = -300, lx = mx, ly = my, vivo = false, corriendo = false;
    const paso = () => {
      lx += (mx - lx) * .14; ly += (my - ly) * .14;
      luzC.style.transform = `translate3d(${lx.toFixed(1)}px, ${ly.toFixed(1)}px, 0)`;
      if (Math.abs(mx - lx) + Math.abs(my - ly) > .4) requestAnimationFrame(paso); else corriendo = false;
    };

    // cohetes de la Alborada: solo en Fiestas
    const fiestasSec = $("#fiestas");
    let enFiesta = false, ultBrasa = 0;
    fiestasSec.addEventListener("pointerenter", () => { enFiesta = true; });
    fiestasSec.addEventListener("pointerleave", () => { enFiesta = false; });
    const brasa = (x, y, frames, dur, cls) => {
      const s = document.createElement("span");
      s.className = cls || "brasa"; s.style.left = x + "px"; s.style.top = y + "px";
      document.body.appendChild(s);
      s.animate(frames, { duration: dur, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = () => s.remove();
    };
    const estela = (x, y) => {
      const dx = (Math.random() - .5) * 18, dy = 12 + Math.random() * 18;
      brasa(x, y, [
        { transform: "translate(-50%, -50%) scale(1)", opacity: .95 },
        { transform: `translate(calc(-50% + ${dx.toFixed(1)}px), calc(-50% + ${dy.toFixed(1)}px)) scale(.3)`, opacity: 0 }
      ], 650 + Math.random() * 250);
    };
    const cohete = (x, y) => {
      brasa(x, y, [{ transform: "translate(-50%, -50%) scale(.2)", opacity: .7 }, { transform: "translate(-50%, -50%) scale(1.6)", opacity: 0 }], 520, "destello");
      for (let k = 0; k < 22; k++){
        const a = (Math.PI * 2 * k) / 22 + Math.random() * .25, d = 46 + Math.random() * 52;
        const dx = Math.cos(a) * d, dy = Math.sin(a) * d;
        brasa(x, y, [
          { transform: "translate(-50%, -50%) scale(1.1)", opacity: 1 },
          { offset: .55, transform: `translate(calc(-50% + ${dx.toFixed(1)}px), calc(-50% + ${dy.toFixed(1)}px)) scale(.9)`, opacity: 1 },
          { transform: `translate(calc(-50% + ${(dx * 1.12).toFixed(1)}px), calc(-50% + ${(dy + 38).toFixed(1)}px)) scale(.2)`, opacity: 0 }
        ], 1150 + Math.random() * 300);
      }
    };

    addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      mx = e.clientX; my = e.clientY;
      if (!vivo){ vivo = true; lx = mx; ly = my; document.body.classList.add("con-cursor"); }
      if (!corriendo){ corriendo = true; requestAnimationFrame(paso); }
      if (enFiesta){
        const ahora = performance.now();
        if (ahora - ultBrasa > 42){ ultBrasa = ahora; estela(mx, my); }
      }
    }, { passive: true });
    document.documentElement.addEventListener("mouseleave", () => { vivo = false; document.body.classList.remove("con-cursor"); });
    const COLC = ["#E6B866", "#C98476", "#F3E9D8", "#E58FA8", "#7FB592", "#C98A2E"];
    addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse") return;
      if (enFiesta){ cohete(e.clientX, e.clientY); return; }
      for (let k = 0; k < 8; k++){
        const s = document.createElement("span");
        s.className = "chispa"; s.textContent = k % 2 ? "✦" : "•"; s.style.color = COLC[k % COLC.length];
        s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px";
        document.body.appendChild(s);
        const a = (Math.PI * 2 * k) / 8 + Math.random() * .5, d = 26 + Math.random() * 26;
        s.animate([
          { transform: "translate(-50%, -50%) scale(.4)", opacity: 1 },
          { transform: `translate(calc(-50% + ${(Math.cos(a) * d).toFixed(1)}px), calc(-50% + ${(Math.sin(a) * d).toFixed(1)}px)) scale(1) rotate(${(Math.random() * 180).toFixed(0)}deg)`, opacity: 0 }
        ], { duration: 620, easing: "cubic-bezier(.2,.7,.2,1)" }).onfinish = () => s.remove();
      }
    }, { passive: true });

    // gis en el pizarrón
    const piz = $(".piz-in");
    if (piz){
      const cv = document.createElement("canvas"); cv.className = "gis"; cv.setAttribute("aria-hidden", "true"); piz.appendChild(cv);
      const ctx = cv.getContext("2d"), dpr = Math.min(2, devicePixelRatio || 1), VIDA = 1600;
      let pts = [], corre = false, corte = true;
      const tam = () => { cv.width = Math.round(piz.clientWidth * dpr); cv.height = Math.round(piz.clientHeight * dpr); };
      tam(); if ("ResizeObserver" in window) new ResizeObserver(tam).observe(piz);
      const pinta = now => {
        ctx.clearRect(0, 0, cv.width, cv.height);
        pts = pts.filter(q => now - q.t < VIDA);
        ctx.lineCap = "round"; ctx.lineJoin = "round";
        for (let i = 1; i < pts.length; i++){
          const a = pts[i - 1], b = pts[i];
          if (b.corte) continue;
          const v = 1 - (now - b.t) / VIDA;
          ctx.strokeStyle = `rgba(244,238,224,${(.5 * v).toFixed(3)})`; ctx.lineWidth = 2.6 * dpr;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          ctx.strokeStyle = `rgba(244,238,224,${(.22 * v).toFixed(3)})`; ctx.lineWidth = 1 * dpr;
          ctx.beginPath(); ctx.moveTo(a.x + a.j, a.y - a.j); ctx.lineTo(b.x + b.j, b.y - b.j); ctx.stroke();
        }
        if (pts.length) requestAnimationFrame(pinta); else { corre = false; ctx.clearRect(0, 0, cv.width, cv.height); }
      };
      piz.addEventListener("pointermove", e => {
        if (e.pointerType !== "mouse") return;
        const r = piz.getBoundingClientRect();
        pts.push({ x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr, t: performance.now(), corte, j: (Math.random() * 2 - 1) * 1.8 * dpr });
        corte = false;
        if (!corre){ corre = true; requestAnimationFrame(pinta); }
      }, { passive: true });
      piz.addEventListener("pointerleave", () => { corte = true; });
    }
  }

  /* ---------- menú móvil ---------- */
  const menu = $("#menu"), menuBtn = $("#menu-btn");
  function menuAbre(v){
    menu.classList.toggle("abierto", v);
    menu.setAttribute("aria-hidden", v ? "false" : "true");
    menuBtn.setAttribute("aria-expanded", v ? "true" : "false");
    document.body.style.overflow = v ? "hidden" : "";
    if (v) $("a", menu).focus(); else menuBtn.focus();
  }
  menuBtn.addEventListener("click", () => menuAbre(true));
  $("#menu-cerrar").addEventListener("click", () => menuAbre(false));
  $$("a", menu).forEach(a => a.addEventListener("click", () => menuAbre(false)));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("abierto")) menuAbre(false); });

  /* ---------- aparecer al llegar ---------- */
  if ("IntersectionObserver" in window && !reduced){
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting){ e.target.classList.add("visto"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -12% 0px", threshold: .12 });
    const observa = () => $$("[data-rev]:not(.visto)").forEach(el => { if (!el.closest(".fila:not(.abierta)")) io.observe(el); });
    observa();
  } else {
    $$("[data-rev]").forEach(el => el.classList.add("visto"));
  }

  /* ---------- scroll: sol, portadas, historia horizontal, nav ---------- */
  const root = document.documentElement;
  const nav = $("#nav");
  const solPunto = $("#sol-punto");
  const portadas = $$("[data-portada]");
  const hist = $("#historia"), pista = $("#hist-pista"), barra = $("#hist-barra");
  const cuentanos = $("#cuentanos");
  const linksNav = $$(".nav-links a");
  const secciones = linksNav.map(a => $(a.getAttribute("href"))).filter(Boolean);
  let histDist = 0, ultimoSol = -9;

  function modoHist(){
    const lineal = reduced || innerWidth < 760;
    hist.classList.toggle("lineal", lineal);
    if (lineal){ hist.style.height = ""; histDist = 0; return; }
    histDist = Math.max(0, pista.scrollWidth - innerWidth);
    hist.style.height = (histDist + innerHeight) + "px";
  }

  function cuadro(){
    const y = scrollY, vh = innerHeight;
    const total = Math.max(1, root.scrollHeight - vh);
    const prog = Math.min(1, Math.max(0, y / total));

    const sol = +(prog * 2 - 1).toFixed(3);
    if (Math.abs(sol - ultimoSol) > .01){
      root.style.setProperty("--sol", sol);
      ultimoSol = sol;
      const a = Math.PI * (1 - prog);
      solPunto.setAttribute("cx", (22 + 18 * Math.cos(a)).toFixed(2));
      solPunto.setAttribute("cy", (23 - 18 * Math.sin(a)).toFixed(2));
    }

    nav.classList.toggle("sobre", y < vh * .72);

    if (!reduced){
      portadas.forEach(p => {
        const cap = p.parentElement;
        const r = cap.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const pl = p.nextElementSibling;
        const t = pl.getBoundingClientRect().top;
        const v = Math.min(1, Math.max(0, 1 - t / vh));
        p.style.setProperty("--p", v.toFixed(3));
      });
      const rc = cuentanos.getBoundingClientRect();
      if (rc.top < vh && rc.bottom > 0) cuentanos.style.setProperty("--cp", (1 - rc.bottom / (vh + rc.height)).toFixed(3));
    }

    if (!reduced){
      const rz = zf.getBoundingClientRect();
      const fuera = rz.bottom < 0 || rz.top > vh;
      if (zfManual){ if (fuera) zfManual = false; }
      else if (rz.top < vh * .6 && rz.bottom > vh * .4){ if (!zf.classList.contains("abierto")) zfAbre(true); }
      else if (fuera && zf.classList.contains("abierto")) zfAbre(false);
    }

    if (papelViento) papelViento(y);

    if (histDist){
      const r = hist.getBoundingClientRect();
      const hp = Math.min(1, Math.max(0, -r.top / Math.max(1, hist.offsetHeight - vh)));
      pista.style.transform = `translate3d(${(-hp * histDist).toFixed(1)}px,0,0)`;
      barra.style.transform = `scaleX(${hp.toFixed(3)})`;
    }

    let act = null;
    secciones.forEach(s => { const r = s.getBoundingClientRect(); if (r.top < vh * .45 && r.bottom > vh * .45) act = s.id; });
    linksNav.forEach(a => a.classList.toggle("activo", a.getAttribute("href") === "#" + act));
  }

  let pendiente = false;
  const pedir = () => { if (!pendiente){ pendiente = true; requestAnimationFrame(() => { pendiente = false; cuadro(); }); } };
  addEventListener("scroll", pedir, { passive: true });
  let rt;
  addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { modoHist(); guirnaldas.forEach(guirnalda); cuadro(); }, 120); });
  modoHist();
  cuadro();
  if (!reduced) setTimeout(() => { const d = $(".hero-dibujo"); if (d) d.classList.add("visto"); }, 500);
  document.fonts && document.fonts.ready.then(() => { modoHist(); cuadro(); });

  cargaImgs();

  /* ---------- accesibilidad, pausa y páginas legales ---------- */
  const raiz = document.documentElement, pausa = $("#pausa");
  let pausadas = [];
  const ponQuieto = (q, guarda) => {
    raiz.classList.toggle("quieto", q);
    pausa.setAttribute("aria-pressed", q ? "true" : "false");
    const txt = q ? "Reanudar animaciones" : "Pausar animaciones";
    $(".sr", pausa).textContent = txt; pausa.title = txt;
    if (q){ pausadas = document.getAnimations().filter(a => a.playState === "running"); pausadas.forEach(a => a.pause()); }
    else { pausadas.forEach(a => { try { a.play(); } catch (e){} }); pausadas = []; if (reanudaPapel) reanudaPapel(); }
    if (guarda){ try { q ? localStorage.setItem("smc-quieto", "1") : localStorage.removeItem("smc-quieto"); } catch (e){} }
  };
  pausa.addEventListener("click", () => ponQuieto(!raiz.classList.contains("quieto"), true));
  let prefQuieto = null; try { prefQuieto = localStorage.getItem("smc-quieto"); } catch (e){}
  if (prefQuieto === "1") setTimeout(() => ponQuieto(true, false), 50);

  addEventListener("keydown", e => {
    if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true"){ menuBtn.click(); menuBtn.focus(); }
  });
  menuBtn.addEventListener("click", () => setTimeout(() => {
    if (menuBtn.getAttribute("aria-expanded") === "true"){ const a = $("#menu a"); if (a) a.focus(); }
  }, 60));

  const marcaExternos = r => $$('a[target="_blank"]', r).forEach(a => {
    if (!a.querySelector(".sr")) a.insertAdjacentHTML("beforeend", '<span class="sr"> (se abre en otra pestaña)</span>');
  });
  marcaExternos(document);
  if (fichaR) new MutationObserver(() => marcaExternos(fichaR)).observe(fichaR, { childList: true, subtree: true });

  const LEGAL = ["aviso-de-privacidad", "terminos", "cookies", "accesibilidad"];
  let abridor = null;
  const quitaHash = () => { try { history.replaceState(null, "", location.pathname + location.search); } catch (e){} };
  const abreLegal = (id, desde) => {
    const d = document.getElementById(id);
    if (!d || d.open) return;
    if (desde) abridor = desde;
    $$("dialog.legal[open]").forEach(x => x.close());
    d.showModal();
    $(".legal-cuerpo", d).scrollTop = 0;
    $(".cerrar", d).focus();
    try { if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id); } catch (e){}
  };
  $$("dialog.legal").forEach(d => {
    d.addEventListener("close", () => {
      if (!$$("dialog.legal[open]").length){
        if (LEGAL.includes(location.hash.slice(1))) quitaHash();
        if (abridor && document.contains(abridor)) abridor.focus();
      }
    });
    d.addEventListener("click", e => { if (e.target === d) d.close(); });
    $(".cerrar", d).addEventListener("click", () => d.close());
  });
  document.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (LEGAL.includes(id)){ e.preventDefault(); abreLegal(id, a.closest("dialog") ? abridor : a); }
  });
  if (LEGAL.includes(location.hash.slice(1))) abreLegal(location.hash.slice(1));
  addEventListener("hashchange", () => { const id = location.hash.slice(1); if (LEGAL.includes(id)) abreLegal(id); });

})();
