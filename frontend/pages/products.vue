<template>
  <div class="text-black bg-grey-lighter">
    <div class="container px-2 py-5">
      <div>
        <span>Showing results for</span>
        <span class="ml-2 bg-transparent-grey py-2 px-4 rounded-full">Fresh Arrivals</span>
      </div>
      <div class="mt-6 overflow-y-hidden overflow-x-auto h-8 whitespace-no-wrap products-filter">
        <button class="inline-block bg-pink rounded-full text-white font-bold py-2 px-4 text-sm mr-2" v-for="(f, i) in availableFilters" :key="i">{{ f }}</button>
      </div>
    </div>
    <div class="flex border bg-white justify-between items-center mb-4">
      <button class="p-3  text-pink">
        <img class="inline-block w-4 mr-3" src="@/assets/icons/icon-filter.svg" alt="">
        <span>Filter</span>
      </button>
      <span>100 items</span>
      <button class="p-3 text-pink">
        <span>Sort</span>
        <img class="inline-block w-4 ml-3" src="@/assets/icons/icon-sort.svg" alt="">
      </button>
    </div>
    <!-- Products -->
    <div class="flex flex-wrap bg-white border-b">
      <router-link to="/product" class="product w-1/2">
        <div>
          <img src="https://static.hopscotch.in/fstatic/product/201903/112d87b2-605d-4e69-92c9-33dbb878a5e3_large.jpg?version=1552570212597&impolicy=normal" alt="">
        </div>
        <div class="text-sm p-2 leading-normal">
          <p class="truncate">Pink Printed Blouse With Beige Embroidered Pinafore</p>
          <p class="font-bold">₹699 <span class="text-grey line-through">₹999</span> <span class="text-green">(30% off)</span> </p>
        </div>
      </router-link>
      <router-link to="/product" class="product w-1/2">
        <div>
          <img src="https://static.hopscotch.in/fstatic/product/201903/112d87b2-605d-4e69-92c9-33dbb878a5e3_large.jpg?version=1552570212597&impolicy=normal" alt="">
        </div>
        <div class="text-sm p-2 leading-normal">
          <p class="truncate">Pink Printed Blouse With Beige Embroidered Pinafore</p>
          <p class="font-bold">₹699 <span class="text-grey line-through">₹999</span> <span class="text-green">(30% off)</span> </p>
        </div>
      </router-link>
      <router-link to="/product" class="product w-1/2">
        <div>
          <img src="https://static.hopscotch.in/fstatic/product/201903/112d87b2-605d-4e69-92c9-33dbb878a5e3_large.jpg?version=1552570212597&impolicy=normal" alt="">
        </div>
        <div class="text-sm p-2 leading-normal">
          <p class="truncate">Pink Printed Blouse With Beige Embroidered Pinafore</p>
          <p class="font-bold">₹699 <span class="text-grey line-through">₹999</span> <span class="text-green">(30% off)</span> </p>
        </div>
      </router-link>
    </div>
    <!--  -->
    <div class="flex items-center justify-center py-8">
      <button class="bg-white px-6 py-4 border rounded">View 55 more products</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    availableFilters: ['Pink', 'Blue', 'Red', 'Si Rosa', 'muai', 'Fulehou', 'Aidixiong', 'Crayon Flakes']
  })
}
</script>

<style>
.products-filter::-webkit-scrollbar {
  display: none;
}

.product {
  @apply text-black no-underline block border-t border-grey-light;
}

.product:nth-child(2n - 1) {
  @apply border-r;
}
</style>
