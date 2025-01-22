<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-center align-center" fluid>
                <ResetPasswordByLinkComponente class="app-recovery-password" :passwordRules="passwordRules"
                :passwordLabel="label"
                    :submitText="'Restablecer contraseña'" :buttonColor="color" @Reset-Password="ResetPassword" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ResetPasswordByLinkComponente from '@/components/public/components/ResetPasswordByLinkComponente.vue';
import { ResetPasswordByURL } from '@/views/services/RecoveryPassword';
import Swal from 'sweetalert2';

export default {
    name: "ResetPasswordPage",
    components: {
        ResetPasswordByLinkComponente,
    },
    data() {
        return {
            passwordRules: [
                (v) => !!v || "Contraseña es Obligatoria",
                (v) => v.length >= 4 || "La contraseña debe contener minimo 4 carácteres",
            ],
            color: "#0d612b",
            label: "Nueva contraseña"
        };
    },
    methods: {
        async ResetPassword({ newpassword }) {
            try {
                const resetPasswordUser = newpassword;
                const urlParams = new URLSearchParams(window.location.search);
                const token = urlParams.get('token');

                const response = await ResetPasswordByURL(token, resetPasswordUser);

                if (!response.data.error) {
                    Swal.fire({
                        title: 'success',
                        text: response.data.response,
                        icon: 'success',
                        confirmButtonText: 'Cerrar',
                        customClass: {
                            confirmButton: 'v-btn v-btn--large v-btn--outlined'
                        }
                    });
                }



            } catch (error) {
                console.log(error.response.data.response)
                let errorResponse = error.response.data.response;
                if (errorResponse) {
                    Swal.fire({
                        title: '¡Error!',
                        text: error.response.data.response,
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
.app-recovery-password {
    background-color: #fcfcfc;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 20rem;
    margin: 2rem;
}
</style>
