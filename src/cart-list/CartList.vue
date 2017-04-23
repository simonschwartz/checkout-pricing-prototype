<template>
	<div class="product-cart-container">
		<h1>Product cart</h1>

		<h3 v-if="cart_items.length === 0">Your cart is empty</h3>
		<h3 v-else>{{cart_items.length}} items in your cart</h3>

		<ul class="cart-list">
			<li v-for="item, key in cart_items">
				<CartItem :item="item" v-on:remove="removeFromCart"></CartItem>
				<button v-on:click="removeFromCart(key, item.item_price)">Remove from cart</button>
			</li>
		</ul>

		<div v-if="cart_items.length > 0">
			<h4>Total price: ${{total_price}}</h4>
			<button>Proceed to checkout</button>
		</div>

	</div>
</template>


<script>
import { bus } from '../main.js';
import CartItem from '../cart-item/CartItem.vue'

export default {
	name: 'cart-list',
	components: { CartItem },
	data () {
		return {
			cart_items: [],
			total_price: 0
		}
	},
	methods: {
		// when the user hits the 'Remove from cart' button'
		removeFromCart: function(key, price) {

			// check if the item we are removing is a special item
			if( this.cart_items[key].special_item === true ) {

				// if it is - we need to add update the items speical quantity value
				// we emit an event to ProductList component with the item name so we know what to update
				bus.$emit('remove-special-item-from-cart', this.cart_items[key].item_name)
			}

			// remove the item from the cart_items array
			this.cart_items.splice([key], 1)

			//adjust the total_price accordingly
			this.total_price = this.total_price - price

		}
	},
	// when item is added to cart, we add the item data to our cart_items array
	created: function() {
		bus.$on('add-item-to-cart', cart_addition => {

			// push the selected item to our cart array
			this.cart_items.push(cart_addition)

			// update the total cart price
			this.total_price = this.total_price + cart_addition.item_price

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
