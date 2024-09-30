<script setup lang="ts">
import type { CardProps } from "./../Card/CardBorder.vue";

const cardsData: CardProps[] = [
  {
    imgSrc: "/service/visual-identity.png",
    title: "Visual Identity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/social-media-management.png",
    title: "Social Media Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/web-development.png",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/photography.png",
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/videography.png",
    title: "Videography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/motion-graphic.png",
    title: "Motion Graphic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/3d-animation.png",
    title: "3D Animation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/design-exterior.png",
    title: "Design Exterior",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imgSrc: "/service/digital-marketing.png",
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
</script>

<template>
  <div id="services" class="min-h-screen">
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
