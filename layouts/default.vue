<script setup>
</script>
<template>
  <main class="relative bg-white w-full">
    <!-- <div class="outer-content w-full 2xl:w-[1400px]"> -->
      <Navbar />
      <!-- <div class="content w-full xl:w-[1280px] p-5 lg:p-10 2xl:p-0 mx-auto"> -->
        <slot></slot>
      <!-- </div> -->
      <FooterApp />
    <!-- </div> -->
  </main>
</template>

<style scoped>
.gradient {
  background: linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%);
  /* background: rgb(255,255,255);
  background: linear-gradient(295deg, rgba(255,255,255,1) 0%, rgba(199,223,255,1) 47%, rgba(255,255,255,1) 100%); */
}
</style>
