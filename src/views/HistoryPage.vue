<template>
  <div class="presentation">
    <section class="slide">
      <h1>MacBook: La Evolución de la Portabilidad</h1>
      <img src="https://www.apple.com/v/macbook-pro/home/ah/images/heroes/macbook-pro-hero__c1lj0n3zqjmu_large.jpg" alt="MacBook Pro" />
    </section>

    <section class="slide">
      <h2>Diseño y Construcción</h2>
      <p>Las MacBook son conocidas por su diseño minimalista y elegante. Cada modelo está fabricado con materiales de alta calidad, como el aluminio reciclado, lo que las hace ligeras y duraderas.</p>
      <img src="https://www.apple.com/v/macbook-air/home/ah/images/heroes/macbook-air-hero__ffn3w1g3p5qe_large.jpg" alt="MacBook Air" />
    </section>

    <section class="slide">
      <h2>Rendimiento Potente</h2>
      <p>Con los últimos procesadores M1 y M2, las MacBook ofrecen un rendimiento excepcional, permitiendo ejecutar aplicaciones pesadas sin esfuerzo.</p>
      <img src="https://www.apple.com/v/macbook-pro/home/ah/images/overview/hero/hero__f7rcvytm1jau_large.jpg" alt="MacBook Pro Performance" />
    </section>

    <section class="slide">
      <h2>Innovaciones Tecnológicas</h2>
      <p>La pantalla Retina, el teclado Magic y la duración de batería de hasta 20 horas son solo algunas de las características que hacen de las MacBook una herramienta poderosa para los profesionales y creativos.</p>
      <img src="https://www.apple.com/v/macbook-pro/home/ah/images/overview/hero/hero__fexqg82ah46m_large.jpg" alt="MacBook Innovations" />
    </section>

    <section class="slide">
      <h2>Conclusión</h2>
      <p>Las MacBook no solo son computadoras portátiles, sino una extensión del estilo de vida moderno. Su combinación de diseño, rendimiento y tecnología la convierte en una elección ideal para muchos usuarios.</p>
      <img src="https://www.apple.com/v/macbook-air/home/ah/images/overview/hero/hero__g8hnbo9mbz6u_large.jpg" alt="MacBook Conclusion" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'HistoryPage',
};
</script>

<style scoped>
.presentation {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
}

h1, h2 {
  color: #333;
}

p {
  color: #666;
  line-height: 1.6;
  max-width: 600px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
</style>
