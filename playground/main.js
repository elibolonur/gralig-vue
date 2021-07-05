import App from './app.vue'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

new Vue({
  name: 'PlaygroundApp',
  render: (h) => h(App),
}).$mount('#app')
