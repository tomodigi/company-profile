<script setup>
const route = useRoute();

useServerSeoMeta({
  title: 'Tomo Digital Service',
  ogTitle: 'Tomo Services',
  ogImage:'~/assets/images/tomo_2.png',
  ogDescription: 'Pilih Paketmu',
  ogSiteName: 'TomoDigi',
  ogUrl: route.fullPath
})
</script>
<template>
<h1 class="text-4xl">SERVICE PAGES</h1>
</template>