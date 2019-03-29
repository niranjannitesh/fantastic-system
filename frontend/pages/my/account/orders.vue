<template>
  <div class="bg-grey-lighter text-black">
    <div class="container mx-auto">
      <div class="bg-white rounded">
        <div class="flex flex-col items-center py-10 border-b border-grey-lighter">
          <div class="bg-grey-lighter rounded-full w-20 h-20 mb-4"></div>
          <p class="text-lg">Hello Guest</p>
        </div>
        <div class="py-4 border-b border-grey-lighter">
          <a href="#" class="flex w-full py-4 px-6 items-center no-underline text-pink font-bold hover:bg-grey-lighter">
            <svg class="block mr-5 stroke-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke-width="2"><path d="M3 8.493v11.515c0 .547.444.992.99.992h16.02c.542 0 .99-.447.99-.992V8.493A.495.495 0 0 0 20.497 8H3.503A.493.493 0 0 0 3 8.493z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-9v3"/><path d="M3.776 7h16.448l-2.02-3.333a3.233 3.233 0 0 0-.394-.32c-.319-.223-.626-.347-.868-.347H7.058c-.242 0-.55.124-.869.346a3.297 3.297 0 0 0-.392.32L3.776 7z"/></g></svg>
            <span>Orders</span>
          </a>
          <a href="#" class="flex w-full py-4 px-6 items-center no-underline text-black opacity-50 relative">
            <svg class="block mr-5 stroke-current fill-current opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><circle id="a" cx="7" cy="7" r="7"/></defs><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="9.5" stroke-width="2"/><g class="fill-current" transform="translate(5 5)"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path stroke-width=".5" d="M7 9.16c2.907 0 5.25 2.291 5.25 5.1 0-.01-.016.082-.046.142-.015.028.016.008-.142.008H1.938c-.158 0-.127.02-.141-.008-.031-.06-.047-.152-.047-.142 0-2.809 2.343-5.1 5.25-5.1M4.75 5.41a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-4.5 8.85s0 1.65 1.688 1.65h10.124c1.688 0 1.688-1.65 1.688-1.65 0-2.764-1.74-5.128-4.204-6.111A3.728 3.728 0 0 0 10.75 5.41a3.75 3.75 0 0 0-7.5 0c0 1.085.468 2.054 1.205 2.739C1.989 9.132.25 11.496.25 14.26" mask="url(#b)"/></g></g></svg>
            <div class="leading-normal">
              <span>Profile details</span>
              <p class="text-sm">Update your personal information</p>
            </div>
            <div class="absolute pin-r pin-t pin-b px-3 flex items-center">
              <svg class="block opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="Icons-&amp;-illustrations" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Design-Language-Icons" transform="translate(-696 -664)" fill="#000" fill-rule="nonzero"><g id="Account" transform="translate(80 514)"><g transform="translate(616 150)" id="ic_lock_fill_small"><path d="M12 5.1a3.742 3.742 0 0 0-3.75 3.75v.625c-.688 0-1.25.561-1.25 1.25v6.25c0 .688.562 1.25 1.25 1.25h7.5c.688 0 1.25-.562 1.25-1.25v-6.25c0-.689-.562-1.25-1.25-1.25V8.85A3.742 3.742 0 0 0 12 5.1zm0 1.25c1.423 0 2.5 1.077 2.5 2.5v.625h-5V8.85c0-1.423 1.077-2.5 2.5-2.5zm0 6.25c.688 0 1.25.561 1.25 1.25 0 .688-.562 1.25-1.25 1.25s-1.25-.562-1.25-1.25c0-.689.562-1.25 1.25-1.25z" id="Shape"/></g></g></g></g></svg>
            </div>
          </a>
          <a href="#" class="flex w-full py-4 px-6 items-center no-underline text-black opacity-50 relative">
            <svg class="block mr-5 stroke-current fill-current opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="12" cy="12" r="9.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 10.342C11.702 9.567 10.868 9 10 9c-1.13 0-2 .864-2 2.013 0 1.579 1.686 2.8 4 5.145 2.314-2.345 4-3.566 4-5.145C16 9.864 15.13 9 14 9c-.869 0-1.702.567-2 1.342z"/></g></svg>
            <div class="leading-normal">
              <span>My Moments</span>
              <p class="text-sm">See your baby's cutest photos</p>
            </div>
            <div class="absolute pin-r pin-t pin-b px-3 flex items-center">
              <svg class="block opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="Icons-&amp;-illustrations" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Design-Language-Icons" transform="translate(-696 -664)" fill="#000" fill-rule="nonzero"><g id="Account" transform="translate(80 514)"><g transform="translate(616 150)" id="ic_lock_fill_small"><path d="M12 5.1a3.742 3.742 0 0 0-3.75 3.75v.625c-.688 0-1.25.561-1.25 1.25v6.25c0 .688.562 1.25 1.25 1.25h7.5c.688 0 1.25-.562 1.25-1.25v-6.25c0-.689-.562-1.25-1.25-1.25V8.85A3.742 3.742 0 0 0 12 5.1zm0 1.25c1.423 0 2.5 1.077 2.5 2.5v.625h-5V8.85c0-1.423 1.077-2.5 2.5-2.5zm0 6.25c.688 0 1.25.561 1.25 1.25 0 .688-.562 1.25-1.25 1.25s-1.25-.562-1.25-1.25c0-.689.562-1.25 1.25-1.25z" id="Shape"/></g></g></g></g></svg>
            </div>
          </a>
          <a href="#" class="flex w-full py-4 px-6 items-center no-underline text-black opacity-50 relative">
            <svg class="block mr-5 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><rect id="a" width="18" height="12" rx="2"/><rect id="b" width="18" height="12" rx="2"/></defs><g fill="none" fill-rule="evenodd"><g transform="rotate(10 -34.72 32.86)"><use fill="#FFF" xlink:href="#a"/><rect width="16" height="10" x="1" y="1" stroke="#000" stroke-width="2" rx="2"/></g><path fill="#000" fill-rule="nonzero" d="M19.894 15.216a1 1 0 0 0 .347-1.97L6.454 10.815a1 1 0 1 0-.348 1.97l13.788 2.43z"/><g transform="translate(2 3)"><use fill="#FFF" xlink:href="#b"/><rect fill="#FFF" width="16" height="10" x="1" y="1" stroke="#000" stroke-width="2" rx="2"/></g><path fill="#000" fill-rule="nonzero" d="M18 9a1 1 0 0 0 0-2H4a1 1 0 1 0 0 2h14z"/></g></svg>
            <div class="leading-normal">
              <span>Saved Cards</span>
              <p class="text-sm">Save cards for faster payments</p>
            </div>
            <div class="absolute pin-r pin-t pin-b px-3 flex items-center">
              <svg class="block opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="Icons-&amp;-illustrations" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Design-Language-Icons" transform="translate(-696 -664)" fill="#000" fill-rule="nonzero"><g id="Account" transform="translate(80 514)"><g transform="translate(616 150)" id="ic_lock_fill_small"><path d="M12 5.1a3.742 3.742 0 0 0-3.75 3.75v.625c-.688 0-1.25.561-1.25 1.25v6.25c0 .688.562 1.25 1.25 1.25h7.5c.688 0 1.25-.562 1.25-1.25v-6.25c0-.689-.562-1.25-1.25-1.25V8.85A3.742 3.742 0 0 0 12 5.1zm0 1.25c1.423 0 2.5 1.077 2.5 2.5v.625h-5V8.85c0-1.423 1.077-2.5 2.5-2.5zm0 6.25c.688 0 1.25.561 1.25 1.25 0 .688-.562 1.25-1.25 1.25s-1.25-.562-1.25-1.25c0-.689.562-1.25 1.25-1.25z" id="Shape"/></g></g></g></g></svg>
            </div>
          </a>
          <a href="#" class="flex w-full py-4 px-6 items-center no-underline text-black opacity-50 relative">
            <svg class="block mr-5 opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M18.303 10.548a5.55 5.55 0 0 1 2.095 4.347 5.571 5.571 0 0 1-5.571 5.57 5.55 5.55 0 0 1-4.339-2.083c-.361-.45-2.764-.83-2.462-.203a7.547 7.547 0 0 0 6.8 4.273 7.558 7.558 0 0 0 7.558-7.558 7.548 7.548 0 0 0-4.43-6.874c-.582-.265-.098 2.17.35 2.528z"/><path fill-rule="nonzero" d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0zm-15.88-.002a6.877 6.877 0 1 1 13.755 0 6.877 6.877 0 0 1-13.754 0z"/><path d="M13.65 8.7h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5m0 2.1h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5m-1.5 5.15a.747.747 0 0 1-.538-.228l-2.914-3a.75.75 0 0 1 1.076-1.044l2.914 3a.75.75 0 0 1-.538 1.272"/><path d="M10.213 12.95H9.15v-1.5h1.062c.636 0 1.375-.601 1.375-1.375S10.848 8.7 10.213 8.7V7.2c1.53 0 2.875 1.343 2.875 2.875s-1.344 2.875-2.875 2.875"/></g></svg>
            <div class="leading-normal">
              <span>Credits</span>
              <p class="text-sm">Check your credit balance</p>
            </div>
            <div class="absolute pin-r pin-t pin-b px-3 flex items-center">
              <svg class="block opacity-50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="Icons-&amp;-illustrations" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Design-Language-Icons" transform="translate(-696 -664)" fill="#000" fill-rule="nonzero"><g id="Account" transform="translate(80 514)"><g transform="translate(616 150)" id="ic_lock_fill_small"><path d="M12 5.1a3.742 3.742 0 0 0-3.75 3.75v.625c-.688 0-1.25.561-1.25 1.25v6.25c0 .688.562 1.25 1.25 1.25h7.5c.688 0 1.25-.562 1.25-1.25v-6.25c0-.689-.562-1.25-1.25-1.25V8.85A3.742 3.742 0 0 0 12 5.1zm0 1.25c1.423 0 2.5 1.077 2.5 2.5v.625h-5V8.85c0-1.423 1.077-2.5 2.5-2.5zm0 6.25c.688 0 1.25.561 1.25 1.25 0 .688-.562 1.25-1.25 1.25s-1.25-.562-1.25-1.25c0-.689.562-1.25 1.25-1.25z" id="Shape"/></g></g></g></g></svg>
            </div>
          </a>
        </div>
        <div class="py-4 px-6">
          <button class="block uppercase font-bold w-full py-4 bg-pink text-white rounded mb-4">Sign In</button>
          <button class="block uppercase font-bold w-full py-4 bg-grey-lighter rounded">Forget Me</button>
          <p class="text-center text-grey text-sm mt-2">Your details on this device will be lost</p>
        </div>
      </div>
      <div class="py-5 px-4">
        <h4 class="text-center mb-4">Orders</h4>
        <div class="bg-blue-light px-4 py-3 text-black flex items-center text-sm rounded">
          <span class="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path fill="#447CFA" fill-rule="nonzero" d="M3 5v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2H5c-1.105 0-2 .895-2 2zm10 12h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g></svg></span>
          <span>Can't see all your orders? <a href="#" class="text-black font-bold">Sign in</a></span>
        </div>
        <div class="text-center flex flex-col leading-normal justify-center items-center py-3">
          <img class="w-32" src="@/assets/icons/icon-empty-order.svg" alt="">
          <p class="text-grey text-sm font-bold">Oh... it's empty in here</p>
          <p class="text-grey text-sm font-bold">Let's do some shopping</p>
          <div class="mt-4">
            <button class="bg-white px-5 py-3 text-sm border rounded">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'notabs'
}
</script>

<style>

</style>
