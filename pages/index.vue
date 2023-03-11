<script setup>
import SolutionSection from '../components/Solution/SolutionSection.vue';
const route = useRoute();

useServerSeoMeta({
  title: 'Tomo Digital Creative',
  ogTitle: 'Tomo Digital Creative',
  ogImage:'/tomo_2.png',
  ogDescription: 'Tomodigi merupakan konsultan sekaligus penyedia layanan Jasa Digital Marketing untuk berbagai tahapan bisnis, hasil kolaborasi dari berbagai Agency & Profesional terbaik di Indonesia!',
  ogSiteName: 'TomoDigi',
  ogType: 'website',
  ogImageType: 'image/png',
  ogUrl: route.fullPath
})

</script>
<template>
  <div>
    <Jumbotron class="w-full flex justify-between items-center md:h-[80vh]" />
    <SolutionSection class="mt-16" />
    <!-- <TeamSection class="mt-16" /> -->
    <AboutusSection />
  </div>
</template>
