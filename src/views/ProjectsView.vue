<template>
    <div class="projects">
    <Menu />
    <h1>Projects</h1>
</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Menu from '@/components/Menu.vue'; // Adjust the path as per your project structure

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