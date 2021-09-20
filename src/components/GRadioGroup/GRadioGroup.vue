<template>
  <div ref="radioGroup" role="radiogroup" @input="$emit('input', $event.target.value)">
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent, onMounted } from '@vue/composition-api'
import { uid } from '../../helpers'

export default defineComponent({
  name: 'GRadio',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['input'],
  setup(props, ctx) {
    onMounted(() => {
      const radioName = computed(() => uid(1, 'radio-'))
      const radioItems = Array.from(ctx.refs.radioGroup.children)

      radioItems.forEach((item) => {
        const input = item.querySelector('input')

        input.name = radioName

        if (input.value === props.value) {
          input.checked = true
        }
      })
    })
  },
})
</script>
