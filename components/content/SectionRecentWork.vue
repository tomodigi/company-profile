<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/Modal/Modal.vue'
const tabContents = [
  {
    title: "Logo",
    content: [
      {
        name: "Mechavast",
        thumbnail: "/recent-work/logo/1.webp",
      },
      {
        name: "Neurona",
        thumbnail: "/recent-work/logo/2.webp",
      },
      {
        name: "Guideex",
        thumbnail: "/recent-work/logo/3.webp",
      },
      {
        name: "Dentspark",
        thumbnail: "/recent-work/logo/4.webp",
      },
      {
        name: "FAM Burden",
        thumbnail: "/recent-work/logo/5.webp",
      },
      {
        name: "Ngemil Ciyus",
        thumbnail: "/recent-work/logo/6.webp",
      },
      {
        name: "Fortune Medika",
        thumbnail: "/recent-work/logo/7.webp",
      },
      {
        name: "Diksi Nasi",
        thumbnail: "/recent-work/logo/8.webp",
      },
      {
        name: "Bell Va Nia",
        thumbnail: "/recent-work/logo/9.webp",
      },
      {
        name: "Hargeon",
        thumbnail: "/recent-work/logo/10.webp",
      },
      {
        name: "Sambal Melek",
        thumbnail: "/recent-work/logo/11.webp",
      },
      {
        name: "Well Eden",
        thumbnail: "/recent-work/logo/12.webp",
      },
      {
        name: "Leaphia",
        thumbnail: "/recent-work/logo/13.webp",
      },
    ],
  },
  {
    title: "Social Media",
    content: [
      {
        name: "Kohesif Studio",
        thumbnail: "/recent-work/social-media/1.webp",
      },
      {
        name: "Overtime Coffee 1",
        thumbnail: "/recent-work/social-media/2.webp",
      },
      {
        name: "Overtime Coffee 2",
        thumbnail: "/recent-work/social-media/3.webp",
      },
    ],
  },
  {
    title: "Web Development",
    content: [
      {
        name: "API Kurir",
        thumbnail: "/recent-work/web-development/1.webp",
      },
      {
        name: "Orderfaz",
        thumbnail: "/recent-work/web-development/2.webp",
      },
      {
        name: "Melangkah",
        thumbnail: "/recent-work/web-development/3.webp",
      },
      {
        name: "Freight Forwarder",
        thumbnail: "/recent-work/web-development/4.webp",
      },
      {
        name: "Textile Factory",
        thumbnail: "/recent-work/web-development/5.webp",
      },
      {
        name: "Lab FST UPY",
        thumbnail: "/recent-work/web-development/6.webp",
      },
      {
        name: "Event Finance",
        thumbnail: "/recent-work/web-development/7.webp",
      },
      {
        name: "Event Organizer",
        thumbnail: "/recent-work/web-development/8.webp",
      },
      {
        name: "Siasik RSUD Kota Serang",
        thumbnail: "/recent-work/web-development/9.webp",
      },
    ],
  },
  {
    title: "Exterior",
    content: [
      {
        name: "",
        thumbnail: "/recent-work/exterior/1.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/2.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/3.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/4.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/5.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/6.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/7.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/8.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/9.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/10.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/11.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/12.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/13.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/14.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/15.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/16.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/17.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/18.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/19.webp",
      },
      {
        name: "",
        thumbnail: "/recent-work/exterior/20.webp",
      },
    ],
  },
];

const activeTabs = ref(0);
const showModal = ref(false);
const selectedIndex = ref(0);

const selectedContent = computed(() => {
  return tabContents[activeTabs.value].content[selectedIndex.value];
});

const openModal = (index: number) => {
  selectedIndex.value = index;
  showModal.value = true;
};

const prevContent = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

const nextContent = () => {
  if (selectedIndex.value < tabContents[activeTabs.value].content.length - 1) {
    selectedIndex.value++;
  }
};
</script>
<template>
  <section id="portfolio" class="w-full p-5 md:p-0">
    <div class="flex flex-col justify-around gap-16 p-5 md:flex-row">
      <h2 class="section--title shrink-0"><slot name="title"></slot></h2>
      <p><slot name="subtitle"></slot></p>
      <div class="hidden p-5 rounded-full bg-color-primary w-fit h-fit md:block">
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
    </div>
    <Transition name="slide-fade" mode="out-in">
      <div
        id="content"
        :key="activeTabs"
        class="grid gap-6 p-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 min-h-[500px]"
      >
        <img
          v-for="(content, index) in tabContents[activeTabs].content"
          :key="index"
          :src="content.thumbnail"
          :alt="content.name"
          class="w-full rounded-lg aspect-square cursor-pointer"
          @click="openModal(index)"
          width="500"
          height="500"
          loading="lazy"
        />
      </div>
    </Transition>

    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <div v-if="selectedContent">
          <img :src="selectedContent.thumbnail" :alt="selectedContent.name" class="w-full rounded-lg mb-4" />
        </div>
      </template>
      <template #prev-button>
        <button @click="prevContent" :disabled="selectedIndex === 0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
        </button>
      </template>
      <template #next-button>
        <button @click="nextContent" :disabled="selectedIndex === tabContents[activeTabs].content.length - 1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
        </button>
      </template>
    </Modal>
  </section>
</template>

