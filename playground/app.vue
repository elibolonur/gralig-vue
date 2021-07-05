<template>
  <div class="playground-container">
    <DemoViewer />
  </div>
</template>

<script>
import DemoViewer from './example.loader.vue'
export default {
  name: 'App',
  components: {
    DemoViewer,
  },
}
</script>

<style lang="scss">
@import 'gralig';

html,
body {
  height: 100%;
}

.playground-container {
  padding: 50px 10% 0;
  height: 100%;
}
</style>
