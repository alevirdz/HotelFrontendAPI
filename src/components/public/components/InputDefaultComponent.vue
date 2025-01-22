<template>
  <v-text-field
    v-model="inputValue"
    :label="label"
    :type="type"
    :rules="rules"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :outlined="outlined"
    :hint="hint"
    :variant="variant"
    :counter="counter"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :prepend-inner-icon="prependInnerIcon"
    :append-inner-icon="appendInnerIcon"
    :color="color" 
    :focused-color="focusedColor"
    :density="density"
  />
</template>

<script>
export default {
  name: "InputDefaultComponent",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: "Input"
    },
    type: {
      type: String,
      default: "text"
    },
    rules: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ""
    },
    counter: {
      type: [Boolean, Number],
      default: false
    },
    prependIcon: {
      type: String,
      default: ""
    },
    appendIcon: {
      type: String,
      default: ""
    },
    prependInnerIcon: {
      type: String,
      default: ""
    },
    appendInnerIcon: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "outlined",
      validator(value) {
        return ['filled', 'outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'].includes(value);
      }
    },
    color: {
      type: String,
      default: "teal-darken-1"
    },
    focusedColor: {
      type: String,
      default: "teal-darken-1"
    },
    density: {
      type: String,
      default: "default",
      validator(value) {
        return ['default', 'comfortable', 'compact'].includes(value);
      }
    }
  },
  data() {
    return {
      inputValue: this.value // Inicializa el inputValue con el valor pasado por 'v-model'
    };
  },
  watch: {
    // Si la propiedad 'value' cambia desde el componente padre, sincroniza el 'inputValue'
    value(newValue) {
      this.inputValue = newValue;
    },

    // Si 'inputValue' cambia, emite el evento 'input' para actualizar el valor en el padre
    inputValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>

