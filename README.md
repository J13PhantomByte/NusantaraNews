# 📰 NusantaraNews — Portal Berita Modern

Portal berita modern, **responsif, cepat, aman, dan interaktif** — dibangun murni dengan **HTML5 + CSS3 + JavaScript Vanilla + Bootstrap 5 + Bootstrap Icons**. Tanpa React, Vue, Angular, atau library berat lainnya. Ringan dan mudah dipahami developer pemula, tapi terasa seperti media production-ready.

> Demo frontend-only — seluruh data berita bersifat fiktif untuk tujuan edukasi.

---

## ✨ Fitur

| Kategori | Detail |
|---|---|
| 📰 Konten | Hero + berita populer, berita terbaru, trending ranking 01–05, section per kategori, halaman detail artikel + berita terkait |
| 🔍 Search | Realtime filter dengan **debounce 300ms**, info jumlah hasil, empty state |
| 🏷️ Filter kategori | Semua / Nasional / Teknologi / Ekonomi / Olahraga / Lifestyle / Politik — tanpa reload, animasi fade/scale |
| 🌙 Dark mode | Smooth, tersimpan di `localStorage`, hormati `prefers-color-scheme` |
| 🔖 Bookmark | Simpan/hapus via `localStorage` + panel "Bookmark Saya" |
| 📤 Share | Web Share API + fallback salin tautan |
| 📊 UX | Reading progress bar, back-to-top, toast notification, newsletter validation, load more, scroll reveal, skeleton-ready |
| 🎞️ Ticker | Breaking news berjalan smooth (CSS `transform`, pause on hover) |
| ♿ Aksesibilitas | Semantic HTML, skip link, aria-label, focus-visible, keyboard-friendly, `prefers-reduced-motion` |
| 🔒 Keamanan | Tanpa `eval`, konten dinamis via `textContent`, rekomendasi security header di komentar `<head>` |
| 🚀 SEO | Meta + OG + Twitter Card, 1× `h1`, Schema.org NewsArticle, `sitemap.xml`, `robots.txt` |

---

## 🛠️ Tech Stack

- HTML5 semantic
- CSS3 custom (`css/style.css` + `css/responsive.css`)
- JavaScript Vanilla ES6+ (`"use strict"`, `const/let`, modular)
- Bootstrap 5.3 + Bootstrap Icons (CDN saja)
- Gambar: `picsum.photos` + fallback placeholder SVG

---

## 📁 Struktur Proyek

```
.
├── index.html          # Halaman utama
├── article.html        # Halaman detail (?id=1..18)
├── css/
│   ├── style.css       # Tema, kartu, ticker, artikel, dark mode
│   └── responsive.css  # Breakpoint xs→xxl, guard overflow
├── js/
│   ├── data.js         # NEWS_DATA (18 artikel), CATEGORIES, BREAKING_NEWS
│   ├── app.js          # Navbar, theme, search, filter, bookmark, toast, dll.
│   └── article.js      # Render artikel, share, related, schema.org
├── assets/images/      # Aset lokal (opsional)
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 🚀 Cara Menjalankan

Pilih salah satu (jangan buka via `file://` ganda-klik agar JS/CDN normal):

**1. VS Code Live Server (termudah)**
1. Install extension **Live Server**
2. Klik kanan `index.html` → **Open with Live Server**

**2. Python**
```bash
cd "Default Project"
python -m http.server 8000
# buka http://localhost:8000
```

**3. Node**
```bash
npx serve .
```

**Buka artikel:** `http://localhost:8000/article.html?id=2` (id tersedia 1–18)

---

## 🧭 Panduan Penggunaan

- **Cari berita:** klik ikon 🔍 di navbar → ketik (mis. `teknologi`) → hasil terfilter otomatis + counter *"Menampilkan X dari Y hasil untuk…"*
- **Filter:** klik pill kategori di section Berita Terbaru, atau klik menu navbar (Nasional, Teknologi, …)
- **Bookmark:** klik ikon bookmark di kartu → cek panel *Bookmark Saya* → tersimpan antar sesi
- **Newsletter:** isi email valid → toast konfirmasi (tidak benar-benar mengirim, demo frontend)
- **Artikel:** klik judul/gambar kartu → baca, bagikan, simpan, lihat berita terkait

---

## ⚙️ Kustomisasi

| Mau ubah… | File |
|---|---|
| Tambah/edit berita | `js/data.js` → array `NEWS_DATA` (ikuti field: `id, title, category, excerpt, content[], image, author, date, readTime, trending, featured, tags`) |
| Breaking news | `js/data.js` → `BREAKING_NEWS` |
| Warna/tema | `css/style.css` → variabel `:root` (`--brand`, `--bg`, `--ink`, …) |
| Kategori | `js/data.js` → `CATEGORIES` + pill di `index.html` (`#filterPills`) |
| Domain SEO | ganti `https://www.nusantara-news.example/` di `index.html`, `robots.txt`, `sitemap.xml` |

---

## 🔒 Catatan Keamanan

Frontend statis **tidak bisa** menggantikan keamanan server. Saat deploy production, aktifkan header ini di server/hosting (contoh sudah didokumentasikan di komentar `<head>` `index.html`):

```
Content-Security-Policy, X-Content-Type-Options: nosniff,
Referrer-Policy, Permissions-Policy, Strict-Transport-Security (HTTPS),
```

Prinsip yang sudah diterapkan di kode: tanpa `eval`/`new Function`, tanpa `innerHTML` untuk input user, tanpa secret di JS, dan `localStorage` hanya untuk tema + bookmark (non-sensitif).

---

## ✅ Checklist Verifikasi

- [x] Responsif 320px → 1920px, tanpa horizontal overflow
- [x] Semua tombol berfungsi (search, filter, theme, bookmark, share, load more, back-to-top)
- [x] Artikel terbuka per `?id=`, URL invalid tampilkan error state
- [x] Lazy loading + `width/height` anti layout-shift
- [x] `node --check` lolos untuk `data.js`, `app.js`, `article.js`

---

## 📄 Lisensi

Bebas digunakan untuk belajar & portofolio. Atribusi ke **NusantaraNews** diapresiasi. 🙏

---

<p align="center">Dibuat dengan ❤️ menggunakan HTML + CSS + Vanilla JS</p>
