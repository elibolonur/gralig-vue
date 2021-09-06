<template>
  <div class="g-switch-example">
    <h4 class="header my-3">Switches => (GSwitch.vue)</h4>

    <!-- Default -->
    <h5 class="header mb-2">Example</h5>
    <GSwitch v-model="model">vue:switch</GSwitch>
    <GSwitch disabled>vue:switch - disabled</GSwitch>

    <div class="mb-6" />

    <!-- Colors -->
    <h5 class="header mb-2">Colors</h5>
    <GSwitch color="blue">Blue</GSwitch>
    <GSwitch color="yellow">Yellow</GSwitch>
    <GSwitch color="green">Green</GSwitch>
    <GSwitch color="red">Red</GSwitch>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GSwitch } from '@/components'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'SwitchEx',
  components: {
    GSwitch,
  },
  setup() {
    const model = ref(false)

    return { model }
  },
})
</script>

<style lang="scss" scoped>
.g-switch-example {
}
</style>
