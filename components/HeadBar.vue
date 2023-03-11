<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Hello'
  }
})
</script>
<template>
<div class="font-bold text-white p-3 rounded relative gradient mb-8">
  <div class="absolute right-20 md:right-36 top-0 w-10 p-0 bg-white -skew-x-[26deg] h-full"></div>
  {{ props.text }}
</div>
</template>

<style scoped>
.gradient {
  
background: rgb(14,165,233);
background: linear-gradient(295deg, rgba(14,165,233,1) 0%, rgba(126,34,206,1) 25%);
}
</style>