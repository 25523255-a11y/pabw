<script setup>
import { computed } from 'vue'
const props = defineProps({ proyek: { type: Array, required: true }, kategoriAktif: { type: String, required: true } })
const proyekTersaring = computed(() => props.kategoriAktif === 'semua' ? props.proyek : props.proyek.filter((item) => item.kategori === props.kategoriAktif))
</script>

<template><ul v-if="proyekTersaring.length" id="daftar" aria-live="polite"><li v-for="item in proyekTersaring" :key="item.id" class="proyek-item"><strong>{{ item.judul }}</strong><span>{{ item.tahun }} · {{ item.kategori }}</span><span :class="item.selesai ? 'status-selesai' : 'status-belum'">{{ item.selesai ? 'Selesai' : 'Belum selesai' }}</span></li></ul><p v-else id="pesan-kosong" aria-live="polite">Tidak ada proyek pada kategori itu.</p></template>
