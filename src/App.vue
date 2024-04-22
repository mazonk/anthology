<template>
  <div class="app">
    <Menu /> <!-- Include the Menu component directly -->
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1; /* Take up remaining vertical space */
  padding-top: 100vw; /* Adjust the value according to your header's height */
  overflow-y: auto; /* Enable vertical scrolling when content overflows */
}
</style>
