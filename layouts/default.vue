<script setup>
</script>
<template>
  <main class="relative bg-white w-full">
    <!-- <div class="outer-content w-full 2xl:w-[1400px]"> -->
      <Navbar />
        <slot></slot>
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
