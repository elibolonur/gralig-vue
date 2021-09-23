<template>
  <div class="g-nav-example">
    <h4 class="header my-3">Navigation => (GNav.vue)</h4>

    <!-- Default -->
    <h5 class="header mb-2">Example</h5>
    <GNav v-model="model" @input="input">
      <GNavItem value="home">Home</GNavItem>
      <GNavItem value="about">About</GNavItem>
      <GNavItem value="contact">Contact</GNavItem>
      <GNavItem value="works">Works</GNavItem>
    </GNav>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GNav, GNavItem } from '@/components'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'NavEx',
  components: {
    GNav,
    GNavItem,
  },
  setup() {
    const model = ref('home')

    const input = () => {
      console.log('GNav input:', model.value)
    }

    return { model, input }
  },
})
</script>

<style lang="scss" scoped>
.g-nav-example {
}
</style>
