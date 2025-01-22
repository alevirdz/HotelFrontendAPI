<template>
    <section class="banner">
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col cols="12" sm="6" xs="12" class="order-xs-2 d-flex flex-column align-center justify-center">
                    <div class="text-xs-center">
                        <h3 class="banner-title">Boost your web traffic & rank with lums</h3>
                        <v-col cols="auto">
                            <v-btn size="large" color="indigo-darken-3" variant="flat">Verify and continue</v-btn>
                        </v-col>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" xs="12" class="order-xs-1 text-center d-flex box-center">
                    <v-img :width="300" aspect-ratio="16/9" cover src="@/assets/imagenes/ian_beckley.jpeg"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'AppCarrusel',
    props: {
        carrusel: {
            type: Array,
            default: () => [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
            required: false,
        },
    },
}
</script>

<style>
.banner {
    background: transparent url('@/assets/banner-1-1.png') top right no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 10em;
    padding-bottom: 515px;
}

@media (max-width: 767px) {
    .banner {
        padding-top: 120px;
        padding-bottom: 220px;
    }
}

.banner-title {
    font-size: 2em;
}
</style>
