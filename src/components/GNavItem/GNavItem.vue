<template>
  <li ref="navItem" class="gra-nav-item">
    <a v-bind="linkAttrs" v-on="listeners" @click="emitParent">
      <slot />
    </a>
  </li>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'GNavItem',
  props: {
    value: {
      type: [String, Number],
    },
    to: {
      type: String,
    },
    target: {
      type: String,
    },
  },
  emits: ['input'],
  setup(props, ctx) {
    const localValue = ref()

    const linkAttrs = computed(() => ({
      class: {
        'gra-nav-link': true,
        current: props.value ? props.value === ctx.parent.value : localValue.value === ctx.parent.value,
      },
      href: props.to,
      target: props.target,
    }))

    const listeners = computed(() => ctx.listeners)

    onMounted(() => {
      // get self index when mounting
      const self = ctx.parent.$children.find((item) => item.$el === ctx.refs.navItem)
      const selfIndex = ctx.parent.$children.findIndex((item) => item === self)

      localValue.value = selfIndex
    })

    const emitParent = () => {
      // emit the value to top if value is used
      if (props.value) {
        ctx.parent.$emit('input', props.value)

        return
      }

      // emit self index if no value used
      ctx.parent.$emit('input', localValue.value)
    }

    return { linkAttrs, listeners, emitParent }
  },
})
</script>

<style lang="scss" scoped>
.gra-nav-link.current:after {
  width: 4px;
  height: 4px;
}
.gra-nav-link:after {
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 0;
  background-color: #5f676d;
  border-radius: 50%;
  content: '';
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  transition: all 0.15s ease-in;
}
</style>
