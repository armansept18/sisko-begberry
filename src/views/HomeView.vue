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

    <ExploreCore />

    <!-- Crossbody Bags -->
    <div class="cross-body d-flex justify-content-around align-items-center">
      <img src="../assets/products-image/ultimate-indulgance.png" alt="image" />
      <div class="crossbody-item">
        <p>Our handbag styles are the ultimate indulgance</p>
        <p>
          Sitting comfortably round the waist, it fastens with a buckle clip on
          an adjustable strap
        </p>
        <button>Go to crossbody bags</button>
      </div>
    </div>
    <!-- End of Crossbody Bags -->
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

<style>
div > .border-bottom {
  border-bottom: 2px solid #ebdecd !important;
  margin-top: 65px;
}
.cross-body {
  background: #df6724;
  margin-top: 67px;
}
.cross-body > img {
  max-width: 564px;
  max-height: 705px;
  margin-top: 81px;
  margin-bottom: 59px;
}
.crossbody-item > p:first-child {
  color: #fff;
  font-family: "Murecho";
  font-size: 65px;
  font-weight: 300;
  line-height: 116.564%;
  letter-spacing: 0.65px;
  max-width: 700px;
}
.crossbody-item > p {
  color: #fff;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -1px;
  margin-top: 36px;
  margin-bottom: 48px;
}
.crossbody-item > button {
  border: 1px solid #fff;
  padding: 10px 40px;
  border-radius: 30px;
  font-size: 20px;
  letter-spacing: -1px;
  color: #df6724;
  text-align: center;
}
</style>
