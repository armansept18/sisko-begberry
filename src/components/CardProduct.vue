<template>
  <div class="card" style="width: 264px; height: 328px">
    <img :src="product.photo" class="card-img-top" alt="Product Image" />
    <div class="card-body d-flex justify-content-between">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
