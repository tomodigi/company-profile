<script setup>
import Hamburger from './Hamburger.vue'

const navMenu = ref([
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Service',
    url: '/services'
  },
  {
    title: 'Pricing',
    url: '#pricing'
  },
  {
    title: 'About Us',
    url: '#about'
  }
])
const isShow = ref(false)
</script>

<template>
  <nav class="h-16 flex justify-between items-center sticky top-0 z-50 px-5 md:px-0 bg-slate-50">
    <img src="~/assets/images/favicon.png" alt="" width="65" height="65">
    <div class="hidden md:flex items-center gap-x-5">
      <NuxtLink
        v-for="item in navMenu"
        :key="item.url"
        :to="item.url"
        active-class="text-purple-500"
        class="text-indigo-500 font-semibold hover:text-indigo-500 transition-all"
      >
        {{ item.title }}
      </NuxtLink>
    </div>
    <Hamburger class="w-10 md:hidden transition-all" @click="() => isShow = !isShow" :is-open="isShow" />
    <Transition name="slide-fade" mode="out-in">
      <div class="absolute inset-x-0 top-16 bg-slate-50 flex flex-col gap-y-4 text-center -mx-5 py-5" v-if="isShow">
        <NuxtLink
          v-for="item in navMenu"
          :key="item.url"
          :to="item.url"
          active-class="text-purple-500"
          class="text-indigo-500 font-semibold hover:text-indigo-500 transition-all"
          @click="() => isShow = !isShow"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
