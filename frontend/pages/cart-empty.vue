<template>
  <div>
    <div class="text-center flex flex-col leading-normal mx-auto empty justify-center">
      <img src="@/assets/icons/empty-cart.svg" alt="">
      <p class="text-black font-bold">There is nothing in here</p>
      <p>You have not added any items to your cart yet.</p>
      <div class="mt-4">
        <button class="uppercase bg-pink rounded text-white font-bold py-2 px-4">Shop Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.empty {
  max-width: 300px;
  min-height: calc(100vh - 56px);
}
</style>
