<template>
    <v-app-bar-nav-icon @click="toggleMenu" class="d-md-none">
      <v-icon>{{ isOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon> <!-- Cambia entre el icono de menú y el icono de cerrar -->
    </v-app-bar-nav-icon>
  </template>
  
  <script>
  export default {
    name: 'HamburgerMenu',
    data() {
      return {
        isOpen: false, // Estado del menú (abierto o cerrado)
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
        this.$emit('toggle', this.isOpen); // Emite el evento con el estado del menú
      }
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales si es necesario */
  </style>
  