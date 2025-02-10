<template>
  <v-app>
    <!-- Mostrar el Navbar solo si el usuario no está autenticado -->
    <Navbar 
      v-if="!isAuthenticated" 
      :company="'MiApp'" 
      :menu="menuList" 
      :color="'blue'" 
      :modeDark="true"
    />

    <main class="content">
      <!-- La vista cambia dependiendo de la ruta -->
      <router-view />
    </main>

    <!-- Mostrar el Footer solo si el usuario no está autenticado -->
    <Footer v-if="!isAuthenticated" />

    <!-- Mostrar el botón de flecha hacia arriba solo si no está autenticado -->
    <ButtonArrowTop v-if="!isAuthenticated" />
  </v-app>
</template>

<script>
// Importa los componentes necesarios
import Navbar from '../src/components/Navbar.vue';
import Footer from './layout/Footer.vue';
import ButtonArrowTop from './components/Whatsapp.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ButtonArrowTop
  },
  data() {
    return {
      // Estado de autenticación del usuario
      isAuthenticated: false,
      // Logo de la app
      logo: { show: true, url: 'logo.png' },
      // Lista de menús para el navbar
      menuList: [
        { title: 'Inicio', url: '/' },
        { title: 'Historia', url: '/history' },
        { title: 'About', url: '/about' },
        { title: 'Iniciar sesión', url: '/login' }
      ]
    };
  },
  created() {
    // Verifica si el usuario está autenticado al cargar la app
    this.isAuthenticated = !!localStorage.getItem('sessionToken');
  },
  watch: {
    // Revisa cambios de ruta y actualiza el estado de autenticación
    '$route'() {
      this.isAuthenticated = !!localStorage.getItem('sessionToken');
    }
  }
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
