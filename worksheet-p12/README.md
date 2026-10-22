# Worksheet PABW Pertemuan 12 — Profil eFootball 2026

Aplikasi Vue 3 yang memigrasikan halaman profil P11 ke Vite tanpa menghapus aset dan sumber P11. Halaman menampilkan profil Nazrul Ilham Zatnika, proyek eFootball, filter kategori, formulir kontak, tema gelap, serta penyimpanan preferensi UI.

## Teknologi dan kebutuhan

- Node.js 22.23.1 dan npm 10.9.8 (lingkungan pengembangan)
- Vue 3.5.44 dan Vite 8.3.5

Instal dependensi bila folder `node_modules` belum ada:

```bash
npm install
```

Jalankan pengembangan di alamat yang ditampilkan Vite (umumnya `http://localhost:5173`):

```bash
npm run dev
```

Buat dan tinjau build produksi:

```bash
npm run build
npm run preview
```

## Struktur penting

- `src/App.vue`: induk halaman, state reaktif, navigasi, dan reset.
- `src/components/KepalaProfil.vue`: kepala profil berbasis props.
- `src/components/TombolFilter.vue`: tombol filter dan event `pilih`.
- `src/components/DaftarProyek.vue`: daftar hasil filter.
- `src/components/FormKontak.vue`: formulir dengan `v-model`, validasi HTML, dan umpan balik.
- `src/data.js`: data profil dan empat proyek asli.
- `src/state.js`: state awal, kategori aktif, dan fungsi perubahan state.
- `src/simpanan.js`: `localStorage` aman dengan kunci `pabw-p12` dan versi skema 1.
- CSS P11 di akar proyek: fondasi visual yang diimpor lewat `src/main.js`.

## State dan penyimpanan

State aplikasi memakai `reactive`, dengan daftar proyek, kategori aktif, dan pilihan tema. Hanya kategori dan tema yang disimpan; formulir kontak serta data rahasia tidak disimpan. JSON rusak, versi skema lain, atau nilai tidak valid dihapus dan aplikasi kembali ke nilai bawaan tanpa crash. Tombol reset mengembalikan state ke nilai awal.

Empat proyek tersedia pada data sumber, sementara profil lama memang mencatat enam proyek. Aplikasi menampilkan kedua angka secara eksplisit dan tidak menambahkan dua proyek fiktif.

## Pengujian manual

1. Klik **Semua**, **Web**, dan **Data**; jumlah item harus menjadi 4, 2, dan 2.
2. Kirim formulir kosong untuk melihat validasi bawaan browser; isi nama, email valid, dan pesan untuk melihat status berhasil.
3. Pilih kategori atau tema, muat ulang halaman, lalu pastikan pilihan bertahan.
4. Klik **Atur Ulang Tampilan** dan pastikan kategori kembali ke Semua serta tema terang.
5. Di DevTools jalankan `localStorage.setItem('pabw-p12', 'rusak')`, lalu muat ulang; aplikasi harus tetap berjalan dengan nilai bawaan.

## Catatan bantuan AI

Migrasi komponen Vue, state, penyimpanan, dan dokumentasi ini dibuat dengan bantuan AI berdasarkan aset serta data P11 yang tersedia. Mahasiswa perlu meninjau hasil akhir sebelum pengumpulan.
