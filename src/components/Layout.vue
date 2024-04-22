<template>
    <div class="layout">
      <!-- Include the Menu component -->
      <Menu />
      <!-- Your router view and footer -->
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
    /* Set the background image and position */
    background-image: url('path_to_your_image.jpg');
    background-size: cover;
    background-position: center;
    /* Add other styles for layout if needed */
  }
  </style>
  