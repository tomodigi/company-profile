<script setup>
const route = useRoute();

useServerSeoMeta({
  title: 'Tomo Digital Service',
  ogTitle: 'Tomo Services',
  ogImage:'/tomo_2.png',
  ogDescription: 'Beragam service yang disediakan oleh TOMO',
  ogSiteName: 'Tomodigi',
  ogUrl: route.fullPath
})
</script>
<template>
<h1 class="text-4xl">SERVICE PAGES</h1>
</template>