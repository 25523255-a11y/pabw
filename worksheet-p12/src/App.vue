
<script setup>
import { computed, onMounted, reactive, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { daftarProyek, profil } from './data.js'
import { buatStateAwal, pilihKategori, terapkanStateTersimpan, aturUlangState } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

const state = reactive(buatStateAwal(daftarProyek))
const jumlahProyekTampil = computed(() => state.proyek.length)

function gantiKategori(kategori) { pilihKategori(state, kategori) }
function gantiTema() { state.temaGelap = !state.temaGelap }
function resetTampilan() {
  aturUlang()
  aturUlangState(state, daftarProyek)
}

onMounted(() => { terapkanStateTersimpan(state, muat()) })
watch(
  () => ({ kategori: state.kategoriAktif, temaGelap: state.temaGelap }),
  (nilaiBaru, nilaiLama) => { if (nilaiLama) simpan({ kategoriAktif: nilaiBaru.kategori, temaGelap: nilaiBaru.temaGelap }) },
  { deep: true },
)
</script>

<template>
  <div class="page" :class="{ 'tema-gelap': state.temaGelap }">
    <KepalaProfil :profil="profil" />
    <nav class="navbar" aria-label="Navigasi utama">
      <button class="tema-toggle" type="button" :aria-pressed="state.temaGelap" @click="gantiTema">
        {{ state.temaGelap ? '☀️ Tema terang' : '🌙 Tema gelap' }}
      </button>
      <ul>
        <li><a href="#detail-akun">Detail Akun</a></li><li><a href="#proyek-saya">Daftar Proyek</a></li>
        <li><a href="#pemain-favorit">Pemain Favorit</a></li><li><a href="#kontak">Kontak</a></li><li><a href="#tentang-saya">Tentang Saya</a></li>
      </ul>
    </nav>
    <main>
      <section id="detail-akun">
        <h2>Detail Akun eFootball 2026</h2>
        <figure><img src="/game-saya.webp" alt="Tampilan tim eFootball 2026 dengan susunan pemain" width="800" height="450" /><figcaption>Susunan tim saya di eFootball 2026.</figcaption></figure>
        <div class="table-wrap"><table><caption>Informasi akun eFootball 2026</caption><thead><tr><th>Informasi</th><th>Detail</th><th>Keterangan</th></tr></thead><tbody>
          <tr><th>Game</th><td>{{ profil.gameFavorit }}</td><td>Game sepak bola favorit</td></tr><tr><th>Formasi</th><td>{{ profil.formasiFavorit }}</td><td>Formasi utama</td></tr><tr><th>Klub Favorit</th><td>Manchester United</td><td>Klub yang saya sukai</td></tr><tr><th>Mode Favorit</th><td>Dream Team</td><td>Mode permainan yang sering dimainkan</td></tr>
        </tbody></table></div>
      </section>
      <section id="proyek-saya"><h2>Daftar Proyek</h2><p class="catatan-proyek">{{ jumlahProyekTampil }} proyek tersedia untuk ditampilkan. Profil mencatat {{ profil.jumlahProyek }} proyek.</p><TombolFilter :kategori-aktif="state.kategoriAktif" @pilih="gantiKategori" /><DaftarProyek :proyek="state.proyek" :kategori-aktif="state.kategoriAktif" /></section>
      <section id="pemain-favorit"><h2>Pemain Favorit</h2><div class="table-wrap"><table><caption>Pemain favorit saya di eFootball 2026</caption><thead><tr><th>Nama Pemain</th><th>Posisi</th><th>Rating</th><th>Alasan Favorit</th></tr></thead><tbody><tr><th>Lionel Messi</th><td>AMF</td><td>108</td><td>Dribbling dan kreativitas</td></tr><tr><th>Kylian Mbappé</th><td>CF</td><td>105</td><td>Kecepatan dan finishing</td></tr><tr><th>Kevin De Bruyne</th><td>AMF</td><td>105</td><td>Umpan dan visi permainan</td></tr></tbody></table></div></section>
      <FormKontak />
      <section id="tentang-saya"><h2>Tentang Saya</h2><p>Nama: {{ profil.nama }}</p><p>NIM: {{ profil.nim }}</p><p>Game favorit: {{ profil.gameFavorit }}</p><p>Formasi favorit: {{ profil.formasiFavorit }}</p><p>Keahlian: {{ profil.keahlian.join(' · ') }}</p><p>Saya menyukai eFootball 2026 karena menarik untuk menyusun tim, memilih pemain favorit, dan mencoba strategi pertandingan.</p></section>
    </main>
    <footer><p>© 2026 {{ profil.nama }} - {{ profil.nim }}</p><button type="button" @click="resetTampilan">Atur Ulang Tampilan</button></footer>
  </div>
</template>
