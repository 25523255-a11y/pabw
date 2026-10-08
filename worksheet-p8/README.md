# Worksheet P8: JavaScript Modern ES6+, Struktur Data, dan Array Methods

Pengembangan halaman profil Pertemuan 6 dengan menambahkan JavaScript modern ES6+ sesuai persyaratan Worksheet P8.

## Struktur Proyek

```
worksheet-p8/
├── profil.html          # Halaman utama
├── js/
│   └── app.js          # Modul JavaScript ES6+
├── game-saya.webp      # Gambar halaman
├── base.css            # CSS dasar
├── komponen.css        # CSS komponen
├── layout.css          # CSS layout
├── tema.css            # CSS tema
├── responsif.css       # CSS responsif
├── tokens.css          # CSS tokens
└── README.md           # Dokumentasi ini
```

## Cara Menjalankan

1. Buka terminal di folder proyek:
   ```bash
   cd /Users/masbro/Documents/pabw/worksheet-p8
   ```

2. Jalankan server lokal (Python 3):
   ```bash
   python3 -m http.server 8000
   ```

3. Buka browser dan akses:
   ```
   http://localhost:8000/profil.html
   ```

4. Buka Developer Tools (F12 atau Cmd+Option+I) dan lihat Console untuk output kode.

## Fitur yang Dikembangkan

### A. Struktur JavaScript Modern (ES6+)

- ✅ Folder `js/` dengan file `js/app.js`
- ✅ Script module di `profil.html`:
  ```html
  <script type="module" src="js/app.js"></script>
  ```
- ✅ Tidak menggunakan `var`, hanya `const` dan `let`
- ✅ Tidak menggunakan library tambahan, hanya vanilla JavaScript

### B. Data dalam JavaScript

Data profil dan proyek disimpan sebagai `const` di JavaScript, bukan hard-code di HTML:

```javascript
const profil = {
  nama: "Nazrul Ilham Zatnika",
  nim: "25523255",
  gameFavorit: "eFootball 2026",
  peran: "Penggemar eFootball 2026",
  formasiFavorit: "4-2-2-2",
  keahlian: ["Strategi Formasi", "Analisis Pemain", "Manajemen Tim", "Eksekusi Taktik"],
  jumlahProyek: 6,
};

const daftarProyek = [
  { judul: "...", tahun: 2026, selesai: true },
  // ... proyek lainnya
];
```

Data halaman diisi secara dinamis dari JavaScript ke DOM.

### C. Fungsi Murni

Dua fungsi murni yang memenuhi kriteria:

1. **`buatPerkenalan`**: Membuat kalimat perkenalan dari object profil
   - Menerima data melalui parameter dengan destructuring
   - Mengembalikan string template literal
   - Tidak mengubah data di luar fungsi

2. **`formatKeahlian`**: Memformat daftar keahlian menjadi satu baris
   - Menerima array sebagai parameter
   - Mengembalikan string dengan separator `·`
   - Tidak mengubah array asli

### D. Array Methods: map, filter, find

Semua method digunakan sesuai persyaratan:

```javascript
// map: mengubah setiap data proyek menjadi judul saja
const judulProyek = daftarProyek.map((proyek) => proyek.judul);

// filter: mengambil hanya proyek yang sudah selesai
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);

// find: mencari satu proyek berdasarkan judul
const proyekDitemukan = daftarProyek.find(
  (proyek) => proyek.judul === "Formasi 4-2-2-2 Versus Tim Serang"
);

// Sorting tanpa mengubah array asli
const proyekTerurut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);
```

### E. Modern JavaScript Standards

- ✅ Template literal dengan format `` `${...}` ``
- ✅ Operator perbandingan ketat: `===` dan `!==`
- ✅ Nullish coalescing: `??` untuk nilai bawaan
- ✅ Optional chaining: `?.` untuk aman mengakses properti
- ✅ Arrow function: `() => {}`
- ✅ Destructuring: `{ nama, peran }`
- ✅ Spread operator: `[...daftarProyek]`

### F. Output Console

Saat halaman dibuka, Console menampilkan:

- Hasil `buatPerkenalan(profil)`
- Hasil `formatKeahlian(profil.keahlian)`
- Tabel keahlian dengan `console.table()`
- Tabel semua proyek dengan `console.table()`
- Tabel proyek selesai dengan `console.table()`
- Proyek ditemukan dengan `console.log()`

## Desain dan Fitur Halaman

Desain, CSS, layout, dan fitur dari Pertemuan 6 tetap dipertahankan:

- ✅ Header dengan informasi profil
- ✅ Navigasi dengan toggle tema gelap
- ✅ Section Detail Akun dengan tabel dan gambar
- ✅ Section Pemain Favorit
- ✅ Section Tambah Pemain (form)
- ✅ Section Tentang Saya
- ✅ Footer

Data identitas, nim, game favorit, dan formasi sekarang diisi dari JavaScript.

## Dokumentasi Per Baris

Semua kode di `js/app.js` ditulis sederhana dan dapat dijelaskan baris demi baris tanpa kesulitan.

Tidak ada kode yang tidak diperlukan atau fitur tambahan yang melebihi persyaratan Worksheet P8.

## Verifikasi Persyaratan Worksheet P8

### Checklist Lengkap

- ✅ A: Struktur proyek dengan folder `js/` dan script module
- ✅ B: Data profil sebagai `const` di JavaScript dengan minimal 3 keahlian dan jumlah proyek
- ✅ C: Dua fungsi murni dengan kriteria lengkap:
  - `buatPerkenalan({ nama, peran })` - membuat perkenalan dari object profil
  - `formatKeahlian(daftar)` - memformat array keahlian dengan separator `·`
- ✅ D: Array methods digunakan sesuai persyaratan:
  - `map` - mengambil judul setiap proyek
  - `filter` - mengambil proyek yang selesai (`selesai === true`)
  - `find` - mencari proyek berdasarkan judul
  - Sorting menggunakan spread operator: `[...daftarProyek].sort(...)`
- ✅ E: Debugging tanpa error di Console
- ✅ F: Script module hanya satu kali sebelum `</body>`
- ✅ Modern JavaScript Standards: `const`, template literal, `===`, `???`, `?.`, arrow function, destructuring, spread operator
- ✅ Desain Pertemuan 6 tetap dipertahankan (CSS, layout, warna, fitur halaman)
- ✅ Tidak menggunakan `var`
- ✅ JavaScript vanilla, tanpa library atau framework
- ✅ Kode sederhana dan dapat dijelaskan baris demi baris
- ✅ Konsol menampilkan output `buatPerkenalan`, `formatKeahlian`, dan hasil array methods dengan `console.table()` dan `console.log()`

## Catatan Bantuan AI dan Pekerjaan Manual

### Bagian yang Dibantu AI

AI membantu dalam:
- Membuat struktur folder `js/` dan file `js/app.js`
- Menulis data `profil` dan `daftarProyek` sesuai template yang diberikan
- Menulis kedua fungsi murni (`buatPerkenalan` dan `formatKeahlian`)
- Menulis array methods (`map`, `filter`, `find`, `sort`)
- Menulis console output untuk debugging
- Memodifikasi HTML dengan mengganti teks hard-code menjadi id placeholder (`id="header-nama"`, dll)
- Menambahkan script module ke `profil.html`
- Membuat README.md ini dengan dokumentasi lengkap

### Bagian yang Dikerjakan Manual

Anda (pemilik konter) telah:
- Mempersiapkan halaman profil dan CSS dari Pertemuan 6 sebelumnya
- Menentukan identitas profil yang digunakan (Nazrul Ilham Zatnika, NIM 25523255, eFootball 2026)
- Menentukan keahlian dan daftar proyek yang relevan  
- Menentukan konsep dan aturan Worksheet P8 yang harus diikuti
- Melakukan review dan verifikasi bahwa semua persyaratan terpenuhi
- Memvalidasi kode bekerja dengan benar di browser

### Filosofi Implementasi

Kode yang dibuat:
- Sederhana dan tidak ada fitur berlebihan
- Hanya menggunakan apa yang diperlukan Worksheet P8
- Dapat dijelaskan baris demi baris tanpa kesulitan
- Menghormati desain dan fitur Pertemuan 6 yang sudah ada

---

**Dibuat untuk:** PABW Pertemuan 8 - JavaScript Modern ES6+, Struktur Data, dan Array Methods  
**Nama Mahasiswa:** Nazrul Ilham Zatnika  
**NIM:** 25523255  
**Tanggal:** 8 Oktober 2026
