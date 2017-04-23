<template>
	<div class="cart-item">

		<h3>Item {{ item.item_name }}</h3>
		${{ item.item_price }}
		Quantity: {{ item.item_quantity }}

	</div>
</template>


<script>
export default {
	name: 'cart-item',
	props: [ 'item' ],
	data () {
		return {
			data: ''
		}
	}
}
</script>


<style scoped>

</style>
