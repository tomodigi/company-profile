<script setup>
const props = defineProps({
  solution: {
    type: Object
  }
})
</script>
<template>
  <div class="bg-gray-100 shadow-md flex justify-between items-center p-5 rounded-lg h-80 " data-aos="fade-up">
    <img :src="solution.background" alt="" width="450" class="opacity-80 w-1/3" >
    <div class="w-4/6 ml-10 p-10">
      <h1 class="font-semibold text-center mb-5 text-neutral-900">{{ solution.name }}</h1>
      <p class="text-justify text-neutral-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae qui consectetur ullam, saepe sed blanditiis id illum ratione labore aliquid neque quae nihil sequi quasi maxime architecto hic beatae provident maiores. Reprehenderit ratione adipisci, numquam porro unde quas itaque?
      </p>
    </div>
  </div>
</template>