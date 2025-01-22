<template>
  <v-app>
    <Header @toggle-sidebar="controlToggleSidebar"></Header>
    <Sidebar v-if="sidebarVisible"></Sidebar>

    <v-main class="main-bg">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./Ui/Header.vue"
import Sidebar from "./Ui/Sidebar.vue"
import Footer from "./Ui/Footer.vue"


export default {
  name: 'Main-Component',
  components: {
    Header,
    Sidebar,
    Footer
  },
  data() {
    return {
      sidebarVisible: true,
    }
  },
  methods: {
    controlToggleSidebar(isSidebarVisible) {
      this.sidebarVisible = isSidebarVisible;
    },
  },
};
</script>
<style>
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-bg {
  /* #f0f0fa || #f4f6f8  */
  background-color: #f0f0fa !important;
}

.v-navigation-drawer--temporary.v-navigation-drawer--active {
  box-shadow: 0px 0px 10px -5px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2))
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2))
}
</style>
