<script setup>
import { socialMedia } from "~~/data/socialMedia";
</script>
<template>
  <footer
    id="contact"
    class="relative flex p-5 py-10 bg-[#A8A5F6] mt-11 flex-col"
  >
    <img
      src="/assets/images/gradient.jpg"
      alt=""
      class="absolute inset-0 w-full h-full opacity-20"
    />
    <div class="flex flex-col md:flex-row">
      <div class="z-50 flex flex-col w-full md:w-[80%]">
        <h3 class="text-3xl font-semibold text-gray-900 md:text-5xl mb-11">
          Get In Touch With Us
        </h3>
        <div class="flex items-center gap-11">
          <div class="flex flex-col gap-4 text-gray-900">
            <p class="text-xl font-bold text-gray-900">Email</p>
            <a href="mailto:tomodigi.id@gmail.com" class="text-lg"
              >tomodigi.id@gmail.com</a
            >
          </div>
          <div class="flex flex-col gap-4 text-gray-900">
            <p class="text-xl font-bold text-gray-900">Contact</p>
            <a href="tel:+12345678" class="text-lg">123 - 456 - 789</a>
          </div>
        </div>
      </div>
      <div class="z-50 flex flex-col w-full md:w-[20%]">
        <h3 class="text-3xl font-semibold text-gray-900 md:text-4xl mb-11">
          TOMO
        </h3>
        <div class="flex flex-col gap-4 text-gray-900">
          <p class="text-xl font-bold text-gray-900">Follow Us</p>
          <div class="flex flex-wrap items-center gap-5">
            <a
              v-for="(social, index) in socialMedia"
              :key="index"
              class="faded flex items-center justify-center p-2 border-2 border-black text-black rounded-full hover:!bg-black hover:text-white transition-all"
              :href="social.link"
            >
              <Icon :name="social.icon" class="text-3xl !text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-10 border border-gray-500" />
  </footer>
</template>
