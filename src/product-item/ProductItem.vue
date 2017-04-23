<template>
	<article class="item" v-bind:class="{ special: item.special_qty }">



		<div class="item__details" v-if="item.special_qty > 0">
			<h3 class="item__name">Item {{ item.name }}</h3>
			<span class="item__price">
				${{ item.special_price }}
			</span>
			<span class="special-quantity__message">
				Only {{ item.special_qty }} special quantity left!
			</span>
		</div>

		<div class="item__details" v-else>
			<h3 class="item__name">Item {{ item.name }}</h3>
			${{ item.unit_price }}
		</div>

		<button v-on:click="addToCart" class="uikit-btn uikit-btn--tertiary">Add to cart</button>

	</article>
</template>


<script>
import { bus } from '../main.js';

export default {
	name: 'product-item',
	props: [ 'item' ],
	data () {
		return {
			// we set a default value for our item quantity
			item_quantity: 1,
			item_price: 0
		}
	},
	methods: {
		// when the user hits the 'Add to cart' button'
		addToCart: function() {

			// we save the item data to send to our CartList component
			let cart_addition = {
				item_name: this.$props.item.name,
				item_price: this.$props.item.unit_price * this.item_quantity,
				item_quantity: this.item_quantity,
				special_item: false,
			}

			// if item has special_qty value, then we reduce special_qty value
			// and we make sure to update the item_price in our data to be the special_price
			if( this.item.special_qty ) {
				this.item.special_qty = this.item.special_qty - this.item_quantity
				cart_addition.item_price = this.$props.item.special_price
				cart_addition.special_item = true
			}

			// we then send our data to our CartList component via our event bus
			bus.$emit('add-item-to-cart', cart_addition)

		}
	}
}
</script>


<style>

	.item__name {
		margin: 0;
	}

	.special-quantity__message {
		display: block;
		text-transform: uppercase;
		font-size: 0.8em;
		color: #1B7991;
		font-weight: 700;
	}

	.uikit-btn--tertiary {
		float: right;
		/*padding: 0.55em 0.5em;
		height: auto;*/
	}

	.item__details {
		float: left;
	}
	
	.item {
		overflow: hidden;
		border-bottom: 1px solid #ccc;
		padding-bottom: 1.5em;
		margin-bottom: 1.5em;
	}

</style>
