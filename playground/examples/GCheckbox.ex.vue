<template>
  <div class="g-checkbox-example">
    <h4 class="header my-3">Checkboxes => (GCheckbox.vue)</h4>

    <!-- Default -->
    <h5 class="header mb-2">Example</h5>
    <GCheckbox v-model="model">vue:checkbox</GCheckbox>
    <GCheckbox disabled>vue:checkbox - disabled</GCheckbox>

    <div class="mb-6" />

    <!-- Colors -->
    <h5 class="header mb-2">Colors</h5>
    <GCheckbox color="blue">Blue</GCheckbox>
    <GCheckbox color="yellow">Yellow</GCheckbox>
    <GCheckbox color="green">Green</GCheckbox>
    <GCheckbox color="red">Red</GCheckbox>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GCheckbox } from '@/components'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'CheckboxEx',
  components: {
    GCheckbox,
  },
  setup() {
    const model = ref(false)

    return { model }
  },
})
</script>

<style lang="scss" scoped>
.g-checkbox-example {
}
</style>
