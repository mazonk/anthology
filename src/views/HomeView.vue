<template>
  <div class="menu">
    <router-link to="/" class="menuButton">Home</router-link>
    <router-link to="/about" class="menuButton">About</router-link>
    <router-link to="/projects" class="menuButton">Projects</router-link>
    <router-link to="/skills" class="menuButton">Skills</router-link>
    <router-link to="/contact" class="menuButton">Contact</router-link>
    <!-- Buttons with icons -->
    <a href="https://www.linkedin.com/" target="_blank" class="menuButton"><i class="fab fa-linkedin"></i> LinkedIn</a>
    <a href="https://github.com/" target="_blank" class="menuButton"><i class="fab fa-github"></i> GitHub</a>
<!--
    <a href="https://github.com/" target="_blank" class="menuButton">
      <img src="@/assets/github.jpg" alt="GitHub" class="icon gitHub">
      GitHub
    </a>-->
  </div>
  <h1>
    Welcome.
  </h1>
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
  justify-content: center; /* Center the menu horizontally */
  z-index: 1000; /* Ensure the menu is above other elements */
}

.menu a {
  margin: 10px; /* Add some spacing between menu items */
  border-radius: 3vw;
  margin-top: 1.5vw;
  border: 1px solid white; /* Set border style */
  padding: 8px 16px; /* Add padding for better appearance */
  font-weight: bold; /* Set font weight */
  text-decoration: none; /* Remove default underline */
  color: white; /* Set text color */
}

.menu a:hover {
  background-color: #BE3455;
}

/* Style for Font Awesome icons */
.menu i {
  margin-right: 5px; /* Add some spacing between icon and text */
}

/* Style for GitHub icon */
.menu .icon.gitHub {
  width: 2.5vw; /* Adjust the width of the GitHub icon */
  height: auto; /* Maintain aspect ratio */
  margin-right: 5px; /* Add some spacing between icon and text */
}
</style>

