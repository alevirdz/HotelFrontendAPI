<template>
  <div>
    <FooterComponent :show="true" />
  </div>
</template>

<script>
import FooterComponent from '@/components/admin/layout/FooterPro.vue';

export default {
  name: "FooterAdmin",
  components: {
    FooterComponent,
  },
};
</script>
