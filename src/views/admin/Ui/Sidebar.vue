<template>
  <div>
    <SidebarComponent
      
      :sidebarItems="sidebarItems"
      :theme="currentTheme" 
      :hasImage="currentTheme.isImage"
    />
  </div>
</template>

<script>
import SidebarComponent from '@/components/admin/layout/SidebarPro.vue';
import { useThemeStore } from '@/components/admin/themes/theme'; // Importamos el store de Pinia
import { themesServices } from '@/views/admin/services/Settings/Themes'; // Importamos el servicio para obtener el tema

export default {
  name: 'SidebarAdmin',
  components: {
    SidebarComponent,
  },
  data() {
    return {
      sidebarItems: [
        { title: 'Dashboard', icon: 'mdi-home', route: '/admin/dashboard' },
        { title: 'Catálogo', icon: 'mdi-book', route: '/admin/catalog' },
        { title: 'Clientes', icon: 'mdi-account', route: '/admin/customers' },
        { title: 'Productos', icon: 'mdi-box', route: '/admin/products' },
        { title: 'Reservaciones', icon: 'mdi-box', route: '/admin/reservation' },
        { title: 'Profile', icon: 'mdi-box', route: '/admin/profile' },
        {
          title: 'Users',
          icon: 'mdi-group',
          expanded: false,
          subItems: [
            { title: 'User List', route: '/admin/users-list' },
            { title: 'User Roles', route: '/admin/users-roles' },
          ],
        },
        {
          title: 'Payments',
          icon: 'mdi-credit-card',
          expanded: false,
          subItems: [
            { title: 'Invoices', route: '/admin/invoices' },
            { title: 'Transactions', route: '/admin/transactions' },
          ],
        },
        {
          title: 'Settings',
          icon: 'mdi-cog',
          route: '/admin/settings',
        },
      ],
    };
  },

  mounted() {
    this.loadThemeData(); // Cargamos el tema cuando se monta el componente
  },

  methods: {
    async loadThemeData() {
      try {
        const themeData = await themesServices(); // Obtenemos el tema desde la API
        if (themeData && themeData.name) {
          const themeStore = useThemeStore();
          themeStore.setThemeFromDBInStore(themeData); // Establecemos el tema en el store
          console.log('Tema cargado desde la API:', themeData);
        }
      } catch (error) {
        console.error('Error al cargar el tema:', error);
      }
    },
  },

  computed: {
    // Accedemos al tema actual desde el store de Pinia
    currentTheme() {
      const themeStore = useThemeStore();
      return themeStore.getCurrentThemeData; // Obtenemos el tema actual usando el getter
    },
  },

  watch: {
    // Verifica si currentTheme cambia y loggea el cambio para depuración
    currentTheme(newTheme, oldTheme) {
      console.log('El tema ha cambiado de', oldTheme, 'a', newTheme);
    },
  },
};
</script>
