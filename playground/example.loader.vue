<template>
  <div class="example-loader">
    <!-- Components -->
    <div v-for="c in components" :key="c.name" class="component-container pb-6">
      <Component :is="c" />
    </div>

    <!-- Loader -->
    <GLoader v-if="loading" class="g-loader" type="circle" />
  </div>
</template>

<script>
import { GLoader } from '@/components'
import { defineComponent, onMounted, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  name: 'DemoViewer',
  components: {
    GLoader,
  },
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
  .g-loader {
    margin-top: 40%;
  }

  .component-container {
    border-bottom: 1px solid #ccc;
  }
}
</style>
