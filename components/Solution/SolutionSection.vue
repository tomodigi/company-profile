<script setup>
import SolutionItem from './SolutionItem.vue';
import { serviceList } from '../../data/TomoService.js'

</script>
<template>
  <section id="solutionSection">
    <h1 class="text-2xl text-center font-bold text-neutral-800">Our Solutions</h1>
    <div class="flex gap-x-6 flex-wrap justify-center md:justify-start">
      <SolutionItem
        v-for="(solution, index) in serviceList"
        :key="solution.name"
        :solution="solution"
        class="mt-5"
        data-aos="fade-right"
        :data-aos-delay="150 * index"
      />
    </div>
  </section>
</template>