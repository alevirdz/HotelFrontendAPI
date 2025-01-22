<template>
  <v-container fluid>
    <article>
      <h1 class="page-title">Preferences</h1>
      <v-container class="account rounded-lg" fluid>
        <v-row class="align-center">
          <v-col class="app-profile-user" cols="12" sm="12">
            <div class="flex justify-center">
              <div class="va-avatar" :style="avatarStyle">
                <span class="text-4xl">😍</span>
              </div>
            </div>
          </v-col>

          <v-col class="app-name-user text-center" cols="12" sm="12">
            <h2 class="text-2xl md:text-3xl font-bold">Vasili Savitski</h2>
            <div class="flex justify-center space-x-1 text-sm">
              <p>Member since</p>
              <p>8/12/2020</p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="account rounded-lg" fluid>
        <v-row>
          <v-col cols="12">
            <v-row align="center" justify="center">
              <v-col cols="2">
                <p>Email</p>
              </v-col>
              <v-col cols="10">
                <span class="current-email">example@plataforma.com</span>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="account-detail" cols="12">
            <v-row align="center" justify="center">
              <v-col cols="2">
                <p>Contraseña</p>
              </v-col>
              <v-col cols="7">
                <input class="current-password" type="password" value="•••••••••••••" readonly />
              </v-col>
              <v-col cols="3" class="text-left">
                <v-btn density="default" @click="showChangePasswordDialog">Cambiar contraseña</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </article>

    <DialogAdminComponent
      v-model="showPasswordDialog"
      title="Cambiar Contraseña"
      cancelText="Cancelar"
      acceptText="Confirmar"
      @accept="onAccept"
      @cancel="onCancel"
    >
      <v-form>
        <inputComponent
          v-model="oldPassword"
          :type="type"
          :label="oldPasswordLabel"
          :rules="passwordRules"
          :density="density"
        />
        <inputComponent
          v-model="newPassword"
          :type="type"
          :label="newPasswordLabel"
          :rules="passwordRules"
          :density="density"
        />
        <inputComponent
          v-model="confirmNewPassword"
          :type="type"
          :label="confirmNewPasswordLabel"
          :rules="passwordRules"
          :density="density"
        />
      </v-form>
    </DialogAdminComponent>
  </v-container>
</template>

<script>
import DialogAdminComponent from '@/components/admin/partial/DialogAdminComponent.vue'
import inputComponent from '@/components/public/components/InputDefaultComponent.vue'

export default {
  name: 'SettingsModule',
  components: {
    DialogAdminComponent,
    inputComponent,
  },
  data() {
    return {
      avatarStyle: {
        fontSize: '1.25rem',
        backgroundColor: '#FFD43A',
        color: '#262824',
        width: '64px',
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      },
      showPasswordDialog: false,
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      oldPasswordLabel: "Contraseña anterior",
      newPasswordLabel: "Nueva contraseña",
      confirmNewPasswordLabel: "Confirmar nueva contraseña",
      passwordRules: [
                (v) => !!v || "Contraseña es Obligatoria",
                (v) => v.length >= 4 || "La contraseña debe contener mínimo 4 carácteres",
            ],
      density: 'comfortable',
      type: 'password',
    };
  },
  methods: {
    showChangePasswordDialog() {
      this.showPasswordDialog = true;
    },
    onAccept() {
      console.log("ACEPTASTE")


      this.showPasswordDialog = false;
    },
    onCancel() {
      this.showPasswordDialog = false;
      console.log('Acción cancelada');
    },
  },
};
</script>

<style scoped>
.page-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.account {
  background-color: #f4f6f8;
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.app-profile-user {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

.current-password {
  font-weight: 900;
  border: none;
  background: none;
  outline: none;
}

.text-right {
  text-align: right;
}
</style>
