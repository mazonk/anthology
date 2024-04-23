<template>
  <div class="app">
    <div class="image-container">
      <img src="@/assets/header.jpg" alt="About Image" ref="aboutImage" />
    </div>
    <Menu />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
import { gsap } from 'gsap';
import { onBeforeRouteLeave } from 'vue-router';
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding-top: 10vw;
  overflow-y: auto;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
}

.image-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw; /* Take up the full width of the viewport */
  height: 100vh; /* Take up the full height of the viewport */
  z-index: -1; /* Ensure the image is behind other content */
}

.image-container img {
  width: 100%; /* Make sure the image fills the container */
  height: 100%; /* Make sure the image fills the container */
  object-fit: cover; /* Maintain aspect ratio and cover the entire container */
}
</style>
