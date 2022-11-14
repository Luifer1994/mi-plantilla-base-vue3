<template>
<div
    class="layout-container layout-menu-collapsed"
    :class="miclass"
  >
    
    <Sidebar :method="toggleMenu" />
    <!-- Layout container -->
    <div class="layout-page">
      <!-- Navbar -->
      <NavBar :method="toggleMenu" />
      <!-- / Navbar -->
      <div class="content-wrapper">
        <!-- Content wrapper -->
        <!--  <Index></Index> -->
        <RouterView/>
        <!--  <v-btn color="primary"> Normal Button </v-btn> -->
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>
  </div>
   
</template>

<script>
import NavBar from "./NavBar.vue";
import Sidebar from './Sidebar.vue'
/* import { useTestStore } from "./stores/test/testStore";
import { mapActions } from "pinia"; */
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    Sidebar,
    NavBar,
    RouterLink, RouterView
  },
  data() {
    return {
      miclass: "layout-menu-collapsed",
      /*  useTestStore: useTestStore(), */
    };
  },
  methods: {
    toggleMenu() {
      this.miclass =
        this.miclass === "layout-menu-expanded"
          ? "layout-menu-collapsed"
          : "layout-menu-expanded";
    },
    /* ...mapActions(useTestStore, ["increment", "getDocumentTypes"]), */
  },
};
</script>

 