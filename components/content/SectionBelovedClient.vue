<script setup lang="ts">
const clients = [
  {
    name: "Couple Project",
    img: "/client/couple-project.jpg",
  },
  {
    name: "Fadsan",
    img: "/client/fadsan.jpg",
  },
  {
    name: "Kohesif Studio",
    img: "/client/kohesif-studio.jpg",
  },
  {
    name: "Masfree Studio",
    img: "/client/masfree-studio.jpg",
  },
  {
    name: "RJU",
    img: "/client/rju.png",
  },
  {
    name: "WLS",
    img: "/client/wls.jpg",
  },
  {
    name: "Goresan Studio",
    img: "/client/goresan-studio.png",
  },
];
</script>
<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <img
        src="/logo-white.png"
        alt="Logo White"
        width="50"
        height="50"
        class="mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <h2
        class="section--title shrink-0 text-center mt-5 mb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <slot name="title"></slot>
      </h2>
    </div>
    <hr
      class="border border-gray-500 mb-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    />
    <div
      class="grid grid-cols-7 gap-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        v-for="(client, index) in clients"
        :key="index"
        class="flex items-center justify-center"
      >
        <div class="text-gray-400 flex items-center space-x-2">
          <img :src="client.img" :alt="client.name" />
        </div>
      </div>
    </div>
  </div>
</template>
