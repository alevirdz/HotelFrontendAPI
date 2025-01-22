<template>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
        <div>
            <v-btn v-for="(item, index) in socialMedia" :key="index" class="mx-4" variant="text" :href="item.url"
                :icon="item.icons" target="_blank"></v-btn>
        </div>
        <div class="pt-0">
            {{ description }}
        </div>
        <v-divider></v-divider>
        <div>
            {{ date }} — <strong>{{ company }}</strong>
        </div>
    </v-footer>
</template>

<script>
export default {
    name: 'AppFooter',
    props: {
        socialMedia: {
            type: Array,
            default: () => [{ icons: 'mdi-facebook', url: '' }],
            require: true
        },
        description: {
            type: String,
            default: `Lorem ipsum dolor sit amet. Aut voluptate expedita ut voluptatibus autem ab aperiam inventore ex optio nulla eos aspernatur deleniti. Id perspiciatis rerum nam impedit autem aut dolore enim a aperiam aspernatur ut molestiae praesentium et unde consequatur vel quia itaque. Aut molestiae ducimus nam labore accusamus vel reprehenderit debitis aut magnam voluptas non provident architecto aut commodi enim et rerum voluptas.
                    Qui dolorum consequatur quo distinctio iste et dolorem architecto eos ullam dolorem et beatae aspernatur et excepturi expedita. Quo omnis Quis aut maxime suscipit ut autem molestiae et quaerat soluta sed quasi omnis ea aliquam blanditiis.
                    Quo quasi commodi ut tempora modi qui magni modi. Ut accusantium blanditiis a voluptate odio rem sint ipsum et cumque quia. Aut tempore saepe et harum doloribus eum delectus esse sed voluptatem cumque et adipisci omnis et enim quidem.`,
            require: true
        },
        date: {
            type: String,
            default: 'Añadir fecha',
            require: true
        },
        company: {
            tpye: String,
            default: 'Company',
            require: true
        }
    }
}
</script>

<style scoped>
.v-footer {
    background-color: #eb0b0b; /* Color de fondo */
    color: white; /* Color del texto */
    padding: 20px 0; /* Espaciado interno */
    text-align: center; /* Centrar el texto */
}

</style>