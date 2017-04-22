<template>
	<div id="product-list">
		<h1>Product list</h1>
		<ul id="example-1">
			<li v-for="item in items">
				{{ item.name }}
				<p v-if="item.special_qty">
					Special
					{{ item.special_qty }}
					${{ item.special_price }}
				</p>
				<p v-else>
					Not special
					${{ item.unit_price }}
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'product-list',
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

<style>

</style>
