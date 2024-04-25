<template>
  <div class="contact">
    <Menu /> <!-- Include the Menu component directly -->
    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
    <!-- Add your contact form or other content here -->
    <Footer />
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'; // Adjust the path as per your project structure
import { onMounted } from 'vue';
import Footer from '@/components/Footer.vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

 
  <style scoped>
  .contact {
    /* Add your contact page styles here */
  }
  </style>
  