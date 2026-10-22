import { KATEGORI_VALID } from './state.js'

export const KUNCI_PENYIMPANAN = 'pabw-p12'
export const VERSI_SKEMA = 1

function valid(data) { return data && data.versiSkema === VERSI_SKEMA && KATEGORI_VALID.includes(data.kategoriAktif) && typeof data.temaGelap === 'boolean' }
export function muat() {
  try {
    const mentah = localStorage.getItem(KUNCI_PENYIMPANAN)
    if (!mentah) return null
    const data = JSON.parse(mentah)
    if (valid(data)) return data
    localStorage.removeItem(KUNCI_PENYIMPANAN)
  } catch { try { localStorage.removeItem(KUNCI_PENYIMPANAN) } catch { /* penyimpanan tidak tersedia */ } }
  return null
}
export function simpan({ kategoriAktif, temaGelap }) { try { localStorage.setItem(KUNCI_PENYIMPANAN, JSON.stringify({ versiSkema: VERSI_SKEMA, kategoriAktif, temaGelap })) } catch { /* aplikasi tetap berjalan */ } }
export function aturUlang() { try { localStorage.removeItem(KUNCI_PENYIMPANAN) } catch { /* penyimpanan tidak tersedia */ } }
