'use strict';
/* app.js — interaksi halaman utama: theme, search, filter, bookmark, toast, dll. */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Safe storage (localStorage bisa diblokir) ---------- */
  const store = {
    get(k, fb) { try { const v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); } catch { return fb; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } }
  };

  /* ---------- Toast (Bootstrap) ---------- */
  let toastInst = null;
  function toast(msg, title = 'Info') {
    $('#toastTitle').textContent = title;
    $('#toastMsg').textContent = msg;
    const el = $('#appToast');
    try {
      toastInst = toastInst || new bootstrap.Toast(el, { delay: 2600 });
      toastInst.show();
    } catch { /* bootstrap belum load — fallback diam */ }
  }

  /* ---------- Theme / dark mode ---------- */
  const root = document.documentElement;
  function applyTheme(t) {
    root.setAttribute('data-bs-theme', t);
    const btn = $('#themeToggle');
    if (btn) {
      btn.setAttribute('aria-label', t === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
      btn.innerHTML = '';
      const i = document.createElement('i');
      i.className = t === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
      i.setAttribute('aria-hidden', 'true');
      btn.appendChild(i);
    }
  }
  function initTheme() {
    const saved = store.get('nn-theme', null);
    if (saved === 'light' || saved === 'dark') applyTheme(saved);
    else applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    $('#themeToggle')?.addEventListener('click', () => {
      const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      if (!store.set('nn-theme', next)) toast('Preferensi tema tidak dapat disimpan di perangkat ini.', 'Tema');
      else toast(next === 'dark' ? 'Mode gelap aktif.' : 'Mode terang aktif.', 'Tema');
    });
  }

  /* ---------- Helpers ---------- */
  const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' fill='%2364748b'%3EGambar tidak tersedia%3C/text%3E%3C/svg%3E";
  function fmtDate(iso) {
    try { return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso)); }
    catch { return ''; }
  }
  function imgEl(src, alt, lazy = true) {
    const img = document.createElement('img');
    img.src = src; img.alt = alt;
    img.width = 800; img.height = 450;
    img.loading = lazy ? 'lazy' : 'eager';
    img.decoding = 'async';
    img.addEventListener('error', () => { img.src = PLACEHOLDER; }, { once: true });
    return img;
  }
  function metaLine(a) {
    const d = document.createElement('div');
    d.className = 'meta';
    const parts = [
      ['bi-person-circle', a.author],
      ['bi-calendar3', fmtDate(a.date)],
      ['bi-clock', a.readTime + ' mnt baca']
    ];
    for (const [ic, tx] of parts) {
      const s = document.createElement('span');
      const i = document.createElement('i'); i.className = 'bi ' + ic + ' me-1'; i.setAttribute('aria-hidden', 'true');
      s.appendChild(i); s.appendChild(document.createTextNode(tx));
      d.appendChild(s);
    }
    return d;
  }
  function catBadge(cat) {
    const s = document.createElement('span');
    s.className = 'badge text-bg-primary badge-cat';
    s.textContent = cat;
    return s;
  }
  function isBookmarked(id) { return store.get('nn-bookmarks', []).includes(id); }
  function toggleBookmark(id) {
    let list = store.get('nn-bookmarks', []);
    const has = list.includes(id);
    list = has ? list.filter(x => x !== id) : [...list, id];
    if (!store.set('nn-bookmarks', list)) { toast('Bookmark tidak dapat disimpan (penyimpanan diblokir).', 'Bookmark'); return; }
    toast(has ? 'Bookmark dihapus.' : 'Berita disimpan ke bookmark.', 'Bookmark');
    syncBookmarkUI();
  }

  /* ---------- State ---------- */
  let state = { cat: 'Semua', q: '', shown: 6, perPage: 6 };
  const data = () => (Array.isArray(window.NEWS_DATA) ? window.NEWS_DATA : (typeof NEWS_DATA !== 'undefined' ? NEWS_DATA : []));

  function filtered() {
    const q = state.q.trim().toLowerCase();
    return data().filter(a => {
      const okCat = state.cat === 'Semua' || a.category === state.cat;
      const okQ = !q || (a.title + ' ' + a.excerpt + ' ' + a.category + ' ' + a.author).toLowerCase().includes(q);
      return okCat && okQ;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  /* ---------- Render: ticker ---------- */
  function renderTicker() {
    const track = $('#tickerTrack');
    if (!track) return;
    const items = (typeof BREAKING_NEWS !== 'undefined' ? BREAKING_NEWS : []).slice(0, 8);
    track.innerHTML = '';
    const build = () => {
      const frag = document.createDocumentFragment();
      items.forEach(t => {
        const a = document.createElement('a');
        a.href = '#terbaru'; a.textContent = '● ' + t;
        frag.appendChild(a);
      });
      return frag;
    };
    track.appendChild(build());
    track.appendChild(build()); // ganda untuk loop -50% yang mulus
  }

  /* ---------- Render: hero + populer ---------- */
  function renderHero() {
    const hero = $('#heroMain');
    const list = data();
    if (!hero) return;
    if (!list.length) { hero.innerHTML = '<div class="hero-content"><p>Belum ada berita.</p></div>'; return; }
    const main = list.find(a => a.featured) || list[0];
    hero.innerHTML = '';
    hero.appendChild(imgEl(main.image, main.title, false));
    const ov = document.createElement('div'); ov.className = 'hero-overlay'; hero.appendChild(ov);
    const c = document.createElement('div'); c.className = 'hero-content';
    c.appendChild(catBadge(main.category));
    const h = document.createElement('h2'); h.className = 'mt-2';
    const link = document.createElement('a');
    link.href = 'article.html?id=' + main.id; link.textContent = main.title;
    link.className = 'text-white text-decoration-none stretched-link';
    h.appendChild(link); c.appendChild(h);
    const p = document.createElement('p'); p.className = 'mb-2 clamp-2 opacity-75'; p.textContent = main.excerpt; c.appendChild(p);
    const m = metaLine(main); c.appendChild(m);
    const btn = document.createElement('span'); btn.className = 'btn btn-brand mt-3'; btn.textContent = 'Baca Selengkapnya →'; c.appendChild(btn);
    hero.appendChild(c);

    // Populer: 4 selain hero
    const pop = $('#popularList');
    if (pop) {
      pop.innerHTML = '';
      list.filter(a => a.id !== main.id).slice(0, 4).forEach(a => {
        const art = document.createElement('article'); art.className = 'side-item reveal in';
        art.appendChild(imgEl(a.image, a.title));
        const div = document.createElement('div'); div.className = 'min-w-0';
        const b = catBadge(a.category); b.classList.add('mb-1'); div.appendChild(b);
        const t = document.createElement('h3'); t.className = 'h6 mb-1 clamp-2';
        const al = document.createElement('a'); al.href = 'article.html?id=' + a.id; al.textContent = a.title;
        al.className = 'text-decoration-none text-reset stretched-link'; t.appendChild(al); div.appendChild(t);
        const sm = document.createElement('small'); sm.className = 'text-muted'; sm.textContent = fmtDate(a.date) + ' • ' + a.readTime + ' mnt';
        div.appendChild(sm); art.appendChild(div); pop.appendChild(art);
      });
    }
  }

  /* ---------- Render: grid berita ---------- */
  function cardEl(a) {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-4';
    const card = document.createElement('article'); card.className = 'news-card reveal in';
    const th = document.createElement('div'); th.className = 'thumb';
    th.appendChild(imgEl(a.image, a.title));
    card.appendChild(th);
    const body = document.createElement('div'); body.className = 'body';
    const row = document.createElement('div'); row.className = 'd-flex align-items-center justify-content-between';
    row.appendChild(catBadge(a.category));
    const bm = document.createElement('button');
    bm.className = 'btn btn-sm ' + (isBookmarked(a.id) ? 'btn-primary' : 'btn-outline-secondary');
    bm.setAttribute('aria-label', (isBookmarked(a.id) ? 'Hapus bookmark: ' : 'Simpan bookmark: ') + a.title);
    bm.setAttribute('aria-pressed', String(isBookmarked(a.id)));
    bm.dataset.bookmark = a.id;
    const bi = document.createElement('i'); bi.className = 'bi ' + (isBookmarked(a.id) ? 'bi-bookmark-fill' : 'bi-bookmark'); bi.setAttribute('aria-hidden', 'true');
    bm.appendChild(bi); row.appendChild(bm); body.appendChild(row);
    const h = document.createElement('h3'); h.className = 'card-title clamp-2';
    const al = document.createElement('a'); al.href = 'article.html?id=' + a.id; al.textContent = a.title;
    h.appendChild(al); body.appendChild(h);
    const ex = document.createElement('p'); ex.className = 'card-excerpt clamp-3 mb-1'; ex.textContent = a.excerpt; body.appendChild(ex);
    body.appendChild(metaLine(a));
    card.appendChild(body); col.appendChild(card);
    return col;
  }

  function renderGrid() {
    const grid = $('#newsGrid');
    if (!grid) return;
    const all = filtered();
    const slice = all.slice(0, state.shown);
    grid.innerHTML = '';
    if (!all.length) {
      $('#emptyState')?.classList.remove('d-none');
      $('#loadMoreBtn')?.classList.add('d-none');
    } else {
      $('#emptyState')?.classList.add('d-none');
      const frag = document.createDocumentFragment();
      slice.forEach(a => frag.appendChild(cardEl(a)));
      grid.appendChild(frag);
      $('#loadMoreBtn')?.classList.toggle('d-none', state.shown >= all.length);
    }
    const info = $('#resultInfo');
    if (info) {
      info.textContent = state.q
        ? `Menampilkan ${slice.length} dari ${all.length} hasil untuk: “${state.q}”`
        : `Menampilkan ${slice.length} dari ${all.length} berita${state.cat !== 'Semua' ? ' • ' + state.cat : ''}`;
    }
    observeReveals();
  }

  /* ---------- Render: trending ---------- */
  function renderTrending() {
    const ol = $('#trendingList');
    if (!ol) return;
    ol.innerHTML = '';
    data().filter(a => a.trending).slice(0, 5).forEach((a, i) => {
      const li = document.createElement('li'); li.className = 'trend-item reveal in';
      const n = document.createElement('span'); n.className = 'trend-num'; n.textContent = String(i + 1).padStart(2, '0'); n.setAttribute('aria-hidden', 'true');
      li.appendChild(n);
      const div = document.createElement('div');
      const b = catBadge(a.category); div.appendChild(b);
      const t = document.createElement('div');
      const al = document.createElement('a'); al.href = 'article.html?id=' + a.id; al.textContent = a.title;
      t.appendChild(al); div.appendChild(t);
      const sm = document.createElement('small'); sm.className = 'text-muted'; sm.textContent = a.author + ' • ' + fmtDate(a.date);
      div.appendChild(sm); li.appendChild(div); ol.appendChild(li);
    });
  }

  /* ---------- Render: kategori ---------- */
  function renderCategories() {
    const wrap = $('#categorySections');
    if (!wrap) return;
    wrap.innerHTML = '';
    const cats = (typeof CATEGORIES !== 'undefined' ? CATEGORIES : [...new Set(data().map(a => a.category))]).slice(0, 5);
    cats.forEach(cat => {
      const sec = document.createElement('section'); sec.setAttribute('aria-label', 'Kategori ' + cat);
      const head = document.createElement('div'); head.className = 'sec-head reveal';
      const bar = document.createElement('span'); bar.className = 'bar'; bar.setAttribute('aria-hidden', 'true');
      head.appendChild(bar);
      const h = document.createElement('h2'); h.textContent = cat; head.appendChild(h);
      sec.appendChild(head);
      const row = document.createElement('div'); row.className = 'row g-3';
      data().filter(a => a.category === cat).slice(0, 3).forEach(a => row.appendChild(cardEl(a)));
      if (!row.children.length) {
        const p = document.createElement('p'); p.className = 'text-muted'; p.textContent = 'Belum ada berita pada kategori ini.';
        sec.appendChild(p);
      } else sec.appendChild(row);
      wrap.appendChild(sec);
    });
    // Footer cats
    const fc = $('#footerCats');
    if (fc) { fc.innerHTML = ''; cats.forEach(c => { const li = document.createElement('li'); const a = document.createElement('a'); a.href = '#kategori'; a.textContent = c; a.dataset.navcat = c; li.appendChild(a); fc.appendChild(li); }); }
  }

  /* ---------- Bookmarks sidebar ---------- */
  function syncBookmarkUI() {
    const list = store.get('nn-bookmarks', []);
    $('#bookmarkCountNav') && ($('#bookmarkCountNav').textContent = list.length);
    const box = $('#bookmarkList');
    if (!box) return;
    box.innerHTML = '';
    if (!list.length) {
      const p = document.createElement('p'); p.className = 'text-muted small mb-0'; p.textContent = 'Belum ada bookmark. Klik ikon bookmark pada kartu berita untuk menyimpan.';
      box.appendChild(p); return;
    }
    list.forEach(id => {
      const a = data().find(x => x.id === id);
      if (!a) return;
      const row = document.createElement('div'); row.className = 'd-flex gap-2 align-items-center border rounded p-2';
      row.appendChild(imgEl(a.image, a.title));
      row.lastChild.style.cssText = 'width:72px;height:54px;object-fit:cover;border-radius:6px;flex-shrink:0';
      const t = document.createElement('a'); t.href = 'article.html?id=' + a.id; t.className = 'small fw-semibold text-decoration-none text-reset clamp-2 flex-grow-1'; t.textContent = a.title;
      row.appendChild(t);
      const del = document.createElement('button'); del.className = 'btn btn-sm btn-outline-danger'; del.setAttribute('aria-label', 'Hapus bookmark ' + a.title); del.dataset.bookmark = a.id;
      const ic = document.createElement('i'); ic.className = 'bi bi-trash'; ic.setAttribute('aria-hidden', 'true'); del.appendChild(ic);
      row.appendChild(del); box.appendChild(row);
    });
    // refresh tombol bookmark di kartu
    $$('[data-bookmark]').forEach(btn => {
      const id = Number(btn.dataset.bookmark);
      const on = list.includes(id);
      if (btn.classList.contains('btn-outline-danger')) return; // tombol hapus sidebar
      btn.className = 'btn btn-sm ' + (on ? 'btn-primary' : 'btn-outline-secondary');
      btn.setAttribute('aria-pressed', String(on));
      btn.innerHTML = '<i class="bi ' + (on ? 'bi-bookmark-fill' : 'bi-bookmark') + '" aria-hidden="true"></i>';
    });
  }

  /* ---------- Search (debounce) ---------- */
  function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }
  function initSearch() {
    const input = $('#searchInput');
    const toggle = $('#searchToggle');
    const bar = $('#searchBar');
    if (toggle && bar) toggle.addEventListener('click', () => {
      const open = bar.classList.toggle('d-none') === false;
      toggle.setAttribute('aria-expanded', String(open));
      if (open) input?.focus();
    });
    const onType = debounce(() => {
      state.q = input ? input.value.slice(0, 100) : '';
      state.shown = state.perPage;
      renderGrid();
      const m = $('#searchMeta');
      if (m) m.textContent = state.q ? `Menampilkan hasil untuk: “${state.q}”` : '';
    }, 300);
    input?.addEventListener('input', onType);
    $('#searchForm')?.addEventListener('submit', e => { e.preventDefault(); onType(); document.getElementById('terbaru')?.scrollIntoView({ behavior: 'smooth' }); });
  }

  /* ---------- Filter ---------- */
  function initFilter() {
    $('#filterPills')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-cat]');
      if (!btn) return;
      $$('#filterPills .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.cat = btn.dataset.cat; state.shown = state.perPage;
      renderGrid();
    });
    $('#resetFilterBtn')?.addEventListener('click', () => {
      state.cat = 'Semua'; state.q = ''; state.shown = state.perPage;
      const inp = $('#searchInput'); if (inp) inp.value = '';
      $$('#filterPills .filter-pill').forEach(b => b.classList.toggle('active', b.dataset.cat === 'Semua'));
      renderGrid();
    });
    // Nav kategori -> set filter + scroll
    document.addEventListener('click', e => {
      const nav = e.target.closest('[data-navcat]');
      if (!nav) return;
      const cat = nav.dataset.navcat;
      state.cat = cat; state.shown = state.perPage;
      $$('#filterPills .filter-pill').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
      renderGrid();
      // tutup offcanvas mobile bila terbuka
      try { const oc = bootstrap.Offcanvas.getInstance($('#mobileNav')); oc?.hide(); } catch {}
    });
    $('#loadMoreBtn')?.addEventListener('click', () => { state.shown += state.perPage; renderGrid(); });
    // Event delegation bookmark
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-bookmark]');
      if (b) toggleBookmark(Number(b.dataset.bookmark));
    });
    $('#bookmarkNavBtn')?.addEventListener('click', () => {
      document.getElementById('terbaru')?.scrollIntoView({ behavior: 'smooth' });
      toast('Daftar bookmark ada di panel “Bookmark Saya”.', 'Bookmark');
    });
  }

  /* ---------- Newsletter ---------- */
  function initNewsletter() {
    const form = $('#newsletterForm');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = $('#nlEmail').value.trim().slice(0, 120);
      const err = $('#nlError');
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      if (!ok) {
        err.textContent = 'Masukkan alamat email yang valid, contoh: nama@email.com';
        $('#nlEmail').focus();
        return;
      }
      err.textContent = '';
      form.reset();
      toast('Terima kasih! Kamu berhasil berlangganan newsletter.', 'Newsletter');
    });
  }

  /* ---------- Scroll: navbar, progress, back-to-top, reveal ---------- */
  let revealObs = null;
  function observeReveals() {
    const els = $$('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
    revealObs = revealObs || new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealObs.unobserve(en.target); } }), { threshold: 0.12 });
    els.forEach(el => revealObs.observe(el));
  }
  function initScroll() {
    const nav = $('.site-navbar');
    const btt = $('#backToTop');
    const prog = $('#readingProgress');
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      nav?.classList.toggle('scrolled', y > 10);
      const h = document.documentElement.scrollHeight - innerHeight;
      if (prog) prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      btt?.classList.toggle('show', y > 600);
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
    btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderTicker();
    renderHero();
    renderGrid();
    renderTrending();
    renderCategories();
    syncBookmarkUI();
    initSearch();
    initFilter();
    initNewsletter();
    initScroll();
    observeReveals();
    const td = $('#todayDate');
    if (td) { try { td.textContent = new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); } catch {} }
  });

  // Expose untuk article.js
  window.NN = { store, toast, fmtDate, imgEl, metaLine, catBadge, toggleBookmark, isBookmarked, PLACEHOLDER };
})();
