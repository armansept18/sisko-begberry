<template>
  <div class="home">
    <div class="app-bar">
      <Navbar />
    </div>
    <div>
      <Hero />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
  },
};
</script>
