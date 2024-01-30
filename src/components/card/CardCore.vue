<template>
  <div
    class="card-core"
    :style="{ backgroundImage: 'url(' + category.image + ')' }"
  >
    <div class="card-core-item">
      <p>{{ category.category }}</p>
      <a>{{ category.link }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCore",
  props: ["category"],
};
</script>

<style>
.card-core {
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 458px;
  max-height: 499px;
  height: 100vh;
  width: 100vw;
}
.card-core-item {
  margin-left: 24px;
  margin-bottom: 20px;
  /* max-width: 200px; */
}
.card-core-item > p {
  font-size: 20px;
  margin-bottom: 3px;
  letter-spacing: -1.4px;
  max-height: 30px;
}
.card-core-item > a {
  margin: 0;
  letter-spacing: -0.96px;
  cursor: pointer;
}
</style>
