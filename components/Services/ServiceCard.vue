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
  <div id="serviceCard" class="relative w-full 2xl:w-[400px] rounded-lg bg-white min-h-[500px] flex flex-col justify-between">
    <div class="p-5 text-center text-white bg-purple-600 rounded-t-lg">
      <h1 class="text-2xl font-bold">{{ service.name }}</h1>
      <h2 class="mt-1 text-xs font-medium" v-if="service.estimate">Estimated {{ service.estimate }} days</h2>
    </div>
    <div class="p-5 grow">
      <h1 class="text-3xl font-extrabold text-center text-neutral-700">
        <span class="text-sm" v-if="service.name === 'CUSTOM'">Start From <br></span>
        {{ IDR(service.price) }}
      </h1>
      <ul class="flex flex-col px-3 mt-4 font-medium gap-y-2">
        <li v-for="content in service.service" class="flex items-center gap-x-2">
          <Icon name="heroicons:check-badge-20-solid" size="16px" class="shrink-0" />
          <p class="font-medium text-neutral-800">{{ content }}</p>
        </li>
      </ul>
    </div>
    <div id="cardFooter" class="mt-5">
      <!-- <img src="~/assets/images/tomo_2.png" alt="" class="w-2/5 mx-auto my-4 opacity-50"> -->
      <button type="button" class="w-full p-3 text-white rounded-b-lg bg-sky-400">
        Konsultasi Sekarang
      </button>
    </div>
  </div>
</template>