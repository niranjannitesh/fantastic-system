<template>
  <div>
    <div class="bg-blue text-white py-4 text-center shadow">
      Set Medicine Reminder
    </div>
    <div class="p-4">
      <div class="mt-4">
        <h3 class="mb-2">Breakfast</h3>
        <div>
          <input type="time" class="w-full block rounded border p-2 focus:border-blue focus:outline-none">
        </div>
      </div>
      <div class="mt-4">
        <h3 class="mb-2">Lunch</h3>
        <div>
          <input type="time" class="w-full block rounded border p-2 focus:border-blue focus:outline-none">
        </div>
      </div>
      <div class="mt-4">
        <h3 class="mb-2">Dinner</h3>
        <div>
          <input type="time" class="w-full block rounded border p-2 focus:border-blue focus:outline-none">
        </div>
      </div>
    </div>
    <div class="fixed pin-b w-full">
      <button class="w-full bg-blue text-white py-4">Continue</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
