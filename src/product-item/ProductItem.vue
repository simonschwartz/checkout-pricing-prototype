<template>
	<article class="product-item" v-bind:class="{ special: item.special_qty }">

		<h3>Item {{ item.name }}</h3>

		<div v-if="item.special_qty > 0">
			<span class="item__price">
				${{ item.special_price }}
			</span>
			<span class="special-quantity__message">
				This item has a special quantity of {{ item.special_qty }}
			</span>
		</div>

		<div v-else>
			${{ item.unit_price }}
		</div>

		<input v-model.number="item_quantity" type="number">
		<button v-on:click="addToCart">Add to cart</button>

	</article>
</template>

<script>
import { bus } from '../main.js';

export default {
	name: 'product-item',
	props: [ 'item' ],
	data () {
		return {
			// we set a default value for our item quality input field
			item_quantity: 1,
		}
	},
	methods: {
		// when the user hits the 'Add to cart' button'
		addToCart: function() {

			// we save the cart addition info and emit the data to the shopping cart component
			let cart_addition = {
				item_name: this.$props.item.name,
				item_price: this.$props.item.unit_price * this.item_quantity,
				item_quantity: this.item_quantity,
			}

			bus.$emit('child-msg', cart_addition)

			// if item has special_qty value, then we reduce special_qty value
			if( this.item.special_qty ) {
				this.item.special_qty = this.item.special_qty - this.item_quantity
			}

		}
	}
}
</script>

<style scoped>

	.special-quantity__message {
		display: block;
	}

</style>
