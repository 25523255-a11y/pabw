import { ambilNotisia } from "./api.js";

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

const muatNotisia = async () => {
  const wadah = document.querySelector("#daftar");
  const pesanKosong = document.querySelector("#pesan-kosong");

  if (!wadah) {
    return;
  }

  let status = document.getElementById("status-notisia");

  if (!status) {
    status = document.createElement("p");
    status.id = "status-notisia";
    status.className = "status-notisia";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    wadah.parentElement?.insertBefore(status, wadah);
  }

  status.textContent = "Memuat notisia...";
  wadah.textContent = "";

  if (pesanKosong) {
    pesanKosong.hidden = true;
    pesanKosong.textContent = "";
  }

  try {
    const data = await ambilNotisia();
    console.log(data);

    if (!Array.isArray(data) || data.length === 0) {
      wadah.textContent = "";

      if (pesanKosong) {
        pesanKosong.hidden = false;
        pesanKosong.textContent = "Belum ada notisia yang tersedia.";
      }

      status.textContent = "Tidak ada notisia yang tersedia.";
      return;
    }

    const fragmen = document.createDocumentFragment();

    data.forEach((post) => {
      const item = document.createElement("li");
      item.className = "proyek-item";

      const judul = document.createElement("strong");
      judul.textContent = post?.title ?? "Judul tidak tersedia";

      const isi = document.createElement("p");
      isi.textContent = post?.body ?? "Tidak ada isi notisia.";

      item.appendChild(judul);
      item.appendChild(isi);
      fragmen.appendChild(item);
    });

    wadah.textContent = "";
    wadah.appendChild(fragmen);

    if (pesanKosong) {
      pesanKosong.hidden = true;
      pesanKosong.textContent = "";
    }

    status.textContent = `Berhasil memuat ${data.length} notisia.`;
  } catch (error) {
    wadah.textContent = "";

    if (pesanKosong) {
      pesanKosong.hidden = false;
      pesanKosong.textContent = "Gagal memuat notisia. Silakan coba lagi.";
    }

    status.textContent = error instanceof Error ? error.message : "Gagal memuat notisia.";
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    void (async () => {
      try {
        await muatNotisia();
      } catch (error) {
        const wadah = document.querySelector("#daftar");
        const pesanKosong = document.querySelector("#pesan-kosong");

        if (wadah) {
          wadah.textContent = "";
        }

        if (pesanKosong) {
          pesanKosong.hidden = false;
          pesanKosong.textContent = "Gagal memuat notisia. Silakan coba lagi.";
        }
      }
    })();
  });
} else {
  try {
    await muatNotisia();
  } catch (error) {
    const wadah = document.querySelector("#daftar");
    const pesanKosong = document.querySelector("#pesan-kosong");

    if (wadah) {
      wadah.textContent = "";
    }

    if (pesanKosong) {
      pesanKosong.hidden = false;
      pesanKosong.textContent = "Gagal memuat notisia. Silakan coba lagi.";
    }
  }
}

export { profil, buatPerkenalan, formatKeahlian, judulProyek, proyekSelesai, proyekDitemukan, proyekTerurut, jumlahProyek };
