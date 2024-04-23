<template>
    <div class="projects">
    <Menu />
    <h1>Projects</h1>
    <Footer />
</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  justify-content: center; /* Center the content vertically */
}

h1 {
  font-size: 36px; /* Increase the font size */
}
</style>