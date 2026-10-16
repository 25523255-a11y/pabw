// state.js - single source of truth for mutable UI state

const STORAGE_KEY = "pabw-p11";
const SCHEMA_VERSION = 2;

export const defaultState = Object.freeze({
  kategori: "semua",
  urutan: "default", // options: default | tahun-asc | tahun-desc
  schemaVersion: SCHEMA_VERSION,
});

let state = { ...defaultState };

let renderCallback = null;

export function getState() {
  return { ...state };
}

export function replaceState(newState) {
  state = { ...defaultState, ...newState, schemaVersion: SCHEMA_VERSION };
  persist();
  if (typeof renderCallback === "function") renderCallback(getState());
}

export function setKategori(kategori) {
  state = { ...state, kategori };
  persist();
  if (typeof renderCallback === "function") renderCallback(getState());
}

export function setUrutan(urutan) {
  state = { ...state, urutan };
  persist();
  if (typeof renderCallback === "function") renderCallback(getState());
}

export function resetState() {
  state = { ...defaultState };
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // ignore storage errors
  }
  if (typeof renderCallback === "function") renderCallback(getState());
}

export function onChange(fn) {
  renderCallback = fn;
}

export function persist() {
  // Only persist non-sensitive UI choices and schema version
  const toSave = {
    schemaVersion: SCHEMA_VERSION,
    kategori: state.kategori,
    urutan: state.urutan,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    // ignore storage errors (quota, disabled, etc.)
    console.warn("Gagal menyimpan state:", e);
  }
}

export function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.schemaVersion !== SCHEMA_VERSION) {
      // version mismatch or invalid, remove and return null
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch (e) {
    // corrupted JSON
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e2) {}
    return null;
  }
}
