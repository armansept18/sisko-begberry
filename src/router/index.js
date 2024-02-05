import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductPage from "@/views/ProductView.vue";
import ProductDetail from "@/views/ProductDetails.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: { name: "home" },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "productPage",
    component: ProductPage,
  },
  {
    path: "/products/:id",
    name: "productDetails",
    component: ProductDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
