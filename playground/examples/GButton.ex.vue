<template>
  <div class="g-button-example">
    <h4 class="header my-3">Buttons => (GButton.vue)</h4>

    <!-- Types -->
    <h5 class="header mb-2">Types</h5>
    <GButton>vue:button</GButton>
    <GButton outline>vue:outlined</GButton>
    <GButton clear>vue:clear</GButton>
    <GButton disabled>vue:disabled</GButton>

    <div class="mb-6" />

    <!-- Sizes -->
    <h5 class="header mb-2">Sizes</h5>
    <GButton small>small</GButton>
    <GButton>medium</GButton>
    <GButton large>large</GButton>

    <div class="my-3" />
    <GButton fullWidth>full-width</GButton>
    <div class="mb-6" />

    <!-- Colors -->
    <h5 class="header mb-2">Colors</h5>
    <GButton color="blue">Blue</GButton>
    <GButton color="blue" outline>Blue</GButton>
    <GButton color="blue" clear>Blue</GButton>
    <GButton color="blue" disabled>Blue</GButton>
    <div class="mb-3" />
    <GButton color="yellow">Yellow</GButton>
    <GButton color="yellow" outline>Yellow</GButton>
    <GButton color="yellow" clear>Yellow</GButton>
    <GButton color="yellow" disabled>Yellow</GButton>
    <div class="mb-3" />
    <GButton color="green">Green</GButton>
    <GButton color="green" outline>Green</GButton>
    <GButton color="green" clear>Green</GButton>
    <GButton color="green" disabled>Green</GButton>
    <div class="mb-3" />
    <GButton color="red">Red</GButton>
    <GButton color="red" outline>Red</GButton>
    <GButton color="red" clear>Red</GButton>
    <GButton color="red" disabled>Red</GButton>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GButton } from '@/components'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ButtonEx',
  components: {
    GButton,
  },
})
</script>

<style lang="scss" scoped>
.g-button-example {
  .btn:not(:last-child) {
    margin-right: 1em;
  }
}
</style>
