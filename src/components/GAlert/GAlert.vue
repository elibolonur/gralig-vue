<template>
  <span v-bind="alertAttrs" v-on="alertListeners">
    <slot />
  </span>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { validateColor } from '../../helpers'

export default defineComponent({
  name: 'GAlert',
  props: {
    color: {
      type: String,
      validator: validateColor,
    },
  },
  setup(props, ctx) {
    const alertAttrs = computed(() => ({
      class: {
        'gra-alert': true,
        [`${props.color}`]: !!props.color,
      },
      role: 'alert',
    }))

    const alertListeners = computed(() => ctx.listeners)

    return { alertAttrs, alertListeners }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_alert.scss';
</style>
