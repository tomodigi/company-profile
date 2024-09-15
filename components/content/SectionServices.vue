<script setup lang="ts"></script>
<template>
  <section id="services" class="flex flex-col items-center justify-center w-full p-10 rounded-xl bg-background-base">
    <h2
      class="section--title w-full xl:w-[850px] text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <slot name=title></slot>
    </h2>
    <div class="grid gap-10 mt-24 sm:grid-cols-2 xl:grid-cols-3">
      <CardBorder
        v-for="(item, index) in 10"
        :key="index"
        data-aos="fade-up"
        data-aos-duration="1000"
        :data-aos-delay="150 + (index * 100)"
      />
    </div>
  </section>
</template>