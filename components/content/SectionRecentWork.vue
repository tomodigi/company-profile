<script setup></script>
<template>
  <section id="recentWork">
    <div class="flex justify-around gap-16">
      <h2 class="section--title shrink-0"><slot name="title"></slot></h2>
      <p><slot name="subtitle"></slot></p>
      <div class="p-5 rounded-full bg-color-primary w-fit h-fit">
        <Icon name="ic:outline-arrow-outward" class="text-4xl text-gray-800" />
      </div>
    </div>
    <hr class="my-16">
  </section>
</template>