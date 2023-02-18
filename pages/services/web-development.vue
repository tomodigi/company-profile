<script setup>
import { webDevelopment } from '~/data/index.js';

const route = useRoute();

useServerSeoMeta({
  title: 'Tomo Digital Service',
  ogTitle: 'Tomo Web Development Services',
  ogImage:'/tomo_2.png',
  ogDescription: 'Di era digital, mencari informasi produk & jasa sudah biasa dilakukan melalui internet. Bisnis yang memiliki website akan lebih mudah ditemukan oleh pembeli',
  ogSiteName: 'Tomo Digital Creative',
  ogUrl: route.fullPath
})
</script>
<template>
  <div class="mt-12 flex flex-col">
    <h1 class="text-2xl md:text-4xl text-neutral-800 font-bold text-center mb-10">Harga Jasa Pembuatan Website</h1>
    <section id="webDevelopment">
      <HeadBar text="Web Development" />
      <div class="flex justify-center flex-wrap md:gap-x-5 gap-y-5">
        <ServicesServiceCard
          v-for="(service, index) in webDevelopment"
          :key="service.name"
          :service="service"
          data-aos="zoom-in-down"
          :data-aos-delay="150 * index"
        />
      </div>
    </section>
  </div>
</template>