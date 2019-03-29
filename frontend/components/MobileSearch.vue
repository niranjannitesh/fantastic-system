<template>
  <div class="mobile-search z-999">
    <div class="relative">
      <input type="text" placeholder="Search for products" class="w-full p-4">
      <button class="mobile-search-cancel" @click="close"><img src="@/assets/icons/icon-dismiss.svg"></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>
