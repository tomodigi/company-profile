<script setup>
import { socialMedia } from '~~/data/socialMedia';

</script>
<template>
<footer class="footer inner--content p-10 bg-slate-100 mt-10">
  <div>
    <img src="~/assets/images/tomo_2.png" alt="Tomo Logo" width="160">
    <p class="font-tomo-main">Digital Creative
      <br/>
      Copyright © 2023 - All right reserved
    </p>
  </div> 
  <div>
    <span class="footer-title text-neutral-600">Social</span> 
    <div class="grid grid-flow-col gap-2">
      <a
        v-for="social in socialMedia"
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        class="p-1 rounded-md hover:text-neutral-50 hover:bg-neutral-400 transition-all duration-500"
        :title="social.accountName"
      >
        <Icon :name="social.icon" class="text-xl" />
      </a> 
    </div>
  </div>
</footer>
</template>