<template>
    <div class="footer-container">
      <Footer 
        :socialMedia="socialMedia" 
        :description="description" 
        :date="date()" 
        :company="company" 
      />
    </div>
  </template>
  
  <script>
  import Footer from '@/components/Footer';
  
  export default {
    name: 'FooterLayout',
    components: {
      Footer
    },
    data() {
      return {
        socialMedia: [
          { icons: 'mdi-facebook', url: 'https://es-la.facebook.com/' },
          { icons: 'mdi-twitter', url: 'https://twitter.com/?lang=es' },
          { icons: 'mdi-linkedin', url: 'https://www.linkedin.com/' },
          { icons: 'mdi-instagram', url: 'https://www.instagram.com/' }
        ],
        description: `hasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
            risus eget metus luctus accumsan id ultrices nunc.Sed at orci sed massa consectetur dignissim a sit amet dui.
            Duis commodo vitae velit et faucibus.Morbi vehicula lacinia malesuada.Nulla placerat augue vel ipsum ultrices,
        cursus iaculis dui sollicitudin.Vestibulum eu ipsum vel diam elementum tempor vel ut orci.Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.`,
        company: 'ZERO',
      };
    },
    methods: {
      date() {
        return new Date().getFullYear();
      }
    },
  }
  </script>
<style scoped>
.footer {
  width: 100%; /* O puedes establecer un max-width si deseas un ancho fijo */
  padding: 20px; /* Espaciado interno para que no esté tan pegado */
  background-color: #f8f9fa; /* Color de fondo claro */
  text-align: center; /* Centra el texto */
  position: relative; /* Permite que se ajuste al contenido */
}

.footer .v-divider {
  margin: 20px 0; /* Espaciado alrededor del divisor */
}

.footer a {
  margin: 0 10px; /* Espaciado entre los íconos sociales */
}
</style>
  