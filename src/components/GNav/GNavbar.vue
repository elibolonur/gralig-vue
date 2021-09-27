<template>
  <header class="gra-navbar">
    <div class="gra-container">
      <div class="gra-navbar-content">
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GNavbar',
})
</script>

<style lang="scss" scoped>
@import 'gralig/scss/components/_navbar.scss';
</style>
