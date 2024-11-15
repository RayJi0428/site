<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
  >
    <!--sub-menu-template------------------------------------------------------------>
    <!-- <el-sub-menu index="1">
      <template #title>
        <img
          width="20"
          src="https://element-plus.org//images/element-plus-logo-small.svg"
        />
        <span>Element+</span>
      </template>
    </el-sub-menu> -->
    <!--首頁------------------------------------------------------------------------------>
    <el-menu-item index="/">
      <i class="fa-solid fa-house"></i>
      <template #title>
        <span>Home</span>
      </template>
    </el-menu-item>
    <!--element-plus-------------------------------------------------------------------->
    <el-menu-item index="element_plus">
      <img
        width="20"
        src="https://element-plus.org//images/element-plus-logo-small.svg"
      />
      <template #title>
        <span>Element+</span>
      </template>
    </el-menu-item>
    <!--loadash------------------------------------------------------------------------>
    <el-menu-item index="loadash">
      <img width="20" src="https://lodash.com/icons/favicon-32x32.png" />
      <template #title>Loadash</template>
    </el-menu-item>
    <!--開關箭頭-->
    <el-menu-item index="arrow">
      <el-icon v-if="!isCollapse"><DArrowLeft /></el-icon>
      <el-icon v-if="isCollapse"><DArrowRight /></el-icon>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  DArrowLeft,
  DArrowRight,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import router from '@/router'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)

  if (key === 'arrow') {
    isCollapse.value = !isCollapse.value
  } else {
    router.push(key)
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 120px;
  min-height: 400px;
}
</style>
