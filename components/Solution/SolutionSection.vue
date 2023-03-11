<script setup>
import SolutionItem from './SolutionItem.vue';
import { serviceList } from '../../data/TomoService.js'

</script>
<template>
  <section id="solutionSection" class="inner--content">
    <h1 class="text-4xl text-neutral-800 font-bold text-center mb-10">Our Solutions</h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3">
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