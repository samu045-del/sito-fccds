/*
  DATI DEL SITO FC CDS
  --------------------
  Questo è l'unico file da modificare ogni settimana.
  Dopo ogni partita aggiorna: prossimaPartita, ultimaPartita, calendario, classifica, marcatori.
  Fonte classifica e marcatori: Tuttocampo (Terza Categoria Roma, Girone A).
  Ultimo aggiornamento: 14 novembre 2026, dopo FC CDS – Real Roma Nord (5ª giornata in corso).
*/
window.CDS = {
  aggiornato: "14 novembre 2026",
  giornataClassifica: 5,
  giornataInCorso: true, // metti false quando sono state giocate tutte le partite della giornata

  prossimaPartita: {
    giornata: "G6",
    data: "2026-11-22T11:00:00+01:00",
    etichettaData: "Domenica 22 novembre 2026 · ore 11:00",
    casa: "Pol. Pian Due Torri",
    trasferta: "FC CDS",
    inCasa: false,
    campo: "Pian Due Torri, Lungotevere della Magliana 95, Roma",
    linkMappa: "https://www.google.com/maps/search/?api=1&query=Lungotevere%20della%20Magliana%2095%2C%20Roma"
  },

  ultimaPartita: {
    giornata: "G5",
    etichettaData: "Sabato 14 novembre 2026",
    casa: "FC CDS",
    trasferta: "Real Roma Nord",
    golCasa: 2,
    golTrasferta: 2,
    esito: "N",
    marcatoriCDS: ["Sanseverino", "Mercurio"]
  },

  // Campo di casa (usato in home, Il Club e Contatti)
  campoCasa: {
    nome: "Centro Sportivo Dabliu Eur",
    indirizzo: "Viale Egeo 98, 00144 Roma",
    lat: 41.8311327, lng: 12.4544276, // per la mappa in Contatti
    linkMappa: "https://www.google.com/maps/search/?api=1&query=Dabliu%20Eur%20Sport%20Club%2C%20Viale%20Egeo%2098%2C%20Roma"
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
    titolo: "FC CDS – Real Roma Nord 2-2",
    youtubeId: "L2PwtsWMY5k",
    // true solo se su YouTube Studio il video ha "Consenti incorporamento" attivo; se false, il box apre YouTube
    incorporabile: false
  },

  // Canale YouTube: le dirette delle partite in casa passano da qui
  youtube: {
    canale: "https://www.youtube.com/@FootballClub-CDS",
    diretta: "https://www.youtube.com/@FootballClub-CDS/live"
  },

  riepilogo: { posizione: "2°", punti: 10, vittorie: "3/4", golFatti: 16, golSubiti: 9 },

  // Nomi corti usati solo nel calendario (in classifica resta il nome completo)
  nomiBrevi: {
    "Amatori Allumiere 1983": "Allumiere",
    "Pro Calcio Cerveteri": "Cerveteri",
    "Academy Monti della Tolfa": "Monti della Tolfa",
    "DLF Youth Academy": "DLF Youth",
    "Pol. Pian Due Torri": "Pian Due Torri",
    "Palmarola Club": "Palmarola"
  },

  // video: ID YouTube della diretta (solo partite in casa giocate): l'icona porta al video
  calendario: [
    { g: "G1", data: "Dom 18 ott", casa: "", trasferta: "", stato: "riposo" },
    { g: "G2", data: "Dom 25 ott · 15:00", casa: "Amatori Allumiere 1983", trasferta: "FC CDS", ris: "3-4", stato: "V" },
    { g: "G3", data: "Sab 31 ott · 18:00", casa: "FC CDS", trasferta: "Palmarola Club", ris: "7-3", stato: "V", video: "M16NWXeht60" },
    { g: "G4", data: "Dom 8 nov · 15:00", casa: "Atletico", trasferta: "FC CDS", ris: "1-3", stato: "V" },
    { g: "G5", data: "Sab 14 nov · 18:00", casa: "FC CDS", trasferta: "Real Roma Nord", ris: "2-2", stato: "N", video: "L2PwtsWMY5k" },
    { g: "G6", data: "Dom 22 nov · 11:00", casa: "Pol. Pian Due Torri", trasferta: "FC CDS", stato: "prossima" },
    { g: "G7", data: "Sab 28 nov · 18:00", casa: "FC CDS", trasferta: "Pro Calcio Cerveteri" },
    { g: "G8", data: "Dom 6 dic · 15:00", casa: "F.C. Palombara", trasferta: "FC CDS" },
    { g: "G9", data: "Dom 13 dic · 15:00", casa: "Black Lions", trasferta: "FC CDS" },
    { g: "G10", data: "Sab 19 dic · 18:00", casa: "FC CDS", trasferta: "Academy Monti della Tolfa" },
    { g: "G11", data: "Dom 10 gen · 15:00", casa: "Delta Calcio", trasferta: "FC CDS" },
    { g: "G12", data: "Sab 16 gen · 18:00", casa: "FC CDS", trasferta: "Vigor Mellis" },
    { g: "G13", data: "Dom 24 gen · 15:00", casa: "GDZ Campagnano", trasferta: "FC CDS" },
    { g: "G14", data: "Sab 30 gen · 18:00", casa: "FC CDS", trasferta: "DLF Youth Academy" },
    { g: "G15", data: "Dom 7 feb · 15:00", casa: "Tusker Roma", trasferta: "FC CDS" }
  ],

  // squadra, punti, giocate, vinte, pari, perse, gol fatti, gol subiti, differenza
  // ordine: punti, poi differenza reti, poi gol fatti
  classifica: [
    ["F.C. Palombara",  10,  4,  3,  1,  0,  10,  2,  8],
    ["FC CDS",  10,  4,  3,  1,  0,  16,  9,  7],
    ["Pro Calcio Cerveteri",  10,  4,  3,  1,  0,  13,  6,  7],
    ["Tusker Roma",  9,  5,  3,  0,  2,  12,  6,  6],
    ["Academy Monti della Tolfa",  9,  3,  3,  0,  0,  10,  4,  6],
    ["Real Roma Nord",  9,  5,  2,  3,  0,  11,  6,  5],
    ["DLF Youth Academy",  7,  4,  2,  1,  1,  18,  9,  9],
    ["GDZ Campagnano",  6,  5,  2,  0,  3,  12,  14,  -2],
    ["Vigor Mellis",  4,  4,  1,  1,  2,  7,  9,  -2],
    ["Pol. Pian Due Torri",  3,  4,  1,  0,  3,  6,  9,  -3],
    ["Palmarola Club",  3,  4,  1,  0,  3,  9,  13,  -4],
    ["Black Lions",  3,  3,  1,  0,  2,  3,  7,  -4],
    ["Atletico",  3,  4,  1,  0,  3,  5,  12,  -7],
    ["Amatori Allumiere 1983",  0,  4,  0,  0,  4,  9,  16,  -7],
    ["Delta Calcio",  0,  3,  0,  0,  3,  1,  20,  -19]
  ],

  marcatori: [
    { nome: "Picci", gol: 11, nota: "2 su rigore" },
    { nome: "Mercurio", gol: 2 },
    { nome: "Dileo", gol: 1 },
    { nome: "Mollo", gol: 1 },
    { nome: "Sanseverino", gol: 1 }
  ],
  assist: [
    { nome: "Sanseverino", n: 2 },
    { nome: "Mercurio", n: 1 },
    { nome: "Mollo", n: 1 },
    { nome: "Carice", n: 1 },
    { nome: "Ferro", n: 1 }
  ],

  // ruolo: POR, DIF, CEN, ATT, "?" = da confermare. foto: nome file in assets/img/giocatori (vuoto = foto in arrivo)
  // compleanno: "GG-MM" (senza anno). Il giorno del compleanno la figurina mostra "Auguri!"
  rosa: [
    { nome: "Elia", cognome: "Manuri", ruolo: "POR", foto: "manuri-elia.jpg", compleanno: "08-10" },
    { nome: "Pierangelo", cognome: "Paniccia", ruolo: "POR", foto: "paniccia-pierangelo.jpg", compleanno: "15-05" },

    { nome: "Alessio", cognome: "Biraschi", ruolo: "DIF", foto: "biraschi-alessio.jpg", compleanno: "27-01" },
    { nome: "Marco", cognome: "Capoccetti", ruolo: "DIF", foto: "capoccetti-marco.jpg", compleanno: "21-04" },
    { nome: "Andrea", cognome: "De Dominicis", ruolo: "DIF", foto: "dedominicis-andrea.jpg", compleanno: "17-03" },
    { nome: "Piergiorgio", cognome: "Ferri", ruolo: "DIF", foto: "ferri-piergiorgio.jpg", compleanno: "18-08" },
    { nome: "Joseph", cognome: "Meiyome", ruolo: "DIF", foto: "meyome-joseph.jpg", compleanno: "30-09" },
    { nome: "Simone", cognome: "Mollo", ruolo: "DIF", foto: "mollo-simone.jpg", gol: 1, assist: 1, compleanno: "04-10" },
    { nome: "Andrea", cognome: "Politi", ruolo: "DIF", foto: "politi-andrea.jpg", compleanno: "14-10" },
    { nome: "Damiano", cognome: "Saccares", ruolo: "DIF", foto: "", compleanno: "12-05" },
    { nome: "Alessio", cognome: "Sanfilippo", ruolo: "DIF", foto: "sanfilippo-alessio.jpg", compleanno: "31-10" },

    { nome: "Matteo", cognome: "Carice", ruolo: "CEN", foto: "carice-matteo.jpg", assist: 1, compleanno: "20-12" },
    { nome: "Daniele", cognome: "Cicivelli", ruolo: "CEN", foto: "cicivelli-daniele.jpg", compleanno: "28-10" },
    { nome: "Federico", cognome: "Mangione", ruolo: "CEN", foto: "", compleanno: "31-01" },
    { nome: "Damiano", cognome: "Perugini", ruolo: "CEN", foto: "perugini-damiano.jpg" },
    { nome: "Simone", cognome: "Sanseverino", ruolo: "CEN", foto: "sanseverino-simone.jpg", gol: 1, assist: 2, compleanno: "12-04" },
    { nome: "Salvatore", cognome: "Scopelliti", ruolo: "CEN", foto: "scopelliti-salvatore.jpg" },
    { nome: "Diego", cognome: "Testi", ruolo: "CEN", foto: "testi-diego.jpg", compleanno: "27-07" },
    { nome: "Francesco", cognome: "Torzulli", ruolo: "CEN", foto: "torzulli-francesco.jpg", compleanno: "19-03" },

    { nome: "Lorenzo", cognome: "Di Fabrizio", ruolo: "ATT", foto: "" },
    { nome: "Gianmarco", cognome: "Dileo", ruolo: "ATT", foto: "dileo-gianmarco.jpg", gol: 1 },
    { nome: "Francesco", cognome: "Mercurio", ruolo: "ATT", foto: "mercurio-francesco.jpg", gol: 2, assist: 1, compleanno: "21-01" },
    { nome: "Antonio Giulio", cognome: "Picci", ruolo: "ATT", foto: "", gol: 11, compleanno: "19-08" },
    { nome: "Gianluca", cognome: "Raho", ruolo: "ATT", foto: "raho-gianluca.jpg", compleanno: "07-04" },
    { nome: "Dario", cognome: "Stragapede", ruolo: "ATT", foto: "stragapede-dario.jpg" },
    { nome: "Andrea", cognome: "Ferro", ruolo: "ATT", foto: "ferro-andrea.jpg", assist: 1 }
  ],

  staff: [
    { nome: "Daniele", cognome: "Giuliani", ruolo: "Staff", foto: "giuliani-daniele.jpg" },
    { nome: "Emanuele", cognome: "Costanzi", ruolo: "Staff", foto: "costanzi-emanuele.jpg" },
    { nome: "Davide", cognome: "Fazio", ruolo: "Staff", foto: "fazio-davide.jpg" },
    { nome: "", cognome: "Simone", ruolo: "Staff", foto: "simone.jpg" }, // cognome da aggiungere
    { nome: "Gaetano", cognome: "Carnevale", ruolo: "Creator", foto: "carnevale-gaetano.jpg" }
  ],

  // Dati societari (obbligatori nel footer)
  societa: {
    ragioneSociale: "ASD Football Club Corriere dello Sport",
    sede: "Via Tuscolana 979, 00174 Roma (RM)",
    codiceFiscale: "96663240586",
    partitaIva: "18624201002",
    pec: "asd.footballclub_cds@pec.it"
  },

  contatti: {
    email: "", // vuota = non mostrata nei Contatti
    instagram: "https://www.instagram.com/footballclubcds/",
    tiktok: "https://www.tiktok.com/@footballclubcds",
    youtube: "https://www.youtube.com/@FootballClub-CDS"
  },

  partner: [
    { nome: "Eplay24.sport", ruolo: "Main sponsor", logo: "eplay24.png" },
    { nome: "Corriere dello Sport", ruolo: "Partner", logo: "cds.png" }
  ]
};
