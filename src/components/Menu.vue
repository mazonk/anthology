<template>
    <div class="menu">
      <RouterLink to="/" class="menuButton" ref="homeButton">Home</RouterLink>
      <RouterLink to="/about" class="menuButton" ref="aboutButton">About</RouterLink>
      <RouterLink to="/projects" class="menuButton" ref="projectsButton">Projects</RouterLink>
      <RouterLink to="/skills" class="menuButton" ref="skillsButton">Skills</RouterLink>
      <RouterLink to="/contact" class="menuButton" ref="contactButton">Contact</RouterLink>
      <!-- Buttons with icons -->
      <a href="https://www.linkedin.com/" target="_blank" class="menuButton"><i class="fab fa-linkedin"></i> LinkedIn</a>
      <a href="https://www.github.com/" target="_blank" class="menuButton"><i class="fab fa-github"></i> GitHub</a>
    </div>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
.menu {
  position: fixed; /* Fix the menu container in place */
  top: 0; /* Align the menu container to the top of the viewport */
  width: 100%; /* Set the menu container to full width */
  background-color: rgba(0, 0, 0, 0.8); /* Add a background color with some transparency */
  display: flex;
  margin-bottom: 2vw;
  justify-content: center; /* Center the menu horizontally */
  z-index: 1000; /* Ensure the menu is above other elements */
  left: 0;
}

.menu a {
  margin: 0 10px; /* Add some spacing between menu items */
  border-radius: 3vw;
  margin-top: 1.5vw;
  /*border: 1px solid white; /* Set border style */
  padding: 8px 16px; /* Add padding for better appearance */
  font-weight: bold; /* Set font weight */
  text-decoration: none; /* Remove default underline */
  color: white; /* Set text color */
  transition: background-color 0.3s; /* Add transition for background-color */
}

.menu a:hover {
  background-color: #BE3455; /* Change background color on hover */
}
</style>