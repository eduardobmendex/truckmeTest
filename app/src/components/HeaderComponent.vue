<script setup>
const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  const sectionService = document.getElementById(sectionId);
  const sectionContato = document.getElementById(sectionId);
  const sectionHome = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<style scoped>
.menuNav {
  background-color: #fa7000;
}
</style>
<template>
  <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
    <button
      class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
      id="bd-theme"
      type="button"
      aria-expanded="false"
      data-bs-toggle="dropdown"
      aria-label="Toggle theme (light)"
    >
      <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
        <use href="#sun-fill"></use>
      </svg>
      <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
    </button>
    <ul
      class="dropdown-menu dropdown-menu-end shadow"
      aria-labelledby="bd-theme-text"
    >
      <li>
        <button
          type="button"
          class="dropdown-item d-flex align-items-center active"
          data-bs-theme-value="light"
          aria-pressed="true"
        >
          <svg class="bi me-2 opacity-50" width="1em" height="1em">
            <use href="#sun-fill"></use>
          </svg>
          Light
          <svg class="bi ms-auto d-none" width="1em" height="1em">
            <use href="#check2"></use>
          </svg>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="dropdown-item d-flex align-items-center"
          data-bs-theme-value="dark"
          aria-pressed="false"
        >
          <svg class="bi me-2 opacity-50" width="1em" height="1em">
            <use href="#moon-stars-fill"></use>
          </svg>
          Dark
          <svg class="bi ms-auto d-none" width="1em" height="1em">
            <use href="#check2"></use>
          </svg>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="dropdown-item d-flex align-items-center"
          data-bs-theme-value="auto"
          aria-pressed="false"
        >
          <svg class="bi me-2 opacity-50" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
          Auto
          <svg class="bi ms-auto d-none" width="1em" height="1em">
            <use href="#check2"></use>
          </svg>
        </button>
      </li>
    </ul>
  </div>

  <header>
    <nav class="navbar navbar-expand-md fixed-top menuNav">
      <div class="container-fluid">
        <div
          :style="{
            backgroundColor: 'white',
            width: 80,
            borderRadius: '10%',
            padding: '2px',
          }"
        >
          <img src="../assets/imgs/logo.png" alt="" srcset="" width="70px" />
        </div>
        <div class="w-75 d-flex justify-content-center">
          <a
            @click.prevent="scrollTo('banner')"
            class="navbar-brand p-2"
            href="#"
            >Home</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a
                  @click.prevent="scrollTo('sobreSection')"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  >Sobre</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click.prevent="scrollTo('sectionService')"
                  class="nav-link active"
                  href="#"
                  >Serviços</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click.prevent="scrollTo('sectionContato')"
                  class="nav-link active"
                  href="#"
                  >Contato</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
