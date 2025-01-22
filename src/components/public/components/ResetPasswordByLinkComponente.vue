<template>
    <v-container>
      <v-col d-flex justify-center align-center>
        <v-form ref="ResetPasswordByLinkComponent" fast-fail @submit.prevent="handleControl" v-model="isResetPasswordFormValid">
  
            <inputComponent
            v-model="newpassword"
            :type="type"
            :label="passwordLabel"
            :rules="passwordRules"
            :density="density"
            :append-inner-icon="appendInnerIcon"
            class="margen-bottom-on-buttons"
            />

          <div>
            Escriba su nueva contraseña
          </div>
          
          <v-btn
            type="submit"
            block
            :color="buttonColor"
            :disabled="!isResetPasswordFormValid"
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
        passwordRules: {
        type: Array,
        default: () => [
          (v) => !!v || "Password is required",
          (v) => v.length >= 4 || "Password must be at least 4 characters",
        ],
      },
        passwordLabel: {
          type: String,
          default: "New password",
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
        type:{
            type: String,
            default: 'password',
        }
      },
      data() {
        return {
          newpassword: "",
          isResetPasswordFormValid: false,
        };
      },
      methods: {
        handleControl() {
          this.$emit("Reset-Password", { newpassword: this.newpassword });
        },
      },
    };
    </script>
  <style>
  .margen-bottom-on-buttons{
      margin-bottom: 1rem;
  }
  </style>
    