<template>
  <div v-bind="listAttrs" v-on="listListeners">
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GList',
  props: {
    block: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const listAttrs = computed(() => ({
      class: {
        list: !props.block,
        'block-list': props.block,
      },
      disabled: props.disabled,
    }))

    const listListeners = computed(() => ctx.listeners)

    return { listAttrs, listListeners }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_list.scss';
</style>
