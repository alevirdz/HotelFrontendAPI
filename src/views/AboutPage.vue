<template>
  <div class="mt-16">
    <h1>This is an about page</h1>
    <Card :card="card" />
  </div>
</template>


<script>
import Card from '@/components/Card';

export default {
  name: 'viewAbout',
  components: {
    Card
  },
  data: () => ({
    card: [
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        title: 'Top western road trips',
        subtitle: '1,000 miles of wonder',
        buttontext: 'Explore',
        description: `La descripción 1`
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        title: 'Top western road trips',
        subtitle: '1,000 miles of wonder',
        buttontext: 'Explore',
        description: `La descripción 2`
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        title: 'Top western road trips',
        subtitle: '1,000 miles of wonder',
        buttontext: 'Explore',
        description: `La descripción 3`
      }
    ]
  }),
}
</script>