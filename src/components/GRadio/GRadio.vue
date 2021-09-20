<template>
  <div v-bind="radioAttrs" @click="$emit('click')">
    <input
      :id="randomID"
      class="gra-custom-form-input"
      type="radio"
      :disabled="radioAttrs.disabled"
      :value="value"
      @click="$emit('input', value)"
    />
    <label class="gra-custom-form-label" :for="randomID">
      <slot />
    </label>
  </div>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { uid, validateColor } from '../../helpers'

export default defineComponent({
  name: 'GRadio',
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    color: {
      type: String,
      validator: validateColor,
    },
  },
  emits: ['input', 'click'],
  setup(props) {
    const radioAttrs = computed(() => ({
      class: {
        'gra-radio': true,
        'gra-custom-form-control': true,
        [`${props.color}`]: !!props.color,
      },
      value: props.value,
      disabled: props.disabled,
    }))

    const randomID = computed(() => uid(1, 'radio-'))

    return { radioAttrs, randomID }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_radio.scss';
</style>
