<script setup lang="ts">
import type { CardProps } from "./../Card/CardBorder.vue";

const cardsData: CardProps[] = [
  {
    imgSrc: "/service/visual-identity.webp",
    title: "Visual Identity",
    description:
      "Create a unique and compelling brand image that resonates with your audience, setting your business apart from the competition.",
  },
  {
    imgSrc: "/service/social-media-management.webp",
    title: "Social Media Management",
    description:
      "Build and maintain a strong presence on social media platforms to engage with your audience and grow your brand's online community.",
  },
  {
    imgSrc: "/service/web-development.webp",
    title: "Web Development",
    description:
      "We design and develop websites that are not only visually stunning but also optimized for performance and user experience.",
  },
  {
    imgSrc: "/service/photography.webp",
    title: "Photography",
    description:
      "Capture the essence of your brand through high-quality photography that tells your story in a visually captivating way.",
  },
  {
    imgSrc: "/service/videography.webp",
    title: "Videography",
    description:
      "Bring your brand to life with dynamic videos that engage and inspire your audience, delivering your message in a powerful way.",
  },
  {
    imgSrc: "/service/motion-graphic.webp",
    title: "Motion Graphic",
    description:
      "Enhance your brand’s narrative with engaging motion graphics that simplify complex ideas and captivate viewers.",
  },
  {
    imgSrc: "/service/3d-animation.webp",
    title: "3D Animation",
    description:
      "Create immersive and detailed 3D animations that bring your products or concepts to life in a way that words can't.",
  },
  {
    imgSrc: "/service/design-exterior.webp",
    title: "Exterior Design",
    description:
      "Elevate the appearance of physical spaces with innovative and aesthetic exterior designs that reflect your brand’s identity.",
  },
  {
    imgSrc: "/service/digital-marketing.webp",
    title: "Digital Marketing",
    description:
      "Reach your target audience effectively through data-driven digital marketing strategies that increase engagement and drive growth.",
  },
];
</script>

<template>
  <div id="services" class="min-h-screen p-5">
    <div class="mx-auto bg-[#14113F] rounded-3xl p-8">
      <h2
        class="section--title shrink-0 text-center mt-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <slot name="title-1"></slot>
      </h2>
      <h2
        class="section--title shrink-0 text-center mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <slot name="title-2"></slot>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardBorder
          v-for="(card, index) in cardsData"
          :key="index"
          :title="card.title"
          :description="card.description"
          :imgSrc="card.imgSrc"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="150 + index * 100"
        />
      </div>
    </div>
  </div>
</template>
