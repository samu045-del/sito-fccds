/*
  DATI DEL SITO FC CDS
  --------------------
  Questo è l'unico file da modificare ogni settimana.
  Dopo ogni partita aggiorna: prossimaPartita, ultimaPartita, calendario, classifica, marcatori.
  Fonte classifica e marcatori: Tuttocampo (Terza Categoria Roma, Girone A).
  Ultimo aggiornamento: 10 novembre 2026, dopo la 4ª giornata.
*/
window.CDS = {
  aggiornato: "10 novembre 2026",
  giornataClassifica: 4,

  prossimaPartita: {
    giornata: "G5",
    data: "2026-11-14T18:00:00+01:00",
    etichettaData: "Sabato 14 novembre 2026 · ore 18:00",
    casa: "CDS F.C.",
    trasferta: "Real Roma Nord",
    inCasa: true,
    campo: "Centro Sportivo Dabliu Eur",
    linkMappa: "https://www.google.com/maps/search/?api=1&query=Centro%20Sportivo%20Dabliu%20Eur%20Roma"
  },

  ultimaPartita: {
    giornata: "G4",
    etichettaData: "Domenica 8 novembre 2026",
    casa: "Atletico",
    trasferta: "CDS F.C.",
    golCasa: 1,
    golTrasferta: 3,
    esito: "V",
    marcatoriCDS: ["Picci (2)", "Di Leo"]
  },

  // Campo di casa (usato in home, Il Club e Contatti)
  campoCasa: {
    nome: "Centro Sportivo Dabliu Eur",
    indirizzo: "[Indirizzo da confermare], Roma",
    linkMappa: "https://www.google.com/maps/search/?api=1&query=Centro%20Sportivo%20Dabliu%20Eur%20Roma"
  },

  // Loghi avversari: nome squadra esattamente come in calendario/classifica -> file in assets/img/squadre
  loghi: {
    "Academy Monti della Tolfa": "academy-monti-della-tolfa.png",
    "Amatori Allumiere 1983": "amatori-allumiere-1983.png",
    "Atletico": "atletico.png",
    "Black Lions": "black-lions.png",
    "Delta Calcio": "delta-calcio.png",
    "DLF Youth Academy": "dlf-youth-academy.png",
    "F.C. Palombara": "fc-palombara.png",
    "GDZ Campagnano": "gdz-campagnano.png",
    "Palmarola Club": "palmarola-club.png",
    "Pol. Pian Due Torri": "pol-pian-due-torri.png",
    "Pro Calcio Cerveteri": "pro-calcio-cerveteri.png",
    "Real Roma Nord": "real-roma-nord.png",
    "Tusker Roma": "tusker-roma.png",
    "Vigor Mellis": "vigor-mellis.png"
  },

  // Trasmettiamo in diretta solo le partite in casa: qui va l'ultima diretta disponibile.
  ultimaDiretta: {
    titolo: "CDS F.C. – Palmarola Club 7-3",
    youtubeId: "M16NWXeht60"
  },

  riepilogo: { posizione: "4°", punti: 9, vittorie: "3/3", golFatti: 14 },

  calendario: [
    { g: "G1", data: "Dom 18 ott", casa: "", trasferta: "", stato: "riposo" },
    { g: "G2", data: "Dom 25 ott · 15:00", casa: "Amatori Allumiere 1983", trasferta: "CDS F.C.", ris: "3-4", stato: "V" },
    { g: "G3", data: "Sab 31 ott · 18:00", casa: "CDS F.C.", trasferta: "Palmarola Club", ris: "7-3", stato: "V" },
    { g: "G4", data: "Dom 8 nov · 15:00", casa: "Atletico", trasferta: "CDS F.C.", ris: "1-3", stato: "V" },
    { g: "G5", data: "Sab 14 nov · 18:00", casa: "CDS F.C.", trasferta: "Real Roma Nord", stato: "prossima" },
    { g: "G6", data: "Dom 22 nov · 15:00", casa: "Pol. Pian Due Torri", trasferta: "CDS F.C." },
    { g: "G7", data: "Dom 29 nov · 15:00", casa: "CDS F.C.", trasferta: "Pro Calcio Cerveteri" },
    { g: "G8", data: "Dom 6 dic · 15:00", casa: "F.C. Palombara", trasferta: "CDS F.C." },
    { g: "G9", data: "Dom 13 dic · 15:00", casa: "Black Lions", trasferta: "CDS F.C." },
    { g: "G10", data: "Dom 20 dic · 15:00", casa: "CDS F.C.", trasferta: "Academy Monti della Tolfa" },
    { g: "G11", data: "Dom 10 gen · 15:00", casa: "Delta Calcio", trasferta: "CDS F.C." },
    { g: "G12", data: "Dom 17 gen · 15:00", casa: "CDS F.C.", trasferta: "Vigor Mellis" },
    { g: "G13", data: "Dom 24 gen · 15:00", casa: "GDZ Campagnano", trasferta: "CDS F.C." },
    { g: "G14", data: "Dom 31 gen · 15:00", casa: "CDS F.C.", trasferta: "DLF Youth Academy" },
    { g: "G15", data: "Dom 7 feb · 15:00", casa: "Tusker Roma", trasferta: "CDS F.C." }
  ],

  // squadra, punti, giocate, vinte, pari, perse, gol fatti, gol subiti, differenza
  classifica: [
    ["F.C. Palombara", 10, 4, 3, 1, 0, 10, 2, 8],
    ["Pro Calcio Cerveteri", 10, 4, 3, 1, 0, 13, 6, 7],
    ["Tusker Roma", 9, 4, 3, 0, 1, 11, 3, 8],
    ["Football Club CdS", 9, 3, 3, 0, 0, 14, 7, 7],
    ["Academy Monti della Tolfa", 9, 3, 3, 0, 0, 10, 4, 6],
    ["Real Roma Nord", 8, 4, 2, 2, 0, 9, 4, 5],
    ["DLF Youth Academy", 7, 4, 2, 1, 1, 18, 9, 9],
    ["Vigor Mellis", 4, 4, 1, 1, 2, 7, 9, -2],
    ["Pol. Pian Due Torri", 3, 4, 1, 0, 3, 6, 9, -3],
    ["GDZ Campagnano", 3, 4, 1, 0, 3, 9, 13, -4],
    ["Palmarola Club", 3, 4, 1, 0, 3, 9, 13, -4],
    ["Black Lions", 3, 3, 1, 0, 2, 3, 7, -4],
    ["Atletico", 3, 4, 1, 0, 3, 5, 12, -7],
    ["Amatori Allumiere 1983", 0, 4, 0, 0, 4, 9, 16, -7],
    ["Delta Calcio", 0, 3, 0, 0, 3, 1, 20, -19]
  ],

  marcatori: [
    { nome: "Picci", gol: 11, nota: "2 su rigore" },
    { nome: "Di Leo", gol: 1 },
    { nome: "Mercurio", gol: 1 },
    { nome: "Mollo", gol: 1 }
  ],
  assist: [
    { nome: "Sanseverino", n: 2 },
    { nome: "De Dominicis", n: 1 },
    { nome: "Mercurio", n: 1 }
  ],

  // ruolo: POR, DIF, CEN, ATT, "?" = da confermare. foto: nome file in assets/img/giocatori (vuoto = foto in arrivo)
  rosa: [
    { nome: "Elia", cognome: "Manuri", ruolo: "POR", foto: "manuri-elia.jpg" },
    { nome: "Pierangelo", cognome: "Paniccia", ruolo: "POR", foto: "paniccia-pierangelo.jpg" },

    { nome: "Alessio", cognome: "Biraschi", ruolo: "DIF", foto: "biraschi-alessio.jpg" },
    { nome: "Marco", cognome: "Capoccetti", ruolo: "DIF", foto: "capoccetti-marco.jpg" },
    { nome: "Andrea", cognome: "De Dominicis", ruolo: "DIF", foto: "dedominicis-andrea.jpg", assist: 1 },
    { nome: "Piergiorgio", cognome: "Ferri", ruolo: "DIF", foto: "ferri-piergiorgio.jpg" },
    { nome: "Joseph", cognome: "Meyome", ruolo: "DIF", foto: "meyome-joseph.jpg" },
    { nome: "Simone", cognome: "Mollo", ruolo: "DIF", foto: "mollo-simone.jpg", gol: 1 },
    { nome: "Andrea", cognome: "Politi", ruolo: "DIF", foto: "politi-andrea.jpg" },
    { nome: "Damiano", cognome: "Saccares", ruolo: "DIF", foto: "" },

    { nome: "Matteo", cognome: "Carice", ruolo: "CEN", foto: "carice-matteo.jpg" },
    { nome: "Daniele", cognome: "Cicivelli", ruolo: "CEN", foto: "cicivelli-daniele.jpg" },
    { nome: "Federico", cognome: "Mangione", ruolo: "CEN", foto: "" },
    { nome: "Damiano", cognome: "Perugini", ruolo: "CEN", foto: "perugini-damiano.jpg" },
    { nome: "Simone", cognome: "Sanseverino", ruolo: "CEN", foto: "sanseverino-simone.jpg", assist: 2 },
    { nome: "Salvatore", cognome: "Scopelliti", ruolo: "CEN", foto: "scopelliti-salvatore.jpg" },
    { nome: "Diego", cognome: "Testi", ruolo: "CEN", foto: "testi-diego.jpg" },
    { nome: "Francesco", cognome: "Torzulli", ruolo: "CEN", foto: "torzulli-francesco.jpg" },

    { nome: "Lorenzo", cognome: "Di Fabrizio", ruolo: "ATT", foto: "" },
    { nome: "Gianmarco", cognome: "Di Leo", ruolo: "ATT", foto: "dileo-gianmarco.jpg", gol: 1 },
    { nome: "Francesco", cognome: "Mercurio", ruolo: "ATT", foto: "mercurio-francesco.jpg", gol: 1, assist: 1 },
    { nome: "Antonio Giulio", cognome: "Picci", ruolo: "ATT", foto: "", gol: 11 },
    { nome: "Gianluca", cognome: "Raho", ruolo: "ATT", foto: "raho-gianluca.jpg" },
    { nome: "Dario", cognome: "Stragapede", ruolo: "ATT", foto: "stragapede-dario.jpg" },

    // In foto con la maglia ma non ancora in rosa su Tuttocampo: ruolo da confermare
    { nome: "Gaetano", cognome: "Carnevale", ruolo: "?", foto: "carnevale-gaetano.jpg" },
    { nome: "Andrea", cognome: "Ferro", ruolo: "?", foto: "ferro-andrea.jpg" },
    { nome: "Alessio", cognome: "Sanfilippo", ruolo: "?", foto: "sanfilippo-alessio.jpg" }
  ],

  staff: [
    { nome: "Emanuele", cognome: "Costanzi", ruolo: "[Ruolo]", foto: "costanzi-emanuele.jpg" },
    { nome: "Davide", cognome: "Fazio", ruolo: "[Ruolo]", foto: "fazio-davide.jpg" },
    { nome: "Daniele", cognome: "Giuliani", ruolo: "[Ruolo]", foto: "giuliani-daniele.jpg" },
    { nome: "Simone", cognome: "[Cognome]", ruolo: "[Ruolo]", foto: "simone.jpg" }
  ],

  contatti: {
    email: "[email del club]",
    instagram: "",
    tiktok: "",
    youtube: ""
  },

  partner: [
    { nome: "Eplay24", ruolo: "Main sponsor" },
    { nome: "Corriere dello Sport", ruolo: "Partner" }
  ]
};
