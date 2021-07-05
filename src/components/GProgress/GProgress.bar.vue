<template>
  <span v-bind="progressAttrs" v-on="progressListeners">
    <span class="progress-bar-value" v-bind="progressValueAttrs" />
  </span>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'
import { validateColor } from '@/helpers/validators'

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
      const percentage = 100 - parseFloat(props.percentage)

      const attrs = {
        class: {
          [`${props.color}`]: !!props.color,
        },
        style: {
          transform: `translateX(-${percentage}%)`,
        },
      }

      return attrs
    })

    const progressAttrs = computed(() => ({
      class: {
        'progress-bar': true,
        small: props.small,
        large: props.large,
      },
    }))

    const progressListeners = computed(() => ctx.listeners)

    return { progressAttrs, progressListeners, progressValueAttrs }
  },
})
</script>
