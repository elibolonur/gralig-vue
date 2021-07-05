<template>
  <div class="g-button-example">
    <h4 class="header">Buttons</h4>
    <button class="btn">button</button>
    <button class="btn btn-outline">outlined</button>
    <button class="btn btn-clear">clear</button>
    <button class="btn" disabled>disabled</button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Buttons',
})
</script>

<style lang="scss" scoped>
.g-button-example {
  .header {
    margin-bottom: 0.5em;
  }
}
</style>
