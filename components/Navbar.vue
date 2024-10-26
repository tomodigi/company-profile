<script setup>
import Hamburger from "./Hamburger.vue";

const navMenu = ref([
  {
    title: "About",
    url: "/",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    title: "Contact",
    url: "#contact",
  },
]);
const isShow = ref(false);
</script>

<template>
  <nav
    class="sticky top-0 z-[10] flex items-center justify-between w-full h-16 border-b border-gray-800 px-5 md:px-10 2xl:px-0 bg-background-primary py-5"
  >
    <img src="~/assets/images/logo_text.webp" alt="" width="150" height="100" />
    <div class="items-center hidden md:flex gap-x-10">
      <div v-for="(item, i) in navMenu" :key="item.url">
        <div :class="item.child ? 'dropdown dropdown-hover' : null">
          <NuxtLink
            :tabindex="i"
            :to="item.child ? '' : item.url"
            class="flex items-center font-medium text-indigo-500 transition-all hover:text-indigo-600 hover:font-medium hover:cursor-pointer hover:border-b-2"
          >
            <span>{{ item.title }}</span>
            <Icon name="mdi:chevron-down" class="text-2xl" v-if="item.child" />
          </NuxtLink>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 rounded-box shadow w-72 -translate-x-[40%] bg-white border-t-2 border-purple-500"
            v-if="item.child"
          >
            <li v-for="service in item.child">
              <NuxtLink :to="service.link">
                <div class="flex items-center gap-x-3">
                  <img :src="service.background" alt="" class="w-8 h-8" />
                  <div class="flex flex-col text-sm">
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
    <Hamburger
      class="w-10 transition-all md:hidden"
      @click="() => (isShow = !isShow)"
      :is-open="isShow"
    />
    <Transition name="slide-fade" mode="out-in">
      <div
        class="absolute inset-x-0 flex flex-col py-5 -mx-5 text-center top-16 bg-slate-50 gap-y-4"
        v-if="isShow"
      >
        <NuxtLink
          v-for="item in navMenu"
          :key="item.url"
          :to="item.url"
          active-class="text-purple-500"
          class="font-semibold text-indigo-500 transition-all hover:text-indigo-500"
          @click="() => (isShow = !isShow)"
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
