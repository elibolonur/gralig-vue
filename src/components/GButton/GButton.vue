<template>
  <button v-bind="buttonAttrs" v-on="buttonListeners">
    <slot />
  </button>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { validateColor } from '@/helpers/validators'

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
        btn: true,
        'btn-outline': props.outline,
        'btn-clear': props.clear,
        'btn-small': props.small,
        'btn-large': props.large,
        'btn-full-width': props.fullWidth,
        [`btn-${props.color}`]: !!props.color,
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
