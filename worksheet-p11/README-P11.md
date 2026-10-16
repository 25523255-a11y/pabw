README - PABW Worksheet P11

Ringkasan perubahan (P11 - Modul, State, Penyimpanan Klien)

- Bagian yang dibuat oleh bantuan AI (GitHub Copilot):
  - `js/data.js` - menampung data `profil`, `daftarProyek`, dan fungsi murni `buatPerkenalan`, `formatKeahlian`.
  - `js/state.js` - single `state` object, setter bernama (`setKategori`, `setUrutan`, `resetState`), mekanisme penyimpanan `localStorage` dengan kunci `pabw-p11` dan schema version `2`, dan `onChange` untuk mendaftarkan renderer.
  - `js/dom.js` - hanya melakukan seleksi elemen DOM, fungsi `saring(state, data)`, `render(state, data)`, pembuatan kartu, dan helper validasi (tanpa memasang event listener).
  - `js/events.js` - memasang semua event listener (filter, form, tombol atur ulang). Perubahan state dilakukan melalui fungsi di `js/state.js`.
  - Modifikasi `js/app.js` menjadi perakit modul yang mengimpor modul-modul di atas, mendaftarkan callback render, memuat state awal dari `localStorage`, memanggil `render`, dan menginisialisasi event listeners.
  - Perubahan `profil.html`: hanya memuat satu pemanggil JS: `js/app.js` dan menambahkan tombol `Atur Ulang Tampilan` dengan id `reset-simpan`.

- Bagian yang saya (mahasiswa) kerjakan sendiri:
  - [Isi sesuai kenyataan: tuliskan bagian mana yang Anda ubah secara manual jika ada]

Catatan pengujian dan cara menjalankan

1) Jalankan Live Server (mis. ekstensi Live Server di VS Code) pada folder proyek ini.
2) Buka `profil.html` di browser (http://127.0.0.1:5500/ atau alamat Live Server Anda).
3) Buka DevTools → Console untuk melihat log jika perlu.

Langkah pengujian fungsionalitas P11

- Menguji kategori:
  - Klik tombol filter `Semua`, `Web`, `Data` pada bagian Daftar Proyek.
  - Pastikan daftar proyek berubah sesuai kategori dan tombol aktif memiliki kelas `aktif`.

- Menguji tombol atur ulang:
  - Ubah pilihan kategori (mis. pilih `Data`), lalu muat ulang halaman — pilihan harus bertahan.
  - Klik `Atur Ulang Tampilan` untuk menghapus penyimpanan lokal dan mengembalikan ke nilai bawaan (`kategori: semua`).

- Menguji penyimpanan rusak dan versi skema lama:
  - Buka Console dan lakukan `localStorage.setItem('pabw-p11', 'not a json')` lalu muat ulang halaman: kode akan mendeteksi JSON rusak, menghapus penyimpanan, dan memakai nilai bawaan.
  - Untuk mensimulasikan versi skema lama, set `localStorage.setItem('pabw-p11', JSON.stringify({schemaVersion:1, kategori:'data', urutan:'default'}))` lalu muat ulang: penyimpanan lama akan dihapus dan diganti nilai bawaan.

Catatan keamanan

- Hanya pilihan tampilan yang disimpan (`kategori` dan `urutan`). Tidak ada token, kata sandi, atau data pribadi yang disimpan.

Jika Anda ingin, saya bisa:
- Menjalankan pengecekan file dan dependency lebih lanjut.
- Menjalankan Live Server dan mendemokan langkah pengujian (perlu konfirmasi untuk menjalankan perintah terminal).
