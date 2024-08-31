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
  <div class="grid gap-20">
    <SectionJumbotron class="md:h-[90vh] 2xl:h-[80vh] mt-5 2xl:mt-10" />
    <SectionIntroduction />
    <SolutionSection />
    <!-- <TeamSection class="mt-16" /> -->
    <AboutusSection />
  </div>
</template>
