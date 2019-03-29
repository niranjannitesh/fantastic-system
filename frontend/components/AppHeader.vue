<template>
  <header>
    <div class="bg-pink text-white pl-4 pr-2 py-1">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-baseline">
          <a class="text-lg mr-4 text-white no-underline" href="/">FS</a>
          <div>
            <router-link to="/my/account/orders" href="#" class="header-link">Account</router-link>
            <a href="#" class="header-link">Help</a>
          </div>
        </div>
        <div class="flex items-center">
          <router-link to='/scan' class="inline-flex items-center mr-1">
            <img src="@/assets/icons/camera-icon.svg" alt="search" width="48" height="48">
          </router-link>
          <button class="inline-flex items-center mr-1" @click="search = true">
            <img src="@/assets/icons/icon-search.svg" alt="search">
          </button>
          <router-link to="/cart" class="inline-flex items-center relative">
            <img src="@/assets/icons/icon-cart.svg" alt="search">
            <span class="absolute text-sm w-4 h-4 text-pink bg-white rounded-full text-center cart_count font-bold align-middle">1</span>
          </router-link>
        </div>
      </div>
    </div>
    <MobileSearch v-if="search" v-on:close="search = false"/>
  </header>
</template>

<script>
import MobileSearch from '@/components/MobileSearch';

export default {
  components: {
    MobileSearch,
  },
  data: () => ({
    search: false,
  }),
}
</script>

<style>
.cart_count {
  top: 10px;
  right: 6px;
}
</style>
