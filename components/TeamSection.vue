<script setup></script>
<template>
  <section id="teamSection" class="bg-slate-50 p-10">
    <h1 class="text-4xl text-neutral-800 font-bold text-center mb-10">Meet Our Team</h1>
    <div class="grid grid-cols-2 xl:grid-cols-3 place-content-center place-items-center gap-10">
      <TeamsCard v-for="i in 6" class="" />
    </div>
  </section>
</template>