<script setup>
import AlertApp from "./components/AlertApp.vue";
</script>

<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/profile">Perfil</router-link>
  </nav>
  <AlertApp />
  <router-view> </router-view>
</template>
