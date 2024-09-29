<script setup lang="ts">
export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const props = defineProps<CardProps>();
</script>

<template>
  <div
    id="card"
    class="flex flex-col gap-8 p-10 border border-gray-400 rounded-xl"
  >
    <img :src="imgSrc" alt="" width="50" />
    <div class="w-[40%] border" />
    <h3 class="text-xl font-semibold">{{ title }}</h3>
    <p class="text-sm">{{ description }}</p>
    <button
      type="button"
      class="px-4 py-2 text-sm font-medium rounded-full bg-gradient-primary w-fit"
    >
      Contact Us
    </button>
  </div>
</template>
