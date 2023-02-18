<script setup>
const props = defineProps({
  service: {
    type: Object
  },
  serviceType: {
    type: String,
    default: 'default'
  }
})
</script>
<template>
  <div id="serviceCard" class="relative w-[400px] rounded-lg bg-white min-h-[500px] flex flex-col justify-between">
    <div class="bg-purple-600 text-white p-5 rounded-t-lg text-center">
      <h1 class="font-bold text-2xl">{{ service.name }}</h1>
      <h2 class="text-xs font-medium mt-1" v-if="service.estimate">Estimated {{ service.estimate }} days</h2>
    </div>
    <div class="p-5 grow">
      <h1 class="font-extrabold text-3xl text-center text-neutral-700">
        {{ IDR(service.price) }}
      </h1>
      <ul class="mt-4 flex flex-col gap-y-2 font-medium px-3">
        <li v-for="content in service.service" class="flex gap-x-2 items-center">
          <Icon name="heroicons:check-badge-20-solid" size="16px" class="shrink-0" />
          <p class="text-neutral-800 font-medium">{{ content }}</p>
        </li>
      </ul>
    </div>
    <div id="cardFooter" class="mt-5">
      <!-- <img src="~/assets/images/tomo_2.png" alt="" class="w-2/5 mx-auto my-4 opacity-50"> -->
      <button type="button" class="bg-sky-400 p-3 text-white w-full rounded-b-lg">
        Konsultasi Sekarang
      </button>
    </div>
  </div>
</template>