<template>
  <div>
    <!-- Botón de menú (hamburguesa) -->
    <div
      id="menu-toggle"
      class="menu-toggle"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen.toString()"
      aria-label="Toggle menu"
    >
      <div class="bars">
        <div class="bar" :class="{ 'bar-close': isMenuOpen }"></div>
        <div class="bar" :class="{ 'bar-close': isMenuOpen }"></div>
        <div class="bar" :class="{ 'bar-close': isMenuOpen }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      isMenuOpen: false, // Estado del menú
    };
  },
  methods: {
    // Método que cambia el estado del menú y emite un evento al componente padre
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Cambiar el estado del menú
      this.$emit("toggle", this.isMenuOpen); // Emitir el estado al componente padre
    },
  },
};
</script>

<style scoped>
/* Estilos del menú hamburguesa */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  position: fixed;
  top: 20px;
  left: 20px;
}

.bars {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
  width: 70%;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.bar-close:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.bar-close:nth-child(2) {
  opacity: 0;
}

.bar-close:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}
</style>
