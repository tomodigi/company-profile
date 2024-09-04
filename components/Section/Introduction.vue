<script setup lang="ts">
const experience = ['50+ Project Done', '2+ Years Experience', '99% Happy Client']
</script>
<template>
  <div class="flex gap-20">
    <img src="/assets/images/0b5e4cc9ca05fc99285e2a9c1b7cc599xx.jpg" alt="" width="650" height="650" class="object-cover rounded-md w-[750px] h-[600px]">
    <div class="flex flex-col">
      <article>
        <h2 class="section--title">Jelajahi Dunia Kreatif Digital dengan <span class="text-color-primary">Tomodigi.id</span></h2>
        <p class="mt-[72px] text-lg">Raih audiens yang lebih luas dan bangun hubungan yang kuat dengan pelanggan</p>
      </article>
      <div class="flex justify-around mt-[62px] gap-5">
        <div class="flex flex-col gap-5 shrink-0">
          <button v-for="(item, index) in experience" :key="index" class="px-10 py-3.5 border rounded-full border-color-primary font-bold">
            {{ item }}
          </button>
        </div>
        <div class="flex flex-col gap-10">
          <div class="flex items-center gap-2">
            <img src="/Intro.svg" alt="" width="50" height="50">
            <p class="font-semibold">Intro Video</p>
          </div>
          <p class="text-sm text-slate-200">Dengan Tomodigi.id, wujudkan ide-ide besar Anda di dunia digital</p>
          <hr class="border border-slate-200 opacity-40">
        </div>
      </div>
    </div>
  </div>
</template>