<template>
  <div class="absolute pin-t pin-b pin-r pin-l popup flex pt-6">
    <div class="w-full h-full bg-white rounded-t-lg">
      <div>
        <button class="p-4">
          <svg class="block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path stroke="#000" stroke-linecap="round" stroke-width="2" d="M6 17.314L17.314 6M6 6l11.314 11.314"/></g></svg>
        </button>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.popup {
  background: rgba(0,0,0,.4);
}
</style>
