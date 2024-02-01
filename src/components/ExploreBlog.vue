<template>
  <div class="explore-blog">
    <div class="explore-title">
      <p>See our inside news & editorials</p>
      <p>
        Designed by bagbery, with premium, durable and environmentally fiendly
        materials
      </p>
      <button>Explore out blog</button>
    </div>
    <div class="d-flex gap-2">
      <div>
        <img
          class="explore-image"
          src="../assets/exploreblog1.png"
          alt="image"
        />
        <div class="explore-item">
          <p>March 1, 2023</p>
          <p>Elevate your style with our luxurios handbags</p>
          <p>Continue reading</p>
        </div>
      </div>
      <div>
        <img
          class="explore-image"
          src="../assets/exploreblog2.png"
          alt="image"
        />
        <div class="explore-item">
          <p>March 1, 2023</p>
          <p>Upgrade your handbag collection with our designer styles</p>
          <p>Continue reading</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreBag",
};
</script>

<style>
.explore-blog {
  display: flex;
  margin-top: 77px;
  margin-left: 63px;
  margin-right: 60px;
}

.explore-title > p:first-child {
  font-size: 52px;
  font-family: "Murecho";
  font-weight: 300;
  line-height: 110%;
  letter-spacing: 0.52px;
  max-width: 492px;
}
.explore-title > p {
  margin-top: 35px;
  font-size: 19px;
  line-height: 136.068%;
  letter-spacing: -1.33px;
  max-width: 433px;
}
.explore-title > button {
  margin-top: 30px;
  border: none;
  border-radius: 30px;
  background: #df6724;
  color: #fff;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -1px;
  gap: 10px;
  flex-shrink: 0;
  padding: 10px 20px;
}
.explore-image {
  max-height: 320px;
  max-width: 420px;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
.explore-item > p:first-child {
  margin-top: 15px;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.96px;
}
.explore-item > p:last-child {
  text-decoration: underline;
  line-height: normal;
  letter-spacing: -1.08px;
  font-size: 18px;
  cursor: pointer;
}
.explore-item > p {
  font-size: 21px;
  line-height: normal;
  letter-spacing: -1.05px;
  max-width: 460px;
}
</style>
