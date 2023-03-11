<script setup>
import ServiceCard from './ServiceCard.vue';

const props = defineProps({
  for: {
    type: String,
  },
  data: {
    type: Array,
  }
})
</script>
<template>
  <section :id="props.for" class="flex justify-center flex-wrap gap-x-5">
    <ServiceCard :services="props.data" />
  </section>
</template>