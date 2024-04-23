<template>
  <div class="home-view">
    <Menu /> <!-- Include the Menu component directly -->
    <div class="content">
      <h1>Welcome to my website!</h1>
      <p>Who am I?</p>
      <div class="lorem-ipsum">
        <p ref="homeParagraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dapibus lorem. Phasellus quis fermentum neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in consectetur mauris. Donec vel purus nulla. Fusce lobortis id nisi vitae bibendum. Nam in dapibus felis. Suspendisse potenti. Integer rhoncus ipsum nisi, sit amet vehicula arcu auctor id. Donec ultrices eget tortor eget eleifend.</p>
        <!-- Add more content as needed -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import Footer from "@/components/Footer.vue";
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  // Animate the content opacity when the component is mounted
  gsap.to('.home-view', { opacity: 1, duration: 0.5, ease: 'power2.inOut' });
  animateText();
});

function animateText() {
  gsap.from(".lorem-ipsum > p", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.5, // Adjust stagger to control the delay between each line
    ease: "power4.out"
  });
}

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
/* Add your styles here */
</style>
