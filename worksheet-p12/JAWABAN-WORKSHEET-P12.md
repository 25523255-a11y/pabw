# Jawaban Worksheet PABW Pertemuan 12

> Catatan: berkas instruksi worksheet khusus P12 tidak ditemukan di workspace; jawaban berikut didasarkan pada daftar pertanyaan dalam tugas.

1. **`dependencies` dan `devDependencies`:** `dependencies` diperlukan aplikasi saat dijalankan, contohnya `vue` 3.5.44. `devDependencies` diperlukan untuk pengembangan/build, contohnya `vite` 8.3.4 dan `@vitejs/plugin-vue` 6.0.10.
2. **`package-lock.json` disimpan, `node_modules` tidak:** lockfile mengunci versi paket dan integritasnya agar instalasi setiap mesin konsisten. `node_modules` dapat dibangun ulang melalui `npm install`, berukuran besar, dan bergantung pada platform.
3. **`npm create vite@latest . -- --template vue`:** perintah menjalankan generator Vite terbaru, meneruskan opsi template Vue setelah `--`, dan titik berarti membuat proyek pada direktori saat ini.
4. **Template Vue dan state reaktif:** template mendeskripsikan UI deklaratif; saat state reaktif berubah, Vue memperbarui bagian DOM terkait. Ini menggantikan pembuatan elemen, pengosongan daftar, dan pemanggilan render manual seperti pada P11.
5. **Props dan aliran data satu arah:** props mengalir dari induk ke anak, misalnya `App.vue` mengirim data `profil` ke `KepalaProfil.vue`. Anak tidak mengubah props; anak mengirim event untuk meminta perubahan di induk, seperti event `pilih` dari `TombolFilter.vue`.
6. **`npm run dev` dan `npm run preview`:** `dev` menjalankan server pengembangan dengan pembaruan cepat. `preview` menyajikan hasil produksi yang sudah dibuat di `dist`, sehingga `npm run build` harus dijalankan dahulu.
7. **`dist` tidak perlu di Git:** Vite dapat menghasilkan ulang `dist` dari source dan lockfile; memasukkannya membuat riwayat Git besar serta mudah tidak sinkron.
8. **Refleksi:** Saya memahami bahwa komponen, props, event, dan state reaktif membuat kode profil lebih terstruktur daripada manipulasi DOM manual.
