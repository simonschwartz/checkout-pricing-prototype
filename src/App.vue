<template>
	<div id="app">
		<h1>Checkout pricing prototype</h1>
		<ProductList></ProductList>
		<CartList></CartList>
	</div>
</template>

<script>
import ProductList from './product-list/ProductList.vue'
import CartList from './cart-list/CartList.vue'

export default {
	name: 'app',
	components: { ProductList, CartList },
	data () {
		return {
		}
	}
}
</script>

<style>

</style>
