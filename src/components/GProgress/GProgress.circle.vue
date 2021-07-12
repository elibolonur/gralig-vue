<template>
  <div v-bind="progressAttrs" v-on="progressListeners">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="gra-progress-circle-back" cx="40" cy="40" r="33" fill="none" />
      <circle class="gra-progress-circle-value" cx="40" cy="40" r="33" fill="none" v-bind="progressValueAttrs" />
    </svg>
  </div>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { validateColor } from '../../helpers/validators'

export default defineComponent({
  name: 'GButton',
  props: {
    percentage: {
      type: [Number, String],
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    color: {
      type: String,
      validator: validateColor,
    },
  },
  setup(props, ctx) {
    const progressValueAttrs = computed(() => {
      const max = 172
      const min = 380
      const delta = max - min
      const percentage = min + (parseFloat(props.percentage) / 100) * delta

      const attrs = {
        style: {
          'stroke-dashoffset': percentage,
        },
      }

      return attrs
    })

    const progressAttrs = computed(() => ({
      class: {
        'gra-progress-circle': true,
        small: props.small,
        large: props.large,
        [`${props.color}`]: !!props.color,
      },
    }))

    const progressListeners = computed(() => ctx.listeners)

    return { progressAttrs, progressListeners, progressValueAttrs }
  },
})
</script>
