<script setup>
const route = useRoute();

useServerSeoMeta({
  title: "Tomodigi - Digital Creative Partner for Innovative Solution",
  ogTitle: "Tomodigi - Digital Creative Partner for Innovative Solution",
  ogImage: "/tomo_2.webp",
  ogDescription:
    "Tomodigi is a digital creative agency dedicated to developing innovative digital solutions that help brands and businesses thrive in the digital age. With over 50 successful projects, we take a personalized and cutting-edge approach to every challenge, ensuring impactful results for our clients.",
  ogSiteName: "Tomodigi",
  ogType: "website",
  ogImageType: "image/png",
  ogUrl: route.fullPath,
});

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
