<template>
    <div v-scroll="onScroll">
        <div v-for="(item, index) in arrow" :key="index">
            <v-btn v-if="isVisible" :icon="item.icon" :size="item.size" :class="item.class" :color="color"
                @click="toTop"></v-btn>
        </div>
    </div>
</template>


<script>
// @ is an alias to /src
export default {
    name: 'AppArrowTop',
    props: {
        arrow: {
            type: Array,
            default: () => [{
                icon: 'fa-solid fa-angle-up',
                class: 'btn-arrow-top',
                size: 'x-large',
            }],
            require: true
        },
        color: {
            type: String,
            default: 'indigo-darken-3',
            require: true
        }
    },
    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        onScroll() {
            this.isVisible = window.scrollY > 50
        },
        toTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        },
    }
}
</script>

<style>
.btn-arrow-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
}
</style>