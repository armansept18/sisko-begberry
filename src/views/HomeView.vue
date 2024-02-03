<template>
  <div class="home">
    <Navbar />

    <!-- Hero -->
    <div
      class="hero d-flex flex-column justify-content-center align-items-center mt-5"
    >
      <h1 style="color: #fff">Our timeless bag collections</h1>
      <p style="color: #fff">
        Designed for the way you live your life. Bagberry are beautiful in their
        simplicity
      </p>
      <button class="goto-shop">Go to Shop</button>
    </div>
    <!-- End of Hero -->

    <div>
      <BestSelling />
      <div class="border-bottom"></div>
    </div>

    <!-- Collections -->
    <div class="d-flex justify-content-around mt-5">
      <div class="position-relative">
        <img class="dazzling-1" src="../assets/dazzling1.png" alt="" />
        <img class="dazzling-2" src="../assets/dazzling2.png" alt="" />
      </div>
      <div class="position-relative">
        <div class="collections-title">
          <p>complete your dazzling look with our collections</p>
          <button>Go to collections <i class="bi bi-arrow-right"></i></button>
        </div>
        <img class="dazzling-3" src="../assets/dazzling3.png" alt="" />
      </div>
    </div>
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
    <NewBags />
    <div class="border-bottom"></div>
    <ExploreBlog />
    <Testimonial />

    <!-- Timeless Bag -->
    <div class="timeless"></div>
    <!-- End of Timeless Bag -->

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import BestSelling from "@/components/BestSelling.vue";
import ExploreCore from "@/components/ExploreCore.vue";
import NewBags from "@/components/NewBags.vue";
import ExploreBlog from "@/components/ExploreBlog.vue";
import Testimonial from "@/components/Testimonial.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    BestSelling,
    ExploreCore,
    NewBags,
    ExploreBlog,
    Testimonial,
    Footer,
  },
};
</script>

<style>
.hero > h1 {
  font-size: 62px;
  font-family: "Anybody";
  font-weight: 300;
  line-height: 64.17px;
  max-width: 480px;
  text-align: center;
}
.hero > p {
  font-size: 18px;
  font-family: "Anybody";
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  max-width: 461px;
  margin-top: 30px;
}
.goto-shop {
  border: none;
  background-color: #df6724;
  color: #fff;
  border-radius: 30px;
  padding: 10px 40px;
  font-size: 18px;
  line-height: 24.01px;
  margin-top: 40px;
}

div > .border-bottom {
  border-bottom: 2px solid #ebdecd !important;
  margin-top: 65px;
}
.collections-title > p {
  font-family: "Anybody";
  font-size: 45px;
  font-weight: 300;
  line-height: 46.57px;
  max-width: 436px;
  width: 100vw;
}
.collections-title > button {
  border: none;
  background-color: #df6724;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  line-height: 24px;
  max-width: 277px;
}
.dazzling-1 {
  max-width: 689px;
  max-height: 729px;
  height: 100vh;
  width: 100vw;
}
.dazzling-2 {
  position: absolute;
  max-width: 432px;
  max-height: 613px;
  right: -32%;
  top: 37%;
}
.dazzling-3 {
  position: absolute;
  max-width: 392px;
  max-height: 396px;
  right: -10%;
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

.timeless {
  background-image: url("../assets/timeless-bag.png");
  background-size: cover;
  background-position: center;
  margin-top: 71px;
  max-width: 100vw;
  height: 700px;
}
</style>
