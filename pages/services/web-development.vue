<script setup>
import { webDevelopment } from '~/data/index.js';

const route = useRoute();
useServerSeoMeta({
  title: 'Tomo Digital Service',
  ogTitle: 'Tomo Web Development Services',
  ogImage:'/tomo_2.webp',
  ogDescription: 'Di era digital, mencari informasi produk & jasa sudah biasa dilakukan melalui internet. Bisnis yang memiliki website akan lebih mudah ditemukan oleh pembeli',
  ogSiteName: 'Tomo Digital Creative',
  ogUrl: route.fullPath
})

const benefits = [
  {
    name: 'Gratis Domain & Hosting',
    content: 'Seluruh paket sudah termasuk FREE biaya server grade A dan pembuatan domain (TLD) selama 1 tahun.',
    imgUrl: 'https://gosocial.co.id/assets/svg/service/web/features/features1.svg'
  },
  {
    name: 'Full Support & Maintenance',
    content: 'Dukungan teknis dan support untuk memastikan pengelolaan website berjalan dengan lancar setelah dibuat.',
    imgUrl: 'https://gosocial.co.id/assets/svg/service/web/features/features2.svg'
  },
  {
    name: 'SEO Friendly',
    content: 'Website telah dirancang khusus untuk SEO sehingga dapat meningkatkan rangking pada search engine.',
    imgUrl: 'https://gosocial.co.id/assets/svg/service/web/features/features3.svg'
  },
  {
    name: 'Mobile Optimized',
    content: 'Website telah dirancang untuk dapat diakses secara optimal melalui mobile device, dsb.',
    imgUrl: 'https://gosocial.co.id/assets/svg/service/web/features/features4.svg'
  },
  {
    name: 'Ide Konten & Copywriting',
    content: 'Tim kami akan membantu menyusun konten dan copywriting website untuk memaksimalkan konversi.',
    imgUrl: 'https://gosocial.co.id/assets/svg/service/web/features/features5.svg'
  },
  {
    name: 'Teknologi & Desain Terkini',
    content: 'Hasil kami telah up-to-date terhadap perkembangan teknologi yang lebih efisien dan efektif saat ini.',
    imgUrl: 'https://gosocial.co.id/assets/svg/service/web/features/features6.svg'
  },
]
</script>
<template>
  <div class="flex flex-col inner--content">
    <section id="text2" class="flex justify-between items-center h-[90vh]">
      <img src="~/assets/images/undraw_pair_programming_re_or4.webp" alt="" class="md:w-[550px] opacity-90" data-aos="fade-left">
      <article data-aos="fade-right">
        <!-- <h1 class="text-4xl mb-2 place-self-start">Jasa Pembuatan Website</h1> -->
        <p class="text-2xl text-neutral-700 pr-14 text-justify leading-9">Kami menyediakan solusi <span class="font-semibold">web development</span> berkualitas untuk klien kami di seluruh Indonesia. Dengan pengalaman kami yang luas dan tim yang ahli, kami dapat membantu Anda membangun situs web yang sempurna untuk bisnis Anda.</p>
      </article>
    </section>
    <section id="text1" class="flex justify-between items-center h-[90vh]">
      <article data-aos="fade-left">
        <p class="text-2xl text-neutral-700 pr-14 text-justify leading-9">Jangan ragu untuk mempercayakan bisnis Anda kepada kami! Kami adalah mitra yang andal dan terpercaya dalam solusi web development. Dengan pengalaman kami yang luas dan tim yang ahli, kami siap membantu Anda mencapai tujuan bisnis Anda. Hubungi kami hari ini untuk mendapatkan penawaran terbaik dan memulai perjalanan Anda menuju kesuksesan digital.</p>
      </article>
      <img src="~/assets/images/undraw_proud_coder_re_exuy.webp" alt="" class="md:w-[550px] opacity-90" data-aos="fade-right">
    </section>
    <section id="benefit">
      <h1 class="text-xl md:text-2xl text-neutral-800 font-bold text-center mb-10">Keuntungan buat website bersama Tomo</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SolutionItem
          v-for="(benefit, index) in benefits"
          :key="index"
          :solution="benefit"
        />
      </div>
    </section>

    <h1 class="text-xl md:text-2xl text-neutral-800 font-bold text-center mb-10">Harga Jasa Pembuatan Website</h1>
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