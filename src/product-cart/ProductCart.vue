<template>
	<div class="product-cart-container">
		<h1>Product cart</h1>
		{{cart_items}}
	</div>
</template>

<script>
import { bus } from '../main.js';

export default {
	name: 'product-cart',
	data () {
		return {
			cart_items: []
		}
	},
	// add comment
	created: function() {
		console.log('worked')
		bus.$on('child-msg', data => {
			this.cart_items.push(data)
		})
	}
}
</script>

<style scoped>

	.product-list {
		list-style-type: none;
		padding-left: 0;
	}

</style>
