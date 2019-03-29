<template>
  <popup>
    <div class="px-4 py-3 text-black">
      <h1>Sign in</h1>
      <div class="input relative w-full bg-grey-lighter rounded mt-4 pb-4" :class="{'input-focused': inputFocused}">
        <label class="absolute">Mobile Number</label>
        <input type="tel" class="block w-full focus:outline-none bg-transparent z-50 px-3 pt-5" @focus="inputFocused = true" @blur="inputFocused = false">
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '@/components/Popup';

export default {
  components: {
    Popup
  },
  data: () => ({
    inputFocused: false
  })
}
</script>

<style>
.input label {
  top: 19px;
  left: 12px;
  pointer-events: none;
  color: rgba(0,0,0,.36);
  transition: all .2s;
}

.input-focused {
  @apply border-b-2 border-pink;
}

.input-focused label {
  @apply text-xs;
  top: 7px;
}
</style>
