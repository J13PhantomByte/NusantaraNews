'use strict';
/* data.js — sumber data berita (frontend-only demo) */

const NEWS_DATA = [
  {
    id: 1,
    title: 'Pemerintah Umumkan Kebijakan Ekonomi Baru untuk Perkuat Daya Beli Masyarakat',
    category: 'Nasional',
    excerpt: 'Paket kebijakan mencakup insentif UMKM, stabilisasi harga pangan, dan percepatan digitalisasi layanan publik di seluruh daerah.',
    content: [
      'Pemerintah resmi mengumumkan paket kebijakan ekonomi baru yang difokuskan pada penguatan daya beli masyarakat dan perlindungan pelaku usaha mikro, kecil, dan menengah (UMKM). Kebijakan ini mencakup insentif fiskal, kemudahan perizinan, serta percepatan digitalisasi layanan publik.',
      'Menteri Koordinator Bidang Perekonomian menjelaskan bahwa stabilisasi harga pangan menjadi prioritas utama. Operasi pasar dan penguatan distribusi logistik akan dilakukan serentak di 38 provinsi untuk menekan disparitas harga.',
      '“Kami ingin memastikan pertumbuhan ekonomi tetap inklusif. UMKM yang menyerap lebih dari 90 persen tenaga kerja harus mendapat dukungan penuh,” ujarnya dalam konferensi pers di Jakarta.',
      'Ekonom menilai langkah ini tepat jika diiringi transparansi anggaran dan evaluasi berkala. Pemerintah menargetkan implementasi penuh dalam 90 hari ke depan.'
    ],
    quote: 'Pertumbuhan ekonomi harus inklusif — UMKM adalah tulang punggung yang wajib dilindungi.',
    image: 'https://picsum.photos/seed/nasional-ekonomi/1200/675',
    author: 'Dewi Lestari',
    authorRole: 'Redaktur Nasional',
    date: '2026-09-28T07:30:00+07:00',
    readTime: 5,
    trending: true,
    featured: true,
    tags: ['ekonomi', 'pemerintah', 'umkm']
  },
  {
    id: 2,
    title: 'Revolusi AI Generatif: Model Bahasa Terbaru Mampu Pahami 100 Bahasa Daerah',
    category: 'Teknologi',
    excerpt: 'Terobosan AI terbaru diklaim mampu memahami konteks budaya lokal dan 100 bahasa daerah, membuka peluang digitalisasi arsip nusantara.',
    content: [
      'Perusahaan riset kecerdasan buatan meluncurkan model bahasa generatif terbaru yang mampu memahami lebih dari 100 bahasa daerah di dunia, termasuk Jawa, Sunda, dan Minangkabau.',
      'Model ini dilatih dengan pendekatan etis — melibatkan komunitas linguistik lokal dan menerapkan filter anti-bias. Hasil uji menunjukkan akurasi pemahaman konteks budaya meningkat 42 persen dibanding generasi sebelumnya.',
      'Para pengembang aplikasi pendidikan menyambut baik. “Ini bisa mempercepat digitalisasi naskah kuno dan pembelajaran bahasa ibu di sekolah,” kata salah satu praktisi edtech.',
      'Namun pakar mengingatkan pentingnya regulasi data. Pelatihan model skala besar tetap membutuhkan transparansi sumber data dan perlindungan privasi.'
    ],
    quote: 'Teknologi terbaik adalah yang memahami manusia — termasuk bahasanya.',
    image: 'https://picsum.photos/seed/teknologi-ai/1200/675',
    author: 'Rizky Pratama',
    authorRole: 'Jurnalis Teknologi',
    date: '2026-09-28T06:15:00+07:00',
    readTime: 6,
    trending: true,
    featured: true,
    tags: ['ai', 'teknologi', 'bahasa']
  },
  {
    id: 3,
    title: 'Timnas Indonesia Raih Kemenangan Dramatis 2-1 di Kualifikasi Piala Dunia',
    category: 'Olahraga',
    excerpt: 'Gol penentu di menit 89 membawa Garuda menang dramatis dan menjaga asa lolos ke putaran berikutnya.',
    content: [
      'Tim nasional Indonesia meraih kemenangan dramatis 2-1 atas lawannya pada laga kualifikasi Piala Dunia di Stadion Utama Gelora Bung Karno yang dipadati lebih dari 70 ribu suporter.',
      'Tertinggal lebih dulu di babak pertama, Garuda bangkit lewat gol penyeimbang di menit 67 sebelum gol penentu dicetak melalui skema serangan balik cepat pada menit ke-89.',
      'Pelatih memuji mentalitas pemain muda. “Mereka tidak panik. Disiplin taktik dan keberanian menjadi kunci malam ini,” ujarnya.',
      'Kemenangan ini menempatkan Indonesia di posisi dua klasemen sementara grup dengan selisih satu poin dari pemuncak.'
    ],
    quote: 'Malam ini milik Garuda — kerja keras mengalahkan segalanya.',
    image: 'https://picsum.photos/seed/olahraga-timnas/1200/675',
    author: 'Andi Wijaya',
    authorRole: 'Reporter Olahraga',
    date: '2026-09-27T22:40:00+07:00',
    readTime: 4,
    trending: true,
    featured: true,
    tags: ['timnas', 'sepakbola', 'kualifikasi']
  },
  {
    id: 4,
    title: 'IHSG Tembus Rekor Baru, Investor Asing Catat Net Buy Rp3,2 Triliun',
    category: 'Ekonomi',
    excerpt: 'Penguatan sektor perbankan dan energi mendorong IHSG ke level tertinggi sepanjang sejarah di tengah optimisme pasar.',
    content: [
      'Indeks Harga Saham Gabungan (IHSG) menembus rekor tertinggi sepanjang sejarah setelah menguat 1,4 persen ke level 8.120 pada penutupan perdagangan.',
      'Penguatan dipimpin sektor perbankan dan energi. Investor asing mencatatkan pembelian bersih Rp3,2 triliun, terbesar dalam tiga bulan terakhir.',
      'Analis menilai sentimen positif datang dari data inflasi yang terjaga dan ekspektasi pemangkasan suku bunga acuan.',
      'Meski demikian, investor diimbau tetap waspada terhadap volatilitas global dan melakukan diversifikasi portofolio.'
    ],
    quote: 'Rekor adalah cerminan kepercayaan — tapi kehati-hatian tetap wajib.',
    image: 'https://picsum.photos/seed/ekonomi-ihsg/800/500',
    author: 'Sinta Maharani',
    authorRole: 'Analis Ekonomi',
    date: '2026-09-27T16:00:00+07:00',
    readTime: 4,
    trending: true,
    featured: false,
    tags: ['ihsg', 'saham', 'investasi']
  },
  {
    id: 5,
    title: 'KTT Iklim Global Sepakati Dana $300 Miliar untuk Negara Berkembang',
    category: 'Internasional',
    excerpt: 'Kesepakatan bersejarah dicapai setelah negosiasi alot 14 hari, fokus pada adaptasi dan transisi energi bersih.',
    content: [
      'Konferensi Tingkat Tinggi Iklim global mencapai kesepakatan bersejarah: dana adaptasi iklim senilai $300 miliar untuk negara berkembang hingga 2030.',
      'Dana tersebut diprioritaskan untuk infrastruktur tahan bencana, transisi energi bersih, dan perlindungan hutan tropis.',
      'Delegasi Indonesia menegaskan komitmen menurunkan emisi 31,9 persen dengan usaha sendiri dan 43,2 persen dengan dukungan internasional.',
      'Aktivis lingkungan menyambut baik namun menekankan pentingnya mekanisme transparansi penyaluran dana.'
    ],
    quote: 'Iklim tidak mengenal batas negara — solusinya pun harus global.',
    image: 'https://picsum.photos/seed/internasional-iklim/800/500',
    author: 'Farhan Hidayat',
    authorRole: 'Koresponden Internasional',
    date: '2026-09-27T14:20:00+07:00',
    readTime: 5,
    trending: false,
    featured: false,
    tags: ['iklim', 'ktt', 'global']
  },
  {
    id: 6,
    title: 'Tren Slow Living: Generasi Muda Beralih ke Gaya Hidup Minim Konsumsi',
    category: 'Lifestyle',
    excerpt: 'Survei menunjukkan 68 persen anak muda memilih pengalaman dibanding barang — kopi, jalan pagi, dan jurnal jadi ritual baru.',
    content: [
      'Gaya hidup slow living semakin populer di kalangan generasi muda perkotaan. Survei terbaru menyebut 68 persen responden lebih memprioritaskan pengalaman dibanding kepemilikan barang.',
      'Ritual sederhana seperti jalan pagi, membuat kopi manual, dan menulis jurnal menjadi simbol perlawanan terhadap hustle culture.',
      'Psikolog menilai tren ini positif untuk kesehatan mental, selama tidak menjadi tekanan sosial baru yang performatif.',
      'Komunitas lari, klub baca, dan pasar tani lokal pun ikut tumbuh sebagai ruang sosial baru.'
    ],
    quote: 'Pelan bukan berarti tertinggal — kadang justru lebih sampai.',
    image: 'https://picsum.photos/seed/lifestyle-slow/800/500',
    author: 'Nadia Putri',
    authorRole: 'Editor Lifestyle',
    date: '2026-09-27T10:00:00+07:00',
    readTime: 3,
    trending: true,
    featured: false,
    tags: ['lifestyle', 'slow living', 'wellness']
  },
  {
    id: 7,
    title: 'DPR Sahkan RUU Perlindungan Data Pribadi, Sanksi Tegas Menanti Pelanggar',
    category: 'Politik',
    excerpt: 'Aturan baru mewajibkan persetujuan eksplisit pengguna dan mewajibkan perusahaan menunjuk petugas perlindungan data.',
    content: [
      'Dewan Perwakilan Rakyat resmi mengesahkan Rancangan Undang-Undang Perlindungan Data Pribadi menjadi undang-undang dalam rapat paripurna.',
      'Aturan ini mewajibkan pengendali data memperoleh persetujuan eksplisit, melakukan penilaian dampak, dan melaporkan kebocoran data maksimal 72 jam.',
      'Sanksi administratif hingga pidana menanti pelanggar berat, termasuk denda maksimal 2 persen dari pendapatan tahunan perusahaan.',
      'Masyarakat sipil menilai pengesahan ini tonggak penting, namun implementasi dan independensi lembaga pengawas menjadi kunci.'
    ],
    quote: 'Data pribadi adalah hak dasar — bukan komoditas.',
    image: 'https://picsum.photos/seed/politik-dpr/800/500',
    author: 'Budi Santoso',
    authorRole: 'Jurnalis Politik',
    date: '2026-09-26T18:30:00+07:00',
    readTime: 6,
    trending: false,
    featured: false,
    tags: ['politik', 'dpr', 'data pribadi']
  },
  {
    id: 8,
    title: 'Kereta Cepat Jakarta–Surabaya Ditargetkan Beroperasi 2028, Studi Dimulai',
    category: 'Nasional',
    excerpt: 'Proyek strategis nasional memasuki tahap studi kelayakan dengan skema pembiayaan campuran dan transfer teknologi.',
    content: [
      'Pemerintah menargetkan kereta cepat Jakarta–Surabaya beroperasi pada 2028. Tahap studi kelayakan dan AMDAL dimulai tahun ini.',
      'Proyek akan menggunakan skema pembiayaan campuran dengan porsi BUMN, swasta, dan pinjaman luar negeri yang terukur.',
      'Transfer teknologi dan tingkat komponen dalam negeri minimal 60 persen menjadi syarat utama.',
      'Pengamat transportasi menilai proyek ini dapat memangkas waktu tempuh hingga 3,5 jam dan mengurai kepadatan jalur utara.'
    ],
    quote: 'Konektivitas cepat adalah keadilan mobilitas bagi semua.',
    image: 'https://picsum.photos/seed/nasional-kereta/800/500',
    author: 'Dewi Lestari',
    authorRole: 'Redaktur Nasional',
    date: '2026-09-26T15:10:00+07:00',
    readTime: 4,
    trending: false,
    featured: false,
    tags: ['kereta cepat', 'infrastruktur', 'transportasi']
  },
  {
    id: 9,
    title: 'Startup Lokal Tembus Pendanaan Seri B $50 Juta untuk Ekspansi AI Logistik',
    category: 'Teknologi',
    excerpt: 'Platform logistik berbasis AI ini mengklaim mampu memangkas biaya pengiriman 30 persen lewat optimasi rute real-time.',
    content: [
      'Startup logistik asal Indonesia mengumumkan pendanaan Seri B senilai $50 juta yang dipimpin investor global.',
      'Dana akan digunakan untuk ekspansi ke 20 kota baru dan pengembangan mesin optimasi rute berbasis AI yang diklaim memangkas biaya 30 persen.',
      'Perusahaan mencatat pertumbuhan 3x lipat dalam setahun dengan lebih dari 40 ribu mitra armada aktif.',
      'Founder menegaskan fokus pada profitabilitas berkelanjutan, bukan sekadar bakar uang.'
    ],
    quote: 'Efisiensi logistik adalah oksigen ekonomi digital.',
    image: 'https://picsum.photos/seed/teknologi-startup/800/500',
    author: 'Rizky Pratama',
    authorRole: 'Jurnalis Teknologi',
    date: '2026-09-26T11:00:00+07:00',
    readTime: 4,
    trending: false,
    featured: false,
    tags: ['startup', 'pendanaan', 'logistik']
  },
  {
    id: 10,
    title: 'Harga Emas Antam Hari Ini Stabil, Analis Prediksi Masih Bullish',
    category: 'Ekonomi',
    excerpt: 'Emas bertahan di level tinggi seiring ketidakpastian global — simak rincian harga per gram hari ini.',
    content: [
      'Harga emas batangan terpantau stabil pada perdagangan hari ini, bertahan di level tinggi seiring ketidakpastian geopolitik global.',
      'Analis menilai tren bullish emas masih berlanjut karena bank sentral dunia terus menambah cadangan.',
      'Investor ritel diimbau membeli bertahap (dollar-cost averaging) dan menghindari panic buying.',
      'Selain emas fisik, instrumen tabungan emas digital juga mencatat lonjakan pengguna muda.'
    ],
    quote: 'Emas bukan soal cepat kaya — tapi soal tenang.',
    image: 'https://picsum.photos/seed/ekonomi-emas/800/500',
    author: 'Sinta Maharani',
    authorRole: 'Analis Ekonomi',
    date: '2026-09-26T09:00:00+07:00',
    readTime: 3,
    trending: false,
    featured: false,
    tags: ['emas', 'investasi', 'harga']
  },
  {
    id: 11,
    title: 'Atlet Muda Indonesia Sabet Emas Kejuaraan Bulu Tangkis Asia Junior',
    category: 'Olahraga',
    excerpt: 'Tunggal putri 17 tahun menang rubber game 21-19 di gim penentu dan diproyeksikan masuk pelatnas senior.',
    content: [
      'Kabar membanggakan datang dari Kejuaraan Bulu Tangkis Asia Junior. Tunggal putri Indonesia berusia 17 tahun merebut medali emas usai menang rubber game.',
      'Gim penentu berakhir dramatis 21-19 setelah tertinggal 16-19. Mental bertandingnya dipuji pelatih kepala.',
      'Kemenangan ini membuka peluang promosi ke pelatnas senior tahun depan.',
      'PBSI menyiapkan program transisi berjenjang agar talenta muda tidak terbakar terlalu dini.'
    ],
    quote: 'Usia 17, mental juara dunia.',
    image: 'https://picsum.photos/seed/olahraga-badminton/800/500',
    author: 'Andi Wijaya',
    authorRole: 'Reporter Olahraga',
    date: '2026-09-25T20:00:00+07:00',
    readTime: 3,
    trending: false,
    featured: false,
    tags: ['bulutangkis', 'emas', 'junior']
  },
  {
    id: 12,
    title: '7 Destinasi Hidden Gem di Jawa Timur yang Wajib Dikunjungi 2026',
    category: 'Lifestyle',
    excerpt: 'Dari air terjun biru hingga savana eksotis — panduan lengkap rute, tiket, dan waktu terbaik berkunjung.',
    content: [
      'Jawa Timur menyimpan banyak destinasi tersembunyi yang belum banyak dijamah wisatawan. Berikut tujuh di antaranya yang wajib masuk bucket list 2026.',
      'Mulai dari air terjun dengan kolam biru alami, savana eksotis di kaki gunung, hingga desa wisata dengan kuliner autentik.',
      'Waktu terbaik berkunjung adalah April–Oktober saat cuaca cerah. Selalu cek prakiraan cuaca dan bawa perbekalan cukup.',
      'Ingat prinsip leave no trace: bawa pulang sampahmu dan hormati budaya lokal.'
    ],
    quote: 'Petualangan terbaik sering dimulai dari jalan yang jarang diambil.',
    image: 'https://picsum.photos/seed/lifestyle-travel/800/500',
    author: 'Nadia Putri',
    authorRole: 'Editor Lifestyle',
    date: '2026-09-25T09:30:00+07:00',
    readTime: 7,
    trending: false,
    featured: false,
    tags: ['travel', 'wisata', 'jawa timur']
  },
  {
    id: 13,
    title: 'Pemilu Digital 2029: KPU Kaji E-Voting Bertahap dengan Audit Kertas',
    category: 'Politik',
    excerpt: 'Skema hybrid diusulkan — e-voting di kota besar dengan jejak audit kertas untuk menjamin verifikasi.',
    content: [
      'Komisi Pemilihan Umum mengkaji penerapan e-voting bertahap untuk Pemilu 2029 dengan skema hybrid.',
      'E-voting diusulkan di kota besar dengan infrastruktur siap, tetap disertai jejak audit kertas (voter-verified paper trail).',
      'Pakar keamanan siber menekankan tiga syarat: source code terbuka, audit independen, dan uji publik.',
      'Uji coba terbatas ditargetkan 2027 di sejumlah pilkada dengan pengawasan berlapis.'
    ],
    quote: 'Kecepatan tanpa kepercayaan adalah kemunduran.',
    image: 'https://picsum.photos/seed/politik-pemilu/800/500',
    author: 'Budi Santoso',
    authorRole: 'Jurnalis Politik',
    date: '2026-09-24T17:00:00+07:00',
    readTime: 5,
    trending: false,
    featured: false,
    tags: ['pemilu', 'e-voting', 'kpu']
  },
  {
    id: 14,
    title: 'NASA dan BRIN Kolaborasi Riset Iklim Tropis Berbasis Satelit Mikro',
    category: 'Internasional',
    excerpt: 'Satelit mikro akan memetakan tutupan awan tropis setiap 30 menit untuk prediksi cuaca ekstrem yang akurat.',
    content: [
      'Badan antariksa Amerika Serikat dan Indonesia menjalin kolaborasi riset iklim tropis berbasis konstelasi satelit mikro.',
      'Satelit akan memetakan tutupan awan dan kelembapan tropis setiap 30 menit — resolusi temporal tertinggi yang pernah ada.',
      'Data bersifat terbuka untuk peneliti dan BMKG guna meningkatkan akurasi peringatan dini banjir dan kekeringan.',
      'Peluncuran perdana dijadwalkan tahun depan dari pusat peluncuran Asia Tenggara.'
    ],
    quote: 'Dari luar angkasa untuk bumi yang lebih siap.',
    image: 'https://picsum.photos/seed/internasional-nasa/800/500',
    author: 'Farhan Hidayat',
    authorRole: 'Koresponden Internasional',
    date: '2026-09-24T10:00:00+07:00',
    readTime: 4,
    trending: false,
    featured: false,
    tags: ['nasa', 'brin', 'iklim']
  },
  {
    id: 15,
    title: 'UMKM Go Digital: 12 Juta Pelaku Usaha Kini Jualan Lewat Marketplace',
    category: 'Nasional',
    excerpt: 'Program onboarding digital mencatat rekor — omzet pelaku usaha naik rata-rata 35 persen dalam 6 bulan.',
    content: [
      'Sebanyak 12 juta pelaku UMKM kini tercatat berjualan melalui marketplace, melampaui target digitalisasi nasional.',
      'Data menunjukkan omzet pelaku usaha yang go digital naik rata-rata 35 persen dalam enam bulan pertama.',
      'Tantangan tersisa adalah literasi keuangan, logistik daerah 3T, dan persaingan harga.',
      'Pemerintah menyiapkan pusat kurasi produk dan subsidi ongkir untuk pasar ekspor.'
    ],
    quote: 'Digitalisasi bukan pilihan — tapi jalan bertahan.',
    image: 'https://picsum.photos/seed/nasional-umkm/800/500',
    author: 'Dewi Lestari',
    authorRole: 'Redaktur Nasional',
    date: '2026-09-23T13:00:00+07:00',
    readTime: 4,
    trending: false,
    featured: false,
    tags: ['umkm', 'digital', 'marketplace']
  },
  {
    id: 16,
    title: 'Review: Laptop AI 14 Inci dengan Baterai 20 Jam, Cocok untuk Kreator?',
    category: 'Teknologi',
    excerpt: 'Kami menguji NPU 45 TOPS untuk editing video dan render — hasilnya mengejutkan di kelas harga Rp15 jutaan.',
    content: [
      'Laptop AI 14 inci terbaru menjanjikan baterai 20 jam dan NPU 45 TOPS. Kami mengujinya selama dua minggu untuk workflow kreator.',
      'Hasilnya: render video 4K 10 menit selesai 28 persen lebih cepat dibanding generasi sebelumnya, dengan suhu tetap adem.',
      'Kekurangannya ada pada port yang minim dan upgrade RAM yang disolder.',
      'Kesimpulan: pilihan kuat untuk mobile kreator di harga Rp15 jutaan, dengan catatan kebutuhan port tambahan.'
    ],
    quote: 'Baterai awet + AI kencang = kombo kreator modern.',
    image: 'https://picsum.photos/seed/teknologi-laptop/800/500',
    author: 'Rizky Pratama',
    authorRole: 'Jurnalis Teknologi',
    date: '2026-09-23T09:00:00+07:00',
    readTime: 8,
    trending: false,
    featured: false,
    tags: ['laptop', 'review', 'ai']
  },
  {
    id: 17,
    title: 'Rupiah Menguat ke Rp15.800 per Dolar AS, Dipicu Arus Modal Masuk',
    category: 'Ekonomi',
    excerpt: 'Aliran modal asing ke SBN mencapai Rp12 triliun dalam sepekan, mendorong penguatan rupiah ke level terbaik 2026.',
    content: [
      'Nilai tukar rupiah menguat ke level Rp15.800 per dolar AS, level terbaik sepanjang 2026.',
      'Penguatan dipicu arus modal masuk ke Surat Berharga Negara yang mencapai Rp12 triliun dalam sepekan.',
      'Bank Indonesia menegaskan akan terus menjaga stabilitas lewat intervensi terukur dan pendalaman pasar.',
      'Eksportir diimbau melakukan hedging untuk memitigasi risiko pembalikan arah.'
    ],
    quote: 'Stabilitas adalah fondasi kepercayaan pasar.',
    image: 'https://picsum.photos/seed/ekonomi-rupiah/800/500',
    author: 'Sinta Maharani',
    authorRole: 'Analis Ekonomi',
    date: '2026-09-22T15:00:00+07:00',
    readTime: 3,
    trending: false,
    featured: false,
    tags: ['rupiah', 'dolar', 'kurs']
  },
  {
    id: 18,
    title: 'Panduan Meal Prep 5 Hari: Hemat Rp500 Ribu per Minggu Tanpa Ribet',
    category: 'Lifestyle',
    excerpt: 'Resep 30 menit, daftar belanja cerdas, dan trik penyimpanan agar makanan tetap segar hingga hari kelima.',
    content: [
      'Meal prep 5 hari bisa menghemat hingga Rp500 ribu per minggu. Kuncinya: menu berulang dengan variasi bumbu.',
      'Siapkan protein (ayam, telur, tempe), karbo (nasi merah, kentang), dan 3 jenis sayur yang tahan lama.',
      'Gunakan wadah kaca kedap udara dan simpan saus terpisah agar tekstur terjaga hingga hari kelima.',
      'Panaskan dengan benar: suhu 75°C dan jangan panaskan ulang lebih dari sekali.'
    ],
    quote: 'Sehat tidak harus mahal — cukup terencana.',
    image: 'https://picsum.photos/seed/lifestyle-mealprep/800/500',
    author: 'Nadia Putri',
    authorRole: 'Editor Lifestyle',
    date: '2026-09-22T08:00:00+07:00',
    readTime: 5,
    trending: false,
    featured: false,
    tags: ['meal prep', 'hemat', 'sehat']
  }
];

const CATEGORIES = ['Nasional', 'Internasional', 'Teknologi', 'Ekonomi', 'Olahraga', 'Lifestyle', 'Politik'];

const BREAKING_NEWS = [
  'Pemerintah mengumumkan paket kebijakan ekonomi baru untuk UMKM',
  'Timnas Indonesia menang dramatis 2-1 di kualifikasi Piala Dunia',
  'IHSG tembus rekor tertinggi sepanjang sejarah',
  'Model AI terbaru mampu pahami 100 bahasa daerah'
];
