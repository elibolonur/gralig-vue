<template>
  <nav>
    <ul ref="navGroup" v-bind="navAttrs">
      <slot />
    </ul>
  </nav>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GNav',
  props: {
    // eslint-disable-next-line vue/no-unused-properties
    value: {
      type: [String, Number],
      default: '',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],
  setup(props) {
    const navAttrs = computed(() => ({
      class: {
        'gra-nav': true,
        'gra-nav-fill': props.fullWidth,
      },
    }))

    return { navAttrs }
  },
})
</script>

<style lang="scss" scoped>
@import 'gralig/scss/components/_nav.scss';
</style>
