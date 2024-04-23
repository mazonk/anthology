<template>
  <div class="about">
    <Menu />
    <div class="content">
      <div class="text-container">
        <h1>This is an about page</h1>
        <p ref="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec neque rutrum porta. Ut scelerisque tortor a tincidunt sollicitudin. Ut ut nulla a dolor hendrerit dignissim vel at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vestibulum mauris a neque ultrices, id fermentum magna congue. Nulla facilisi. Sed congue semper libero, et bibendum nunc vehicula sit amet. Nam condimentum nibh ac risus tincidunt tempor. Nullam interdum lacus ut velit convallis, et varius mauris viverra. Suspendisse potenti. Praesent malesuada interdum quam, vitae posuere lorem rutrum sit amet.</p>
        <p ref="paragraph2">Morbi nec diam nec purus dapibus consectetur sed vitae magna. Vivamus in urna nec velit rhoncus venenatis. Fusce interdum, dui eget commodo auctor, libero magna viverra magna, nec elementum purus purus sed mauris. Donec laoreet nunc at leo lacinia convallis. Curabitur dictum bibendum ipsum, id ultricies felis malesuada nec. Nullam dictum, eros quis sodales finibus, ligula ipsum convallis libero, non rutrum mauris neque id neque. Proin tincidunt nisi et dui varius, eget fermentum elit dapibus.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';
import Footer from "@/components/Footer.vue";
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';

onMounted(() => {
  animateText();
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
</script>

<style scoped>
.text-container{
  margin-left: 1vw;
}

</style>
