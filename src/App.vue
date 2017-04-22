<template>
	<div id="app">
		<h1>The main app</h1>
		<ProductList></ProductList>
	</div>
</template>

<script>
import ProductList from './product-list/ProductList.vue'

export default {
	name: 'app',
	components: { ProductList },
	data () {
		return {
		}
	}
}
</script>

<style>

</style>
