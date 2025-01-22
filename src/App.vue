<template>
  <v-app>
    <!-- <Header v-if="isAuthenticated && isModeOnlyApp" />
    <Header v-if="!isModeOnlyApp && !isAuthenticated" />

    <main class="content">
      <router-view />
    </main>
    <Footer v-if="!isModeOnlyApp && !isAuthenticated" />
    <Footer v-if="isModeOnlyApp && isAuthenticated" />
    <ButtonArrowTop v-if="!isAuthenticated && !isModeOnlyApp" /> -->
    
    <!-- <Header></Header> -->
    <Navbar  :company="'MiApp'" :menu="menuList" :color="'blue'" :modeDark="true" ></Navbar>
    <main class="content">
      <router-view />
    </main>
    <Footer></Footer>
    <ButtonArrowTop></ButtonArrowTop>
  </v-app>
</template>

<script>
// import Header from './layout/Header.vue';
import Navbar from '../src/components/Navbar.vue';
import Footer from './layout/Footer.vue';
import ButtonArrowTop from './components/Whatsapp.vue';

export default {
  name: 'App',
  components: {
    // Header,
    Navbar,
    Footer,
    ButtonArrowTop
  },
  data() {
    return {
      isModeOnlyApp: process.env.VUE_APP_MODE === 'web',  
      isAuthenticated: false,
      logo: { show: true, url: 'logo.png' },
      menuList: [
        { title: 'Inicio', url: '/' },
        { title: 'Historia', url: '/history' },
        { title: 'About', url: '/about' },
        { title: 'Iniciar sesión', url: '/login' },
      ],
    };
  },
  created() {
    this.isAuthenticated = !!localStorage.getItem('sessionToken');
  },
  watch: {
    '$route'() {
      this.isAuthenticated = !!localStorage.getItem('sessionToken');
    }
  },
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
}
</style>
