<template>
  <div class="explore-core">
    <div class="explore-menu d-flex justify-content-between align-items-center">
      <p>Explore our core bagberry</p>
      <a href="#">View all</a>
    </div>

    <div class="category-container">
      <CardCore
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import CardCore from "@/components/card/CardCore.vue";
import Backpacks from "@/assets/products-image/backpacks.png";
import Makeup from "@/assets/products-image/makeup-bags.png";
import Crossbody from "@/assets/products-image/cross-body-bags.png";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ExploreCore",
  components: {
    CardCore,
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          category: "Makeup bags",
          link: "Go to makeup bags",
          image: Makeup,
        },
        {
          id: 2,
          category: "Backpacks",
          link: "Go to backpacks",
          image: Backpacks,
        },
        {
          id: 3,
          category: "Cross body bags",
          link: "Explore cross body bags",
          image: Crossbody,
        },
      ],
    };
  },
  methods: {
    setCategories(data) {
      this.categories = data;
    },
  },
};
</script>

<style>
.explore-core {
  margin-top: 240px;
  background-color: #eeefe6;
  flex-shrink: 0;
  max-height: 703px;
  height: 100vh;
}

.explore-menu > p,
a {
  margin-top: 81px;
  margin-left: 55px;
  margin-right: 54px;
}
.explore-menu > p {
  font-size: 28px;
  letter-spacing: -1.96px;
}
.explore-menu > a {
  color: #252525;
}

.category-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 19px;
}
</style>
