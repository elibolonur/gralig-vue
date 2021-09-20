<template>
  <div v-bind="checkboxAttrs" @click="$emit('click')">
    <input
      :id="randomID"
      class="gra-custom-form-input"
      type="checkbox"
      :disabled="checkboxAttrs.disabled"
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
  name: 'GCheckbox',
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
    const checkboxAttrs = computed(() => ({
      class: {
        'gra-checkbox': true,
        'gra-custom-form-control': true,
        [`${props.color}`]: !!props.color,
      },
      value: props.value,
      disabled: props.disabled,
    }))

    const randomID = computed(() => uid(1, 'cb-'))

    return { checkboxAttrs, randomID }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_checkbox.scss';
</style>
