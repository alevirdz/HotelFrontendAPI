<template>
    <div v-for="(item, index) in pluginWAPP" :key="index">
        <v-btn v-show="isVisible" :icon="item.icon" :size="item.size" :class="item.class" :color="color"
            :href="'https://api.whatsapp.com/send?phone=' + item.phone + '&text=' + item.message" target="_blank"></v-btn>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'AppWhatsapp',
    props: {
        pluginWAPP: {
            type: Array,
            default: () => [{
                icon: 'fa-brands fa-whatsapp',
                class: 'btn-plugin-whatsapp',
                size: 'x-large',
                phone: '+529997637804',
                message: 'Hola, Necesito información'
            }],
            require: true
        },
        color: {
            type: String,
            default: 'teal-darken-1',
            require: true
        },
        isVisible: {
            type: Boolean,
            default: true,
            require: true
        }
    },
}
</script>
<style>
.btn-plugin-whatsapp {
    position: fixed;
    bottom: 40px;
    left: 40px;
}
</style>