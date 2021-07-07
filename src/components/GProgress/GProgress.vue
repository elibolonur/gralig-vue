<template>
  <Component :is="progressType" v-bind="progressAttrs" v-on="progressListeners" />
</template>

<script>
import GProgressBar from './GProgress.bar.vue'
import GProgressCircle from './GProgress.circle.vue'
import { computed, defineComponent } from '@vue/composition-api'
import { validateColor } from '../../helpers/validators'

export default defineComponent({
  name: 'GProgress',
  components: {
    GProgressBar,
    GProgressCircle,
  },
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
    type: {
      type: String,
      default: 'bar',
      validator: (val) => {
        const valid = val === 'bar' || val === 'circle'

        if (!valid) {
          console.error('[Vue warn]: prop.type is not valid!')
          console.error(`[Vue warn]: Accepted values: bar | circle`)
        }

        return valid
      },
    },
  },
  setup(props, ctx) {
    const progressType = computed(() => (props.type === 'bar' ? 'GProgressBar' : 'GProgressCircle'))

    const progressAttrs = computed(() => ({
      percentage: props.percentage,
      small: props.small,
      large: props.large,
      color: props.color,
    }))

    const progressListeners = computed(() => ctx.listeners)

    return { progressType, progressAttrs, progressListeners }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_progress.scss';
</style>
