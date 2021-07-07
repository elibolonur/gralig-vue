<template>
  <details class="dropdown">
    <summary class="dropdown-wrapper" :style="summaryStyle">
      <span v-bind="buttonAttrs" v-on="buttonListeners">Dropdown</span>
    </summary>
    <GList class="dropdown-list" block>
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
        btn: true,
        'dropdown-btn': true,
        'btn-outline': props.outline,
        'btn-clear': props.clear,
        'btn-small': props.small,
        'btn-large': props.large,
        'btn-full-width': props.fullWidth,
        [`btn-${props.color}`]: !!props.color && !props.disabled,
        'btn-disabled': props.disabled,
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

.btn.btn-disabled,
.btn:link.btn-disabled,
.btn:visited.btn-disabled {
  background-color: rgb(182, 182, 182);
}
</style>
