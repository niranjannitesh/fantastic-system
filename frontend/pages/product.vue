<template>
  <div class="text-black bg-grey-lighter pb-4">
    <div class=" bg-white">
      <div class="container mx-auto">
        <div class="relative">
          <div>
            <img class="block" src="https://static.hopscotch.in/fstatic/product/201903/112d87b2-605d-4e69-92c9-33dbb878a5e3_large.jpg?version=1552570212597&impolicy=normal" alt="">
          </div>
          <button class="absolute bg-white rounded-full p-2 border text-center see-similar-button focus:outline-none">
            <img class="align-middle" src="@/assets/icons/icon-see-similar.svg" alt="">
          </button>
        </div>
        <div class="bg-white leading-normal p-3">
          <span class="font-bold block">₹939 - ₹989</span>
          <p class="text-sm">Pink Solid Applique Bow Shirt and Suspender Pant</p>
        </div>
        <div class="p-3 border-b">
          <div class="flex justify-between items-center">
            <span class="font-bold">Size</span>
            <button class="uppercase text-pink p-1">View Size Chart</button>
          </div>
          <div class="mt-2 overflow-y-hidden overflow-x-auto h-10 whitespace-no-wrap size-filter">
            <button class="inline-block rounded-full text-grey border py-2 px-4 text-sm mr-2" v-for="(s, i) in size" :key="i">{{ s }}</button>
          </div>
        </div>
        <div class="p-3 border-b">
          <div class="flex justify-between items-center">
            <span class="font-bold">Delivery</span>
            <button class="uppercase text-pink p-1">Check Pincode</button>
          </div>
          <ul class="mt-2 leading-loose list-reset delivery-list">
            <li>Get it in <span class="inline-block rounded px-2 py-px text-sm leading-normal bg-green text-white">5-6 days</span></li>
            <li>Cash on delivery availabel</li>
            <li>15 days return</li>
          </ul>
        </div>
        <div class="toggle" :class="{'toggle-on': itemDetailsToggle}">
          <button class="p-3 border-b block w-full focus:outline-none" @click="itemDetailsToggle = !itemDetailsToggle">
            <div class="flex items-center justify-between">
              <span class="font-bold block">Item details</span>
              <span class="arrow"><img src="@/assets/icons/icon-angle-down-v2.svg" alt=""></span>
            </div>
          </button>
          <div class="p-3 border-b text-grey description">
            <p class="font-bold">FEATURES:</p>
            <ul class="leading-normal mt-2 mb-3">
              <li class="mb-1">Fabric: 95% Cotton, 5% polyester</li>
              <li class="mb-1">The actual product may differ slightly in color from the one illustrated in the images.</li>
            </ul>
            <p class="font-bold">WHAT'S INCLUDED:</p>
            <ul class="leading-normal mt-2 mb-3">
              <li class="mb-1">1 Shirt, 1 Pant, 1 Bow</li>
            </ul>
            <p class="font-bold">CARE:</p>
            <ul class="leading-normal mt-2 mb-3">
              <li class="mb-1">Gentle wash</li>
            </ul>
            <div class="my-2">
              <p class="font-bold">Suitable for</p>
              <p>Boys</p>
            </div>
            <div class="mt-2">
              <p class="font-bold">Colour</p>
              <p>Pink</p>
            </div>
          </div>
        </div>
        <div class="toggle" :class="{'toggle-on': aboutToggle}">
          <button class="p-3 border-b block w-full focus:outline-none" @click="aboutToggle = !aboutToggle">
            <div class="flex items-center justify-between">
              <span class="font-bold block">About Si Noir</span>
              <span class="arrow"><img src="@/assets/icons/icon-angle-down-v2.svg" alt=""></span>
            </div>
          </button>
          <div class="p-3 border-b text-grey leading-normal text-sm description">
            <p class="my-3">It's all about saying Yes Black!</p>
            <p class="my-3">Whether it's about wearing crisp shirts or dapper suits just like dad, all boys are little gentlemen in the making.</p>
            <p class="my-3">Our styles are super smart, comfy and easy to wear, so he'll look and feel like Prince Charming.</p>
            <p class="my-3">So say yes to bows (who said they're only for the ladies?), say yes to impeccable manners, and always say yes to black.</p>
            <p class="my-3">Say Si Noir. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="px-3 py-4">
        <h3>Similar Sets</h3>
      </div>
      <div class="similar-products overflow-y-hidden overflow-x-auto whitespace-no-wrap">
        <a href="#" class="inline-block pl-3 pb-3 text-black no-underline text-center">
          <img class="block" src="https://static.hopscotch.in/fstatic/product/201903/112d87b2-605d-4e69-92c9-33dbb878a5e3_large.jpg?version=1552570212597&impolicy=normal" alt="">
          <p class="mt-1">₹699</p>
        </a>
        <a href="#" class="inline-block pl-3 pb-3 text-black no-underline text-center">
          <img class="block" src="https://static.hopscotch.in/fstatic/product/201812/3eda62df-1ad7-488f-bf7f-ff628b5257dd_medium.jpg?version=1545372442632&impolicy=normal" alt="">
          <p class="mt-1">₹699</p>
        </a>
        <a href="#" class="inline-block pl-3 pb-3 text-black no-underline text-center">
          <img class="block" src="https://static.hopscotch.in/fstatic/product/201903/112d87b2-605d-4e69-92c9-33dbb878a5e3_large.jpg?version=1552570212597&impolicy=normal" alt="">
          <p class="mt-1">₹699</p>
        </a>
        <a href="#" class="inline-block pl-3 pb-3 text-black no-underline text-center">
          <img class="block" src="https://static.hopscotch.in/fstatic/product/201903/112d87b2-605d-4e69-92c9-33dbb878a5e3_large.jpg?version=1552570212597&impolicy=normal" alt="">
          <p class="mt-1">₹699</p>
        </a>
      </div>
      <div class="p-3 leading-loose">
        <a href="#" class="block text-grey no-underline uppercase">More Sets from Si Noir</a>
        <a href="#" class="block text-grey no-underline uppercase">More Pink Sets</a>
        <a href="#" class="block text-grey no-underline uppercase">More Sets</a>
      </div>
    </div>
    <div class="fixed pin-b pin-r pin-l">
      <button class="uppercase bg-pink w-full text-white py-4">Select a Size</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: ['1-2 years', '2-3 years', '3-3.5 years', '3.5-4 years', '4-4.5 years', '4.5-5 years'],
    itemDetailsToggle: false,
    aboutToggle: false,
  }),
}
</script>

<style>
.see-similar-button {
  bottom: 16px;
  right: 16px;
}

.size-filter::-webkit-scrollbar {
  display: none;
}

.delivery-list li {
  padding-left: 20px;
  background-image: url('../assets/icons/icon-tick.svg');
  background-repeat: no-repeat;
  background-position: left center;
}

.toggle .description {
  display: none;
}

.toggle.toggle-on button .arrow {
  transform: rotate(180deg);
}

.toggle.toggle-on .description {
  display: block;
}

.similar-products img {
  max-width: 150px;
  max-height: 150px;
}

.similar-products::-webkit-scrollbar {
  display: none;
}
</style>
