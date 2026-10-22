import { reactive } from 'vue'

export const KATEGORI_VALID = ['semua', 'web', 'data']

export function buatStateAwal(proyek) {
  return { proyek: Array.isArray(proyek) ? proyek.map((item) => ({ ...item })) : [], kategoriAktif: 'semua', temaGelap: false }
}

export function buatStateReaktif(proyek) { return reactive(buatStateAwal(proyek)) }
export function pilihKategori(state, kategori) { if (KATEGORI_VALID.includes(kategori)) state.kategoriAktif = kategori }
export function terapkanStateTersimpan(state, tersimpan) {
  if (!tersimpan) return
  pilihKategori(state, tersimpan.kategoriAktif)
  if (typeof tersimpan.temaGelap === 'boolean') state.temaGelap = tersimpan.temaGelap
}
export function aturUlangState(state, proyek) { Object.assign(state, buatStateAwal(proyek)) }
