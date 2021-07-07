<template>
  <div class="g-button-example">
    <h4 class="header my-3">Dropdown => (GDropdown.vue)</h4>

    <!-- Types -->
    <h5 class="header mb-2">Types</h5>
    <GDropdown>
      <GDropdownItem>
        Plain Item 1
      </GDropdownItem>
      <GDropdownItem>
        Plain Item 2
      </GDropdownItem>
      <GDropdownItem link>
        Link Item 1
      </GDropdownItem>
    </GDropdown>

    <div class="mb-6" />
  </div>
</template>

<script>
import { GDropdown, GDropdownItem } from '@/components'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DropdownEx',
  components: {
    GDropdown,
    GDropdownItem,
  },
})
</script>

<style lang="scss" scoped>
.g-dropdown-example {
}
</style>
