<template>
  <button v-bind="buttonAttrs" v-on="buttonListeners">
    <slot />
  </button>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { validateColor } from '../../helpers/validators'

export default defineComponent({
  name: 'GButton',
  props: {
    outline: {
      type: Boolean,
    },
    clear: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    fullWidth: {
      type: Boolean,
    },
    color: {
      type: String,
      validator: validateColor,
    },
  },
  setup(props, ctx) {
    const buttonAttrs = computed(() => ({
      class: {
        'gra-btn': true,
        'gra-btn-outline': props.outline,
        'gra-btn-clear': props.clear,
        'gra-btn-small': props.small,
        'gra-btn-large': props.large,
        'gra-btn-full-width': props.fullWidth,
        [`gra-btn-${props.color}`]: !!props.color,
      },
      disabled: props.disabled,
    }))

    const buttonListeners = computed(() => ctx.listeners)

    return { buttonAttrs, buttonListeners }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_button.scss';
</style>
