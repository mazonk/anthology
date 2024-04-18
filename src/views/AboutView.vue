<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p ref="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam nec neque rutrum porta. Ut scelerisque tortor a tincidunt sollicitudin. Ut ut nulla a dolor hendrerit dignissim vel at tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vestibulum mauris a neque ultrices, id fermentum magna congue. Nulla facilisi. Sed congue semper libero, et bibendum nunc vehicula sit amet. Nam condimentum nibh ac risus tincidunt tempor. Nullam interdum lacus ut velit convallis, et varius mauris viverra. Suspendisse potenti. Praesent malesuada interdum quam, vitae posuere lorem rutrum sit amet.</p>
    <p ref="paragraph2">Morbi nec diam nec purus dapibus consectetur sed vitae magna. Vivamus in urna nec velit rhoncus venenatis. Fusce interdum, dui eget commodo auctor, libero magna viverra magna, nec elementum purus purus sed mauris. Donec laoreet nunc at leo lacinia convallis. Curabitur dictum bibendum ipsum, id ultricies felis malesuada nec. Nullam dictum, eros quis sodales finibus, ligula ipsum convallis libero, non rutrum mauris neque id neque. Proin tincidunt nisi et dui varius, eget fermentum elit dapibus.</p>
  </div>
</template>

<script setup>
import { gsap } from 'gsap';

// GSAP animation to fade in the paragraphs
gsap.from([refs.paragraph1, refs.paragraph2], {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.5,
  ease: 'power2.out'
});
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column; /* Center align the text vertically */
  }

  .about h1 {
    margin-bottom: 20px; /* Add some spacing between heading and paragraphs */
  }

  .about p {
    max-width: 600px; /* Limit the width of paragraphs */
    text-align: center; /* Center align paragraphs */
  }
}
</style>
