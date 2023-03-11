<script setup>
const props = defineProps({
  solution: {
    type: Object
  }
})
</script>
<template>
  <div
    class="shadow-md justify-between items-center rounded-lg flex flex-col w-full cursor-pointer hover:shadow-lg transition-all"
    @click="$router.push(solution.link)"
    @keyup.enter="$router.push(solution.link)">
    <img :src="solution.imgUrl" alt="" width="200" height="200" class="opacity-80 w-14 h-14" >
    <div class="p-5 flex-1">
      <h1 class="font-semibold text-center mb-5 text-neutral-900">{{ solution.name }}</h1>
      <p class="text-neutral-800 mb-8 text-sm text-justify">
        {{ solution.content }}
      </p>
    </div>
    <NuxtLink v-if="solution.link" :to="solution.link" class="text-sm font-semibold text-blue-700 text-right mr-auto mb-5 px-5">Learn More</NuxtLink>
  </div>
</template>