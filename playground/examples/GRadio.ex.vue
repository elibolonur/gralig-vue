<template>
  <div class="g-radio-example">
    <h4 class="header my-3">Radio => (GRadio.vue)</h4>

    <!-- Default -->
    <h5 class="header mb-2">Example</h5>
    <GRadio>vue:radio</GRadio>
    <GRadio disabled>vue:radio - disabled</GRadio>

    <div class="mb-6" />

    <!-- Group -->
    <h5 class="header mb-2">Radio Group</h5>
    <GRadioGroup v-model="model" @input="input">
      <GRadio value="blue" color="blue">Blue</GRadio>
      <GRadio value="yellow" color="yellow">Yellow</GRadio>
      <GRadio value="green" color="green">Green</GRadio>
      <GRadio value="red" color="red">Red</GRadio>
    </GRadioGroup>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GRadio, GRadioGroup } from '@/components'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'RadioEx',
  components: {
    GRadio,
    GRadioGroup,
  },
  setup() {
    const model = ref('blue')

    const input = () => {
      console.log('GRadioGroup input:', model.value)
    }

    return { model, input }
  },
})
</script>

<style lang="scss" scoped>
.g-radio-example {
}
</style>
