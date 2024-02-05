<template>
  <router-link class="nav-link" :to="'/products/' + product.id">
    <div class="card d-flex shadow">
      <img :src="product.photo" class="card-img-top" alt="Product Image" />
      <div class="card-body d-flex justify-content-between align-items-end">
        <p>{{ product.name }}</p>
        <p>Rp {{ product.price }}</p>
      </div>
    </div>
  </router-link>
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
  width: 264px;
  height: 328px;
}
img {
  margin: 0;
  max-width: 100vw;
  max-height: 200px;
  height: 100vh;
  object-fit: cover;
}
.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  line-height: normal;
  text-align: left;
}
.card-body > p:first-child {
  font-weight: normal;
  letter-spacing: -1.28px;
  max-width: 150px;
}
.card-body > p {
  font-size: 14px;
  letter-spacing: -0.8px;
  font-weight: 600;
}
.nav-link {
  margin: 0;
}
.check-product {
  border: none;
}
</style>
