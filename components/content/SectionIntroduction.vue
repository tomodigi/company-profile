<script setup lang="ts">
const experience = ['50+ Project Done', '2+ Years Experience', '99% Happy Client']
</script>
<template>
  <section id="intoduction" class="flex flex-col w-full gap-20 p-5 md:p-0 md:flex-row">
    <img
      src="/assets/images/0b5e4cc9ca05fc99285e2a9c1b7cc599xx.jpg"
      alt=""
      width="650"
      height="650"
      class="object-cover rounded-md w-full xl:w-[750px] xl:h-[600px]"
      data-aos="fade-up"
      data-aos-duration="1000"
    />
    <div class="flex flex-col">
      <article>
        <h2
          class="section--title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <slot name="title"></slot>
        </h2>
        <p
          class="mt-[72px] text-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <slot name="subtitle"></slot>
        </p>
      </article>
      <div class="flex flex-col md:flex-row justify-around mt-[62px] gap-5">
        <div class="flex flex-col gap-5 shrink-0">
          <button
            v-for="(item, index) in experience"
            :key="index"
            class="px-10 py-3.5 border rounded-full border-color-primary font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="300 + (index * 100)"
          >
            {{ item }}
          </button>
        </div>
        <div class="flex flex-col gap-10">
          <div class="flex items-center gap-2">
            <img
              src="/Intro.svg"
              alt=""
              width="50"
              height="50"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
            <p
              class="font-semibold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <slot name="video-title"></slot>
            </p>
          </div>
          <p
            class="text-sm text-slate-200"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
          <slot name="video-subtitle"></slot>
          </p>
          <hr class="border border-slate-200 opacity-40">
        </div>
      </div>
    </div>
  </section id="intoduction">
</template>