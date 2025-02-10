<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>

      <v-card-text>
        <!-- Aquí se usará un slot para permitir contenido dinámico -->
        <slot></slot>
      </v-card-text>

      <v-card-actions>
        <!-- Botón Cancelar -->
        <v-btn text @click="cancel">{{ cancelText }}</v-btn>

        <!-- Botón Aceptar -->
        <v-btn color="primary" @click="accept">{{ acceptText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogAdminComponent",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Confirmar acción",
    },
    cancelText: {
      type: String,
      default: "Cancelar",
    },
    acceptText: {
      type: String,
      default: "Aceptar",
    },
  },
  data() {
    return {
      visible: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.visible = newVal;
    },
    visible(newVal) {
      this.$emit("input", newVal);
    },
  },
  methods: {
    accept() {
      this.$emit("accept");
      this.visible = false;
    },
    cancel() {
      this.$emit("cancel");
      this.visible = false;
    },
  },
};
</script>

<style scoped>
/* Estilos específicos si es necesario */
.text-primary{
  color: #096fba !important;
}
</style>
