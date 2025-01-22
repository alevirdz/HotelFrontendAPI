<template>
    <div @click="handleLogout">
        <span style="font-weight: bold;">Salir</span>
        <v-icon aria-hidden="true">mdi-logout</v-icon>
    </div>
</template>

<script>
import { logout } from '@/views/admin/services/UserAccount/Auth';

export default {
    methods: {
        handleLogout: async () => {
            console.log("DIMOS EL CLICK");
            try {
                const response = await logout();
                console.log('Respuesta del servidor:', response);
                // if (response.data.status === 200 && response.data.body === "OK") {
                //     localStorage.removeItem('sessionToken');
                //     EventBus.isAuthenticated = false;
                //     this.$router.push({ name: 'LoginPage' });
                // }
            } catch (error) {
                console.error('Error al cerrar sesión:', error.response ? error.response.data : error.message);
            }
        }
    }
}
</script>