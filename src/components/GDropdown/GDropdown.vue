<template>
  <details class="gra-dropdown">
    <summary class="gra-dropdown-wrapper" :style="summaryStyle">
      <span v-bind="buttonAttrs" v-on="buttonListeners">Dropdown</span>
    </summary>
    <GList class="gra-dropdown-list" block>
      <slot />
    </GList>
  </details>
</template>

<script>
import { GList } from '../index'
import { computed, defineComponent } from '@vue/composition-api'
import { validateColor } from '../../helpers/validators'

export default defineComponent({
  name: 'GDropdown',
  components: {
    GList,
  },
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
        'gra-dropdown-btn': true,
        'gra-btn-outline': props.outline,
        'gra-btn-clear': props.clear,
        'gra-btn-small': props.small,
        'gra-btn-large': props.large,
        'gra-btn-full-width': props.fullWidth,
        [`gra-btn-${props.color}`]: !!props.color && !props.disabled,
        'gra-btn-disabled': props.disabled,
      },
    }))

    const buttonListeners = computed(() => ctx.listeners)

    const summaryStyle = computed(() => ({
      pointerEvents: props.disabled ? 'none' : undefined,
    }))

    return { buttonAttrs, buttonListeners, summaryStyle }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_dropdown.scss';

.gra-btn.gra-btn-disabled,
.gra-btn:link.gra-btn-disabled,
.gra-btn:visited.gra-btn-disabled {
  background-color: rgb(182, 182, 182);
}
</style>
