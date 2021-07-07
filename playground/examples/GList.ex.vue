<template>
  <div class="g-list-example">
    <h4 class="header my-3">GList => (GList.vue | GListItem.vue)</h4>

    <!-- Types -->
    <h5 class="header mb-2">Types</h5>
    <GList>
      <GListItem>Item 1</GListItem>
      <GListItem>Item 2</GListItem>
      <GListItem>Item 3</GListItem>
    </GList>

    <h6 class="header my-4"><pre>type: block</pre></h6>
    <GList block>
      <GListItem>Item 1</GListItem>
      <GListItem>Item 2</GListItem>
      <GListItem>Item 3</GListItem>
    </GList>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GList, GListItem } from '@/components'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ListEx',
  components: {
    GList,
    GListItem,
  },
})
</script>

<style lang="scss" scoped>
.g-list-example {
}
</style>
