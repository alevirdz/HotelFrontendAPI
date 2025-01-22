<template>
  <v-container>
    <article class="d-flex flex-column">
      <h1 class="page-title">Settings</h1>

      <!-- Theme Section -->
      <v-card class="p-4 mb-4">
        <h3 class="h3">Theme</h3>
        <div class="d-flex">
          <!-- Dynamic rendering of theme buttons -->
          <v-btn
            v-for="theme in themes"
            :key="theme.id"
            @click="activeTheme(theme.id)"
            :class="{'active-btn': selectCurrentNameTheme === theme.label}"
            class="ma-2"
            :color="selectCurrentNameTheme === theme.label ? theme.color : ''"
          >
            {{ theme.label }}
          </v-btn>
        </div>
      </v-card>

      <!-- General Preferences Section -->
      <v-card class="p-4 mb-4" color="black">
        <h3 class="h3">General Preferences</h3>
        <div class="d-flex align-center justify-between">
          <p>Language</p>
          <v-select
            v-model="selectedLanguage"
            :items="['es', 'en']"
            class="w-40"
          ></v-select>
        </div>
      </v-card>
    </article>
  </v-container>
</template>

<script>
import { useThemeStore } from '@/components/admin/themes/theme';
import { themesServices, themesListServices, updateThemeService } from '@/views/admin/services/Settings/Themes';

export default {
  name: 'SettingsModule',
  data() {
    return {
      selectedLanguage: 'es',
      themes: []  // Inicializamos temas como un arreglo vacío
    };
  },
  mounted() {
    this.loadThemeData();
    this.loadAllThemes();
  },
  methods: {
    async loadThemeData() {
      try {
        const themeData = await themesServices();
        const statusThemeStore = useThemeStore();
        statusThemeStore.setThemeFromDBInStore(themeData);
        this.selectCurrentNameTheme = themeData.name;
      } catch (error) {
        console.error("Error al obtener el tema desde la API:", error);
      }
    },
    async loadAllThemes() {
      try {
        const ThemeList = await themesListServices();
        // Verifica la estructura de ThemeList y asegúrate de mapearla adecuadamente
        this.themes = ThemeList.map(theme => ({
          name: theme.name,   // Nombre del tema
          label: theme.name, // Etiqueta que mostrará el botón
          color: theme.background,  // Color que se usará para el botón
          id: theme.id
        }));
      } catch (error) {
        console.error("Error al obtener los temas desde la API:", error);
      }
    },
    async activeTheme(themeID) {
      console.log(themeID);
      
      const updateTheme = await updateThemeService(themeID);
      console.log(updateTheme);
      const themeData = await themesServices();

      const statusThemeStore = useThemeStore();
      statusThemeStore.setThemeFromDBInStore(themeData)
    },
  },
  computed: {
    selectCurrentNameTheme() {
      const statusThemeStore = useThemeStore();
      return statusThemeStore.getCurrentNameTheme;
    },
  },
};
</script>

<style scoped>
.active-btn {
  font-weight: bold;
}
</style>
