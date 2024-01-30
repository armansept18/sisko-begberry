<template>
  <div class="home">
    <!-- <Navbar /> -->

    <!-- Hero -->
    <div
      class="hero d-flex flex-column justify-content-center align-items-center mt-5"
    >
      <h1 class="text-center" style="color: #fff">
        Our timeless bag collections
      </h1>
      <p class="text-center" style="color: #fff">
        Designed for the way you live your life. Bagberry are beautiful in their
        simplicity
      </p>
      <button type="button" class="btn btn-primary">Go to Shop</button>
    </div>
    <!-- End of Hero -->

    <div>
      <BestSelling />
      <div class="border-bottom"></div>
    </div>

    <!-- Collections -->
    <!-- <div class="d-flex justify-content-around align-items-center mt-5">
      <div>
        <img class="dazzling-1" src="../assets/dazzling1.png" alt="" />
        <img class="dazzling-2" src="../assets/dazzling2.png" alt="" />
      </div>
      <div>
        <div>
          <p>complete your dazzling look with our collections</p>
          <button class="btn btn-primary">
            Go to collections <i class="bi bi-arrow-right"></i>
          </button>
        </div>
        <div>
          <img class="dazzling-3" src="../assets/dazzling3.png" alt="" />
        </div>
      </div>
    </div> -->
    <!-- End of Collections -->

    <div>
      <ExploreCore />
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import BestSelling from "@/components/BestSelling.vue";
import ExploreCore from "@/components/ExploreCore.vue";

export default {
  name: "HomeView",
  components: {
    // Navbar,
    BestSelling,
    ExploreCore,
  },
};
</script>
