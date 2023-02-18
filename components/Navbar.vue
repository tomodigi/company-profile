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
</script>

<template>
  <nav class="bg-transparent h-16 flex justify-between items-center sticky top-0 z-50 bg-slate-50">
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
    <Hamburger class="w-10 md:hidden transition-all" />
    <!-- <button class="px-5 py-2 bg-emerald-400 rounded-full text-sm font-bold text-white">
      Hubungi Kami
    </button> -->
  </nav>
</template>
