<template>
    <div class="not-found">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <router-link to="/">Regresar al Inicio</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage'
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  