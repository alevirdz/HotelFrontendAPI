<template>
    <transition name="slide-fade" mode="out-in">
        <v-navigation-drawer app v-model="sidebarVisible" width="280"
            :class="imageUrl ? 'app-bg-imagen' : 'app-bg-default'"
            :style="imageUrl ? { backgroundImage: `url(${require(`@/assets/sidebar_image/${imageUrl}`)})` } : {}">
            <div class="va-accordion">
                <div v-for="item in sidebarItems" :key="item.title">
                    <div class="items-menu-item">
                        <a @click.prevent="item.title === 'Auth' ? logout() : navigateTo(item.route)" role="button">
                            <div :class="{ 'active-item': active === item.route }"
                                class="d-flex align-center py-4 pr-2 pl-4" @click.prevent="toggleItem(item)">
                                <v-row class="align-center" no-gutters>
                                    <v-col cols="auto" class="color-ico-drawer mr-2">
                                        <v-icon aria-hidden="true">{{ item.icon }}</v-icon>
                                    </v-col>
                                    <v-col>
                                        <div
                                            class="color-text-drawer flex justify-between items-center leading-5 font-semibold">
                                            {{ item.title }}
                                            <v-icon v-if="item.subItems">{{ item.expanded ? 'mdi-chevron-up' :
                                                'mdi-chevron-down' }}</v-icon>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </a>
                    </div>

                    <div v-show="item.expanded">
                        <div class="va-collapse__body">
                            <div v-for="subItem in item.subItems" :key="subItem.title" class="sidebar__subitem"
                                @click.prevent="navigateTo(subItem.route)"
                                :class="{ 'active-item': active === subItem.route }">
                                <a>
                                    <span>{{ subItem.title }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="items-menu-item">
                    <a role="button">
                        <div class="d-flex align-center py-4 pr-2 pl-4">
                            <v-row class="align-center" no-gutters>
                                <LogoutUserComponent 
                                    custom-class="color-ico-drawer mr-2" 
                                    @logout="logout"
                                    icon="mdi-logout" 
                                    text="Cerrar sesión" 
                                />
                            </v-row>
                        </div>
                    </a>
                </div>
            </div>
        </v-navigation-drawer>
    </transition>
</template>

<script>
import LogoutUserComponent from "@/components/admin/guard/LogoutUserComponent.vue";
import { logoutUserService } from '@/views/admin/services/UserAccount/Auth';

export default {
    name: 'SidebarComponentPro',
    components: {
        LogoutUserComponent
    },
    props: {
        sidebarItems: {
            type: Array,
            required: true
        },
        theme: {
            type: Object,
            default: () => ({})
        },
        hasImage: {
            type: String,
            default: '' 
        }
    },
    data() {
        return {
            sidebarVisible: true,
            active: null,
            imageUrl: null,
        };
    },
    mounted() {
        this.active = this.$route.path;
        if (this.hasImage && this.theme.background) {
            this.imageUrl = this.theme.background;
        }

        this.setCSSVariables();
    },
    watch: {
        hasImage(newValue) {
            if (!newValue) {
                this.imageUrl = null;
            }
        },
        theme(newTheme, oldTheme) {
            if (newTheme !== oldTheme) {
                this.setCSSVariables();
                if (this.hasImage && newTheme.background) {
                    this.imageUrl = newTheme.background;
                }
            }
        }
    },
    methods: {
        setCSSVariables() {
            const theme = this.theme;
            document.documentElement.style.setProperty('--navigation-background', theme.background || '#ffffff');
            document.documentElement.style.setProperty('--navigation-background-image-cover-effect', theme.backgroundImageCoverEffect || 'rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--navigation-color-text', theme.colorText || '#000');
            document.documentElement.style.setProperty('--navigation-color-ico', theme.colorIco || '#000');
            document.documentElement.style.setProperty('--hover-background', theme.hoverBackground || '#ccc');
            document.documentElement.style.setProperty('--navigation-background-active', theme.backgroundItemActive || '#e3f2fd');
            document.documentElement.style.setProperty('--navigation-color-text-ico-active', theme.colorTextAndIcoActive || '#f00');
        },
        toggleItem(item) {
            item.expanded = !item.expanded;
        },
        navigateTo(route) {
            this.active = route;
            this.$router.push(route);
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
/* Variables CSS predeterminadas */
:root {
    --navigation-background: #11554a;
    --navigation-background-image-cover-effect: rgb(169, 171, 70);
    --navigation-color-text: yellow;
    --navigation-color-ico: yellow;
    --hover-background: #2d2c40;
    --navigation-background-active: #e3f2fd;
    --navigation-color-text-ico-active: red;
}

.items-menu-item:hover {
    background-color: var(--hover-background);
    color: var(--hover-color-text);
}

.sidebar__subitem {
    padding: 16px 20px 16px 8px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-fade-enter {
    transform: translateX(100%);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.v-navigation-drawer {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    pointer-events: auto;
    transition-duration: 0.2s;
    border: none;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
}

.app-bg-default {
    background-color: var(--navigation-background);
}

.app-bg-imagen {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.app-bg-imagen::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--navigation-background-image-cover-effect);
    z-index: -1;
}

.color-ico-drawer {
    color: var(--navigation-color-ico);
}

.color-text-drawer {
    color: var(--navigation-color-text);
}

.active-item {
    background-color: var(--navigation-background-active);
}

.active-item .color-text-drawer {
    color: var(--navigation-color-text-ico-active);
}

.active-item .color-ico-drawer {
    color: var(--navigation-color-text-ico-active);
}
</style>
