<script setup>
import Hamburger from './Hamburger.vue'
import { serviceList } from '~/data/TomoService'

const navMenu = ref([
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Services',
    url: '/services',
    child: [
      ...serviceList,
    ]
  },
  {
    title: 'About Us',
    url: '#about'
  }
])
const isShow = ref(false)
</script>

<template>
  <nav class="inner--content h-16 flex justify-between items-center sticky top-0 z-50 bg-slate-50 w-full">
    <img src="~/assets/images/favicon.png" alt="" width="65" height="65">
    <div class="hidden md:flex items-center gap-x-10">
      <div
        v-for="(item, i) in navMenu"
        :key="item.url"
      >
        
        <div :class="item.child ? 'dropdown dropdown-hover' : null">
          <NuxtLink
            :tabindex="i"
            :to="item.child ? '' : item.url"
            class="text-indigo-500 font-medium hover:text-indigo-600 hover:font-medium transition-all hover:cursor-pointer hover:border-b-2 flex items-center"
          >
            <span>{{ item.title }}</span>
            <Icon name="mdi:chevron-down" class="text-2xl" v-if="item.child" />
          </NuxtLink>
          <ul tabindex="0" class="dropdown-content menu p-2 rounded-box shadow w-72 -translate-x-[40%] bg-white border-t-2 border-purple-500" v-if="item.child">
            <li v-for="service in item.child">
              <NuxtLink :to="service.link">
                <div class="flex items-center gap-x-3">
                  <img :src="service.background" alt="" class="w-8 h-8">
                  <div class="flex flex-col text-sm ">
                    <p class="font-bold">{{ service.name }}</p>
                    <p>{{ service.title }}</p>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>
      </div>
      </div>
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
