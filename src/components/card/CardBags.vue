<template>
  <div class="card-bags" :style="{ backgroundImage: 'url(' + bag.image + ')' }">
    <div class="bag-item">
      <p>{{ bag.name }}</p>
      <p>$ {{ bag.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBags",
  props: ["bag"],
};
</script>

<style>
.card-bags {
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 333px;
  max-height: 421px;
  height: 100vh;
  width: 100vw;
}
.bag-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bag-item > p:first-child {
  font-size: 15px;
  letter-spacing: -0.8px;
  max-width: 150px;
}
</style>
