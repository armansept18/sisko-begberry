<template>
  <div class="testimonial">
    <div
      class="testimonial-item d-flex flex-column justify-content-center align-items-center"
    >
      <p>Testimonials by famous magazines</p>
      <p>The most beautifully designed handbags ever."</p>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="419"
          height="2"
          viewBox="0 0 419 2"
          fill="none"
        >
          <path d="M0 1L419 1.00004" stroke="#EBDECD" stroke-width="2" />
        </svg>
      </div>
      <div class="testimonial-image">
        <img src="../assets/vogue-logo.png" alt="" />
        <img src="../assets/glamour-logo.png" alt="" />
        <img src="../assets/marie-clare-logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Testimonial",
};
</script>

<style>
.testimonial {
  background-color: rgba(238, 239, 230, 0.63);
  margin: 80px 62px 0 62px;
}
.testimonial-item > p:first-child {
  font-family: "Amiko";
  margin-top: 100px;
  font-size: 19px;
  line-height: normal;
  letter-spacing: -0.95px;
}
.testimonial-item > p {
  margin-top: 17px;
  font-family: "Murecho";
  font-size: 46px;
  line-height: 110%;
  letter-spacing: 0.46px;
}
.testimonial-item > div {
  margin-top: 63px;
}
.testimonial-image {
  max-width: 900px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
}
.testimonial-image > img {
  margin-bottom: 95px;
  object-fit: contain;
  max-width: 150px;
}
</style>
