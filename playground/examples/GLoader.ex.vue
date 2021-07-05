<template>
  <div class="g-loader-example">
    <h4 class="header my-3">Loaders => (GLoader.vue)</h4>

    <!-- Types -->
    <h5 class="header mb-3">Examples</h5>
    <h6 class="header mb-4"><pre>type: bar</pre></h6>
    <GLoader type="bar" />

    <h6 class="header my-4"><pre>type: circle</pre></h6>
    <GLoader type="circle" />

    <h6 class="header my-4"><pre>type: circle-pieces</pre></h6>
    <GLoader type="circle-pieces" />

    <h6 class="header my-4"><pre>type: dots</pre></h6>
    <GLoader type="dots" />

    <div class="mb-6" />
  </div>
</template>

<script>
import { GLoader } from '@/components'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'LoaderEx',
  components: {
    GLoader,
  },
})
</script>
