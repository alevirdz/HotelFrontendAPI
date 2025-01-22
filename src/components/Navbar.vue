<template>
    <!-- Use to Mobile -->
    <v-navigation-drawer
      v-model="drawerVisible"
      app
      temporary
      :style="{ transform: drawerVisible ? 'translateX(0)' : 'translateX(-100%)', width: '100%' }"
      transition="transform 0.3s ease, width 0.3s ease"
      class="full-screen-drawer"
    >
      <v-btn icon @click="closeDrawer" class="close-btn">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-list>
        <v-list-item v-for="(item, index) in menu" :key="index" :to="item.url" @click="closeDrawer">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-container class="bg-nav" fluid>
    <v-row>
        <v-toolbar class="toolbar" density="compact" :color="toolbarColor">
        <HamburgerMenu @toggle="toggleDrawer" />
        <v-col sm="3">
            <v-toolbar-side-icon>
        <img v-if="logo.show" class="logo" :src="require(`@/assets/logoCompany/` + logo.url)" alt="logo" />
      </v-toolbar-side-icon>
      <v-toolbar-title class="text-left">{{ companyName }}</v-toolbar-title>
        </v-col>
        <v-spacer></v-spacer>
        <v-col sm="3">
            <v-toolbar-items class="hidden-sm-and-down">
        <a class="items-menu" v-for="(item, index) in menu" :key="index" :href="item.url">{{ item.title }}</a>
    </v-toolbar-items>
        </v-col>
    </v-toolbar>
    </v-row>
     </v-container>
  
    
      
  
     
      
  

  
    <div v-if="drawerVisible" class="overlay" @click="closeDrawer"></div>
  </template>
  
  <script>
  import HamburgerMenu from '@/components/public/partials/HamburgerMenu2Component.vue';
  import { useTheme } from 'vuetify';
  
  export default {
    name: 'AppNavbar',
    components: {
      HamburgerMenu,
    },
    data() {
      return {
        drawerVisible: false,
        darkMode: false,
      };
    },
    props: {
      logo: {
        type: Object,
        default: () => ({}),
        required: false,
      },
      companyName: {
        type: String,
        default: 'Compañía',
        required: true,
      },
      menu: {
        type: Array,
        default: () => [
          { title: 'No sé encontro web', url: '/' },
        ],
        required: true,
      },
      toolbarColor: {
        type: String,
        default: 'transparent',
        required: true,
      },
    },
    methods: {
      toggleDrawer() {
        this.drawerVisible = !this.drawerVisible;
      },
      closeDrawer() {
        this.drawerVisible = false;
      },
      toggleDarkMode() {
        const theme = useTheme();
        this.darkMode = !this.darkMode;
        theme.global.name.value = this.darkMode ? 'dark' : 'light';
        localStorage.setItem('selectedTheme', this.darkMode ? 'dark' : 'light');
      },
    },
    created() {
      const savedTheme = localStorage.getItem('selectedTheme') || 'light';
      this.darkMode = savedTheme === 'dark';
      const theme = useTheme();
      theme.global.name.value = this.darkMode ? 'dark' : 'light';
    }
  };
  </script>
  
  <style scoped>
  .logo {
    height: 30px;
    width: 90px;
  }
  .full-screen-drawer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #111928;
    z-index: 10;
  }
  .v-navigation-drawer__content {
    background-color: #111928;
  }
  .v-list-item-title {
    color: white;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
  }
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 11;
  }
  .toolbar {
    display: flex;
    align-items: center;
  }
  .items-menu{
    padding: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
  }
  .items-menu:hover{
    padding: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: rgb(17, 62, 227);
    background-color: #f2f2f2;
  }
  .bg-nav{
    background-color: #f8f3f3;
  }
  </style>
  