# checkout-pricing-service

`master` is continuously deployed to http://checkout-pricing-prototype.surge.sh/

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Tests

Each component has unit tests associated with it. I have not had time to write tests given the time frames.

The development of this service was guided by the following tests which I wrote after reading the brief.

This may be useful for evaluating the service.

### Product List

Our shopping cart should display product item details from the JSON service (https://api.myjson.com/bins/gx6vz)

#### Test 1 - Does the application fetch the data from the JSON service?

> **When** the Product List component renders
>
> **Then** a list of product items should render inside the Product List component


#### Test 2 - Can the user add items to the cart?

> **When** the user select to add a product item to their cart
>
> **Then** the item should be added to the Cart


#### Test 3 - Can the user remove items from the cart?

> **Given** the user has items in their cart
>
> **When** the user select to remove a product item from their cart
>
> **Then** the item should be removed to the Cart


#### Test 4 - Does the total cart price add up correctly?

> **Given** the user has items in their cart
>
> **Then** the cart total price should be the sum of all the item prices in the cart


##### A bad assumption

I realised after I had built the service that I misunderstood the special quantity meaning. I thought that the special quantity was the number of items left that needed to be sold at the special quantity price. Then once they were sold the price would revert back to the standard price. I also realise how stupid that sounds.

#### Test 5 - Does the special quantity reduce when a special quantity item is added to the cart?

> **When** the user adds a product item to their cart
>
> **And** the item has a special quantity
>
> **Then** the special quantity for that item should reduce by the amount of items the user has added to their cart


#### Test 6 - Does the product item price return to normal when the special quantity reaches zero?

> **When** a product items special quantity is 0
>
> **Then** the price of the item should be the normal price


#### Test 7 - Does special quantity for a product item increase if the user removes a special quantity item from their cart?

> **Given** the user has a special quantity item in the cart
>
> **When** then user removes the special quantity item from their cart
>
> **Then** the number of special quantity for the relevant item should increase by the number of special quantity items the user has removed from their cart


#### Test 8 - Does clicking the the 'Proceed to checkout' button allow the service to send the cart data?

Note: the service simply logs the checkout data array in a `window.alert` but could easily POST the data somewhere.

> **Given** the user has items in their cart
>
> **When** then user clicks the 'Proceed to checkout' button
>
> **Then** an array of checkout data should be sent to...


### If I had more time

1. Fix the logic of special quantity so it works as intended rather than my misinformed assumption
2. If an item is added to the cart multiple times, mutate the quantity of the item rather than adding an entirely new object to the array
3. Allow the user to specify multiple quantities of an item to add to the cart
4. Save the checkout data to local storage so we can persist this data even if the user leaves the site temporarily
