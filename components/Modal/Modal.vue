<template>
    <transition name="modal">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
      >
        <slot name="prev-button">
          <button class="absolute left-8 text-white">Prev</button>
        </slot>
  
        <div class="relative rounded-lg shadow-lg max-w-xl w-full p-5 mx-64">
          <header class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">{{ title }}</h2>
            <button @click="$emit('close')" class="text-white hover:text-gray-200">✕</button>
          </header>
          <main>
            <slot />
          </main>
        </div>
  
        <slot name="next-button">
          <button class="absolute right-8 text-white">Next</button>
        </slot>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    show: { type: Boolean, required: true },
    title: { type: String, default: '' },
  });
  </script>
  
  <style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
  }
  </style>
  