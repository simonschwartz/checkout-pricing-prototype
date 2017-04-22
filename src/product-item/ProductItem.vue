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
export default {
	name: 'product-item',
	props: [ 'item' ],
	data () {
		return {
			item_amount: 0,
			item_quantity: 1,
			special: 0
		}
	},
	methods: {
		addToCart: function() {

			this.item_amount = this.item_amount + this.item_quantity

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
