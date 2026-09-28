'use strict';
/* article.js — render artikel berdasarkan ?id= , share, related, schema.org */
(function () {
  function data() { return Array.isArray(window.NEWS_DATA) ? window.NEWS_DATA : (typeof NEWS_DATA !== 'undefined' ? NEWS_DATA : []); }

  function getId() {
    try {
      const id = Number(new URLSearchParams(location.search).get('id'));
      return Number.isInteger(id) && id > 0 ? id : null;
    } catch { return null; }
  }

  function render() {
    const id = getId();
    const a = data().find(x => x.id === id);
    if (!a) {
      document.getElementById('articleError')?.classList.remove('d-none');
      document.getElementById('articleWrap')?.setAttribute('aria-hidden', 'true');
      document.title = 'Artikel tidak ditemukan — NusantaraNews';
      return;
    }

    document.title = a.title + ' — NusantaraNews';
    const NN = window.NN || {};

    // Breadcrumb (textContent = aman dari XSS)
    document.getElementById('crumbCat').textContent = a.category;
    document.getElementById('crumbTitle').textContent = a.title.length > 50 ? a.title.slice(0, 50) + '…' : a.title;

    // Header
    const catBox = document.getElementById('artCat'); catBox.innerHTML = '';
    const badge = document.createElement('span'); badge.className = 'badge text-bg-primary badge-cat'; badge.textContent = a.category;
    catBox.appendChild(badge);
    document.getElementById('artTitle').textContent = a.title;
    document.getElementById('artSub').textContent = a.excerpt;
    document.getElementById('artAuthor').textContent = a.author;
    document.getElementById('artRole').textContent = a.authorRole || 'Jurnalis';
    document.getElementById('authorInitial').textContent = (a.author || 'N').charAt(0).toUpperCase();
    const fmt = NN.fmtDate ? NN.fmtDate(a.date) : a.date;
    document.getElementById('artMeta').textContent = fmt + ' • ' + a.readTime + ' mnt baca';

    // Gambar
    const img = document.getElementById('artImg');
    img.src = a.image; img.alt = a.title;
    img.addEventListener('error', () => { img.src = NN.PLACEHOLDER || ''; }, { once: true });
    document.getElementById('artCaption').textContent = 'Ilustrasi: ' + a.title + ' (Foto: NusantaraNews)';

    // Isi: paragraf + quote di tengah + subheading
    const body = document.getElementById('artBody'); body.innerHTML = '';
    a.content.forEach((p, i) => {
      if (i === 2) {
        const h = document.createElement('h2'); h.textContent = 'Analisis & Dampak'; body.appendChild(h);
      }
      const par = document.createElement('p'); par.textContent = p; body.appendChild(par);
      if (i === 1 && a.quote) {
        const q = document.createElement('blockquote'); q.className = 'pull-quote my-4';
        const qp = document.createElement('p'); qp.className = 'mb-0'; qp.textContent = '“' + a.quote + '”';
        q.appendChild(qp); body.appendChild(q);
      }
    });

    // Tags
    const tags = document.getElementById('artTags'); tags.innerHTML = '';
    (a.tags || []).forEach(t => {
      const s = document.createElement('span'); s.className = 'badge rounded-pill text-bg-light border'; s.textContent = '#' + t;
      tags.appendChild(s);
    });

    // Bookmark state
    const bmBtn = document.getElementById('bookmarkBtn');
    const paintBm = () => {
      const on = NN.isBookmarked ? NN.isBookmarked(a.id) : false;
      bmBtn.innerHTML = '<i class="bi ' + (on ? 'bi-bookmark-fill' : 'bi-bookmark') + ' me-1"></i>' + (on ? 'Tersimpan' : 'Simpan');
      bmBtn.classList.toggle('btn-primary', on);
      bmBtn.classList.toggle('btn-outline-secondary', !on);
      bmBtn.setAttribute('aria-pressed', String(on));
    };
    paintBm();
    bmBtn.addEventListener('click', () => { NN.toggleBookmark ? NN.toggleBookmark(a.id) : null; setTimeout(paintBm, 50); });

    // Share: Web Share API + fallback clipboard
    document.getElementById('shareBtn').addEventListener('click', async () => {
      const shareData = { title: a.title, text: a.excerpt, url: location.href };
      if (navigator.share) {
        try { await navigator.share(shareData); } catch (e) { /* user batal — abaikan */ }
      } else {
        try { await navigator.clipboard.writeText(location.href); NN.toast && NN.toast('Tautan artikel disalin ke clipboard.', 'Bagikan'); }
        catch { NN.toast && NN.toast('Salin tautan manual: ' + location.href, 'Bagikan'); }
      }
    });

    // Related: kategori sama dulu, lalu lainnya
    const grid = document.getElementById('relatedGrid'); grid.innerHTML = '';
    const rel = [...data().filter(x => x.id !== a.id && x.category === a.category), ...data().filter(x => x.id !== a.id && x.category !== a.category)].slice(0, 3);
    rel.forEach(r => {
      const col = document.createElement('div'); col.className = 'col-sm-6 col-lg-4';
      const card = document.createElement('article'); card.className = 'news-card';
      const th = document.createElement('div'); th.className = 'thumb';
      const im = document.createElement('img'); im.src = r.image; im.alt = r.title; im.loading = 'lazy'; im.decoding = 'async'; im.width = 800; im.height = 450;
      im.addEventListener('error', () => { im.src = NN.PLACEHOLDER || ''; }, { once: true });
      th.appendChild(im); card.appendChild(th);
      const bd = document.createElement('div'); bd.className = 'body';
      const h = document.createElement('h3'); h.className = 'card-title clamp-2';
      const al = document.createElement('a'); al.href = 'article.html?id=' + r.id; al.textContent = r.title;
      h.appendChild(al); bd.appendChild(h);
      const sm = document.createElement('small'); sm.className = 'text-muted'; sm.textContent = r.category + ' • ' + (NN.fmtDate ? NN.fmtDate(r.date) : '');
      bd.appendChild(sm); card.appendChild(bd); col.appendChild(card); grid.appendChild(col);
    });

    // Schema.org NewsArticle (dibangun aman via JSON.stringify)
    const schema = {
      '@context': 'https://schema.org', '@type': 'NewsArticle',
      headline: a.title, description: a.excerpt, image: [a.image],
      datePublished: a.date, author: { '@type': 'Person', name: a.author }
    };
    document.getElementById('schemaArticle').textContent = JSON.stringify(schema);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(render, 0));
  else setTimeout(render, 0);
})();
