<template>
    <div class="layout">
      <Menu />
      <router-view></router-view>
      <Footer />
    </div>
  </template>
  
  <script setup lang="ts">
  import Menu from './Menu.vue';
  import Footer from './Footer.vue';
  </script>
  
  <style scoped>
  .layout {
    /* Specify the local image path */
    background-image: url('@/assets/header.jpg');
    background-size: cover;
    background-position: center;
  }
  </style>
  