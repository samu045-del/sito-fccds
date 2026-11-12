/* FC CDS — script del sito. I dati stanno in data/dati.js */
(function () {
  var D = window.CDS || {};
  var page = document.body.getAttribute('data-page');
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var isCDS = function (t) { return /CDS/i.test(t || ''); };
  var initials = function (t) { return (t || '').split(/\s+/).filter(function (w) { return /^[A-Za-zÀ-ú]/.test(w) && w.length > 2; }).slice(0, 3).map(function (w) { return w[0].toUpperCase(); }).join(''); };

  var logo = function (t, cls) {
    if (isCDS(t)) return '<img class="' + (cls || '') + '" src="assets/img/logo-160.png" alt="" width="160" height="169">';
    var f = (D.loghi || {})[t];
    return f ? '<img class="' + (cls || '') + '" src="assets/img/squadre/' + esc(f) + '" alt="" width="160" height="160" loading="lazy">' : '<span class="badge-d ' + (cls || '') + '" aria-hidden="true">' + esc(initials(t)) + '</span>';
  };

  /* ---------- Header e footer ---------- */
  var links = [
    ['index.html', 'Home', 'home'], ['squadra.html', 'Squadra', 'squadra'],
    ['calendario.html', 'Calendario & Classifica', 'calendario'], ['club.html', 'Il Club', 'club'],
    ['partner.html', 'Partner', 'partner'], ['contatti.html', 'Contatti', 'contatti'], ['gioca.html', 'Gioca', 'gioca']
  ];
  var h = $('#site-header');
  if (h) {
    h.className = 'site-header';
    h.innerHTML = '<div class="wrap"><a class="brand" href="index.html"><img src="assets/img/logo-160.png" alt="Stemma FC CDS" width="160" height="169"><span>FC CDS</span></a>' +
      '<button class="menu-btn" type="button" aria-label="Apri il menu" aria-expanded="false" aria-controls="nav"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '<nav class="nav" id="nav" aria-label="Menu principale">' + links.map(function (l) { return '<a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>'; }).join('') + '</nav></div>';
    var btn = $('.menu-btn', h), nav = $('#nav', h);
    btn.addEventListener('click', function () { var o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
  }
  var f = $('#site-footer');
  if (f) {
    f.className = 'site-footer';
    var ig = '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>';
    var tk = '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.2v12.6a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.8a5.9 5.9 0 0 0-.8-.1 5.8 5.8 0 1 0 5.8 5.8V9.2a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z"/></svg>';
    var C2 = D.contatti || {};
    var social = (C2.instagram ? '<a class="soc" href="' + esc(C2.instagram) + '" target="_blank" rel="noopener" aria-label="FC CDS su Instagram">' + ig + '</a>' : '') +
      (C2.tiktok ? '<a class="soc" href="' + esc(C2.tiktok) + '" target="_blank" rel="noopener" aria-label="FC CDS su TikTok">' + tk + '</a>' : '');
    var L = D.societa || {};
    var legal = L.ragioneSociale ? '<p class="legal">' + esc(L.ragioneSociale) + ' · Sede legale: ' + esc(L.sede) + ' · C.F. ' + esc(L.codiceFiscale) + ' · P.IVA ' + esc(L.partitaIva) + ' · PEC: <a href="mailto:' + esc(L.pec) + '">' + esc(L.pec) + '</a></p>' : '';
    f.innerHTML = '<div class="wrap"><img src="assets/img/monogramma.png" alt="Monogramma CDS"><div class="social">' + social + '</div><nav aria-label="Link legali"><a href="#">Privacy policy</a><a href="#">Cookie policy</a></nav><span>© ' + new Date().getFullYear() + ' FC CDS</span></div>' +
      (legal ? '<div class="wrap legal-wrap">' + legal + '</div>' : '');
  }

  /* ---------- Countdown ---------- */
  function countdown(el, iso) {
    var t = new Date(iso).getTime();
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    function tick() {
      var s = Math.max(0, Math.floor((t - Date.now()) / 1000));
      el.innerHTML = ['GIORNI', 'ORE', 'MIN', 'SEC'].map(function (lab, i) {
        var v = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60][i];
        return '<div><b>' + p(v) + '</b><span>' + lab + '</span></div>';
      }).join('');
    }
    tick(); setInterval(tick, 1000);
  }

  /* ---------- Video YouTube: si carica solo al clic (niente cookie prima) ---------- */
  function ytFacade(el, id) {
    el.addEventListener('click', function () {
      var fr = document.createElement('iframe');
      fr.className = 'yt-frame';
      fr.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1';
      fr.title = 'Diretta YouTube';
      fr.allow = 'autoplay; encrypted-media; picture-in-picture';
      fr.allowFullscreen = true;
      el.replaceWith(fr);
    });
  }

  /* ---------- HOME ---------- */
  if (page === 'home' && D.prossimaPartita) {
    var n = D.prossimaPartita, u = D.ultimaPartita, v = D.ultimaDiretta;
    var teamRow = function (t) { return '<div class="team">' + logo(t) + '<span>' + esc(t) + '</span></div>'; };
    $('#next').innerHTML =
      '<div class="head"><span class="pill">NEXT MATCH</span><span class="date">' + esc(n.etichettaData) + '</span></div>' +
      '<div class="match" aria-label="' + esc(n.casa + ' contro ' + n.trasferta) + '">' + teamRow(n.casa) + '<span class="vs">vs</span>' + teamRow(n.trasferta) + '</div>' +
      '<div class="venue"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>' + esc(n.campo) + '</div>' +
      '<div class="countdown" id="cd" aria-label="Conto alla rovescia al calcio d\'inizio"></div>' +
      (n.inCasa && D.youtube ? '<a class="live" href="' + esc(D.youtube.diretta) + '" target="_blank" rel="noopener"><span class="dot" aria-hidden="true"></span>' + '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1-5.7 3.1z"/></svg>' + '<span>Guardala in diretta su YouTube</span></a>' : '') +
      '<div class="btns"><button class="btn btn-w" type="button" id="ics">Aggiungi al calendario</button>' + (n.linkMappa ? '<a class="btn btn-o" href="' + esc(n.linkMappa) + '" target="_blank" rel="noopener">Come arrivare</a>' : '<a class="btn btn-o" href="calendario.html">Calendario</a>') + '</div>';
    $('#ics').addEventListener('click', function () {
      var st = new Date(n.data), en = new Date(st.getTime() + 2 * 3600 * 1000);
      var z = function (d) { return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); };
      var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//FC CDS//IT', 'BEGIN:VEVENT', 'UID:' + z(st) + '@fccds', 'DTSTAMP:' + z(new Date()), 'DTSTART:' + z(st), 'DTEND:' + z(en),
        'SUMMARY:' + n.casa + ' - ' + n.trasferta, 'LOCATION:' + n.campo, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
      a.download = 'cds-' + n.giornata.toLowerCase() + '.ics';
      document.body.appendChild(a); a.click(); a.remove();
    });
    countdown($('#cd'), n.data);

    var cdsHome = isCDS(u.casa);
    var esito = { V: ['VITTORIA', 'tag-win'], N: ['PAREGGIO', 'tag-n'], P: ['SCONFITTA', 'tag-p'] }[u.esito] || ['', ''];
    var line = function (t, g) {
      var me = isCDS(t);
      return '<div class="score-row' + (me ? '' : ' them') + '">' + logo(t) + '<span class="n">' + esc(me ? 'FC CDS' : t) + '</span><span class="s">' + g + '</span></div>';
    };
    $('#last').innerHTML =
      '<div class="row-h"><h2 class="kicker">Last match</h2><span style="display:flex;gap:6px"><span class="tag tag-h">' + (cdsHome ? 'IN CASA' : 'IN TRASFERTA') + '</span><span class="tag ' + esito[1] + '">' + esito[0] + '</span></span></div>' +
      '<p style="margin:-10px 0 0;color:var(--muted);font-size:14px">' + esc(u.giornata + ' · ' + u.etichettaData) + '</p>' +
      '<div>' + line(u.casa, u.golCasa) + '<div class="hr" style="margin:12px 0"></div>' + line(u.trasferta, u.golTrasferta) + '</div>' +
      '<div class="scorers" style="border-top:1px solid var(--line);padding-top:18px"><h3>MARCATORI CDS</h3><ul class="dots">' + u.marcatoriCDS.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div>';

    $('#video').innerHTML =
      '<div class="head"><h2 class="kicker">Ultima diretta</h2><span>' + esc(v.titolo) + '</span></div>' +
      '<button class="yt" type="button" aria-label="Guarda la diretta: ' + esc(v.titolo) + '"><span class="play"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></span><span class="note">' + (v.incorporabile ? 'Il video si carica da YouTube solo quando premi play.' : 'Si apre su YouTube.') + '</span></button>' +
      (D.youtube ? '<a class="yt-channel" href="' + esc(D.youtube.canale) + '" target="_blank" rel="noopener">' + '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1-5.7 3.1z"/></svg>' + '<span>Tutte le dirette delle partite in casa sul nostro canale YouTube</span><span aria-hidden="true">→</span></a>' : '');
    if (v.incorporabile) ytFacade($('#video .yt'), v.youtubeId);
    else $('#video .yt').addEventListener('click', function () { window.open('https://www.youtube.com/watch?v=' + encodeURIComponent(v.youtubeId), '_blank', 'noopener'); });
  }

  /* ---------- SQUADRA ---------- */
  if (page === 'squadra' && D.rosa) {
    var groups = [
      ['POR', 'Portieri', 'Quelli con i guanti. E i nervi saldi.'],
      ['DIF', 'Difensori', 'Qui non si passa. Quasi mai.'],
      ['CEN', 'Centrocampisti', 'Corrono per tutti. Si lamentano per tutti.'],
      ['ATT', 'Attaccanti', 'Quelli che finiscono nei titoli.'],
      ['?', 'Ruolo da confermare', 'In foto con noi, presto in rosa.']
    ];
    var turnIcon = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E41B1D" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>';
    var MESI = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
    var cake = '<svg class="cake" aria-hidden="true" width="22" height="22" viewBox="0 0 32 32"><path d="M10 9.5c-.9-1-.9-2 0-3.2.9 1.2.9 2.2 0 3.2z" fill="#FFC531"/><path d="M16 8c-.9-1-.9-2 0-3.2.9 1.2.9 2.2 0 3.2z" fill="#FFC531"/><path d="M22 9.5c-.9-1-.9-2 0-3.2.9 1.2.9 2.2 0 3.2z" fill="#FFC531"/><rect x="9.2" y="10" width="1.6" height="5" rx=".8" fill="#fff"/><rect x="15.2" y="8.5" width="1.6" height="6.5" rx=".8" fill="#fff"/><rect x="21.2" y="10" width="1.6" height="5" rx=".8" fill="#fff"/><rect x="5" y="15" width="22" height="13" rx="3" fill="#fff"/><path d="M5 18.5c0-2 1.3-3.5 3-3.5h16c1.7 0 3 1.5 3 3.5v.8c-1.2 1.4-2.6 1.4-3.7 0-1.1 1.4-2.5 1.4-3.7 0-1.1 1.4-2.5 1.4-3.6 0-1.1 1.4-2.5 1.4-3.7 0-1.1 1.4-2.5 1.4-3.6 0-1.1 1.4-2.5 1.4-3.7 0z" fill="#E41B1D"/><rect x="5" y="23" width="22" height="1.6" fill="#E41B1D" opacity=".25"/><circle cx="10" cy="26" r=".9" fill="#0B2357"/><circle cx="16" cy="25.6" r=".9" fill="#FFC531"/><circle cx="22" cy="26" r=".9" fill="#0B2357"/><rect x="3" y="27.6" width="26" height="1.8" rx=".9" fill="#fff" opacity=".5"/></svg>';
    var oggi = new Date();
    var bday = function (p) {
      var m = /^(\d{1,2})[-\/](\d{1,2})/.exec(p.compleanno || '');
      if (!m) return null;
      var g = +m[1], mm = +m[2];
      return { testo: g + ' ' + MESI[mm - 1], oggi: oggi.getDate() === g && oggi.getMonth() + 1 === mm };
    };
    var card = function (p, dir, isStaff) {
      var B = bday(p);
      var bLine = B ? '<span class="bday">' + cake + '<span><small>Compleanno</small>' + esc(B.testo) + '</span></span>' : '';
      var auguri = B && B.oggi ? '<span class="auguri">' + cake + 'Tanti auguri!</span>' : '';
      var front = p.foto ? '<img class="ph" src="assets/img/' + dir + '/' + esc(p.foto) + '" alt="' + esc(p.nome + ' ' + p.cognome) + '" loading="lazy" width="640" height="800">'
        : '<div class="nophoto"><img src="assets/img/monogramma.png" alt="">FOTO IN ARRIVO</div>';
      var badge = isStaff ? '' : (p.ruolo && p.ruolo !== '?' ? '<span class="role">' + esc(p.ruolo) + '</span>' : '');
      var sub = isStaff ? esc(p.ruolo) : esc(p.nome);
      var back = isStaff ? '<img src="assets/img/monogramma.png" alt=""><span class="nm">' + esc(p.nome + ' ' + p.cognome) + '</span><span style="font-size:13px;color:var(--soft2)">' + esc(p.ruolo) + '</span>' + bLine
        : '<img src="assets/img/monogramma.png" alt=""><span class="nm">' + esc(p.cognome) + '</span><div class="st"><div><b>' + (p.gol || 0) + '</b><span>GOL</span></div><div><b>' + (p.assist || 0) + '</b><span>ASSIST</span></div></div>' + bLine;
      return '<button type="button" class="fig' + (B && B.oggi ? ' is-bday' : '') + '" aria-label="Gira la figurina di ' + esc(p.nome + ' ' + p.cognome) + '">' +
        '<div class="face front">' + front + badge + auguri + '<div class="band"><div style="min-width:0"><small>' + sub + '</small><strong>' + esc(p.cognome) + '</strong></div>' + turnIcon + '</div></div>' +
        '<div class="face back">' + back + '</div></button>';
    };
    var html = '';
    groups.forEach(function (g) {
      var list = D.rosa.filter(function (p) { return p.ruolo === g[0]; });
      if (!list.length) return;
      html += '<section class="role-sec" data-role="' + g[0] + '" aria-label="' + g[1] + '"><div class="role-h"><div><h2>' + g[1] + '</h2><p>' + g[2] + '</p></div><span class="count">' + list.length + '</span></div><div class="grid">' + list.map(function (p) { return card(p, 'giocatori'); }).join('') + '</div></section>';
    });
    if (D.staff && D.staff.length) {
      html += '<section class="role-sec" data-role="STAFF" aria-label="Staff"><div class="role-h"><div><h2>Staff</h2><p>Quelli che si arrabbiano dalla panchina.</p></div><span class="count">' + D.staff.length + '</span></div><div class="grid">' + D.staff.map(function (p) { return card(p, 'staff', true); }).join('') + '</div></section>';
    }
    $('#roles').innerHTML = html;
    document.querySelectorAll('.fig').forEach(function (b) {
      b.addEventListener('click', function () { b.classList.add('turn'); b.classList.toggle('flipped'); setTimeout(function () { b.classList.remove('turn'); }, 340); });
    });
    var chips = document.querySelectorAll('.chip');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        var r = c.getAttribute('data-f');
        chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c); });
        document.querySelectorAll('.role-sec').forEach(function (s) { s.hidden = !(r === 'ALL' || s.getAttribute('data-role') === r); });
      });
    });
  }

  /* ---------- CALENDARIO & CLASSIFICA ---------- */
  if (page === 'calendario') {
    var R = D.riepilogo || {};
    $('#stats').innerHTML = '<div><b>' + esc(R.posizione) + '</b><span>POSIZIONE</span></div><div><b>' + esc(R.punti) + '</b><span>PUNTI</span></div><div><b>' + esc(R.vittorie) + '</b><span>VITTORIE</span></div><div><b>' + esc(R.golFatti) + '</b><span>GOL FATTI</span></div>' + (R.golSubiti != null ? '<div><b>' + esc(R.golSubiti) + '</b><span>GOL SUBITI</span></div>' : '');
    $('#fixtures').innerHTML = D.calendario.map(function (m) {
      if (m.stato === 'riposo') return '<li class="rest"><span class="g">' + m.g + '</span><span class="d">' + esc(m.data) + '</span><span class="m">Turno di riposo</span><span class="r"><span class="tag tag-n">RIPOSO</span></span></li>';
      var cls = m.stato === 'prossima' ? 'next' : (m.ris ? 'win' : '');
      var tag = m.stato === 'prossima' ? '<span class="tag tag-v">PROSSIMA</span>' : (m.ris ? '<span class="sc">' + esc(m.ris) + '</span><span class="tag ' + ({ V: 'tag-win', N: 'tag-n', P: 'tag-p' }[m.stato] || 'tag-n') + '">' + esc(m.stato) + '</span>' : '<span class="tag tag-h">' + (isCDS(m.casa) ? 'CASA' : 'FUORI') + '</span>');
      if (m.ris && m.stato !== 'V') cls = '';
      if (isCDS(m.casa) && D.youtube) tag = '<a class="yt-mini" href="' + esc(m.video ? 'https://www.youtube.com/watch?v=' + m.video : (m.ris ? D.youtube.canale : D.youtube.diretta)) + '" target="_blank" rel="noopener" aria-label="' + (m.ris ? 'Rivedi su YouTube' : 'Diretta su YouTube') + '" title="' + (m.ris ? 'Rivedi su YouTube' : 'Diretta su YouTube') + '"><svg viewBox="0 0 28 20" width="24" height="17" aria-hidden="true"><rect width="28" height="20" rx="5" fill="#FF0000"/><path d="M11 5.5v9l8-4.5z" fill="#fff"/></svg></a>' + tag;
      var t = function (x) { return '<span class="tm">' + logo(x, 'mini') + (isCDS(x) ? '<b>' + esc(x) + '</b>' : '<span title="' + esc(x) + '">' + esc((D.nomiBrevi || {})[x] || x) + '</span>') + '</span>'; };
      return '<li class="' + cls + '"><span class="g">' + m.g + '</span><span class="d">' + esc(m.data) + '</span><span class="m">' + t(m.casa) + ' <span style="opacity:.55">–</span> ' + t(m.trasferta) + '</span><span class="r">' + tag + '</span></li>';
    }).join('');
    $('#cla-h').textContent = 'DOPO LA ' + D.giornataClassifica + 'ª GIORNATA';
    $('#table tbody').innerHTML = D.classifica.map(function (r, i) {
      var me = isCDS(r[0]);
      return '<tr' + (me ? ' class="us"' : '') + '><td class="pos t-l">' + (i + 1) + '</td><th scope="row" class="t-l"><span class="tm">' + logo(r[0], 'mini') + esc(r[0]) + '</span></th><td class="pt">' + r[1] + '</td><td>' + r[2] + '</td><td class="hide-s">' + r[3] + '</td><td class="hide-s">' + r[4] + '</td><td class="hide-s">' + r[5] + '</td><td>' + r[6] + '</td><td>' + r[7] + '</td><td>' + (r[8] > 0 ? '+' : '') + r[8] + '</td></tr>';
    }).join('');
    $('#src').textContent = 'Fonte: Tuttocampo, aggiornata al ' + D.aggiornato + '.';
    var top = D.marcatori[0], tot = R.golFatti || 1;
    $('#top').innerHTML = '<b>' + top.gol + '</b><div><small>CAPOCANNONIERE</small><strong>' + esc(top.nome) + '</strong><em>' + top.gol + ' gol su ' + tot + ' della squadra' + (top.nota ? ' · ' + esc(top.nota) : '') + '</em></div>';
    var bars = function (list, key) { var mx = Math.max.apply(null, list.map(function (x) { return x[key]; })); return list.map(function (x) { return '<li><span class="n">' + esc(x.nome) + '</span><span class="b"><i style="width:' + Math.round(x[key] / mx * 100) + '%"></i></span><span class="v">' + x[key] + '</span></li>'; }).join(''); };
    $('#scorers').innerHTML = bars(D.marcatori.slice(1), 'gol');
    $('#assists').innerHTML = bars(D.assist, 'n');
  }

  /* ---------- CAMPO DI CASA (Club e Contatti) ---------- */
  var cc = D.campoCasa, campoEl = $('#campo');
  if (cc && campoEl) {
    campoEl.innerHTML = '<p><strong>' + esc(cc.nome) + '</strong><br>' + esc(cc.indirizzo) + '</p><p style="margin:0"><a class="btn btn-w" style="border-color:var(--navy)" href="' + esc(cc.linkMappa) + '" target="_blank" rel="noopener">Come arrivare</a></p>';
  }

  /* ---------- PARTNER ---------- */
  if (page === 'partner' && D.partner) {
    $('#partners').innerHTML = D.partner.map(function (p) {
      var lg = p.logo ? '<div class="logo has-img"><img src="assets/img/partner/' + esc(p.logo) + '" alt="Logo ' + esc(p.nome) + '" width="400" height="400" loading="lazy"></div>' : '<div class="logo">[LOGO ' + esc(p.nome.toUpperCase()) + ']</div>';
      return '<article class="partner">' + lg + '<span>' + esc(p.ruolo.toUpperCase()) + '</span><h2>' + esc(p.nome) + '</h2></article>';
    }).join('') + '<article class="partner" style="background:var(--navy);color:#fff"><div class="logo" style="border-color:rgba(255,255,255,.4);color:var(--soft)">IL TUO LOGO QUI</div><span style="color:var(--red-ll)">DIVENTA PARTNER</span><h2>Mettici la faccia (e il logo)</h2><a class="btn btn-w" href="contatti.html" style="align-self:flex-start">Scrivici</a></article>';
  }

  /* ---------- CONTATTI ---------- */
  if (page === 'contatti' && D.contatti) {
    var c = D.contatti, items = [];
    items.push('<li><strong>Email:</strong> ' + (/@/.test(c.email) ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>' : '<span class="ph-text">' + esc(c.email) + '</span>') + '</li>');
    [['Instagram', c.instagram], ['TikTok', c.tiktok], ['YouTube', c.youtube]].forEach(function (s) {
      items.push('<li><strong>' + s[0] + ':</strong> ' + (s[1] ? '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + esc(s[1].replace(/^https?:\/\/(www\.)?/, '')) + '</a>' : '<span class="ph-text">[link ' + s[0] + ']</span>') + '</li>');
    });
    $('#contacts').innerHTML = items.join('');
  }
})();
