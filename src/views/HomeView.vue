<template>
  <div class="home">
    <Navbar />
    <div
      class="hero d-flex flex-column justify-content-center align-items-center mt-5"
    >
      <h1 class="text-center" style="color: #fff">
        our timeless bag collections
      </h1>
      <p class="text-center" style="color: #fff">
        Designed for the way you live your life. Bagberry are beautiful in their
        simplicity
      </p>
      <button type="button" class="btn btn-primary">Go to Shop</button>
    </div>

    <div>
      <BestSelling />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import BestSelling from "@/components/BestSelling.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,

    BestSelling,
  },
};
</script>
