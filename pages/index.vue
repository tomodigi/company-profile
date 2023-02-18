<script setup>
import SolutionSection from '../components/Solution/SolutionSection.vue';
const route = useRoute();

useServerSeoMeta({
  title: 'Tomo Digital Creative',
  ogTitle: 'Tomo Digital Creative',
  ogImage:'/tomo_2.png',
  ogDescription: 'Digital Creative',
  ogSiteName: 'TomoDigi',
  ogUrl: route.fullPath
})

</script>
<template>
  <div>
    <Jumbotron class="w-full flex justify-between items-center md:h-[80vh]" />
    <SolutionSection class="mt-10" />
  </div>
</template>
