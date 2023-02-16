<script setup>
const props = defineProps({
  solution: {
    type: Object
  }
})
</script>
<template>
  <div class="shadow-lg justify-between items-center rounded-lg flex flex-col w-80">
    <img :src="solution.background" alt="" width="250" height="250" class="opacity-80 w-20 h-20" >
    <div class="p-5 flex-1">
      <h1 class="font-semibold text-center mb-5 text-neutral-900">{{ solution.name }}</h1>
      <p class="text-justify text-neutral-800 mb-8">
        {{ solution.content }}
      </p>
      <NuxtLink :to="solution.link" class="text-sm font-semibold text-blue-700 text-right mr-auto">Learn More</NuxtLink>
    </div>
  </div>
</template>