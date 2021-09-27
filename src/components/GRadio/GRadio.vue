<template>
  <div ref="radioItem" v-bind="radioAttrs" @click="$emit('click')">
    <input
      :id="randomID"
      class="gra-custom-form-input"
      type="radio"
      :disabled="radioAttrs.disabled"
      :value="value || localValue"
      @click="emitParent"
    />
    <label class="gra-custom-form-label" :for="randomID">
      <slot />
    </label>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api'
import { uid, validateColor } from '../../helpers'

export default defineComponent({
  name: 'GRadio',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    color: {
      type: String,
      validator: validateColor,
    },
  },
  emits: ['input', 'click'],
  setup(props, ctx) {
    const localValue = ref()
    const radioAttrs = computed(() => ({
      class: {
        'gra-radio': true,
        'gra-custom-form-control': true,
        [`${props.color}`]: !!props.color,
      },
      value: props.value,
      disabled: props.disabled,
    }))

    const randomID = computed(() => uid(1, 'radio-'))

    onMounted(() => {
      // get self index when mounting
      const self = ctx.parent.$children.find((item) => item.$el === ctx.refs.radioItem)
      const selfIndex = ctx.parent.$children.findIndex((item) => item === self)

      localValue.value = selfIndex
    })

    const emitParent = () => {
      // emit the value to top if value is used
      if (props.value) {
        ctx.emit('input', props.value)

        return
      }

      // emit self index if no value used
      ctx.emit('input', localValue.value)
    }

    return { localValue, radioAttrs, randomID, emitParent }
  },
})
</script>

<style lang="scss">
@import 'gralig/scss/components/_radio.scss';
</style>
