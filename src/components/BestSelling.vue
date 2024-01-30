<template>
  <div>
    <p class="title-bestselling">Bestselling Bag</p>
  </div>
  <div class="product-container">
    <CardProduct
      :product="product"
      v-for="product in products"
      :key="product.id"
    />
  </div>
</template>

<script>
import CardProduct from "@/components/card/CardProduct.vue";
// import axios from "axios";
import Bella from "@/assets/products-image/bella-clip-frame-purse.png";
import Webbing from "@/assets/products-image/large-webbing-purse.png";
import Quitted from "@/assets/products-image/quitted-chain-shoulder-bag-green.png";
import Triple from "@/assets/products-image/triple-compartment-crossbody-bag.png";
import Rafia from "@/assets/products-image/classic-rafia-crossbody-bag.png";

export default {
  name: "BestSelling",
  components: {
    CardProduct,
  },
  data() {
    return {
      products: [
        { id: 1, name: "Large Webbing Purse", price: 89.0, image: Webbing },
        { id: 2, name: "Bella Clip Frame Purse", price: 189.0, image: Bella },
        {
          id: 3,
          name: "Quitted Chain Shoulder Bag Green",
          price: 159.0,
          image: Quitted,
        },
        {
          id: 4,
          name: "Triple Compartment Cross-body Bag Green",
          price: 129.0,
          image: Triple,
        },
        {
          id: 5,
          name: "Classic Rafia Cross-body Bag",
          price: 129.0,
          image: Rafia,
        },
      ],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  //   mounted() {
  //     axios
  //       .get("https://sistemtoko.com/public/demo/product")
  //       .then((res) => {
  //         console.log("Fetch Data :", res.data.aaData);
  //         this.setProduct(res.data.aaData);
  //       })
  //       .catch((err) => {
  //         console.error("Error Fetch Data :", err.message);
  //       });
  //   },
};
</script>

<style scoped>
.title-bestselling {
  margin-top: 60px;
  margin-left: 64px;
  margin-bottom: 20px;
}
.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
