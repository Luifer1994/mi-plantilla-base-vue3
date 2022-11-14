<template>
    <!-- Menu -->
      <aside
        id="layout-menu"
        class="layout-menu menu-vertical menu bg-menu-theme"
      >
       <img src="/assets/img/logo-admin.png" alt="">
        <div class="app-brand demo">
       
          <!-- <a href="index.html" class="app-brand-link">
             
            <span class="app-brand-text demo menu-text fw-bolder ms-2"
              >Sneat</span
            >
          </a> -->

          <a
            @click="toggleSidebar()"
            class="
              layout-menu-toggle
              menu-link
              text-large
              ms-auto
              d-block d-xl-none
            "
          >
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
          <li class="menu-item active">
            <RouterLink to="/home" href="index.html" class="menu-link">
              <i class="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </RouterLink>
          </li>

          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Components</span>
          </li>
          <li class="menu-item">
            <RouterLink to="/about" class="menu-link">
              <i class="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Basic">Cards</div>
            </RouterLink>
          </li>
        </ul>
      </aside>
    <!-- / Menu -->
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
    props: {
    method: { type: Function },
  },
  methods:{
    toggleSidebar(){
      this.method();
    }
  }
}
</script>
<style scoped>
img{
  width: 170px;
  margin-left: 5%;
  margin-top: 5%;
}
</style>