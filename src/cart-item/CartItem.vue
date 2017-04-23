<template>
	<div class="item__details">

		<h3 class="item__name">Item {{ item.item_name }}</h3>
		<span class="item__price">${{ item.item_price }}</span>
		<span v-if="item.special_item === true" class="special-quantity__message">
			Special item!
		</span>

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
