<template>
    <v-container>
        <v-col d-flex justify-center align-center>
            <v-form ref="entryForm" fast-fail @submit.prevent="prospects">
                <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>
                <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field>
                <v-text-field v-model="email" label="E-mail" :rules="emailRules"></v-text-field>
                <v-btn type="submit" block class="mt-2" color="deep-purple-darken-2">Submit</v-btn>
            </v-form>
            <authWithGoogle />
        </v-col>
    </v-container>
</template>
<script>
import { auth, createUserWithEmailAndPassword } from "@/firebase/conexion";
import authWithGoogle from "@/components/LoginWithGoogle.vue"
export default {
    name: 'AppFormAuth',
    data: () => ({
        firstName: '',
        firstNameRules: [
            value => {
                if (value?.length > 3) return true
                return 'First name must be at least 3 characters.'
            },
        ],
        lastName: '',
        lastNameRules: [
            value => {
                if (/[^0-9]/.test(value)) return true
                return 'Last name can not contain digits.'
            },
        ],
        email: '',
        emailRules: [
            value => {
                if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
                return 'Must be a valid e-mail.'
            },
        ]
    }),
    components: {
        authWithGoogle,
    },
    methods: {
        prospects() {
            const isValid = this.$refs.entryForm.validate();
            if (isValid) {
                const formProspects = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: '1234567890'
                };
                //Funcional:
                //https://firebase.google.com/docs/auth/web/manage-users?hl=es
                createUserWithEmailAndPassword(auth, formProspects.email, formProspects.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log(user)
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode)
                        console.log(errorMessage)

                        if (errorCode === 'auth/email-already-in-use') {
                            console.log("Ya existe esa cuenta")
                        }
                        if (errorCode == 'auth/invalid-email') {
                            console.log("Proporciona un email valido")
                        }

                        if (errorCode == 'auth/wrong-password') {
                            console.log("autenticación/contraseña incorrecta")
                        }

                    });


                /*  let url = 'http://localhost/Alevi/vue_web/ws_a_p_i/';
                 let urlProd = 'https://dev.crecimientoweb.com/ws_a_p_i/sendMail.php';
                 axios.post(url, formProspects)
                     .then((result) => {
                         console.log(result.data)
                     })
                     .catch(function (error) {
                         console.log(error);
                     }); */
            }


            // Note that v-form also has another function called resetValidation(), so after we empty our fields, it won't show the validation errors again.
            /* this.$refs.form.resetValidation(); */

        },
    }
}
</script>