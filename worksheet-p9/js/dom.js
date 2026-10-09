import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const filter = document.querySelector("#filter");
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

const render = (daftar) => {
  if (!wadah) {
    return;
  }

  wadah.textContent = "";

  if (!Array.isArray(daftar) || daftar.length === 0) {
    if (pesanKosong) {
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) {
    pesanKosong.hidden = true;
  }

  const fragmen = document.createDocumentFragment();

  daftar.forEach((proyek) => {
    fragmen.appendChild(buatKartu(proyek));
  });

  wadah.appendChild(fragmen);
};

if (filter) {
  filter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol) {
      return;
    }

    const kategori = tombol.dataset.kategori;
    const tombolFilter = filter.querySelectorAll("button[data-kategori]");

    tombolFilter.forEach((btn) => {
      btn.classList.toggle("aktif", btn === tombol);
    });

    if (!kategori) {
      return;
    }

    const hasil = daftarProyek.filter((proyek) => {
      return kategori === "semua" ? true : proyek.kategori === kategori;
    });

    render(hasil);
  });
}

render(daftarProyek);

const tampilkanError = (input, pesan) => {
  const field = input.closest("div");

  if (!field) {
    return;
  }

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

  if (!field) {
    return;
  }

  const pesanError = field.querySelector(".error-message");

  if (pesanError) {
    pesanError.remove();
  }
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
  if (!tombolSubmit) {
    return;
  }

  const semuaValid = inputWajib.every((input) => {
    const value = input.value.trim();

    if (!value) {
      return false;
    }

    if (input.id === "rating-pemain") {
      const rating = Number(value);
      return Number.isFinite(rating) && rating >= 1 && rating <= 110;
    }

    return true;
  });

  tombolSubmit.disabled = !semuaValid;
};

if (form) {
  inputWajib.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        validasiInput(input);
      }
      updateStatusSubmit();
    });

    input.addEventListener("blur", () => {
      validasiInput(input);
      updateStatusSubmit();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let kolomPertamaTidakValid = null;

    inputWajib.forEach((input) => {
      const valid = validasiInput(input);

      if (!valid && !kolomPertamaTidakValid) {
        kolomPertamaTidakValid = input;
      }
    });

    if (kolomPertamaTidakValid) {
      kolomPertamaTidakValid.focus();
      return;
    }

    alert("Pemain favorit berhasil ditambahkan!");
    form.reset();
    inputWajib.forEach((input) => {
      input.removeAttribute("aria-invalid");
      hapusError(input);
    });
    updateStatusSubmit();
  });
}

updateStatusSubmit();
