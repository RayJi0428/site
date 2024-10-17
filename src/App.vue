<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavbarView from './views/NavbarView.vue'
</script>

<template>
  <div>
    <NavbarView />
  </div>
  <br />
  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
