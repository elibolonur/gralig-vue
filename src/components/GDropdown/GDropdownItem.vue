<template>
  <GListItem class="dropdown-list-item">
    <div v-if="!link" class="dropdown-list-link list-link" v-on="itemListeners">
      <slot />
    </div>
    <a v-else class="dropdown-list-link list-link" :href="to" :target="target" v-on="itemListeners">
      <slot />
    </a>
  </GListItem>
</template>

<script>
import { GListItem } from '../index'
import { computed, defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GDropdownItem',
  components: {
    GListItem,
  },
  props: {
    link: {
      type: Boolean,
    },
    to: {
      type: String,
    },
    target: {
      type: String,
    },
  },
  setup(props, ctx) {
    const itemListeners = computed(() => ctx.listeners)

    return { itemListeners }
  },
})
</script>

<style lang="scss">
.dropdown-list-item {
  color: $color-link-font;
}
</style>
