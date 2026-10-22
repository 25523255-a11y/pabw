<script setup>
defineProps({ kategoriAktif: { type: String, required: true } })
const emit = defineEmits(['pilih'])
const kategori = [{ nilai: 'semua', label: 'Semua' }, { nilai: 'web', label: 'Web' }, { nilai: 'data', label: 'Data' }]
</script>

<template><div id="filter" aria-label="Filter daftar proyek"><button v-for="item in kategori" :key="item.nilai" type="button" :class="{ aktif: kategoriAktif === item.nilai }" :aria-pressed="kategoriAktif === item.nilai" @click="emit('pilih', item.nilai)">{{ item.label }}</button></div></template>
