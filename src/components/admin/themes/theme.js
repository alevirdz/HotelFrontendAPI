import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'green',
    themeAdmin: {},
  }),

  getters: {
    getCurrentNameTheme: (state) => state.currentTheme,
    getCurrentThemeData: (state) => {
      console.log(state.themeAdmin)
      return state.themeAdmin = state.themeAdmin || {};  // Asegúrate de que esté devolviendo datos
    },
  },

  actions: {
    setCurrentTheme(theme) {
      this.currentTheme = theme;
    },
    setThemeFromDBInStore(themeData) {
      console.log("Tema recibido en el store:", themeData); 
      if (themeData && themeData.name) {
        this.currentTheme = themeData.name;
        this.themeAdmin = themeData;
      }
    },
  },
});
