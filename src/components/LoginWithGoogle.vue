<template>
    <div>
        <v-btn color="blue-lighten-1" block v-on:click="singInGoogle">Google</v-btn>
    </div>
</template>
<script>
import { auth, signInWithPopup, GoogleAuthProvider } from "@/firebase/conexion";
export default {
    name: 'AppFormAuth',
    methods: {
        singInGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    console.log(credential)
                    const token = credential.accessToken;
                    console.log(token)
                    // The signed-in user info.
                    const user = result.user;
                    console.log(user)
                    console.log(user.uid)
                    this.$router.push({ name: 'dashboard' })
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    console.log(errorCode)
                    console.log(errorMessage)
                    console.log(email)
                    console.log(credential)
                    // ...
                });
        }
    }
}
</script>