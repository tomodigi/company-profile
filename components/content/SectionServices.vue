<script setup lang="ts"></script>
<template>
  <section id="services" class="flex flex-col items-center justify-center p-10 rounded-xl bg-background-base">
    <h2 class="section--title w-[850px] text-center"><slot name=title></slot></h2>
    <div class="grid grid-cols-3 gap-10 mt-24">
      <CardBorder v-for="(item, index) in 10" :key="index" />
    </div>
  </section>
</template>