<template>
  <div class="flex flex-col min-h-screen px-4 justify-center">
    <div class="flex flex-col items-center">
      <div class="logo rounded-full bg-blue w-16 h-16 text-white flex flex-col items-center justify-center text-lg">
        <span>FS</span>
      </div>
      <div class="form w-full py-4">
        <div class="input flex item-center rounded border p-2 mb-4">
          <span class="mr-2 text-grey">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>          </span>
          <input type="text" class="focus:outline-none" placeholder="Full Name">
        </div>
        <div class="input flex item-center rounded border p-2 mb-4">
          <span class="mr-2 text-grey">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
          </span>
          <input type="text" class="focus:outline-none" placeholder="Email">
        </div>
        <div class="input flex item-center rounded border p-2 mb-4">
          <span class="mr-2 text-grey">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M7 10V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 0 0-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></svg>          </span>
          <input type="password" class="focus:outline-none" placeholder="Password">
        </div>
        <div class="input flex item-center rounded border p-2 mb-4">
          <span class="mr-2 text-grey">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M7 10V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 0 0-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></svg>          </span>
          <input type="text" class="focus:outline-none" placeholder="Department">
        </div>
        <div class="input flex item-center rounded border p-2">
          <span class="mr-2 text-grey">
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M7 10V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h2zm2 0h6V7a3 3 0 0 0-6 0v3zm-4 2v8h14v-8H5zm7 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/></svg>          </span>
          <input type="text" class="focus:outline-none" placeholder="Licence ID">
        </div>
        <button class="block mt-4 rounded-lg w-full bg-blue text-white py-3">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
