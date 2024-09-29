<script setup lang="ts">
const tabContents = [
  {
    title: "Logo",
    content: [
      {
        name: "Mechavast",
        thumbnail: "/recent-work/logo/1.jpg",
      },
      {
        name: "Neurona",
        thumbnail: "/recent-work/logo/2.jpg",
      },
      {
        name: "Guideex",
        thumbnail: "/recent-work/logo/3.jpg",
      },
      {
        name: "Dentspark",
        thumbnail: "/recent-work/logo/4.jpg",
      },
      {
        name: "FAM Burden",
        thumbnail: "/recent-work/logo/5.jpg",
      },
      {
        name: "Ngemil Ciyus",
        thumbnail: "/recent-work/logo/6.jpg",
      },
      {
        name: "Fortune Medika",
        thumbnail: "/recent-work/logo/7.jpg",
      },
      {
        name: "Diksi Nasi",
        thumbnail: "/recent-work/logo/8.jpg",
      },
      {
        name: "Bell Va Nia",
        thumbnail: "/recent-work/logo/9.jpg",
      },
      {
        name: "Hargeon",
        thumbnail: "/recent-work/logo/10.jpg",
      },
      {
        name: "Sambal Melek",
        thumbnail: "/recent-work/logo/11.jpg",
      },
      {
        name: "Well Eden",
        thumbnail: "/recent-work/logo/12.jpg",
      },
      {
        name: "Leaphia",
        thumbnail: "/recent-work/logo/13.jpg",
      },
    ],
  },
  {
    title: "Social Media",
    content: [
      {
        name: "Kohesif Studio",
        thumbnail: "/recent-work/social-media/1.jpg",
      },
      {
        name: "Overtime Coffee 1",
        thumbnail: "/recent-work/social-media/2.jpg",
      },
      {
        name: "Overtime Coffee 2",
        thumbnail: "/recent-work/social-media/3.jpg",
      },
    ],
  },
  {
    title: "Web Development",
    content: [
      {
        name: "API Kurir",
        thumbnail: "/recent-work/web-development/1.jpg",
      },
      {
        name: "Orderfaz",
        thumbnail: "/recent-work/web-development/2.jpg",
      },
      {
        name: "Melangkah",
        thumbnail: "/recent-work/web-development/3.jpg",
      },
      {
        name: "Freight Forwarder",
        thumbnail: "/recent-work/web-development/4.jpg",
      },
      {
        name: "Textile Factory",
        thumbnail: "/recent-work/web-development/5.jpg",
      },
      {
        name: "Lab FST UPY",
        thumbnail: "/recent-work/web-development/6.jpg",
      },
      {
        name: "Event Finance",
        thumbnail: "/recent-work/web-development/7.jpg",
      },
      {
        name: "Event Organizer",
        thumbnail: "/recent-work/web-development/8.jpg",
      },
      {
        name: "Siasik RSUD Kota Serang",
        thumbnail: "/recent-work/web-development/9.jpg",
      },
    ],
  },
  {
    title: "Exterior",
    content: [
      {
        name: "",
        thumbnail: "/recent-work/exterior/1.png",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/2.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/3.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/4.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/5.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/6.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/7.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/8.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/9.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/10.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/11.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/12.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/13.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/14.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/15.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/16.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/17.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/18.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/19.jpg",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/20.jpg",
      },
    ],
  },
];

const activeTabs = ref(0); // index
</script>
<template>
  <section id="portfolio" clas="w-full p-5 md:p-0">
    <div class="flex flex-col justify-around gap-16 p-5 md:flex-row">
      <h2 class="section--title shrink-0"><slot name="title"></slot></h2>
      <p><slot name="subtitle"></slot></p>
      <div
        class="hidden p-5 rounded-full bg-color-primary w-fit h-fit md:block"
      >
        <Icon name="ic:outline-arrow-outward" class="text-4xl text-gray-800" />
      </div>
    </div>
    <hr class="mt-16 mb-8" />
    <div class="flex flex-wrap px-5 gap-x-3">
      <button
        v-for="(category, index) in tabContents"
        :key="index"
        type="button"
        class="px-3 py-2 rounded-full"
        :class="{ 'bg-gradient-primary': index === activeTabs }"
        @click="() => (activeTabs = index)"
      >
        {{ category.title }}
      </button>
      <Transition name="slide-fade" mode="out-in">
        <div
          id="content"
          :key="activeTabs"
          class="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4"
        >
          <img
            v-for="(content, index) in tabContents[activeTabs].content"
            :key="index"
            :src="content.thumbnail"
            :alt="content.name"
            class="w-full rounded-lg aspect-square"
          />
        </div>
      </Transition>
    </div>
  </section>
</template>
