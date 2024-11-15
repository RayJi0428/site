<script setup lang="ts">
import {
  ElAside,
  ElButton,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
  ElScrollbar,
} from 'element-plus'
import NavbarView from './layout/NavbarView.vue'
import SideBarView from './layout/SidebarView.vue'
</script>

<template>
  <div>
    <NavbarView />
    <ElRow>
      <SideBarView />
      <RouterView />
    </ElRow>
  </div>
</template>

<style></style>
