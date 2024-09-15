<script setup>
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

// const initAnimation = () => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('block'); 
//       } else {
//         entry.target.classList.remove('block');
//       }
//     });
//   }, {
//       threshold: 0.4
//   });
  
//   const boxes = document.querySelectorAll('');
//   boxes.forEach(box => observer.observe(box));
// }

// onMounted(() => {
//   initAnimation();
// })
</script>
<template>
  <main>
    <ContentDoc class="grid gap-20" />
  </main>
</template>
