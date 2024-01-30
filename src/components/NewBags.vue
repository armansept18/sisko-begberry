<template>
  <div>
    <div
      class="new-bags-title d-flex justify-content-between align-items-center"
    >
      <p>New bags for all your occasions</p>
      <p>Explore all bags</p>
    </div>
    <div class="bag-container">
      <CardBags v-for="bag in bags" :key="bag.id" :bag="bag" />
    </div>
  </div>
</template>

<script>
import CardBags from "@/components/card/CardBags.vue";
import Webbing from "@/assets/products-image/large-webbing-purse-wide.png";
import Double from "@/assets/products-image/double-handle-large-backpack.png";
import Three from "@/assets/products-image/three-compartment.png";
import Sandra from "@/assets/products-image/sandra-grab-bag.png";

export default {
  name: "NewBags",
  components: {
    CardBags,
  },
  data() {
    return {
      bags: [
        { id: 1, image: Webbing, name: "Large Webbing Purse", price: 89.0 },
        {
          id: 2,
          image: Double,
          name: "Double Handle Large Backpack Blue",
          price: 129.0,
        },
        {
          id: 3,
          image: Three,
          name: "Triple Compartment Cross-body Bag Black",
          price: 149.0,
        },
        { id: 4, image: Sandra, name: "Sandra Grab Bag", price: 129.0 },
      ],
    };
  },
  methods: {
    setBags(data) {
      this.bags = data;
    },
  },
};
</script>

<style>
.new-bags-title {
  margin-top: 88px;
}
.new-bags-title > p:first-child {
  font-size: 28px;
  margin-left: 65px;
}
.new-bags-title > p:last-child {
  text-decoration: underline;
  line-height: normal;
  letter-spacing: -0.96px;
  cursor: pointer;
  margin-right: 65px;
}
.bag-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 19px;
}
</style>
