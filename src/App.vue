<template>
	<div id="app">

		<header class="uikit-header" role="banner">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<h1>Checkout pricing prototype</h1>
					</div>
				</div>
			</div>
		</header>

		<main class="container">
			<div class="row">

				<div class="col-sm-8">
					<ProductList></ProductList>
				</div>

				<div class="col-sm-4">
					<CartList></CartList>
				</div>

			</div>
		</main>

	</div>
</template>

<script>
import ProductList from './product-list/ProductList.vue'
import CartList from './cart-list/CartList.vue'

export default {
	name: 'app',
	components: { ProductList, CartList },
	data () {
		return {
		}
	}
}
</script>

<style scoped>

	.uikit-header {
		padding: 0.8em 0;
	}

</style>
