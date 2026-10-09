const profil = {
  nama: "Nazrul Ilham Zatnika",
  nim: "25523255",
  gameFavorit: "eFootball 2026",
  peran: "Penggemar eFootball 2026",
  formasiFavorit: "4-2-2-2",
  keahlian: ["Strategi Formasi", "Analisis Pemain", "Manajemen Tim", "Eksekusi Taktik"],
  jumlahProyek: 6,
};

export const daftarProyek = [
  {
    judul: "Build Team eFootball 2026",
    tahun: 2026,
    selesai: true,
    kategori: "web",
  },
  {
    judul: "Formasi 4-2-2-2 Versus Tim Serang",
    tahun: 2026,
    selesai: true,
    kategori: "web",
  },
  {
    judul: "Pemain Favorit di Dream Team",
    tahun: 2025,
    selesai: false,
    kategori: "data",
  },
  {
    judul: "Strategi Menyerang dengan AMF",
    tahun: 2026,
    selesai: true,
    kategori: "data",
  },
];

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const headerNama = document.getElementById("header-nama");
const headerNim = document.getElementById("header-nim");
const headerGame = document.getElementById("header-game");

if (headerNama !== null) {
  headerNama.textContent = `Nama: ${profil.nama}`;
}

if (headerNim !== null) {
  headerNim.textContent = `NIM: ${profil.nim}`;
}

if (headerGame !== null) {
  headerGame.textContent = `Game favorit: ${profil.gameFavorit}`;
}

const tentangNama = document.getElementById("tentang-nama");
const tentangNim = document.getElementById("tentang-nim");
const tentangGame = document.getElementById("tentang-game");
const tentangFormasi = document.getElementById("tentang-formasi");

if (tentangNama !== null) {
  tentangNama.textContent = `Nama: ${profil.nama}`;
}

if (tentangNim !== null) {
  tentangNim.textContent = `NIM: ${profil.nim}`;
}

if (tentangGame !== null) {
  tentangGame.textContent = `Game favorit: ${profil.gameFavorit}`;
}

if (tentangFormasi !== null) {
  tentangFormasi.textContent = `Formasi favorit: ${profil.formasiFavorit}`;
}

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);
const proyekDitemukan = daftarProyek.find(
  (proyek) => proyek.judul === "Formasi 4-2-2-2 Versus Tim Serang"
);
const proyekTerurut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);

console.log("Perkenalan:", buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian ?? []));
console.table(profil.keahlian ?? []);
console.table(daftarProyek);
console.table(proyekSelesai);
console.log("Proyek ditemukan:", proyekDitemukan);
console.log("Proyek terurut:", proyekTerurut);

const jumlahProyek = profil.jumlahProyek ?? 0;
console.log("Jumlah proyek:", jumlahProyek);

export { profil, buatPerkenalan, formatKeahlian, judulProyek, proyekSelesai, proyekDitemukan, proyekTerurut, jumlahProyek };
