<template>
    <HeaderComponent :pahtLogo="require('@/assets/logoCompany/wi.png')" />
</template>

<script>
import HeaderComponent from '@/components/admin/layout/HeaderPro.vue';

export default {
    name: 'HeaderAdmin',
    components: {
        HeaderComponent,
    },
};
</script>
