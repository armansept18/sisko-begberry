<template>
  <div class="card d-flex" style="width: 264px; height: 328px">
    <img :src="product.image" class="card-img-top" alt="Product Image" />
    <div class="card-body d-flex justify-content-between align-items-end">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">$ {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style>
div > .card {
  background-color: #f2f2f2;
  border: none;
}
img {
  max-width: 129px;
  width: 100%;
  max-height: 107px;
  height: 100%;
  margin-top: 40px;
  align-self: center;
}
.card-title,
.card-text {
  font-size: 16px;
  line-height: normal;
  text-align: left;
}
.card-title {
  letter-spacing: -1.28px;
  max-width: 150px;
}
.card-text {
  letter-spacing: -0.8px;
}
</style>
