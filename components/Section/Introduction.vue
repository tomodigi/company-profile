<script setup lang="ts"></script>
<template>
  <div class="flex gap-20">
    <img src="/assets/images/0b5e4cc9ca05fc99285e2a9c1b7cc599xx.jpg" alt="" width="650" height="650" class="object-cover rounded-md w-[750px] h-[600px]">
    <div class="flex flex-col">
      <article>
        <h2 class="text-6xl font-bold leading-[65px]">Jelajahi Dunia Kreatif Digital dengan <span class="text-color-primary">Tomodigi.id</span></h2>
        <p class="mt-[72px] text-lg">Raih audiens yang lebih luas dan bangun hubungan yang kuat dengan pelanggan</p>
      </article>
      <div class="flex items-center mt-[62px]">
        <div class="flex flex-col gap-5">
          <button v-for="(item, index) in 3" :key="index" class="px-10 py-3.5 border rounded-full border-color-primary font-bold">
            50+ Project Done
          </button>
        </div>
      </div>

    </div>
  </div>
</template>