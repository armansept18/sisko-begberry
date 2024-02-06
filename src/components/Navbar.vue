<template>
  <nav class="bg-transparent">
    <div class="d-flex justify-content-around align-items-center">
      <p class="nav-title" href="#">Bagberry.</p>
      <div class="navbar-menu d-flex">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/products" class="nav-link">Shop</router-link>
        <router-link to="#" class="nav-link">Lookbook</router-link>
        <router-link to="#" class="nav-link">Pages</router-link>
        <router-link to="#" class="nav-link">Blog</router-link>
      </div>
      <div class="d-flex gap-4 align-items-center">
        <div class="input-group">
          <input
            type="text"
            class="form-control bg-transparent border-end-0"
            placeholder="Search Products..."
            aria-label="Search Products"
            aria-describedby="basic-addon1"
          />
          <span
            class="input-group-text bg-transparent border-start-0 rounded-end-5"
          >
            <i class="bi bi-search text-white"></i>
          </span>
        </div>
        <div class="d-flex justify-content-around align-items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path d="M0 0H23V23H0V0Z" fill="white" fill-opacity="0.01" />
            <path
              d="M11.4998 9.58335C13.6169 9.58335 15.3332 7.86711 15.3332 5.75002C15.3332 3.63293 13.6169 1.91669 11.4998 1.91669C9.38275 1.91669 7.6665 3.63293 7.6665 5.75002C7.6665 7.86711 9.38275 9.58335 11.4998 9.58335Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.125 21.0833C20.125 16.3199 16.2634 12.4583 11.5 12.4583C6.73656 12.4583 2.875 16.3199 2.875 21.0833"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 6L6 2H18L21 6M3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6M3 6H21"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
nav {
  position: absolute;
  /* max-width: 1920px; */
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  border-bottom: 0.1px solid #fff;
}
.nav-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Newsreader";
  font-size: 25px;
  font-weight: 500;
  line-height: 25px;
  color: #fff;
}
.navbar-menu {
  color: #fff;
  font-family: "Anybody";
  font-size: 15px;
  line-height: 15.52px;
  gap: 40px;
}
.navbar-menu .nav-link {
  display: inline-block;
  margin: 0;
  text-decoration: none;
}
.navbar-menu .nav-link:hover {
  text-decoration: underline;
}
.input-container {
  display: flex;
  align-items: center;
}
.input-group > input {
  max-width: 228px;
  max-height: 40px;
  border-radius: 30px;
  color: #fff !important;
  font-family: "Amiko";
  font-size: 12.5px;
  line-height: 16.68px;
}
.input-group > input::placeholder {
  color: #fff;
  font-family: "Amiko";
  font-size: 12.5px;
  line-height: 16.68px;
}
</style>
