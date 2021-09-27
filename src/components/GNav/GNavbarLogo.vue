<template>
  <div class="gra-navbar-logo">
    <a class="gra-navbar-logo-link" :href="to" :target="target">
      <img class="gra-navbar-logo-img" :src="src" :alt="alt" />
    </a>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GNavLogo',
  props: {
    src: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    target: {
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
.gra-navbar-logo {
  margin-right: auto;
}
</style>