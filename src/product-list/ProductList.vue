<template>
	<div class="product-list-container">
		<h1>Product list</h1>
		<ProductCart></ProductCart>
		<ul class="product-list">
			<li v-for="item in items">
				<ProductItem :item="item"></ProductItem>
			</li>
		</ul>

	</div>
</template>

<script>
import ProductItem from '../product-item/ProductItem.vue'
import ProductCart from '../product-cart/ProductCart.vue'

export default {
	name: 'product-list',
	components: { ProductItem, ProductCart },
	data () {
		return {
			items: [] // we store the items from the API in an array
		}
	},
	// we grab the data from the API endpoint once the component has mounted
	mounted: function() {
		this.$http.get('https://api.myjson.com/bins/gx6vz').then(response => {

			// get the response data and set it to our component data
			this.items = response.body.prices;
		}, response => {

			// if there is an error, we let the user know
			this.items = 'undefined'
		});
	}
}
</script>

<style scoped>

	.product-list {
		list-style-type: none;
		padding-left: 0;
	}

</style>
