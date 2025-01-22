<template>
  <v-container>
    <v-col d-flex justify-center align-center>
      <v-form ref="RecoveryPasswordComponent" fast-fail @submit.prevent="handleRecovery" v-model="isEmailFormValid">

        <inputComponent
          v-model="email"
          :label="emailLabel"
          :rules="emailRules"
          :density="density"
          class="margen-bottom-on-buttons"
        />
        
        <div>
          Se enviará a su correo registrado un link para restablecer su contraseña.
        </div>
        
        <v-btn
          type="submit"
          block
          :color="buttonColor"
          :disabled="!isEmailFormValid"
          class="mt-2"
        >
          {{ submitText }}
        </v-btn>
        
      </v-form>
    </v-col>
  </v-container>
</template>


  <script>
  import inputComponent from './InputDefaultComponent.vue';

  export default {
    name: "RecoveryPasswordComponent",
    components: {
        inputComponent
    },
    props: {
      emailRules: {
        type: Array,
        default: () => [
          (v) => !!v || "Email is required",
          (v) => /^(?!@)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v) || "E-mail must be valid",
        ],
      },
      emailLabel: {
        type: String,
        default: "E-mail",
      },
      submitText: {
        type: String,
        default: "Recovery Password",
      },
      buttonColor: {
        type: String,
        default: 'deep-purple darken-2',
      },
      density:{
        type: String,
        default: 'comfortable',
      },
    },
    data() {
      return {
        email: "youalevi@gmail.com",
        isEmailFormValid: false,
      };
    },
    methods: {
      handleRecovery() {
        this.$emit("recovery-submit", { email: this.email });
      },
    },
  };
  </script>
<style>
.margen-bottom-on-buttons{
    margin-bottom: 1rem;
}
</style>
  