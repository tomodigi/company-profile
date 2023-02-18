<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'primary'
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: 'Halo'
  }
})
</script>
<template>
  <button
    :type="props.type"
    :class="props.color"
  >
    {{ props.text }}
  </button>
</template>