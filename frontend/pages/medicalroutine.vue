<template>
  <div>
    <div class="bg-blue text-white py-4 text-center shadow">
      Your Medical Routine
    </div>
    <div class="flex">
      <div class="w-1/3 text-center py-2 border-b">Yesterday</div>
      <div class="w-1/3 text-center py-2 border-b border-l border-r text-blue font-bold">Today</div>
      <div class="w-1/3 text-center py-2 border-b">Tommorow</div>
    </div>
    <div class="p-4">
      <div class="flex items-center mb-4">
        <button class="rounded-full p-3 bg-grey-lighter mr-2" @click="popup = true">P1</button>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P2</button>
        <div class="w-full text-center font-bold">Breakfast</div>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P3</button>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P4</button>
      </div>
      <div class="flex items-center mb-4">
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P1</button>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P2</button>
        <div class="w-full text-center font-bold">Lunch</div>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P3</button>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P4</button>
      </div>
      <div class="flex items-center mb-4">
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P1</button>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P2</button>
        <div class="w-full text-center font-bold">Dinner</div>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P3</button>
        <button class="rounded-full p-3 bg-grey-lighter mr-2">P4</button>
      </div>
    </div>
    <div v-if="popup" class="popup absolute pin-t pin-b pin-l pin-r p-4 pt-32" style="background: rgba(0,0,0,0.45);">
      <div class="bg-white leading-normal rounded">
        <div class="p-2 border-b flex">
          <h4 class="w-full">Prescription Name</h4>
          <button class="px-2">x</button>
        </div>
        <div class="p-2">
          <h5>Date: {{date}}</h5>
          <h5>Doctor: Dr. X</h5>
          <p>Medicine Name: ___________</p>
          <p>Dose: ___________</p>
        </div>
        <div class="p-2 mt-1">
          <p>Have you taken the medicine?</p>
          <div class="mt-2">
            <button class="p-2 bg-blue text-white rounded mr-2">Yes</button>
            <button class="p-2 bg-grey-light rounded">No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();

      let newdate = day + "/" + month + "/" + year;
      return newdate;
    }
  },
  data: () => ({
    popup: false,
  }),
}
</script>

<style>

</style>
