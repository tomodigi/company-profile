<script setup>
import SolutionItem from './SolutionItem.vue';

const solutions = [
  {
    name: 'Strategy Planning & Execution',
    background: '/undraw_engineering_team_a7n2.svg'
  },
  {
    name: 'Digital Platform Handling',
    background: '/undraw_social_strategy_re_mk87.svg'
  },
  {
    name: 'Set & Achieve Goal Together',
    background: 'undraw_success_factors_re_ce93.svg'
  },
]
</script>
<template>
  <section id="solutionSection">
    <h1 class="text-2xl text-center font-bold text-neutral-800">Our Solutions</h1>
    <div class="flex flex-col gap-y-10 justify-around mt-6">
      <SolutionItem
        v-for="solution in solutions"
        :key="solution.name"
        :solution="solution"
      />
    </div>
  </section>
</template>