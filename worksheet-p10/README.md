# Worksheet P10 - JavaScript Asinkron

## Deskripsi

Proyek ini memuat halaman profil P9 dan menambahkan integrasi data asinkron menggunakan API publik `JSONPlaceholder` untuk menampilkan notisia di elemen `#daftar`.

## API yang digunakan

- `https://jsonplaceholder.typicode.com/posts`
- Metode: `fetch()`
- Menggunakan `async/await`, `try/catch`, pengecekan `respons.ok`, dan penanganan error di halaman.

## Cara menjalankan

1. Buka terminal di folder proyek.
2. Jalankan server lokal:
   ```bash
   cd /Users/masbro/Documents/pabw/worksheet-p10
   python3 -m http.server 8000
   ```
3. Buka browser ke:
   ```text
   http://localhost:8000/profil.html
   ```

## Struktur file utama

- `profil.html` : halaman utama yang dipertahankan dari P9.
- `base.css` : layout dasar dan styling tetap.
- `layout.css`, `komponen.css`, `tema.css`, `tokens.css`, `responsif.css` : file CSS tetap dari P9.
- `js/app.js` : data profil dan proyek yang dipertahankan dari P9.
- `js/dom.js` : logika rendering elemen halaman dan status antarmuka.
- `js/api.js` : modul untuk mengambil data dari API publik.

## Bagian yang dibantu AI

- Penyusunan struktur modul `js/api.js`.
- Penulisan fungsi `ambilNotisia()` dengan `async/await` dan penanganan `try/catch`.
- Integrasi rendering status halaman (`memuat`, `berhasil`, `gagal`, `kosong`).
- Penjelasan dan validasi logika error handling.

## Bagian yang saya kerjakan sendiri

- Menjaga desain dan struktur semula dari P9.
- Memastikan kode lama tetap aman dan tidak dihapus.
- Menyusun halaman agar data API tampil sesuai kebutuhan worksheet.
- Melakukan pengecekan manual pada hasil yang ditampilkan di browser dan console.

## Pengungkapan Penggunaan AI

Saya secara jujur mencatat bahwa AI membantu dalam beberapa bagian berikut:

- Membantu merancang struktur file dan modul `js/api.js` untuk integrasi API publik.
- Membantu menulis fungsi `ambilNotisia()` dengan pola `async/await`, pengecekan `respons.ok`, dan `try/catch`.
- Membantu menyusun logika status halaman (`memuat`, `berhasil`, `gagal`, dan `kosong`) agar lebih rapi dan konsisten.
- Membantu mengecek kemungkinan error handling dan pola penulisan kode JavaScript yang benar.

Bagian yang saya kerjakan sendiri adalah:

- Menjaga file P9 tetap utuh, termasuk desain, layout, dan kode yang sudah berfungsi.
- Memastikan halaman tetap menggunakan struktur HTML dan CSS yang sudah ada.
- Meninjau ulang isi proyek dan mengarahkan penggunaan API sesuai kebutuhan worksheet P10.
- Menentukan cara rendering data di halaman dengan `createElement()` dan `textContent` agar sesuai dengan tugas.
- Melakukan pengecekan manual terhadap hasil kerja dan menuliskan dokumentasi README ini.

## Pernyataan

Saya menyatakan bahwa README ini dibuat berdasarkan hasil kerja yang saya lakukan pada Worksheet P10. Saya telah berupaya menjaga integritas proyek, tidak menghapus fitur P9 yang sudah berfungsi, dan menyampaikan penggunaan AI secara jujur sesuai dengan bagian yang benar-benar dibantu serta bagian yang dikerjakan sendiri.

## Catatan

- Halaman tetap menggunakan file CSS dan struktur HTML dari P9.
- Data API dipanggil dari sumber publik tanpa API key.
- Tidak ada commit/push dilakukan sebelum pemeriksaan hasil selesai.
