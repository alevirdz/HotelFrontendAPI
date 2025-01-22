<template>
    <v-app-bar app color="white" dark class="header">
        <v-container fluid>
            <v-row>
                <v-col class="app-navbar-logo" sm="1">
                    <div class="d-flex align-center custom-toolbar-title">
                        <img class="app-size-logo" :src="pahtLogo" alt="logo">
                    </div>
                </v-col>
                
                <v-col class="app-navbar-actions" sm="11">
                    <v-menu offset-y>
                        <template #activator="{ props }">
                            <v-btn icon v-bind="props" dark>
                                <v-icon>mdi-account-circle</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>Alevi Rodriguez</v-list-item-title>
                            </v-list-item>
                            <v-list-item v-for="item in menuItems" :key="item.text">
                                <v-list-item-title>
                                    <v-icon @click="item.text === 'Signout' ? logout() : null">{{ item.icon }}</v-icon>
                                    {{ item.text }}
                                </v-list-item-title>

                            </v-list-item>

                            <v-list-item>
                                <v-list-item-title>

                                    <LogoutUserComponent custom-class="mr-1" @logout="logout" icon="mdi-logout" text="Cerrar sesión" />

                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-btn icon @click="toggleSidebar" dark>
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
import LogoutUserComponent from "@/components/admin/guard/LogoutUserComponent.vue";
import { logoutUserService } from '@/views/admin/services/UserAccount/Auth';

export default {
    name: 'HeaderComponent',
    components: {
        LogoutUserComponent,

    },
    props: {
        pahtLogo: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            sidebar: true,
            menuItems: [
                { icon: 'mdi-cached', text: 'Activity Log' },
            ],
        }
    },
    methods: {
        toggleSidebar() {
            this.sidebar = !this.sidebar;
            this.$emit('toggle-sidebar', this.sidebar);
        },
        async logout() {
            try {
                const logoutUser = await logoutUserService();
                if (!logoutUser.error && logoutUser.response === "OK") {
                    localStorage.removeItem('sessionToken');
                    this.$router.push({ name: 'LoginPage' });
                }
            } catch (error) {
                console.error('Error al cerrar sesión:', error.response ? error.response.data : error.message);
            }
        }
    },
};
</script>

<style scoped>
.header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-toolbar-title {
    flex: 0 0 auto;
}

.app-size-logo {
    width: 4rem;
}

.app-navbar-logo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.app-navbar-actions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
}
</style>
