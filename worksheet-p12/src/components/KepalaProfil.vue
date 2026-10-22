<script setup>
defineProps({ profil: { type: Object, required: true } })
</script>

<template>
  <header><h1>Profil eFootball 2026 Saya</h1><p>Nama: {{ profil.nama }}</p><p>NIM: {{ profil.nim }}</p><p>Game favorit: {{ profil.gameFavorit }}</p><p>{{ profil.peran }}</p></header>
</template>
