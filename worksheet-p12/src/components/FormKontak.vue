<script setup>
import { reactive, ref } from 'vue'
const formulir = reactive({ nama: '', email: '', pesan: '' })
const terkirim = ref(false)
function kirim() { if (!formulir.nama.trim() || !formulir.email.trim() || !formulir.pesan.trim()) return; terkirim.value = true; Object.assign(formulir, { nama: '', email: '', pesan: '' }) }
</script>

<template><section id="kontak"><h2>Kontak</h2><form @submit.prevent="kirim"><div><label for="nama">Nama</label><input id="nama" v-model.trim="formulir.nama" type="text" required autocomplete="name" /></div><div><label for="email">Email</label><input id="email" v-model.trim="formulir.email" type="email" required autocomplete="email" /></div><div><label for="pesan">Pesan</label><textarea id="pesan" v-model.trim="formulir.pesan" required rows="4" /></div><button type="submit">Kirim Pesan</button><p v-if="terkirim" class="pesan-sukses" role="status">Pesan berhasil diterima. Terima kasih sudah menghubungi saya.</p></form></section></template>
