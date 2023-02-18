<script setup>
import { motionGraphic, videoProduction } from '~/data/index.js';

const route = useRoute();

useServerSeoMeta({
  title: 'Tomo Digital Service',
  ogTitle: 'Tomo Video Production Services',
  ogImage:'/tomo_2.png',
  ogDescription: 'Video merupakan media yang paling efektif untuk melakukan campaign, awareness, dan edukasi pasar',
  ogSiteName: 'Tomo Digital Creative',
  ogUrl: route.fullPath
})
</script>
<template>
  <div class="mt-12 flex flex-col gap-y-28">
    <h1 class="text-4xl text-neutral-800 font-bold text-center">Harga Jasa Pembuatan Video</h1>
    <section id="motionGraphic">
      <HeadBar text="Motion Graphic" />
      <div class="flex flex-col md:flex-row justify-center flex-wrap gap-x-5 gap-y-5">
        <ServicesServiceCard
          v-for="(service, index) in motionGraphic"
          :key="service.name"
          :service="service"
          data-aos="zoom-in-down"
          :data-aos-delay="150 * index"
        />
      </div>
    </section>

    <section id="Video Production">
      <HeadBar text="Video Production" />
      <div class="flex justify-center flex-wrap gap-x-5">
        <ServicesServiceCard
          v-for="(service, index) in videoProduction"
          :key="service.name"
          :service="service"
          data-aos="zoom-in-down"
          :data-aos-delay="150 * index"
        />
      </div>
    </section>
  </div>
</template>