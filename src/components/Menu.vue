<template>
  <div class="menu" ref="menu">
    <RouterLink to="/" class="menuButton" ref="homeButton">home.</RouterLink>
    <RouterLink to="/about" class="menuButton" ref="aboutButton">about.</RouterLink>
    <RouterLink to="/projects" class="menuButton" ref="projectsButton">projects.</RouterLink>
    <RouterLink to="/skills" class="menuButton" ref="skillsButton">skills.</RouterLink>
    <RouterLink to="/contact" class="menuButton" ref="contactButton">contact.</RouterLink>
    <!-- Buttons with icons -->
    <a href="https://www.linkedin.com/" target="_blank" class="menuButton"><i class="fab fa-linkedin"></i> LinkedIn</a>
    <a href="https://www.github.com/" target="_blank" class="menuButton"><i class="fab fa-github"></i> GitHub</a>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

const menu = ref(null);

onMounted(() => {
  animateMenu();
});

function animateMenu() {
  const hasAnimated = sessionStorage.getItem('menuAnimated');
  
  if (!hasAnimated) {
    gsap.from(menu.value.children, {
      opacity: 0,
      y: -20,
      rotationX: -90,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      onComplete: () => sessionStorage.setItem('menuAnimated', 'true')
    });
  }
}

// Remove the sessionStorage item when the page is unloaded (e.g., when refreshing)
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('menuAnimated');
});
</script>

<style scoped>
.menu {
  position: fixed; /* Fix the menu container in place */
  top: 0; /* Align the menu container to the top of the viewport */
  width: 100%; /* Set the menu container to full width */
  display: flex;
  margin-bottom: 2vw;
  justify-content: center; /* Center the menu horizontally */
  z-index: 1000; /* Ensure the menu is above other elements */
  left: 0;
}

.menu a {
  margin: 0 10px; /* Add some spacing between menu items */
  border-radius: 3vw;
  margin-top: 2vw;
  margin-bottom: 25%;
  padding: 8px 16px; /* Add padding for better appearance */
  font-weight: bold; /* Set font weight */
  color: orange; /* Set text color */
  transition: background-color 0.3s; /* Add transition for background-color */
}

.menu a:hover {
  background-color: #F28729; /* Change background color on hover */
  color:black ;
  size: 40;
}
</style>
