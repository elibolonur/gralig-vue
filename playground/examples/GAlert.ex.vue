<template>
  <div class="g-alert-example">
    <h4 class="header my-3">Alert => (GAlert.vue)</h4>

    <!-- Default -->
    <h5 class="header mb-2">Example</h5>
    <GAlert>This is an alert</GAlert>

    <div class="mb-6" />

    <!-- Colors -->
    <h5 class="header mb-2">Colors</h5>
    <div class="gra-flex gra-flex-col">
      <GAlert class="mb-1" color="blue">This is an alert</GAlert>
      <GAlert class="mb-1" color="yellow">This is an alert</GAlert>
      <GAlert class="mb-1" color="green">This is an alert</GAlert>
      <GAlert color="red">This is an alert</GAlert>
    </div>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GAlert } from '@/components'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AlertEx',
  components: {
    GAlert,
  },
})
</script>

<style lang="scss" scoped>
.g-alert-example {
}
</style>
