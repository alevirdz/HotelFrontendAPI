<template>
  <v-container>
    <v-col d-flex justify-center align-center>
      <v-form ref="LoginComponent" fast-fail @submit.prevent="handleControl" v-model="isLoginFormValid">
        
        <inputComponent
          v-model="email"
          :label="emailLabel"
          :rules="emailRules"
          :density="density"
          class="margen-bottom-on-buttons"
        />

        <inputComponent
          v-model="password"
          :type="showInputContext ? 'text' : 'password'"
          :label="passwordLabel"
          :rules="passwordRules"
          :density="density"
          :append-inner-icon="showInputContext ? 'mdi-eye-off' : 'mdi-eye'" 
          class="margen-bottom-on-buttons"
          @click="handleInputPassword"
        />

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-end">
          <a
            class="text-caption text-decoration-none text-blue margen-bottom-on-buttons"
            :href="forgotMyPassword"
            rel="noopener noreferrer"
            target="_blank"
          >
            ¿Olvidaste la contraseña?</a>
        </div>

        <v-btn
          type="submit"
          block
          class="mt-2"
          :color="buttonColor"
          :disabled="!isLoginFormValid"
        >
          {{ submitText || 'Login' }}
        </v-btn>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
import inputComponent from './InputDefaultComponent.vue';

export default {
  name: "LoginComponent",
  components: {
    inputComponent
  },
  props: {
    emailRules: {
      type: Array,
      default: () => [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    },
    passwordRules: {
      type: Array,
      default: () => [
        (v) => !!v || "Password is required",
        (v) => v.length >= 4 || "Password must be at least 4 characters",
      ],
    },
    submitText: {
      type: String,
      default: "¡Iniciar Sesión!",
    },
    buttonColor: {
      type: String,
      default: 'deep-purple darken-2',
    },
    emailLabel: {
      type: String,
      default: "E-mail",
    },
    passwordLabel: {
      type: String,
      default: "Password",
    },
    prependInnerIcon:{
      type: String,
      default: 'mdi-account',
    },
    appendInnerIcon:{
      type: String,
      default: 'mdi-eye',
    },
    density:{
      type: String,
      default: 'comfortable',
    },
    forgotMyPassword:{
      type: String,
      default: 'www.google.com',
    }
  },
  data() {
    return {
      email: "youalevi@gmail.com",
      password: "12345",
      isLoginFormValid: false,
      showInputContext: false,
      isSubmitting: false,
    };
  },
  methods: {
    handleControl() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;

      this.$emit("buttonLogin", { email: this.email, password: this.password });
    },
    handleInputPassword() {
      this.showInputContext = !this.showInputContext;
    }
  }
};
</script>

<style scoped>
.margen-bottom-on-buttons {
  margin-bottom: 1rem;
}
</style>
