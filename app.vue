<script setup>
const isLoading = ref(true);
let timeout;

onMounted(() => {
  timeout = setTimeout(() => {
    isLoading.value = false;
  }, 1500);
})

</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      :color="'#06b6d4'"
      :height="10"
    />
    <NuxtPage />
  </NuxtLayout>
</template>
