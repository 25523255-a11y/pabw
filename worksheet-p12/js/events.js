import * as dom from "./dom.js";
import * as state from "./state.js";

function initFilter() {
  const container = dom.filterContainer;
  if (!container) return;

  container.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");
    if (!tombol) return;
    const kategori = tombol.dataset.kategori;
    if (!kategori) return;
    // change state via setter
    state.setKategori(kategori);
  });
}

function initForm() {
  const form = dom.form;
  if (!form) return;

  dom.inputWajib.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") dom.validasiInput(input);
      dom.updateStatusSubmit();
    });

    input.addEventListener("blur", () => {
      dom.validasiInput(input);
      dom.updateStatusSubmit();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalid = null;
    dom.inputWajib.forEach((input) => {
      const valid = dom.validasiInput(input);
      if (!valid && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    alert("Pemain favorit berhasil ditambahkan!");
    form.reset();
    dom.inputWajib.forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
    dom.updateStatusSubmit();
  });

  // initial check
  dom.updateStatusSubmit();
}

function initReset() {
  const tombol = document.getElementById("reset-simpan");
  if (!tombol) return;
  tombol.addEventListener("click", () => {
    const ok = confirm("Reset pengaturan tampilan ke nilai bawaan? Ini akan menghapus penyimpanan lokal.");
    if (!ok) return;
    state.resetState();
    // after reset, state.resetState triggers a render via subscription
  });
}

export function init() {
  initFilter();
  initForm();
  initReset();
}

export default { init };
