<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-center align-center" fluid>
                <LoginForm class="app-login" :emailRules="emailRules" :passwordRules="passwordRules"
                    :submitText="'Iniciar sesión'" :buttonColor="color" @buttonLogin="login"
                    :forgotMyPassword="forgotMyPassword" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LoginForm from '@/components/public/components/LoginFormComponent.vue';
import { loginUserService } from '@/views/admin/services/UserAccount/Auth';
import Swal from 'sweetalert2';

export default {
    name: "LoginPage",
    components: {
        LoginForm,
    },
    data() {
        return {
            emailRules: [
                (v) => !!v || "Correo electrónico obligatorio",
                (v) => /.+@.+\..+/.test(v) || "Introduzca un correo electrónico válido",
            ],
            passwordRules: [
                (v) => !!v || "Contraseña es Obligatoria",
                (v) => v.length >= 4 || "La contraseña debe contener mínimo 4 carácteres",
            ],
            color: "#0d612b",
            forgotMyPassword: '/recovery-password',
        };
    },
    methods: {
        async login({ email, password }) {
            console.log("Login en proceso...");
            console.log("Email: ", email, "Password: ", password);

            try {
                const loginUser = await loginUserService(email, password);

                if (!loginUser.error && loginUser.response.token) {
                    localStorage.setItem('sessionToken', loginUser.response.token);
                    this.$router.push('/admin');
                }
            } catch (error) {
                console.log(error.response.data)
                let errorResponse = error;
                if (errorResponse) {
                    Swal.fire({
                        title: '¡Error!',
                        text: errorResponse.response.data.response,
                        icon: 'error',
                        confirmButtonText: 'Cerrar',
                        customClass: {
                            confirmButton: 'v-btn v-btn--large v-btn--outlined'
                        }
                    });

                }
            }
        }
    },
};
</script>

<style scoped>
.app-login {
    background-color: #fcfcfc;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 20rem;
    margin: 2rem;
}
</style>