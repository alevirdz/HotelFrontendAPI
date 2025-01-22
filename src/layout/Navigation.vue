<template>
    <div>
        <Navbar :logo="logo" :company="company" :menu="menu" :color="color" :modeDark="modeDark" />
    </div>
</template>



<script>
import Navbar from '@/components/Navbar'

export default {
    name: 'AppNavigation',
    components: {
        Navbar
    },
    data: () => ({
        company: 'ZERO',
        logo: {
            show: true,
            url: 'logo.svg'
        },
        menu: [
            { icon: 'home', title: 'Inicio', url: '/' },
            { icon: 'info', title: 'Información', url: 'about' },
            { icon: 'warning', title: 'Register', url: 'register' },
            { icon: 'warning', title: 'Login', url: 'login' }
        ],
        color: 'transparent',
        modeDark: true,
    }),
    beforeMount() {
        window.onscroll = () => {
            this.changeColor();
        };
    },
    methods: {
        changeColor() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                this.color = 'black';
            } else {
                this.color = 'transparent';
            }
        },
    },
}
</script>

<style>
.v-application__wrap {
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    max-width: 100%;
    min-height: 0 !important;
    min-height: 0 !important;
    position: relative;
}

.main {
    position: fixed;
    top: 0;
    z-index: 1;
}
</style>