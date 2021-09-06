<template>
  <div v-bind="switchAttrs">
    <input
      :id="randomID"
      class="gra-custom-form-input"
      type="checkbox"
      :disabled="switchAttrs.disabled"
      :checked="value"
      @click="$emit('input', !value)"
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
  name: 'GSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
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
    const switchAttrs = computed(() => ({
      class: {
        'gra-switch': true,
        'gra-custom-form-control': true,
        [`${props.color}`]: !!props.color,
      },
      value: props.value,
      disabled: props.disabled,
    }))

    const randomID = computed(() => uid(1, 'id-'))

    return { switchAttrs, randomID }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_switch.scss';
</style>
