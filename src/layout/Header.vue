<template>
  <header>
    <nav>
      <div class="logo">MiApp</div>
      <div class="menu-icon" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>

    <div :class="['side-menu', { 'active': menuOpen }]">
      <div class="close-btn" @click="toggleMenu">×</div>
      
      <ul class="nav-links">
        <li>
          <router-link to="/" @click="toggleMenu">Inicio</router-link>
        </li>
        <li>
          <router-link to="/history" @click="toggleMenu">Historia</router-link>
        </li>
        <li>
          <router-link to="/about" @click="toggleMenu">About</router-link>
        </li>
        <li>
          <router-link to="/login" @click="toggleMenu">Iniciar Sesión</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>

export default {
  components: {

  },
  name: 'HeaderLayout',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.toggleBodyScroll(this.menuOpen);
    },
    toggleBodyScroll(isMenuOpen) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';  // Esto también es importante
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';  // Restauramos el comportamiento del scroll
      }
    }
  },
};
</script>

<style scoped>
header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.menu-icon .bar {
  width: 100%;
  height: 4px;
  background-color: #333;
  border-radius: 2px;
}

.side-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #333;
  transition: left 0.3s ease;
  z-index: 99;
}

.side-menu.active {
  left: 0;
}

.nav-links {
  list-style: none;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #007BFF;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}

.close-btn:hover {
  color: #f00;
}

@media (max-width: 600px) {
  .menu-icon {
    display: flex;
  }

  .nav-links a {
    color: #fff;
  }
}
</style>
