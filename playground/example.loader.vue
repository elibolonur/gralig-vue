<template>
  <div class="example-loader">
    <!-- Components -->
    <div v-for="c in components" :key="c.name" class="component-container pb-6">
      <Component :is="c" />
    </div>

    <!-- Loader -->
    <div v-if="loading" class="progress-circle loading circle-turn">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle class="progress-circle-value" cx="40" cy="40" r="33" fill="none" />
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  name: 'DemoViewer',
  setup() {
    const state = reactive({
      loading: true,
      components: [],
    })

    // loader function
    const loadExamples = async () => {
      const context = require.context('./examples', true, /.*\.vue$/, 'lazy')
      const components = await Promise.all(context.keys().map(async (path) => await context(path)))

      // map default exports & return
      return components.map((m) => m.default)
    }

    onMounted(async () => {
      state.components = await loadExamples()
      state.loading = false
    })

    return { ...toRefs(state) }
  },
})
</script>

<style lang="scss" scoped>
.example-loader {
  .progress-circle {
    margin-top: 40%;
  }

  .component-container {
    border-bottom: 1px solid #ccc;
  }
}
</style>
