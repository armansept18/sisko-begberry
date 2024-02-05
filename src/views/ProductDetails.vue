<template>
  <div>
    <!-- Breadcrumb -->
    <div class="row mt-5">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-dark text-decoration-none"
                >Home</router-link
              >
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products" class="text-dark text-decoration-none"
                >Products</router-link
              >
            </li>
            <li
              class="breadcrumb-item active"
              style="text-decoration: underline"
              aria-current="page"
            >
              {{ products.product_name }}
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="product-details">
      <img
        :src="
          'https://sistemtoko.com/img/user/demo/product/' + products.product_img
        "
        alt="product-image"
      />
      <div>
        <h2 class="mb-3">{{ products.product_name }}</h2>
        <p>
          {{
            products.product_description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur blanditiis, voluptatum temporibus odit consequuntur doloribus nulla iste minima saepe debitis obcaecati vero incidunt aperiam! A voluptate deserunt commodi expedita distinctio!"
          }}
        </p>
        <p class="fs-4 fw-bold">
          Rp {{ Number(products.product_price).toLocaleString("id-ID") }}
        </p>
        <button>Add to Cart &nbsp;<i class="bi bi-cart2"></i></button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";

export default {
  name: "ProductDetails",
  components: {
    Footer,
  },
  data() {
    return {
      products: {},
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://sistemtoko.com/public/demo/single/" + this.$route.params.id)
      .then((res) => {
        console.log("Fetch Product Detail :", res.data);
        this.setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error Fetching Data : ", err);
      });
  },
};
</script>

<style>
.product-details {
  margin: 180px 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}
.product-details > img {
  object-fit: cover;
  max-width: 440px;
  max-height: 420px;
  border-radius: 30px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}
.product-details > div > h2 {
  text-align: right;
}
.product-details > div > p {
  text-align: right;
  max-width: 400px;
  width: 100vw;
}
.product-details > div > button {
  border: none;
  border-radius: 30px;
  font-size: 14px;
  padding: 10px 20px;
  background: #df6724;
  color: #fff;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -1px;
  flex-shrink: 0;
  max-width: 400px;
  width: 100vw;
}
.product-details > div > button:hover {
  cursor: pointer;
  background: linear-gradient(to bottom, #ff9b4d, #e56c2a);
}
</style>
