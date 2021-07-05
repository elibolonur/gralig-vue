<template>
  <div class="g-progress-example">
    <h4 class="header my-3">Progress Bar & Circle => (GProgress.vue)</h4>

    <!-- Basic Bar -->
    <h5 class="header mb-2">Bar examples</h5>
    <GProgress percentage="20" />

    <div class="mb-6" />

    <!-- Sizes -->
    <h5 class="header mb-2">Sizes</h5>
    <GProgress percentage="40" small />
    <GProgress percentage="60" />
    <GProgress percentage="80" large />

    <div class="mb-6" />

    <!-- Colors -->
    <h5 class="header mb-2">Colors</h5>
    <GProgress color="blue" percentage="40" />
    <GProgress color="yellow" percentage="60" />
    <GProgress color="green" percentage="70" />
    <GProgress color="red" percentage="80" />

    <div class="mb-6" />

    <!-- Basic Circle -->
    <h5 class="header mb-2">Circle examples</h5>
    <GProgress type="circle" percentage="70" />

    <div class="mb-6" />

    <!-- Sizes -->
    <h5 class="header mb-2">Sizes</h5>
    <div class="u-flex u-flex-ai-c">
      <GProgress type="circle" percentage="70" small />
      <GProgress type="circle" percentage="70" class="ml-3" />
      <GProgress type="circle" percentage="70" large class="ml-3" />
    </div>

    <div class="mb-6" />

    <!-- Colors -->
    <h5 class="header mb-2">Colors</h5>
    <div class="u-flex u-flex-ai-c">
      <GProgress type="circle" color="blue" percentage="70" />
      <GProgress type="circle" color="yellow" percentage="70" class="ml-3" />
      <GProgress type="circle" color="green" percentage="70" class="ml-3" />
      <GProgress type="circle" color="red" percentage="70" class="ml-3" />
    </div>
  </div>
</template>

<script>
import { GProgress } from '@/components'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProgressEx',
  components: {
    GProgress,
  },
  setup() {
    const test = () => {
      console.log('test')
    }

    return { test }
  },
})
</script>

<style lang="scss" scoped>
.g-progress-example {
}
</style>
