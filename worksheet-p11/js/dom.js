// DOM helpers and rendering only. Event listeners are installed in js/events.js

const wadah = document.querySelector("#daftar");
const filterContainer = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const form = document.querySelector("form");
const tombolSubmit = form ? form.querySelector('button[type="submit"]') : null;
const inputWajib = form ? Array.from(form.querySelectorAll("input[required]")) : [];

const buatKartu = (proyek) => {
  const item = document.createElement("li");
  item.className = "proyek-item";
  item.textContent = `${proyek.judul} (${proyek.tahun})${proyek.selesai ? " — Selesai" : " — Belum selesai"}`;
  return item;
};

const saring = (state, daftarProyek) => {
  if (!Array.isArray(daftarProyek)) return [];

  const cat = state.kategori ?? "semua";

  let hasil = daftarProyek.filter((p) => (cat === "semua" ? true : p.kategori === cat));

  // urutan: 'default' leaves as-is, 'tahun-asc', 'tahun-desc'
  if (state.urutan === "tahun-asc") {
    hasil = [...hasil].sort((a, b) => a.tahun - b.tahun);
  } else if (state.urutan === "tahun-desc") {
    hasil = [...hasil].sort((a, b) => b.tahun - a.tahun);
  }

  return hasil;
};

const renderFilterButtons = (state) => {
  if (!filterContainer) return;

  const tombolFilter = filterContainer.querySelectorAll("button[data-kategori]");
  tombolFilter.forEach((btn) => {
    const kat = btn.dataset.kategori;
    btn.classList.toggle("aktif", kat === (state.kategori ?? "semua"));
  });
};

const render = (state, { profil, daftarProyek }) => {
  // header and tentang sections (profile data) - idempotent
  const headerNama = document.getElementById("header-nama");
  const headerNim = document.getElementById("header-nim");
  const headerGame = document.getElementById("header-game");
  const tentangNama = document.getElementById("tentang-nama");
  const tentangNim = document.getElementById("tentang-nim");
  const tentangGame = document.getElementById("tentang-game");
  const tentangFormasi = document.getElementById("tentang-formasi");

  if (headerNama) headerNama.textContent = `Nama: ${profil.nama}`;
  if (headerNim) headerNim.textContent = `NIM: ${profil.nim}`;
  if (headerGame) headerGame.textContent = `Game favorit: ${profil.gameFavorit}`;

  if (tentangNama) tentangNama.textContent = `Nama: ${profil.nama}`;
  if (tentangNim) tentangNim.textContent = `NIM: ${profil.nim}`;
  if (tentangGame) tentangGame.textContent = `Game favorit: ${profil.gameFavorit}`;
  if (tentangFormasi) tentangFormasi.textContent = `Formasi favorit: ${profil.formasiFavorit}`;

  // projects
  if (!wadah) return;

  const hasil = saring(state, daftarProyek);

  wadah.textContent = "";

  if (!hasil || hasil.length === 0) {
    if (pesanKosong) pesanKosong.hidden = false;
    renderFilterButtons(state);
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  const frag = document.createDocumentFragment();
  hasil.forEach((p) => frag.appendChild(buatKartu(p)));
  wadah.appendChild(frag);

  renderFilterButtons(state);
};

// Validation helpers (no listeners here)
const tampilkanError = (input, pesan) => {
  const field = input.closest("div");
  if (!field) return;

  let pesanError = field.querySelector(".error-message");
  if (!pesanError) {
    pesanError = document.createElement("small");
    pesanError.className = "error-message";
    pesanError.style.color = "#dc2626";
    pesanError.style.display = "block";
    pesanError.style.marginTop = "0.25rem";
    field.appendChild(pesanError);
  }
  pesanError.textContent = pesan;
};

const hapusError = (input) => {
  const field = input.closest("div");
  if (!field) return;
  const pesanError = field.querySelector(".error-message");
  if (pesanError) pesanError.remove();
};

const validasiInput = (input) => {
  const value = input.value.trim();
  let valid = true;
  let pesan = "";

  if (!value) {
    valid = false;
    pesan = `${input.labels?.[0]?.textContent ?? "Kolom"} wajib diisi.`;
  } else if (input.id === "rating-pemain") {
    const rating = Number(value);
    if (!Number.isFinite(rating) || rating < 1 || rating > 110) {
      valid = false;
      pesan = "Rating harus antara 1 dan 110.";
    }
  }

  if (valid) {
    input.removeAttribute("aria-invalid");
    hapusError(input);
  } else {
    input.setAttribute("aria-invalid", "true");
    tampilkanError(input, pesan);
  }

  return valid;
};

const updateStatusSubmit = () => {
  if (!tombolSubmit) return;

  const semuaValid = inputWajib.every((input) => {
    const value = input.value.trim();
    if (!value) return false;
    if (input.id === "rating-pemain") {
      const rating = Number(value);
      return Number.isFinite(rating) && rating >= 1 && rating <= 110;
    }
    return true;
  });

  tombolSubmit.disabled = !semuaValid;
};

export {
  render,
  saring,
  buatKartu,
  validasiInput,
  updateStatusSubmit,
  filterContainer,
  form,
  inputWajib,
  tombolSubmit,
};
