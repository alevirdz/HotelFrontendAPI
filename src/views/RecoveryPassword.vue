<template>
    <v-container>
        <v-row>
            <v-col class="d-flex justify-center align-center" fluid>
                <RecoveryPasswordForm
                    class="app-recovery-password"
                    :emailRules="emailRules"
                    :submitText="'Restablecer contraseña'"
                    :buttonColor="color"
                    @recovery-submit="RecoveryPassword"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RecoveryPasswordForm from '@/components/public/components/RecoveryPasswordComponent.vue';
import { RecoveryPasswordByURL } from '@/views/services/RecoveryPassword';
import Swal from 'sweetalert2';

export default {
    name: "RecoveryPasswordPage",
    components: {
        RecoveryPasswordForm,
    },
    data() {
        return {
            emailRules: [
                (v) => !!v || "Correo electrónico obligatorio",
                (v) => /.+@.+\..+/.test(v) || "Introduzca un correo electrónico válido",
            ],
            color: "#0d612b",
        };
    },
    methods: {
        async RecoveryPassword({ email }) {
            try {

                const response = await RecoveryPasswordByURL(email);

                console.log(response.data.response);

                if(response.data.response){
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
                console.log(error.response.data)
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
