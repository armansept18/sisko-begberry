<template>
  <div>
    <p>Bestselling Bag</p>
  </div>
  <div class="row mb-4">
    <div class="col-md-3" v-for="product in products" :key="product.id">
      <CardProduct :product="product" />
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "BestSelling",
  components: {
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://sistemtoko.com/public/demo/product")
      .then((res) => {
        console.log("Fetch Data :", res.data.aaData);
        this.setProduct(res.data.aaData);
      })
      .catch((err) => {
        console.error("Error Fetch Data :", err.message);
      });
  },
};
</script>

<style></style>
