<script setup lang="ts">
const tabContents = [
  {
    title: 'Logo',
    content: [
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
      {
        name: 'DiksiNasi',
        thumbnail: '/recent_work/logo/1.jpg',
      },
    ],
  },
  {
    title: 'Social Media',
    content: [
      {
        name: 'Bell Vania',
        thumbnail: '/recent_work/logo/2.jpg',
      }
    ],
  },
  {
    title: 'Web Development',
    content: [
      {
        name: '',
        thumbnail: '/recent_work/logo/1.jpg',
      }
    ],
  },
  {
    title: 'Photo',
    content: [
      {
        name: '',
        thumbnail: '/recent_work/logo/1.jpg',
      }
    ],
  },
  {
    title: 'Video',
    content: [
      {
        name: '',
        thumbnail: '/recent_work/logo/1.jpg',
      }
    ],
  },
  {
    title: 'Motion',
    content: [
      {
        name: '',
        thumbnail: '/recent_work/logo/1.jpg',
      }
    ],
  },
  {
    title: '3D Asset',
    content: [
      {
        name: '',
        thumbnail: '/recent_work/logo/1.jpg',
      }
    ],
  },
  {
    title: 'Interior',
    content: [
      {
        name: '',
        thumbnail: '/recent_work/logo/1.jpg',
      }
    ],
  },
]

const activeTabs = ref(0) // index
</script>
<template>
  <section id="recentWork" clas="w-full p-5 md:p-0">
    <div class="flex flex-col justify-around gap-16 p-5 md:flex-row">
      <h2 class="section--title shrink-0"><slot name="title"></slot></h2>
      <p><slot name="subtitle"></slot></p>
      <div class="hidden p-5 rounded-full bg-color-primary w-fit h-fit md:block">
        <Icon name="ic:outline-arrow-outward" class="text-4xl text-gray-800" />
      </div>
    </div>
    <hr class="mt-16 mb-8">
    <div class="flex flex-wrap px-5 gap-x-3">
      <button
        v-for="(category, index) in tabContents"
        :key="index"
        type="button"
        class="px-3 py-2 rounded-full"
        :class="{'bg-gradient-primary': index === activeTabs}"
        @click="() => activeTabs = index"
      >
        {{ category.title }}
      </button>
      <Transition name="slide-fade" mode="out-in">
        <div id="content" :key="activeTabs" class="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
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