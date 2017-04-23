import Vue from 'vue'
import ProductList from './ProductList.vue'

test('An example test', () => {
	const ProductList = Vue.extend(ProductList)
	const vm = new ProductList().$mount()
	expect(vm.$el.textContent).toBe('Product list')
});
