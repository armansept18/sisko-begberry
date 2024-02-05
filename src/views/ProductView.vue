<template>
  <div class="product-page">
    <Navbar />
    <div class="product-hero">
      <div class="product-title">
        <h1>Your products is here</h1>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quo
          aliquam praesentium. Eligendi, cum sint?
        </p>
      </div>
    </div>
    <!-- Breadcrumb -->
    <div class="row mt-5">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-dark text-decoration-none"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item active">
              <router-link to="/products" class="text-dark"
                >Products</router-link
              >
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="product-item">
      <h4 style="align-self: start; margin-bottom: 40px">All products</h4>
      <div class="product-container">
        <CardProduct
          :product="product"
          v-for="product in products"
          :key="product.id"
        />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import CardProduct from "@/components/card/CardProduct.vue";

export default {
  name: "ProductPage",
  components: {
    Navbar,
    Footer,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://sistemtoko.com/public/demo/product")
      .then((res) => {
        console.log("Fetch Data :", res.data.aaData);
        this.setProducts(res.data.aaData);
      })
      .catch((err) => {
        console.error("Error Fetch Data :", err.message);
      });
  },
};
</script>

<style>
.product-hero {
  display: flex;
  justify-content: center;
  background-color: #df6724;
  max-width: 100vw;
  max-height: 512px;
  height: 100vh;
  width: 100%;
}
.product-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Anybody";
}
.product-title > p {
  max-width: 512px;
}
.product-item {
  margin: 80px 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 912px;
  margin-bottom: 80px;
}
</style>
