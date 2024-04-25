<template>
  <div class="about">
    <Menu />
    <div class="content">
      <div class="text-container" ref="textContainer">
        <h1>This is an about page</h1>
        <p ref="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec neque rutrum porta. Ut scelerisque tortor a tincidunt sollicitudin. Ut ut nulla a dolor hendrerit dignissim vel at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vestibulum mauris a neque ultrices, id fermentum magna congue. Nulla facilisi. Sed congue semper libero, et bibendum nunc vehicula sit amet. Nam condimentum nibh ac risus tincidunt tempor. Nullam interdum lacus ut velit convallis, et varius mauris viverra. Suspendisse potenti. Praesent malesuada interdum quam, vitae posuere lorem rutrum sit amet.</p>
        <p ref="paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec neque rutrum porta. Ut scelerisque tortor a tincidunt sollicitudin. Ut ut nulla a dolor hendrerit dignissim vel at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vestibulum mauris a neque ultrices, id fermentum magna congue. Nulla facilisi. Sed congue semper libero, et bibendum nunc vehicula sit amet. Nam condimentum nibh ac risus tincidunt tempor. Nullam interdum lacus ut velit convallis, et varius mauris viverra. Suspendisse potenti. Praesent malesuada interdum quam, vitae posuere lorem rutrum sit amet.</p>
        <p ref="paragraph3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec neque rutrum porta. Ut scelerisque tortor a tincidunt sollicitudin. Ut ut nulla a dolor hendrerit dignissim vel at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vestibulum mauris a neque ultrices, id fermentum magna congue. Nulla facilisi. Sed congue semper libero, et bibendum nunc vehicula sit amet. Nam condimentum nibh ac risus tincidunt tempor. Nullam interdum lacus ut velit convallis, et varius mauris viverra. Suspendisse potenti. Praesent malesuada interdum quam, vitae posuere lorem rutrum sit amet.</p>
        <p ref="paragraph4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec neque rutrum porta. Ut scelerisque tortor a tincidunt sollicitudin. Ut ut nulla a dolor hendrerit dignissim vel at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vestibulum mauris a neque ultrices, id fermentum magna congue. Nulla facilisi. Sed congue semper libero, et bibendum nunc vehicula sit amet. Nam condimentum nibh ac risus tincidunt tempor. Nullam interdum lacus ut velit convallis, et varius mauris viverra. Suspendisse potenti. Praesent malesuada interdum quam, vitae posuere lorem rutrum sit amet.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import Footer from "@/components/Footer.vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  animateText();
  setupScrollTrigger();
});

function animateText() {
  gsap.from(".text-container > p", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.5, // Adjust stagger to control the delay between each line
    ease: "power4.out"
  });
}

function setupScrollTrigger() {
  gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: ".text-container",
    },
  }).from(".text-container > p", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.5,
    ease: "power4.out"
  });
}
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>
