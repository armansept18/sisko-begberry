<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-xxl">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div class="d-flex align-items-center">
          <a class="navbar-brand" href="#">Bagberry.</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lookbook</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div class="d-flex align-items-center">
          <div class="input-group bg-transparent">
            <input
              type="text"
              class="form-control"
              placeholder="Search Products..."
              aria-label="Search Products"
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text" id="basic-addon1">
              <i class="bi bi-search"></i>
            </span>
          </div>
          <div class="d-flex align-items-center gap-4">
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
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>

<style>
.navbar-brand {
  font-family: "Newsreader";
}
</style>
