<template>
  <GProgress v-if="type === 'bar'" class="gra-loading" />
  <GProgress v-else-if="type === 'circle'" class="gra-loading gra-circle-turn" type="circle" />
  <GProgress v-else-if="type === 'circle-pieces'" class="gra-loading gra-circle-turn-pieces" type="circle" />
  <div v-else class="gra-loading-dots">
    <span class="gra-loading-dot dot-1" />
    <span class="gra-loading-dot dot-2" />
    <span class="gra-loading-dot dot-3" />
  </div>
</template>

<script>
import { GProgress } from '../index'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GLoader',
  components: {
    GProgress,
  },
  props: {
    type: {
      type: String,
      default: 'circle',
      validator: (val) => {
        const valid = val === 'bar' || val === 'circle' || val === 'circle-pieces' || val === 'dots'

        if (!valid) {
          console.error('[Vue warn]: prop.type is not valid!')
          console.error(`[Vue warn]: Accepted values: bar | circle | circle-pieces | dots`)
        }

        return valid
      },
    },
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_loading.scss';
</style>
