import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

// we use an event bus to allow our ProductItem component to emit an event to our CartList component
// the emit event fires when an item is added to cart from ProductItem to CarList
export const bus = new Vue();

// initialise our Vue app
new Vue({
  el: '#app',
  render: h => h(App)
})
