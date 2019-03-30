<template>
  <div>
    <h4 class="text-center pt-6">Welcome!</h4>
    <div class="p-4">
      <div>
        <h4>Current Patients</h4>
        <div class="mt-4">
          <router-link to="doctor/patient" class="w-full border py-2 flex items-center justify-between px-4 no-underline text-black">
            <span>Mr. X</span>
            <span class="inline-block" style="transform: rotate(-90deg)">
              <svg width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg"><g id="Mockups" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="mFilter---Slave" transform="translate(-347 -166)" stroke="#000" stroke-width=".5" stroke-linecap="square" fill="#AAA"><g id="Section---Product-details" transform="translate(0 146)"><path d="M348.354 22.06l4.95 4.95.353.354.707-.707-.354-.354-4.95-4.95-.353-.353-.707.707.354.354h0zm9.899-.706l-4.243 4.242-.353.354.707.707.354-.354 4.242-4.242.354-.354-.707-.707-.354.354h0z" id="Line"/></g></g></g></svg>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'tab'
}
</script>

<style>

</style>
