<template>
	<div class="product-list-container">

		<h1>Product list</h1>

		<ul class="product-list">
			<li v-for="item in items">
				<ProductItem :item="item"></ProductItem>
			</li>
		</ul>

	</div>
</template>


<script>
import { bus } from '../main.js';
import ProductItem from '../product-item/ProductItem.vue'

export default {
	name: 'product-list',
	components: { ProductItem },
	data () {
		return {
			items: [] // we store the items from the API in an items array
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
			window.alert("Oh no! We couldn't get the data")
		});
	},
	created: function() {

		// this event fires when a special item is removed from the cart_items
		// this means we can add back the special_quantity value in our ProductList compinent
		bus.$on('remove-special-item-from-cart', itemName => {

			// we iterate over our items array to find the item sam name as the item removed from the cart
			for (var item of this.items) {
				if( itemName == item.name ) {

					// then we add the speical quantity back to our item in the product list
					item.special_qty ++
				}
			}
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
