<template>
    <div @click="handleLogout">
        <v-icon :class="customClass" aria-hidden="true">{{ icon }}</v-icon>
        <span :class="customClass">{{ text }}</span>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleLogout() {
            this.$emit('logout');
        }
    }
}
</script>